import { BoxAdaptive } from '~/components/atoms';

const BannerColumn: React.FC = ({
  children
}) => (
  <BoxAdaptive
    width={{ _: '100%' }}
    height={{ _: 380, md: 500 }}
    backgroundColor="#F5F5F5"
    position="relative"
    data-test="post-card-banner"
  >
    {children}
  </BoxAdaptive>
);

export default BannerColumn;
