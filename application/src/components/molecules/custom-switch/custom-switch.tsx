import React from 'react';
import styled from 'styled-components';
import { Merge } from '@semcore/core';
import Switch, { ISwitchProps } from '@semcore/switch';

export interface ICustomSwitchProps extends ISwitchProps {
  before?: React.ReactNode;
  after?: React.ReactNode;
  slider?: (checked: boolean) => React.ReactNode;
  checked: boolean;
  onChange?: (checked: boolean, e?: React.SyntheticEvent<HTMLInputElement, Event>) => void,
  css?: any
}

const CustomSwitch: React.FC<
  React.HTMLAttributes<HTMLDivElement> &
  Merge<ICustomSwitchProps, React.InputHTMLAttributes<HTMLInputElement>>
> = ({
  before,
  after,
  onChange,
  checked,
  size = 'l',
  slider,
  ...props
}) => (
  <Switch data-test="switch" size={size} theme="info">
    {before && <Switch.Addon>{before}</Switch.Addon>}
    <Container isSlider={!!slider} size={size}>
      {slider && <IconContainer withBefore={!!before} size={size} checked={checked} data-ui-name="Slider">{slider(checked)}</IconContainer>}
      <Switch.Value checked={checked} onChange={onChange} {...props} />
    </Container>
    {after && <Switch.Addon>{after}</Switch.Addon>}
  </Switch>
);

const SwitchDimensions = {
  m: {
    slider: 8,
    height: 12,
  },
  l: {
    slider: 14,
    height: 20,
  },
  xl: {
    slider: 20,
    height: 24,
  }
};

const Container = styled.span<{ isSlider: boolean; size: ISwitchProps['size'] }>`
  position: relative;
  height: ${({ size }) => SwitchDimensions[size].height}px;
  & div[class*='SToggle'] {
    background-color: ${props => props.theme.yellow} !important;
    border-radius: 10px !important;
    box-sizing: border-box;
    padding: 0;
    min-width: 36px;
    height: 20px !important;
    display: flex;
    align-items: center;
  }

  & div[class*='SSlider'] {
     margin: 0 3px !important;
   }

  & div[class*='checked'] {
    background-color: ${props => props.theme.secondary1} !important;

    & div[class*='SSlider'] {
      opacity: ${({ isSlider }) => Number(!isSlider)};
    }
  }

  & span[class*='SAddon'] {
    color: ${({ theme }) => theme.secondary5} !important;
  }

  [class*='__checked']{
    transform: none !important;
  }

  [class*='SSlider'],
  [class*='__checked']{
    transition: none !important;
  }
`;

const IconContainer = styled.span<{ checked: boolean; size: ISwitchProps['size']; withBefore?: boolean; }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${({ checked }) => (checked ? 'auto' : '0')};
  right: ${({ checked }) => (!checked ? 'auto' : '3px')};
  width: ${({ size }) => SwitchDimensions[size].slider}px;
  height: ${({ size }) => SwitchDimensions[size].slider}px;
  transition: none;
`;

export default CustomSwitch;
