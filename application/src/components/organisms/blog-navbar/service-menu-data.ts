import { SubdomainsViewModel } from '~/view-model';

type ServiceMenuData = {
  [key in SubdomainsViewModel]: {
    title: string;
  };
};

const serviceMenuData: ServiceMenuData = {
  en: {
    title: 'Subscribe',
  },
  es: {
    title: 'Suscribirse',
  },
  de: {
    title: 'Abonniere',
  },
  it: {
    title: 'Iscriviti',
  },
  fr: {
    title: 'S\'abonner',
  },
  pt: {
    title: 'Registre-se',
  },
};

export default serviceMenuData;
