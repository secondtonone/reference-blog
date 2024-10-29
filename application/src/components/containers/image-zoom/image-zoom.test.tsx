/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import ImageZoom from '.';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-icon'));

const src = 'https://static.example.com/blog/uploads/media/a9/0e/a90e879159e862d0b3e49c792352520e/image.png';

describe('Match snapshots ImageZoom', () => {
  it('default', () => {
    const { asFragment } = render(
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <ImageZoom alt="Test" src={src} width={660}>{(onClick) => (<img alt="Test" src={src} onClick={onClick} />)}</ImageZoom>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
