import { Flex } from '@semcore/flex-box';
import { Text } from '@semcore/typography';
import Flags from '@semcore/flags';
import Link from '@semcore/link';

import reportDate from '~/components/templates/most-visited-websites/constants/report-date';
import { sendAnalyticEvent } from '~/analytics';

interface Props {
  url?: string;
}

const Wrap = ({ children }) => (
  <Flex alignItems="center">
    <Text tag="div" size={300} fontWeight={700} color="gray60">
      {children}
      ,&nbsp;
      {reportDate.monthWithYear}
    </Text>
  </Flex>
);

const CountryLabel: React.FC<Props> = ({ url }): JSX.Element => {
  if (url) {
    return (
      <Wrap>
        <Link
          href={url}
          target="_blank"
          onClick={() => sendAnalyticEvent('click-link-us-top-websites')}
        >
          <Link.Addon position="relative" bottom="1px" mr={2}>
            <Flags iso2="us" />
          </Link.Addon>
          <Link.Text>
            United States
          </Link.Text>
        </Link>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <Flags iso2="us" mr={2} />
      United States
    </Wrap>
  );
};

export default CountryLabel;
