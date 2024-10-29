/**
 * @jest-environment jsdom
 */
import React from 'react';
import renderer from 'react-test-renderer';
import PagePopup from '.';

jest.mock('~/components/containers/svg-icon', () => jest.fn().mockReturnValue('svg-icon'));

jest.mock('~/hooks/use-render', () => jest.fn(() => ({
  isRendered: true,
  turnOut: () => ({})
})));

describe('Match snapshots PagePopup', () => {
  it('default', () => {
    const tree = renderer.create(
      <PagePopup name="content">{() => <>Content</>}</PagePopup>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
