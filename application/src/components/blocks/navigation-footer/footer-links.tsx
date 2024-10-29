import styled from 'styled-components';
import { BoxAdaptive, LinkText } from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';
import { typographyFonts } from '~/styles';
import FontWeights from '~/styles/scheme/font-weights';
import footerItems from '~/__fixtures__/footer-menu-items';
import { getScheme } from '~/styles/scheme';
import { replaceUrlByFull } from '~/utils';

const lightTheme = getScheme();

export interface FooterLinksProps {
  locale?: string
}

const FooterLinks: React.FC<FooterLinksProps> = ({ locale = 'en' }) => (
  <>
    {footerItems.map(({ title, content }) => {
      const translatedTitle = title[locale] ? title[locale] : title.en;
      return (
        <BoxAdaptive
          data-test=""
          key={translatedTitle}
          m={{
            _: '0 0 30px 20px', sm: '0 0 40px 40px'
          }}
          minWidth={{ _: 125, lg: 135 }}
          height="auto"
          display={{
            _: title.en === 'Follow us' ? 'none' : 'block',
            sm: title.en === 'Follow us' ? 'none' : 'block',
            md: 'block'
          }}
        >
          <Menu>
            <li data-test={`footer-title-${translatedTitle.toLocaleLowerCase()}`}>{translatedTitle}</li>
            {content.map((item) => {
              const contentTitle = item.title[locale] ? item.title[locale] : item.title.en;
              const itemLink = replaceUrlByFull(item.link, locale);

              return (
                <Item key={itemLink + item.value} active={item.value === locale}>
                  <LinkText
                    data-test={`footer-link-${contentTitle.toLocaleLowerCase()}`}
                    href={itemLink}
                    rel="nofollow"
                    currentColor
                    undecorated
                  >
                    <LinkStyled>
                      {title.en === 'Follow us' && <SvgIcon size={[16, 16]} code={contentTitle.toLocaleLowerCase()} />}
                      {contentTitle}
                    </LinkStyled>
                  </LinkText>
                </Item>
              );
            })}
          </Menu>
        </BoxAdaptive>
      );
    })}
  </>
);

const Menu = styled.ul`
  & li {
    text-align: left;
    list-style-type: none;
    vertical-align: middle;
    color: ${lightTheme.secondary3};

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:first-child {
      text-transform: ${typographyFonts.desc.menu.transform};
      font-size: ${typographyFonts.desc.menu.size};
      line-height: ${typographyFonts.desc.menu.height};
      font-weight: ${FontWeights.accent};
      color: ${lightTheme.secondary1};
    }
  }

  & li:hover {
    color: ${lightTheme.secondary1};
  }
`;

const Item = styled.li<{active: boolean}>`
  & span {
    font-weight: ${({ active }) => (active ? FontWeights.bold : FontWeights.light)};
    color: ${({ active }) => (active ? lightTheme.white : lightTheme.secondary3)};
  }
`;

const LinkStyled = styled.span`
  display: inline-flex;

  svg {
    margin-right: 8px;
  }
`;

export default FooterLinks;
