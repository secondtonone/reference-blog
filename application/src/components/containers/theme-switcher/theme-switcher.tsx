import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useState } from 'react';
import { CustomSwitch } from '~/components/molecules';
import SvgIcon from '../svg-icon';
import { BoxAdaptive } from '~/components/atoms';

interface Props {
  onThemeChanging?: () => void;
}

const ThemeSwitcher: React.FC<Props> = ({ onThemeChanging }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const onThemeChange = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
    if (typeof onThemeChanging === 'function') onThemeChanging();
  }, [theme, onThemeChanging]);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <BoxAdaptive width={36} height={20} />
    );
  }

  return (
    <>
      <CustomSwitch
        data-test="theme-switcher"
        id="theme-switcher"
        data-theme={isDark ? 'dark' : 'light'}
        checked={isDark}
        onChange={onThemeChange}
        slider={(value) => (value && <SvgIcon code="moon" />)}
      />
      <HiddenLabel htmlFor="theme-switcher">Theme switcher</HiddenLabel>
    </>
  );
};

const HiddenLabel = styled.label`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export default ThemeSwitcher;
