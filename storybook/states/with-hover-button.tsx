import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

type StyledProps = LayoutProps;

const WithHoverButton = styled.div<StyledProps>`
  display: inline-block;

  ${layout}

  button[class*="SButton"] {
    color: #ff622d !important;
    border-color: #ff622d !important;
  }
`;

export default WithHoverButton;
