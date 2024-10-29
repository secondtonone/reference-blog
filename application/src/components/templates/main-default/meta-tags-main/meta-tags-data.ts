import { CanonicalSubdomainViewModel } from '~/view-model';

type MetaTagsData = {
  [key in CanonicalSubdomainViewModel]: {
    title: string;
    description: string;
  };
};

const metaTagsData: MetaTagsData = {
  www: {
    title: 'The SEO, exmpl, PPC and Content Marketing Blog - example',
    description: "example's digital marketing blog is an innovative resource for content strategy, content marketing, SEO, exmpl, PPC, social media and more."
  },
  es: {
    title: 'example - Blog en Español',
    description: 'Blog en español de example - Toda la información de Marketing digital, Social Media, SEO… que tu negocio necesita para destacar en Internet.'
  },
  de: {
    title: 'Online Marketing Blog für Deutschland - SEO, Google Ads und mehr - example',
    description: 'Interessante Artikel, Recherchen, Analysen und Studien aus dem Online-Marketing. Eingeladene Experten teilen ihr Wissen und geben nützliche Tipps.'
  },
  it: {
    title: 'example Blog',
    description: 'Tutte le notizie sul mondo SEO, exmpl, PPC e Content Marketing. Guest post dei grandi esperti italiani e tutorial dei tool example'
  },
  fr: {
    title: 'Blog example | SEO, exmpl, Content Marketing et PPC',
    description: 'Blog example - Toutes les informations sur le marketing digital, le SEO, le content marketing… dont votre entreprise a besoin pour se démarquer sur Internet.'
  },
  pt: {
    title: 'Blog example Brasil',
    description: 'Blog de marketing digital da example como foco em estratégia digital, marketing de conteúdo, SEO, exmpl, PPC, mídias sociais e muito mais.'
  }
};

export default metaTagsData;
