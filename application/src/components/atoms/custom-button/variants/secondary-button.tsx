import styled from 'styled-components';
import BaseButton from './base-button';
import buttonSelector from '../button-selector';

const SecondaryButton = styled(BaseButton)<{ border?: boolean }>`
  & button[class*="${buttonSelector}"] {
    background-color: transparent !important;
    color: ${({ theme }) => theme.secondary5} !important;
    border-color: ${({ theme, border }) => (border ? theme.secondary5 : theme.secondary3)} !important;
  }

  & button[class*="${buttonSelector}"]:hover {
    color: ${({ theme }) => theme.orangeBrand} !important;
    border-color: ${({ theme }) => theme.orangeBrand} !important;
  }

  & button[class*="${buttonSelector}"]:disabled {
    color: ${({ theme }) => theme.secondary3} !important;
    opacity: 1;
  }

  & button[class*="${buttonSelector}"]:active {
    color: ${({ theme }) => theme.white} !important;
    border-color: ${({ theme }) => theme.accentWarning} !important;
    background: ${({ theme }) => theme.accentWarning} !important;
  }
`;

export default SecondaryButton;
