import { TextContent, BoxAdaptive } from '~/components/atoms';
import { getScheme } from '~/styles/scheme';

interface Props {
  text?: string
}

const lightTheme = getScheme();

const BannerLabel: React.FC<Props> = ({
  text = 'Ads'
}) => (
  <BoxAdaptive
    padding="12px 18px"
    position="absolute"
    right={0}
  >
    <TextContent
      color={lightTheme.opposed}
      opacity={0.5}
    >
      {text}
    </TextContent>
  </BoxAdaptive>
);

export default BannerLabel;
