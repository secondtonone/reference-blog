import renderer from 'react-test-renderer';
import Link from 'next/link';
import Container from './container';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{code}</span>);

describe('Match snapshots Container', () => {
  it('with heading', () => {
    const tree = renderer.create(
      <Container
        heading="Heading"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with caption', () => {
    const tree = renderer.create(
      <Container
        heading="Heading"
        caption="We can't find the page you're looking for."
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with content', () => {
    const tree = renderer.create(
      <Container
        heading="Heading"
        caption="We can't find the page you're looking for."
      >
        You can visit our&nbsp;
        <Link href="/blog">
          <a data-test="error-link-main">homepage</a>
        </Link>
        {' '}
        or contact our
        {' '}
        <Link href="https://www.example.com/company/contacts/">
          <a data-test="error-link-support" target="_blank">support team</a>
        </Link>
        .
      </Container>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
