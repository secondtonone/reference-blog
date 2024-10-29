enum SubdomainName {
  'en',
  'fr',
  'it',
  'de',
  'es',
  'pt'
}

type SubdomainsViewModel = keyof typeof SubdomainName;

export default SubdomainsViewModel;
