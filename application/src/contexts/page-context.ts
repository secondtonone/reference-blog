import { createContext } from 'react';
import { PageViewModel } from '~/view-model';

interface PageContextViewModel {
  page: PageViewModel,
}

const PageContext = createContext({
  page: {},
} as PageContextViewModel);

export default PageContext;
