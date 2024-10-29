import Link from 'next/link';
import CustomDropdown from '~/components/molecules/custom-dropdown';
import languages from '~/__fixtures__/languages';
import { TextContent } from '~/components/atoms';
import { LanguageSelector } from '~/components/organisms';

const LanguageChanger: React.FC = () => (
  <CustomDropdown
    hMax="500px"
    p="40px 32px 36px"
    offset={[-64, 0]}
    interaction="hover"
    trigger={<LanguageSelector />}
    items={
        languages.map(language => (
          <Link key={language.value} href={language.link}>
            <a rel="noreferrer" data-test={`header-lang-${language.value}`}>
              <TextContent
                fontWeight={600}
                fontSize={{ _: 3 }}
                py={3}
                currentColor
              >
                {language.title}
              </TextContent>
            </a>
          </Link>
        ))
      }
  />
);

export default LanguageChanger;
