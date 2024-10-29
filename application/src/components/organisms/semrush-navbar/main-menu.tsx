import styled from 'styled-components';
import {
  LinkText,
  TextContent,
  ButtonLink,
  BoxAdaptive
} from '~/components/atoms';
import CustomDropdown from '~/components/molecules/custom-dropdown';
import SvgIcon from '~/components/containers/svg-icon';
import mainMenuItems from '~/__fixtures__/main-menu-items';
import { useSubdomainContext } from '~/hooks';
import { replaceUrlByFull } from '~/utils';

import { getScheme } from '~/styles/scheme';

const lightTheme = getScheme();

const Item = ({ title, text }: { title?: string, text?: string}) => (
  <>
    {title && (
    <TextContent
      fontWeight={600}
      fontSize={{ _: 5 }}
      mb={1}
    >
      {title}
    </TextContent>
    )}
    {text && (
    <TextContent
      fontWeight="normal"
      fontSize={{ _: '13px' }}
      lineHeight={1.5}
      color={lightTheme.secondary4}
    >
      {text}
    </TextContent>
    )}
  </>
);

const MainMenu: React.FC = () => {
  const { language = 'en' } = useSubdomainContext();

  return (
    <Menu data-test="menu">
      {mainMenuItems.map(({
        title, link, content, horizontal
      }) => {
        const translatedTitle = title[language] ? title[language] : title.en;
        return (
          <li key={`dropdown-${language}-${translatedTitle}`}>
            {content
              ? (
                <CustomDropdown
                  hMax="600px"
                  p="34px 64px 36px"
                  offset={[0, 0]}
                  interaction="hover"
                  trigger={(
                    <>
                      <TextContent
                        fontWeight="normal"
                        fontSize={{ _: 2 }}
                        lineHeight={1.5}
                      >
                        {translatedTitle}
                      </TextContent>
                      <Icon>
                        <SvgIcon code="up" size={[16, 10]} />
                      </Icon>
                    </>
                  )}
                  contentBefore={horizontal ? (
                    <DropdownContent>
                      {content.map((item) => (
                        <a key={`link-${language}-${translatedTitle}`} href={replaceUrlByFull(item.link, language)} target="_blank" rel="noreferrer">
                          <Item
                            title={item.title[language] ? item.title[language] : item.title.en}
                            text={item.text[language] ? item.text[language] : item.text.en}
                          />
                        </a>
                      ))}
                    </DropdownContent>
                  ) : null}
                  items={!horizontal ? content.map((item) => {
                    const button = item?.button;
                    const contentTitle = item.title[language]
                      ? item.title[language] : item.title.en;
                    const contentText = item?.text && item.text[language]
                      ? item.text[language] : item?.text?.en || '';
                    const contentLink = replaceUrlByFull(item.link, language);

                    if (button) {
                      return (
                        <ContainerWithButton
                          key={`button-${language}-${translatedTitle}`}
                          display="flex"
                          flexDirection="column"
                          width={220}
                        >
                          <Item
                            title={contentTitle}
                            text={contentText}
                          />
                          <BoxAdaptive pt={6}>
                            {button && <ButtonLink href={contentLink} target="_blank" rel="noreferrer" inverted w={150} use="secondary" border>{button}</ButtonLink>}
                          </BoxAdaptive>
                        </ContainerWithButton>
                      );
                    }

                    return (
                      <a key={`title-${language}-${translatedTitle}`} href={contentLink} target="_blank" rel="noreferrer">
                        <TextContent
                          fontWeight={600}
                          fontSize={{ _: 5 }}
                          py={3}
                        >
                          {contentTitle}
                        </TextContent>
                      </a>
                    );
                  }) : null}
                />
              )
              : (
                <LinkText
                  href={replaceUrlByFull(link, language)}
                  currentColor
                  undecorated
                >
                  {translatedTitle}
                </LinkText>
              )}
          </li>
        );
      })}
    </Menu>
  );
};

const Menu = styled.ul`
  z-index: 2;
  & li {
    list-style-type: none;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;

    + li {
      margin-left: 23px;
    }

    a {
      display: flex;
      line-height: 1.5;
    }
  }

  & li:hover {
    color: ${({ theme }) => (theme.secondary3)};
  }
`;

const ContainerWithButton = styled(BoxAdaptive)`
  & span {
    &:first-child {
      color: ${({ theme }) => (theme.white)} !important;
    }
  }
`;

const Icon = styled.div`
  margin-left: 8px;
  display: inline-block;
  transform: rotate(180deg) scale(0.8) translateY(-15%);
`;

const DropdownContent = styled.div`
  box-sizing: border-box;
  max-width: 664px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 24px 64px;
  padding-top: 12px;

  & > a:hover span:first-child {
    color: ${lightTheme.orangeBrand};
  }
`;

export default MainMenu;
