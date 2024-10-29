/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import PromoWidgetImage, { PromoWidgetImageProps as IPromoWidgetImageProps } from './promo-widget-image';

const PromoWidgetImageProps:IPromoWidgetImageProps = {
  image: 'https://static.example.com/blog-next-static/banners/join-discussion.png',
  link: 'https://www.example.com/webinars/2022-trends-in-content-marketing-expert-discussion',
  alt: 'Join an interactive expert discussion with example',
};

const image = 'https://static.example.com/blogxt-static/banners/join-discussion.webp';

describe('Match snapshots PodcastWidgetImage', () => {
  it('default snapshots', () => {
    const { asFragment } = render(<PromoWidgetImage {...PromoWidgetImageProps} />, {});

    expect(asFragment()).toMatchSnapshot();
  });

  it('snapshots with webp', () => {
    const { asFragment } = render((
      <PromoWidgetImage {...{
        ...PromoWidgetImageProps,
        image,
      }}
      />
    ), {});

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('PodcastWidgetImage', () => {
  it('default', () => {
    const { getByRole, queryByRole } = render(<PromoWidgetImage {...PromoWidgetImageProps} />, {});

    expect(getByRole('img')).toBeInTheDocument();
    expect(queryByRole('picture')).toBeNull();
  });

  it('with webp', () => {
    const { getByRole, getByTestId } = render(<PromoWidgetImage {...{
      ...PromoWidgetImageProps,
      image,
    }}
    />, {});

    const sourceElement = getByTestId('promo-widget-image-source');

    expect(getByRole('img')).toBeInTheDocument();
    expect(sourceElement).toBeInTheDocument();
    expect(sourceElement).toHaveAttribute('type', 'image/webp');
    expect(sourceElement).toHaveAttribute('data-srcset', image);
  });
});
