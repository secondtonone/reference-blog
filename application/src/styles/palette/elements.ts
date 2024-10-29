type ArrayElem<A> = A extends Array<infer Elem> ? Elem : never

export default function elements<T>(array: T): Array<ArrayElem<T>> {
  return array as any;
}
