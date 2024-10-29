import styled from 'styled-components';
import Link from 'next/link';
import TextContent from '~/components/atoms/text-content';
import { BrandGroupTokens, GreysGroupTokens } from '~/styles/palette';

interface ContainerProps {
  clear?: boolean
  step?: boolean
  color?: keyof BrandGroupTokens | keyof GreysGroupTokens
}

interface Props extends ContainerProps {
  href?: string
  onClick?: () => void
}

const TagControl: React.FC<Props> = (
  {
    children,
    href,
    onClick,
    clear,
    step,
    color = 'secondary1'
  }
) => (
  <TagControlStyled
    data-test="tag-control"
    fontSize={{ _: 1, md: 2 }}
    fontWeight="normal"
    clear={clear}
    step={step}
    color={color}
  >
    {href ? (
      <Link href={href}>
        <a>
          {children}
        </a>
      </Link>
    ) : (
      <button onClick={onClick} type="button">
        {children}
      </button>
    )}
  </TagControlStyled>
);

const TagControlStyled = styled(TextContent)<ContainerProps>`
  border: 0;
  outline: none;
  background-color: ${({ theme, clear, color }) => (!clear ? theme[color] : '')};
  color: ${({ theme, color }) => (theme.isLight ? theme.opposed : (color === 'secondary1' ? theme.lightMuted : theme.black))};
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-align: center;
  margin-right: ${({ clear }) => (clear ? '20px' : '10px')};
  margin-top: ${({ step }) => (step ? '12px' : '')};
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 5px;

  a, button {
    outline: none;
    color: inherit;
    cursor: pointer;
    padding: ${({ clear }) => (clear ? '4px 0' : '10px 16px')};
  }

  > span {
    width: 100%;
  }

  button {
    border: 0;
    width: 100%;
    background: inherit;
    height: 100%;
  }

  &:hover {
    color: ${({ theme, color }) => (color === 'secondary1' ? theme.orangeBrand : theme.opposed)};
  }

  &:active {
    background-color: ${({ theme }) => theme.orangeBrand};
    color: ${({ theme }) => theme.white};
  }
`;

export default TagControl;
