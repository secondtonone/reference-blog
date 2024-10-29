import { EffectHandler } from './types';

import cleaningAttribs from './cleaning-attribs';
import dimensionImage from './dimension-image';
import lazyLoadedContent from './lazy-loaded-content';
import linkedHeading from './linked-heading';

const effects: EffectHandler[] = [
  cleaningAttribs,
  dimensionImage,
  lazyLoadedContent,
  linkedHeading,
];

export default effects;
