import { breakpoints } from '../scheme';
import { ViewportViewModel } from '~/view-model';

const brUp = (size: keyof ViewportViewModel, styles = '') => `
   @media (min-width: ${breakpoints[size]}) {
      ${styles}
    }
`;

export default brUp;
