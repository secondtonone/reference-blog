import styled from 'styled-components';
import { BoxAdaptive, TextContent } from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';
import { IllustGroupTokens } from '~/styles/palette';

export interface MetricProps {
  title: string
  value: number
  color?: keyof IllustGroupTokens
  description: string
}

const Metric: React.FC<MetricProps> = ({
  title, value, color = 'purpleIllust', description
}) => (
  <MetricContainer
    p={22}
    pl={3}
    colorToken={color}
    display="inline-flex"
    flexDirection="column"
  >
    <TextContent
      fontWeight={{ _: 'accent' }}
      fontSize={12}
      lineHeight={1.05}
      accentFont
    >
      {value}
    </TextContent>
    <TextContent
      fontSize={2}
      lineHeight={1.5}
      title={description}
    >
      {title}
      <span>
        <SvgIcon code="info" size={[12, 12]} />
      </span>
    </TextContent>
  </MetricContainer>
);

const MetricContainer = styled(BoxAdaptive)<{colorToken: MetricProps['color']}>`
  border:  1px solid ${({ theme }) => theme.secondary3};
  border-left: 10px solid ${({ theme, colorToken }) => theme[colorToken]};
  border-radius: 10px;
  width: 188px;

  &:hover {
    border-color: ${({ theme, colorToken }) => theme[colorToken]};
  }

  & [title] {
    cursor: help;

    & span {
      padding: 4px;
      color: ${({ theme }) => theme.secondary4};
    }
  }
`;

export default Metric;
