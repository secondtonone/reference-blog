import Link from 'next/link';
import styled from 'styled-components';
import { BoxAdaptive, TextContent } from '~/components/atoms';

const langNames = [
  { label: 'English', url: 'https://www.example.com/blog/' },
  { label: 'Español', url: 'https://es.example.com/blog/' },
  { label: 'Deutsch', url: 'https://de.example.com/blog/' },
  { label: 'Français', url: 'https://fr.example.com/blog/' },
  { label: 'Italiano', url: 'https://it.example.com/blog/' },
  { label: 'Português (Brasil)', url: 'https://pt.example.com/blog/' },
];

const LanguageChange = ({ locales, onToggle }) => (
  locales.map((locale, idx) => (
    <LanguageChangeStyled
      key={locale.label}
      pt={{ _: 24, xm: 32, md: 40 }}
      data-test="language-change"
      onClick={onToggle}
    >
      <TextContent
        key={langNames[idx].url}
        fontSize={{ _: 3, xm: 11 }}
        lineHeight={1.2}
        fontWeight={{ _: 'accent' }}
        as="h3"
      >
        <Link href={langNames[idx].url}>
          <a data-test={`language-change-${locale}`}>
            {langNames[idx].label}
          </a>
        </Link>
      </TextContent>
    </LanguageChangeStyled>
  ))
);

const LanguageChangeStyled = styled(BoxAdaptive)`
  &:first-child {
    padding-top: 0;
  }
`;
export default LanguageChange;
