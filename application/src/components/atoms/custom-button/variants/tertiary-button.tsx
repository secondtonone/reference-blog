import styled from 'styled-components';
import BaseButton from './base-button';
import buttonSelector from '../button-selector';

const TertiaryButton = styled(BaseButton)<{active: boolean}>`
  & button[class*="${buttonSelector}"] {
    background-color: transparent !important;
    color: ${({ theme, active }) => (active ? theme.orangeBrand : 'currentColor')} !important;
    padding: 0;
    height: auto !important;
  }

  & button[class*="${buttonSelector}"]:hover,
  & button[class*="${buttonSelector}"]:active {
    color: ${({ theme }) => theme.orangeBrand} !important;
  }

  & button[class*="${buttonSelector}"]:disabled {
    color: ${({ theme }) => theme.secondary3} !important;
    opacity: 1;
  }
`;

export default TertiaryButton;
