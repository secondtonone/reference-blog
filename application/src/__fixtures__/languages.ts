import { SubdomainsViewModel } from '~/view-model';

export type ILanguage = {
  title: string;
  value: SubdomainsViewModel;
  link: string
};

const Languages: ILanguage[] = [
  { title: 'English', value: 'en', link: 'https://www.example.com/blog/' },
  { title: 'Español', value: 'es', link: 'https://es.example.com/blog/' },
  { title: 'Deutsch', value: 'de', link: 'https://de.example.com/blog/' },
  { title: 'Français', value: 'fr', link: 'https://fr.example.com/blog/' },
  { title: 'Italiano', value: 'it', link: 'https://it.example.com/blog/' },
  { title: 'Português (Brasil)', value: 'pt', link: 'https://pt.example.com/blog/' },
];

export default Languages;
