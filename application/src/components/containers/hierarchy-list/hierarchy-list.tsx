export interface Item {
  text: string
  parent: null | number
  next: null | number
  child: null | number
}

interface HierarchyListProps<T> {
  begin: number
  list: {[key: number]: T}
  wrapper?: (item: T) => React.ReactNode
}

export default function HierarchyList<T extends Item>({
  list,
  wrapper
}: Omit<HierarchyListProps<T>, 'begin'>): React.ReactElement {
  return (
    <>
      {listMaker<T>({ begin: 0, list, wrapper })}
    </>
  );
}

function listMaker <T extends Item>({ begin, list, wrapper }: HierarchyListProps<T>) {
  let current = begin;
  const headings = [];

  while (current !== null && list[current]) {
    headings.push(
      <li key={`item-${current}`}>
        {wrapper ? wrapper(list[current]) : list[current].text}
        {listMaker({ begin: list[current].child, list, wrapper })}
      </li>
    );

    current = list[current].next;
  }

  return headings.length !== 0 ? <ul>{headings}</ul> : null;
}
