import renderer from 'react-test-renderer';
import PromoWidget from '.';

import { BoxAdaptive, TextContent, LinkText } from '~/components/atoms';
import fixtureEbook from '~/__fixtures__/ebook';

describe('Match snapshots PodcastWidget', () => {
  const {
    title, description, updatedAt, downloads, previewUrl, slug
  } = fixtureEbook;

  const urlToEbooks = 'https://www.example.com/ebooks/';

  it('default', () => {
    const tree = renderer.create(
      <PromoWidget.Container
        data-test="ebook"
        title={title}
        label="New Ebook"
        body={description}
        date={updatedAt}
        image={(
          <PromoWidget.Image
            width={{ _: 95, xm: 95, sm: 195 }}
            height={{ _: 134, xm: 134, sm: 276 }}
            display={{ _: 'inline-flex' }}
            alt={title}
            link={`${urlToEbooks}${slug}`}
            image={previewUrl}
            data-test="ebook-preview-url"
          />
        )}
        headerContent={(
          <TextContent level={0} ml={{ xm: 6 }} mt={{ _: 2, xm: 0 }} data-test="ebook-downloads">
            {downloads}
            {' '}
            downloads
          </TextContent>
        )}
        footerContent={(
          <BoxAdaptive pt={{ _: 20 }} display="flex">
            <LinkText href={`${urlToEbooks}${slug}`} currentColor>View more</LinkText>
          </BoxAdaptive>
        )}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
