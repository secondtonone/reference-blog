import { useEffect, useState } from 'react';

import HierarchyList, { Item } from '~/components/containers/hierarchy-list';

const AMOUNT_ITEMS = 5;

type TitleElement = {
  tagName: string,
  textContent: string,
  id: string,
}
interface Heading extends Item {
  id: string
  level: number
}

type HeadingsMap = {
  [key: number]: Heading
};

function transformHeadings<T extends TitleElement>(headings: T[], isExpanded: boolean) {
  const lasts: {[key: number]: number} = {};
  const headingsMap: HeadingsMap = {};

  headings.forEach(({
    tagName,
    textContent,
    id
  }, index) => {
    if (/\w/.test(textContent) && (isExpanded || index < AMOUNT_ITEMS)) {
      const structured: Heading = {
        text: textContent,
        id,
        child: null,
        parent: null,
        next: null,
        level: Number.parseInt(tagName.match(/[\d()]/gm)[0], 10)
      };

      headingsMap[index] = structured;

      if (lasts[structured.level - 1] !== undefined) {
        const parent = lasts[structured.level - 1];
        structured.parent = parent;
        if (headingsMap[parent].child === null) headingsMap[parent].child = index;
      }

      if (lasts[structured.level] !== undefined) {
        const last = lasts[structured.level];
        if (headingsMap[last].parent === structured.parent) headingsMap[last].next = index;
      }

      lasts[structured.level] = index;
    }
  });

  return headingsMap;
}

export interface ArticleTocProps<T> {
  isExpanded?: boolean
  headings: Array<T>
}

function ArticleToc<T extends TitleElement>({
  headings,
  isExpanded
}: ArticleTocProps<T>) {
  const [articleHeadingsMap, setArticleHeadingsMap] = useState<HeadingsMap>({});

  useEffect(() => {
    setArticleHeadingsMap(transformHeadings<T>(headings, isExpanded));
  }, [isExpanded, headings]);

  return (
    <HierarchyList<Heading>
      list={articleHeadingsMap}
      wrapper={itemWrapper}
    />
  );
}

const itemWrapper = ({ id, text }: Heading) => (<a href={`#${id}`}>{text}</a>);

export default ArticleToc;
