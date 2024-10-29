import renderer from 'react-test-renderer';
import Link from 'next/link';
import ErrorNotFound from '.';

describe('Match snapshots ErrorNotFound', () => {
  it('with heading', () => {
    const tree = renderer.create(
      <ErrorNotFound
        heading="Heading"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with caption', () => {
    const tree = renderer.create(
      <ErrorNotFound
        heading="Heading"
        caption="We can't find the page you're looking for."
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with content', () => {
    const tree = renderer.create(
      <ErrorNotFound
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
      </ErrorNotFound>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
