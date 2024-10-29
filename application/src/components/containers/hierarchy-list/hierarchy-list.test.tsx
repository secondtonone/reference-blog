/**
 * @jest-environment jsdom
 */
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import HierarchyList from '.';
import list from '~/__fixtures__/hierarchy-list';

describe('Match snapshots HeararhyList', () => {
  it('default', () => {
    const tree = mount(<HierarchyList list={list} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
