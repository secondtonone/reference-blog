import styled from 'styled-components';
import CustomSwitch from 'application/src/components/molecules/custom-switch';
import { useState } from 'react';
import ThemeProvider from 'application/src/styles/theme-provider';
import Page from 'application/src/components/atoms/page';
import getScheme from 'application/src/styles/scheme/scheme';
import SvgSprite from 'application/src/components/containers/svg-sprite';

import 'application/src/styles/fonts.css';
import 'application/src/styles/layout.css';

const ThemeDecorator = Story => {
    const selected = document.documentElement.dataset.theme === 'dark';
    const [isDark, setDark] = useState(selected);
    const theme = getScheme(isDark);

    return (
        <ThemeProvider theme={theme}>
            <SwitchStyled
                checked={isDark}
                onChange={() => {
                    setDark(!isDark);

                    document.documentElement.dataset.theme = !isDark ? 'dark' : 'light';
                }}
            />
            <Page thin style={{ flex: '1' }}>
                <Story />
            </Page>
            <SvgSprite />
        </ThemeProvider>
    );
};

const SwitchStyled = styled(CustomSwitch)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
`;

export default ThemeDecorator;