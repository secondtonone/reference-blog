import { ThemeProvider } from 'styled-components';

const Theme: React.FC<{ theme: any }> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;
