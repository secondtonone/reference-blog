import styled from 'styled-components';
import clsx from 'clsx';

const linkSelector = 'SLink';

export interface ILinkTextProps {
  currentColor?: boolean;
  disabled?: boolean;
  active?: boolean;
  undecorated?: boolean;
  unhovered?: boolean;
  ['data-test']?: string;
}

type TLinkText = ILinkTextProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const LinkText: React.FC<TLinkText> = ({ disabled, className, ...props }) => (
  <StyledLink data-test="link-text" className={clsx(['SLink', className, { '-disabled': disabled }])} {...props} />
);

const StyledLink = styled.a<ILinkTextProps>`
  &[class*="${linkSelector}"] {
    display: inline-flex;
  }
  &[class*="${linkSelector}"],
  &[class*="${linkSelector}"]:active {
    color: ${({ theme, currentColor }) => (currentColor ? 'currentColor' : theme.orangeBrand)} !important;
  }

  &[class*="${linkSelector}"] span {
    border-color: ${({ theme, currentColor, undecorated }) => (undecorated ? 'transparent' : (currentColor ? 'currentColor' : theme.orangeBrand))} !important;
  }

  &[class*="${linkSelector}"]:hover {
    opacity: ${({ unhovered }) => (unhovered ? 1 : 0.6)};
  }

  &[class*="${linkSelector}"]:visited {
    color: ${({ theme, currentColor }) => (currentColor ? 'currentColor' : theme.orangeDark)} !important;
  }

  &[class*="${linkSelector}"]:visited span {
    border-color: ${({ theme, currentColor }) => (currentColor ? 'currentColor' : theme.orangeDark)} !important;
  }

  &:not([href]) {
    cursor: not-allowed !important;
    pointer-events: none;
    opacity: .5;
  }

  &.-outlined {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      border-bottom: 1px solid #fff;
      width: 100%;
      bottom: 2px;
    }
    &:hover:before {
      visibility: hidden;
    }
  }
`;

export default LinkText;
