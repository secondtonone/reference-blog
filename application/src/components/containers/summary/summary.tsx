import styled from 'styled-components';
import Metric, { MetricProps } from '~/components/molecules/metric';
import { BoxAdaptive, TextContent } from '~/components/atoms';

export interface SummaryProps {
  title: React.ReactNode
  summaries: MetricProps[]
  footer: React.ReactNode
}

const Summary: React.FC<SummaryProps> = ({
  summaries, title, footer
}) => (
  <BoxAdaptive
    display="flex"
    flexDirection="column"
  >
    <TextContent
      fontSize={2}
      lineHeight={1.5}
      fontWeight="accent"
      uppercased
    >
      {title}
    </TextContent>
    <SummaryContainer
      display="flex"
      flexDirection="column"
      pt={4}
      pb={2}
    >
      {summaries.map((summary) => <Metric key={summary.title} {...summary} />)}
    </SummaryContainer>
    <BoxAdaptive
      display="block"
    >
      {footer}
    </BoxAdaptive>
  </BoxAdaptive>
);

const SummaryContainer = styled(BoxAdaptive)`
  & > div {
    margin: 0 12px 12px 0;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default Summary;
