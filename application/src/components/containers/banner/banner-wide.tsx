import { BoxAdaptive } from '~/components/atoms';

const BannerWide: React.FC = ({
  children
}) => (
  <BoxAdaptive
    width="100%"
    height={376}
    backgroundColor="#F5F5F5"
    position="relative"
    data-test="banner-wide"
  >
    {children}
  </BoxAdaptive>
);

export default BannerWide;
