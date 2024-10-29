import { css } from 'styled-components';

import common from './common';
import list from './list';
import link from './link';
import headings from './headings';
import quickSummary from './quick-summary';
import iframe from './iframe';
import image from './image';
import blogImage from './blog-image';
import table from './table';
import twitter from './twitter';
import tweet from './tweet';
import question from './question';
import emphasis from './emphasis';
import note from './note';
import bonusTip from './bonus-tip';
import blockquote from './blockquote';
import blockquoteImage from './blockquote-image';
import preformatted from './preformatted';
import topicsToDiscuss from './topics-to-discuss';
import blogCode from './blog-code';
import zoom from './zoom';
import blogImageText from './blog-image-text';
import blogTocContent from './blog-toc-content';
import figure from './figure';

const styles = css`
  ${common}
  ${list}
  ${headings}
  ${link}
  ${image}
  ${iframe}

  ${blogImage}
  ${question}
  ${emphasis}
  ${tweet}
  ${note}
  ${zoom}
  ${blogTocContent}
  ${blogImageText}
  ${blogCode}
  ${topicsToDiscuss}
  ${preformatted}
  ${blockquote}
  ${blockquoteImage}
  ${bonusTip}
  ${twitter}
  ${quickSummary}
  ${table}
  ${figure}
`;

export default styles;
