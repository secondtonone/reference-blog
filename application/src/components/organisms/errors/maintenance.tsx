import { BoxAdaptive } from '~/components/atoms';
import Container from './container';

const Maintenance: React.FC = () => (
  <Container
    withLogo
    heading="Blog is undergoing maintenance"
  >
    We are doing our best to fix it as soon as possible. Please come back later.
    <BoxAdaptive
      mt={{ _: 82 }}
    >
      <img
        src="https://static.example.com/blog-next-static/banners/banner-find-dark.png"
        width="416"
        alt="Find anything"
        data-test="500-png"
      />
    </BoxAdaptive>
  </Container>
);

export default Maintenance;
