import { useEffect, useState } from 'react';

import headingsLevels from '~/constants/headings-levels';

const ARTICLE_SELECTOR = 'article[data-test="article-body"]';
const FILTER_SELECTORS = ':not([data-toc-hide])';

export type Title = Pick<Element, 'tagName' | 'textContent' | 'id'>;

export interface TitlesProps {
  articleSelector?: string
  levels?: Partial<typeof headingsLevels>
  updateTrigger?: boolean | string | number
}

const linkHeadingAnchors = (text) => text.replace(/[!.?\u00A0]/g, ' ')
  .trim()
  .toLocaleLowerCase()
  .replace(/\s/g, '-');

const useTitles = ({
  articleSelector = ARTICLE_SELECTOR,
  levels = headingsLevels,
  updateTrigger
}: TitlesProps) => {
  const [titles, setTitles] = useState<Title[]>([]);

  useEffect(() => {
    const tags = [...document
      .querySelector(articleSelector)
      .querySelectorAll(levels.map(level => `${level}${FILTER_SELECTORS}`).join(','))];

    if (Array.isArray(tags)) {
      tags.forEach(tag => {
        if (!tag.id && headingsLevels?.includes(tag?.tagName)) {
          tag.id = linkHeadingAnchors(tag.textContent);
        }
      });
    }

    const headings = tags
      .map(({
        tagName,
        textContent,
        id
      }) => ({
        tagName,
        textContent,
        id
      }));

    setTitles(headings);
  }, [updateTrigger]);

  return titles;
};
export default useTitles;
