import { createContext } from 'react';
import { SubdomainsViewModel } from '~/view-model';

interface SubdomainContextViewModel {
  language: SubdomainsViewModel,
  hideSubscribe: boolean,
  isUserDevice: boolean,
}

const SubdomainContext = createContext({
  language: 'en',
  hideSubscribe: false,
  isUserDevice: true
} as SubdomainContextViewModel);

export default SubdomainContext;
