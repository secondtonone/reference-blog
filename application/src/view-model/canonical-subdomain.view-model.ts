enum CanonicalSubdomain {
  'fr',
  'it',
  'de',
  'es',
  'pt',
  'www'
}

type CanonicalSubdomainViewModel = keyof typeof CanonicalSubdomain;

export default CanonicalSubdomainViewModel;
