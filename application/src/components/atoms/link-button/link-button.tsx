import styled from 'styled-components';
import Button, { IButtonProps } from '@semcore/button';

const buttonSelector = 'SButton';

const Container = styled.span`
  & button[class*="${buttonSelector}"] span {
    margin: 0 !important;
    display: inline;
  }

  & button[class*="${buttonSelector}"],
  & button[class*="${buttonSelector}"]:active {
    background-color: transparent !important;
    color: ${({ theme }) => theme.orangeBrand} !important;
    display: inline;
    border: none;
    font-size: inherit !important;
    margin: 0;
    padding: 0;
  }

  & button[class*="${buttonSelector}"]:hover {
    opacity: 0.6;
  }

  & button[class*="${buttonSelector}"] > span {
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border-bottom-color .15s ease-in-out;
  }

  & button[class*="${buttonSelector}"]:hover > span,
  & button[class*="${buttonSelector}"]:active > span {
    border-color: currentColor;
  }

  & button[class*="${buttonSelector}"]:disabled:hover > span {
    border-color: transparent;
  }

  & button[class*="${buttonSelector}"]:disabled {
    color: ${({ theme }) => theme.secondary3} !important;
    opacity: 1;
  }
`;

type CustomButtonProps = IButtonProps & { css?: any }

const LinkButton:
  React.FC<CustomButtonProps & React.HTMLAttributes<HTMLButtonElement>> = (props) => (
    <Container data-test="link-button"><Button {...props} /></Container>
  );

export default LinkButton;
