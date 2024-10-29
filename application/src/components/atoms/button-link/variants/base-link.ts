import styled from 'styled-components';
import buttonLinkSelector from '../button-link-selector';

const BaseButtonLink = styled.span<{ wide?: boolean}>`
  display: flex;
  ${({ wide }) => (wide ? 'width: 100%;' : '')}
  & a[class*="${buttonLinkSelector}"] {
    font-size: 14px !important;
    padding: 0 7px;
    display: inline-flex;
    border: 1px solid currentColor;
    height: 42px;
    border-radius: 5px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;

    & span {
      border: 0;
    }
  }

  [class*='SText'] {
    margin: 0 !important;
  }
`;

export default BaseButtonLink;
