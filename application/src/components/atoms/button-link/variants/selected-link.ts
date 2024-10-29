import styled from 'styled-components';
import buttonLinkSelector from '../button-link-selector';
import BaseButtonLink from './base-link';

const SelectedButtonLink = styled(BaseButtonLink)`
  & a[class*="${buttonLinkSelector}"],
  & a[class*="${buttonLinkSelector}"]:hover,
  & a[class*="${buttonLinkSelector}"]:disabled,
  & a[class*="${buttonLinkSelector}"]:visited,
  & a[class*="${buttonLinkSelector}"]:active {
    background-color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.orangeBrand)} !important;
    color: ${({ theme }) => (theme.isLight ? theme.secondary1 : theme.white)} !important;
    border-color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.orangeBrand)} !important;
    opacity: 1;
  }
`;
export default SelectedButtonLink;
