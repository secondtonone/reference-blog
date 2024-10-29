import type SubdomainsViewModel from './subdomains.view-model';

interface RedirectViewModel {
  from: string,
  to: string,
  language: SubdomainsViewModel,
  type: '301' | '302'
}

export default RedirectViewModel;
