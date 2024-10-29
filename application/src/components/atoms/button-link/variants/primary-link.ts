import styled from 'styled-components';
import BaseButtonLink from './base-link';
import { BannerColors } from '~/styles/palette';
import { getColorByContrast } from '~/styles/helpers';
import buttonLinkSelector from '../button-link-selector';

type Background = keyof BannerColors | string

const PrimaryButtonLink = styled(BaseButtonLink)<{ loading?: boolean, background: Background }>`
  & a[class*="${buttonLinkSelector}"],
  & a[class*="${buttonLinkSelector}"]:visited {
    background-color: ${({ theme, background }) => theme[background]} !important;
    color: ${({ theme, background }) => (background === 'orangeBrand' || background === 'orangeIllust' ? theme.white : getColorByContrast({ main: theme[background], light: theme.white, dark: theme.black }))} !important;
    border: 0;
  }

  & a[class*="${buttonLinkSelector}"]:visited:hover,
  & a[class*="${buttonLinkSelector}"]:hover {
    /* background-color: ${({ theme }) => theme.orangeDark} !important; */
    filter: brightness(0.8);
    opacity: 1;
  }

  & a[class*="${buttonLinkSelector}"]:disabled {
    background-color: ${({ theme, loading, background }) => (loading ? theme[background] : theme.secondary3)} !important;
    opacity: 1;
  }

  & a[class*="${buttonLinkSelector}"]:active {
    /* background-color: ${({ theme }) => theme.orangeDarkest} !important; */
    filter: brightness(0.8);
  }
`;

export default PrimaryButtonLink;
