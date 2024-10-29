import renderer from 'react-test-renderer';
import Dropdown from '.';
import {
  LinkText
} from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';
import mainMenuItems from '~/__fixtures__/main-menu-items';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{`svg-icon-${code}`}</span>);

const item = mainMenuItems[2];

describe('Dropdown match snapshots', () => {
  it('default', () => {
    const component = renderer.create(
      <Dropdown
        offset={[0, 14]}
        trigger={(
          <>
            <SvgIcon code="up" />
            {item.title.en}
          </>
        )}
        items={item.content.map(({ link, title }) => (
          <LinkText
            href={link}
            currentColor
            undecorated
          >
            {title.en}
          </LinkText>
        ))}
      />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
