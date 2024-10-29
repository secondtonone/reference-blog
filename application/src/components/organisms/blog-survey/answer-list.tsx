import styled from 'styled-components';
import { TextContent, RadioButton } from '~/components/atoms';
import { getScheme } from '~/styles/scheme';

const lightTheme = getScheme();

export interface AnswerListProps {
  answers: string[]
  currentAnswer: number
  inBlock?: boolean
  onClick?: (index: number) => void
}

const AnswerList: React.FC<AnswerListProps> = ({
  currentAnswer,
  answers,
  onClick,
  inBlock
}) => (
  <Container inBlock={inBlock}>
    {answers.map((answerText, index) => (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        // eslint-disable-next-line react/no-array-index-key
        key={`answer-item-${index}`}
        onClick={() => onClick(index)}
      >
        <RadioButton
          checked={index === currentAnswer}
          currentColor
          label={(
            <TextContent
              fontSize={3}
              lineHeight={{ _: 1.6 }}
              level={7}
              pl="9px"
            >
              {answerText}
            </TextContent>
                )}
        />
      </li>
    ))}
  </Container>
);

const Container = styled.ul<{inBlock?: boolean}>`
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;

  & li {
    border: 1px solid ${({ theme, inBlock }) => (inBlock ? lightTheme.secondary5 : theme.secondary5)};
    list-style: none !important;
    border-radius: 10px;
    padding: 17px 21px !important;
    margin: 0 0 16px 0 !important;
    cursor: pointer;
    color: ${({ theme, inBlock }) => (inBlock ? theme.black : 'currentColor')} !important;

    &:last-child {
      margin: 0 !important;
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.purpleBrand};
      background: ${({ theme }) => theme.purpleBrand};
      color: ${({ theme }) => theme.white} !important;
    }
  }
`;

export default AnswerList;
