import styled from 'styled-components';
import buttonLinkSelector from '../button-link-selector';
import BaseButtonLink from './base-link';

const SecondaryButtonLink = styled(BaseButtonLink)<{ border?: boolean, inverted?: boolean}>`
  & a[class*="${buttonLinkSelector}"],
  & a[class*="${buttonLinkSelector}"]:visited {
    background-color: transparent !important;
    color: ${({ theme, inverted }) => (inverted ? theme.white : theme.secondary5)} !important;
    border-color: ${({ theme, border }) => (border ? 'rgba(255,255,255,.5)' : theme.secondary3)} !important;
  }

  & a[class*="${buttonLinkSelector}"]:hover {
    color: ${({ theme }) => theme.orangeBrand} !important;
    border-color: ${({ theme }) => theme.orangeBrand} !important;
    opacity: 1;
  }

  & a[class*="${buttonLinkSelector}"]:disabled {
    color: ${({ theme }) => theme.secondary3} !important;
    opacity: 1;
  }

  & a[class*="${buttonLinkSelector}"]:active {
    color: ${({ theme }) => theme.white} !important;
    border-color: ${({ theme }) => theme.accentWarning} !important;
    background: ${({ theme }) => theme.accentWarning} !important;
  }
`;

export default SecondaryButtonLink;
