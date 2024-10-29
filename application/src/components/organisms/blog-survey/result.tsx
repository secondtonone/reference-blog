import styled from 'styled-components';
import { BoxAdaptive, TextContent } from '~/components/atoms';
import { getScheme } from '~/styles/scheme';
import { getColorProperty } from '~/styles/helpers';
import animations from '~/styles/animations';
import percentFlattering from '~/utils/percent-flattering';

const lightTheme = getScheme();
const OPPOSED_10 = getColorProperty(lightTheme.opposed, 0.1);

export interface ResultProps {
  answers: string[]
  results: number[]
  total: number
}

const Result: React.FC<ResultProps> = ({
  answers,
  results,
  total
}) => {
  const flatteredResult = percentFlattering(
    results
      .map((value) => value / (total * 0.01)),
    100
  );

  return (
    <ResultList>
      {answers.map((answerText, index) => {
        const percent = flatteredResult[index];

        return (
          <li key={`result-item-${answerText}`}>
            <BoxAdaptive
              display="flex"
            >
              <BoxAdaptive
                width={42}
              >
                <TextContent
                  fontSize={3}
                  lineHeight={{ _: 1.6 }}
                  fontWeight="accent"
                  level={7}
                  width={42}
                >
                  <Percent percent={percent} />
                  %
                </TextContent>
              </BoxAdaptive>
              <BoxAdaptive
                display="flex"
                pl="15px"
                flexDirection="column"
                width="100%"
              >
                <TextContent
                  fontSize={3}
                  lineHeight={{ _: 1.6 }}
                  level={7}
                >
                  {answerText}
                </TextContent>
                <Line
                  mt={3}
                  width="100%"
                  percent={percent}
                />
              </BoxAdaptive>
            </BoxAdaptive>
          </li>
        );
      })}
    </ResultList>
  );
};

const ResultList = styled.ul`
  list-style: none !important;
  animation: ${animations.fadeIn} .4s ease-in-out;
  padding: 0 !important;
  margin: 0 !important;

  & li {
    margin: 0 0 30px 0 !important;
    list-style: none !important;

    &:last-child {
      margin: 0 !important;
    }
  }
`;

const Line = styled(BoxAdaptive)<{percent: number}>`
  height: 10px;
  background: ${OPPOSED_10};
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    background: ${({ theme }) => theme.purpleBrand};
    position: absolute;
    height: 10px;
    width: ${({ percent }) => percent}%;
    border-radius: 10px;
    transform-origin: left;
    animation: ${animations.screwOutRight} .6s ease-out;
  }
`;

const Percent = styled.span<{percent: number}>`
  &::after {
    content: counter(count);
    counter-reset: count 0;
    animation: ${({ percent }) => animations.counter(percent)} 1s ease-in-out forwards;
  }
`;

export default Result;
