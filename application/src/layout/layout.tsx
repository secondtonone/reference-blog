import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import styled from 'styled-components';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

import {
  useWithScroll,
  useScrollDepth,
  useSubdomainContext,
  usePopupContext
} from '~/hooks';

import { BotsDetectionViewModel } from '~/view-model';

import ThemeProvider from '~/styles/theme-provider';
import NavigationHeader from '~/components/blocks/navigation-header';
import BlogNavbar from '~/components/organisms/blog-navbar';

import { sendAnalyticEvent } from '~/analytics';
import scrollDepthValues from '~/constants/scroll-depth-values';

import DynamicComponent from '~/components/containers/dynamic-component';
import useUserInteraction from './hooks/use-user-interaction';
import { getScheme } from '~/styles/scheme';
import { BoxAdaptive } from '~/components/atoms';

const Progress = dynamic(
  import('~/components/organisms/progress'),
  { ssr: false }
);

const LanguageChanger = dynamic(
  import('~/components/organisms/example-navbar/language-changer'),
  { ssr: false }
);

const ThemeSwitcher = dynamic(
  import('~/components/containers/theme-switcher'),
  { ssr: false }
);

const NavigationFooter = dynamic(
  import('~/components/blocks/navigation-footer')
);

const PopupLayout = dynamic(
  import('~/components/containers/popup-layout'),
  { ssr: false }
);

const MARGIN_FOR_DYNAMIC = 2000;

interface Props extends BotsDetectionViewModel {
  renderTop?: React.ReactNode,
  categoriesTree?: any
  buttonUpShift?: number
}

const Layout: React.FC<Props> = ({
  children,
  categoriesTree,
  renderTop = null,
  isBot,
  isUser
}) => {
  const headerRef = useRef<HTMLElement>();
  const { isOnEnd } = useWithScroll();
  const [marginForDynamic, setMargin] = useState(0);
  const { resolvedTheme: themeCode } = useTheme();
  const [themeDark, setThemeDark] = useState(false);
  const theme = getScheme(themeDark);
  const { currentPopup } = usePopupContext();

  useEffect(() => {
    setThemeDark(themeCode === 'dark');
  }, [themeCode]);

  const { hideSubscribe, language } = useSubdomainContext();

  useScrollDepth({
    scrollDepthValues,
    handler: (scrollDepth) => sendAnalyticEvent('page-depth-scroll', {
      action: `scroll: ${scrollDepth}`
    })
  });

  const analyticsThemeHandler = useCallback(() => {
    sendAnalyticEvent('menu-sub-theme');
  }, []);

  const { scrolled, fixedHeader } = useUserInteraction({
    headerRef,
    isUser
  });

  return (
    <ThemeProvider theme={theme}>
      <HeaderStyled ref={headerRef} fixedHeader={fixedHeader} isRelative={!isUser}>
        <NavigationHeader
          isEnding={isOnEnd}
          isFixed={fixedHeader}
          renderTop={[<LanguageChanger key="language" />]}
        >
          <BlogNavbar {...{
            categoriesTree,
            hideSubscribe,
            isCategoriesTreeLeveled: language === 'en'
          }}
          >
            {isUser ? (
              <ThemeSwitcher onThemeChanging={analyticsThemeHandler} />
            ) : (
              <BoxAdaptive
                width={36}
                height={20}
                backgroundColor="#FFC600"
                borderRadius={10}
              />
            )}
          </BlogNavbar>
          {isUser && (
          <>
            <DynamicComponent.OnScroll
              instant={isBot}
              onScroll={() => setMargin(MARGIN_FOR_DYNAMIC)}
            >
              <Progress scrolled={scrolled} />
            </DynamicComponent.OnScroll>
          </>
          )}
        </NavigationHeader>
      </HeaderStyled>
      {currentPopup && (
        <PopupLayout isShifted={fixedHeader} code={currentPopup} />
      )}
      {renderTop}
      <main>
        {children}
      </main>
      <DynamicComponent.OnIntersection
        instant={isBot}
        data-test="footer"
        margin={marginForDynamic}
      >
        <NavigationFooter locale={language} />
      </DynamicComponent.OnIntersection>
    </ThemeProvider>
  );
};

const HeaderStyled = styled.header<{ fixedHeader?: boolean, isRelative?: boolean }>`
  z-index: 100;
  position: ${({ isRelative }) => (!isRelative ? 'sticky' : 'relative')};
  top: 0;
`;

export default Layout;
