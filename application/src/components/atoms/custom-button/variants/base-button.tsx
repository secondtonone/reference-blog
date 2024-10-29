import styled from 'styled-components';

const BaseButton = styled.span<{ size?: string, wide?: boolean, noborder?: boolean}>`
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
  display: flex;

  button {
    font-size: 14px !important;
    padding: 0 7px;
    width: ${({ wide }) => (wide ? '100%' : '')};
    min-width: 36px !important;
    display: inline-flex;
    border: ${({ noborder }) => (noborder ? 0 : '')}
  }

  [class*='SText'] {
    margin: 0 !important;
  }
`;

export default BaseButton;
