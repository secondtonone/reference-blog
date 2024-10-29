import Link from 'next/link';
import {
  TextContent,
  LinkText,
  BoxAdaptive
} from '~/components/atoms';
import { CustomAccordion } from '~/components/molecules';
import mainMenuItems, { Item } from '~/__fixtures__/main-menu-items';
import { useSubdomainContext } from '~/hooks';
import { replaceUrlByFull } from '~/utils';

const columnStart = Math.round(mainMenuItems.length / 2);

const columnContent = (language: string) => ({ title, link, content }: Item) => {
  const titleTranslated: string = title[language] ? title[language] : title.en;

  return (
    <ul key={titleTranslated}>
      {link ? (
        <Link href={replaceUrlByFull(link, language)}>
          <a target="_blank" data-test={`main-menu-link-${titleTranslated.toLowerCase()}`}>
            <TextContent
              fontSize={{ _: 2, xm: 2 }}
              mr={{ _: 2, sm: 5 }}
            >
              {titleTranslated}
            </TextContent>
          </a>
        </Link>
      ) : (
        <CustomAccordion items={[{
          title:
          <TextContent
            fontSize={{ _: 2, xm: 2 }}
            mr={{ _: 2, sm: 5 }}
            data-test={`main-menu-open-${titleTranslated.toLowerCase()}`}
          >
            {titleTranslated}
          </TextContent>,
          content:
          <BoxAdaptive mt="8px">
            {content.map((item) => {
              const contentTitleTranslated: string = item.title[language]
                ? item.title[language]
                : item.title.en;

              return (
                <BoxAdaptive py="8px" ml="18px" key={contentTitleTranslated}>
                  <LinkText
                    href={replaceUrlByFull(item.link, language)}
                    data-test={`main-menu-link-${contentTitleTranslated.toLowerCase()}`}
                    currentColor
                    undecorated
                  >
                    {contentTitleTranslated}
                  </LinkText>
                </BoxAdaptive>
              );
            })}
          </BoxAdaptive>
        }]}
        />
      )}
    </ul>
  );
};

const MainMenu: React.FC = () => {
  const { language = 'en' } = useSubdomainContext();

  return (
    <>
      <li>
        {mainMenuItems.slice(0, columnStart).map(columnContent(language))}
      </li>
      <li>
        {mainMenuItems.slice(columnStart).map(columnContent(language))}
      </li>
    </>
  );
};

export default MainMenu;
