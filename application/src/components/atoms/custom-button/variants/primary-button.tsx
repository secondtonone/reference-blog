import styled from 'styled-components';
import BaseButton from './base-button';
import buttonSelector from '../button-selector';

const PrimaryButton = styled(BaseButton)<{ loading?: boolean }>`
  & button[class*="${buttonSelector}"] {
    background-color: ${({ theme }) => theme.orangeBrand} !important;
    color: ${({ theme }) => theme.white} !important;
  }

  & button[class*="${buttonSelector}"]:hover {
    background-color: ${({ theme }) => theme.orangeDark} !important;
  }

  & button[class*="${buttonSelector}"]:disabled {
    background-color: ${({ theme, loading }) => (loading ? theme.orangeBrand : theme.secondary3)} !important;
    opacity: 1;
  }

  & button[class*="${buttonSelector}"]:active {
    background-color: ${({ theme }) => theme.orangeDarkest} !important;
  }
`;

export default PrimaryButton;
