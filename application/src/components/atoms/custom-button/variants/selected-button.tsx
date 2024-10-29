import styled from 'styled-components';
import BaseButton from './base-button';
import buttonSelector from '../button-selector';

const SelectedButton = styled(BaseButton)`
  & button[class*="${buttonSelector}"],
  & button[class*="${buttonSelector}"]:hover,
  & button[class*="${buttonSelector}"]:disabled,
  & button[class*="${buttonSelector}"]:active {
    background-color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.orangeBrand)} !important;
    color: ${({ theme }) => (theme.isLight ? theme.secondary1 : theme.white)} !important;
    border-color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.orangeBrand)} !important;
  }
`;

export default SelectedButton;
