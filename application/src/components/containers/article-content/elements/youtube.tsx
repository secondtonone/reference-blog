/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import { MarkupHandler } from './types';
import { YoutubePlaceholder } from '~/components/molecules';

const youtube: MarkupHandler = [
  (domNode) => domNode.name === 'iframe' && domNode?.attribs?.src.includes('youtu'),
  (domNode) => {
    const {
      src
    }: {
      src: string;
    } = domNode.attribs;

    return (
      <YoutubePlaceholder src={src} />
    );
  },
];

export default youtube;
