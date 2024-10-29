import { useState } from 'react';
import styled from 'styled-components';
import { BoxAdaptive, TextContent } from '~/components/atoms';
import AnswerList, { AnswerListProps } from './answer-list';
import ResultList from './result';

export interface BlogSurveyProps extends Omit<AnswerListProps, 'currentAnswer'> {
  question: React.ReactNode
  results: number[]
  rightAnswer: number
}

const BlogSurvey: React.FC<BlogSurveyProps> = ({
  question,
  answers,
  results,
  inBlock,
  onClick
}) => {
  const [stage, setStage] = useState<number>(0);
  const [answer, setAnswer] = useState<number>(-1);
  const [total, setTotal] = useState<number>(results.reduce((result, value) => result + value, 0));

  const stages = [
    <AnswerList
      inBlock={inBlock}
      answers={answers}
      currentAnswer={answer}
      onClick={(index) => {
        setAnswer(index);
        setStage(1);
        setTotal(total + 1);
        if (typeof onClick === 'function') onClick(index);
      }}
    />,
    <ResultList
      answers={answers}
      results={results}
      total={total}
    />
  ];

  return (
    <Container
      p={inBlock ? 40 : 0}
      pb={inBlock ? 32 : 0}
      inBlock={inBlock}
    >
      <TextContent
        fontSize={8}
        lineHeight={{ _: 1.2 }}
        fontWeight={{ _: 'bold' }}
        marginBottom={6}
        level={0}
        accentFont
      >
        {question}
      </TextContent>
      {stages[stage]}
      <AnsweredContainer
        ml={60}
        mt={25}
      >
        <TextContent
          fontSize={2}
          lineHeight={{ _: 1.2 }}
          fontWeight={{ _: 'normal' }}
          level={0}
        >
          Answered:
          {' '}
          {total}
        </TextContent>
      </AnsweredContainer>
    </Container>
  );
};

const Container = styled(BoxAdaptive)<{ inBlock?: boolean}>`
  background: ${({ theme, inBlock }) => (inBlock ? theme.blue : 'transparent')};
  border-radius: 10px;
  color: ${({ theme, inBlock }) => (inBlock ? theme.black : (theme.isLight ? theme.black : theme.white))} !important;
`;

const AnsweredContainer = styled(BoxAdaptive)`
  color: ${({ theme }) => theme.secondary4};
`;

export default BlogSurvey;
