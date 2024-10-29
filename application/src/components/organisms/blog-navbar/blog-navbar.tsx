import styled from 'styled-components';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import Container from '~/components/atoms/container';
import BoxAdaptive from '~/components/atoms/box-adaptive';
import { sm, lg } from '~/styles/scheme/breakpoints';

import SvgIcon from '~/components/containers/svg-icon';

import { sendAnalyticEvent } from '~/analytics';

import { CategoriesTreeViewModel } from '~/view-model';

import Logo from '~/components/atoms/logo';

import RenderContainer from '~/components/containers/render-container';
import CategoriesTree from '~/components/organisms/categories-tree';
import CategoriesMenu from './categories-menu';
import ServiceMenu from './service-menu';
import MainMenu from './main-menu';
import MobileMenuPopup from '~/components/organisms/mobile-menu-popup';
import LanguageChange from '~/components/organisms/language-change';
import SearchField from './search-field';

const { publicRuntimeConfig: { locales } } = getConfig();

interface Props {
  categoriesTree?: CategoriesTreeViewModel,
  hideSubscribe?: boolean
  isCategoriesTreeLeveled?: boolean
}

const BlogNavbar: React.FC<Props> = ({
  children,
  categoriesTree,
  hideSubscribe,
  isCategoriesTreeLeveled
}) => {
  const [open, setOpen] = useState(false);

  const navbarToggle = useCallback(() => setOpen(!open), [open]);
  const categoryAnalyticsHandler = useCallback((name: string) => {
    sendAnalyticEvent('category-click-header', {
      label: name
    });
  }, [sendAnalyticEvent]);

  /* const searchAnalyticsHandler = useCallback((name) => {
    sendAnalyticEvent('menu-sub-search')
  }, []); */

  const onClose = useCallback(() => setOpen(false), []);

  return (
    <NavStyled className="semblog-header-navbar" data-test="blog-navbar" height={{ _: 50, sm: 70 }} p={{ _: '14px 0', sm: '24px 0' }}>
      <Container full>
        <BoxAdaptive display="flex" justifyContent="space-between" alignItems="center">
          <Logo />

          <NavLinksStyled
            display={{ _: 'none', lg: 'flex' }}
            justifyContent={{ _: 'space-between' }}
            alignItems="center"
            width="100%"
            padding={{ md: '0 24px 0 30px' }}
            fontWeight="accent"
            data-test="navigation-menu"
          >
            <BoxAdaptive
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              fontSize={{ lg: 3 }}
            >
              <ul>
                <CategoriesMenu
                  leveled={isCategoriesTreeLeveled}
                  categories={categoriesTree}
                  onClick={categoryAnalyticsHandler}
                />
              </ul>

              <ul>
                <SearchIconStyled>
                  <Link href="/blog/search">
                    <a aria-label="Search">
                      <SvgIcon code="search" size={[16, 16]} />
                    </a>
                  </Link>
                </SearchIconStyled>
                <ServiceMenu hideSubscribe={hideSubscribe} />
              </ul>
            </BoxAdaptive>
          </NavLinksStyled>

          <BoxAdaptive display="flex" opacity={Number(!open)}>
            {children}
            <TogglerStyled
              size={[22, 22]}
              data-test="mobile-menu-popup-open"
              code="burger"
              onClick={navbarToggle}
            />
          </BoxAdaptive>
        </BoxAdaptive>
      </Container>

      <RenderContainer isRendered={open} inAnimation={['rollInLeft']} outAnimation={['rollOutLeft']}>
        <MobileMenuPopup
          onClose={onClose}
          render={(toMain) => [
            <>
              <List onClick={navbarToggle}>
                <CategoriesTree
                  tree={categoriesTree}
                  leveled={isCategoriesTreeLeveled}
                  internal
                />
              </List>

              <SubList data-test="mobile-service-menu" onClick={navbarToggle}>
                <ServiceMenu hideSubscribe={hideSubscribe} />
              </SubList>

              <SubList>
                <li data-test="mobile-menu-search-field">
                  <SearchField onSearch={() => setOpen(false)} />
                </li>
              </SubList>

              <SubSecondaryList>
                <MainMenu />
              </SubSecondaryList>
            </>,
            <>
              <BackToMenu onClick={toMain} data-test="lang-change-menu-close">
                <SvgIconArrowStyled code="arrow-down" style={{ transform: 'rotate(90deg)' }} />
              </BackToMenu>
              <LanguageChange locales={locales} onToggle={onClose} />
            </>
          ]}
        />
      </RenderContainer>
    </NavStyled>
  );
};

const List = styled.ul`
  display: inline-block;
  vertical-align: middle;
  list-style-type: none;

  li {
    padding-bottom: 24px;
  }
`;

const SubList = styled(List)`
  padding-top: 32px;
  display: inline-block;
  vertical-align: middle;
  list-style-type: none;
  width: 100%;

  li {
    color: ${({ theme }) => (theme.secondary4)};
  }

  input {
    color: ${({ theme }) => (theme.secondary4)} !important;
  }
`;

const SubSecondaryList = styled(List)`
  border-top: 1px solid ${({ theme }) => (theme.secondary4)};
  margin-top: 16px;
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  vertical-align: middle;
  list-style-type: none;
  width: 100%;

  li {
    margin-right: 42px;
  }

  li, ul {
    padding-bottom: 16px;
    list-style-type: none;
  }
`;

const SvgIconArrowStyled = styled(SvgIcon)`
  fill: ${({ theme }) => (theme.isLight ? theme.opposed : theme.white)};
  position: relative;
  margin-left: 1px;
  top: -2px;

  @media (min-width: ${sm}) {
    width: 30px;
    height: 30px;
  }
`;

const NavStyled = styled(BoxAdaptive)`
  position: relative;
  width: 100%;
  box-shadow: 0 15px 30px rgba(51, 59, 81, 0.05);
`;

const NavLinksStyled = styled(BoxAdaptive)`
  ul {
    display: flex;
    align-items: flex-end;
  }

  ul li {
    display: inline-block;
    vertical-align: middle;
    list-style-type: none;
    transition: .235s color;
    color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary4)};
    position: relative;
    padding-top: 2px;
    &:not(:last-child) {
      margin-right: 24px;
    }
    &:hover {
      color: ${({ theme }) => theme.orangeBrand};
      transition: .235s color;
    }
  }

  a {
    display: flex;
    align-items: center;
  }
`;

const BackToMenu = styled.div`
  color: ${({ theme }) => (theme.orangeBrand)};
  cursor: pointer;
`;

const TogglerStyled = styled(SvgIcon)`
  margin-left: 25px;
  @media (min-width: ${sm}) {
    margin-left: 30px;
  }
  @media (min-width: ${lg}) {
    display: none;
  }
`;

const SearchIconStyled = styled.li`
`;

export default BlogNavbar;
