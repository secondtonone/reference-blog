import styled from 'styled-components';
import BaseButton from './base-button';
import buttonSelector from '../button-selector';

const InternalButton = styled(BaseButton)`
  & button[class*="${buttonSelector}"],
  & button[class*="${buttonSelector}"]:disabled {
    background-color: ${({ theme }) => (theme.black)} !important;
    color: ${({ theme }) => (theme.white)} !important;
    border-color: ${({ theme }) => (theme.black)} !important;
  }

  & button[class*="${buttonSelector}"]:hover {
    background-color: ${({ theme }) => (theme.secondary3)} !important;
    border-color: ${({ theme }) => (theme.secondary3)} !important;
  }

  & button[class*="${buttonSelector}"]:active {
    background-color: ${({ theme }) => (theme.secondary4)} !important;
    border-color: ${({ theme }) => (theme.secondary4)} !important;
  }
`;

export default InternalButton;
