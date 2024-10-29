import renderer from 'react-test-renderer';
import { nanoid } from 'nanoid';
import Accordion from '.';
import {
  TextContent,
  LinkText,
  BoxAdaptive
} from '~/components/atoms';
import mainMenuItems from '~/__fixtures__/main-menu-items';

jest.mock('~/components/containers/svg-icon', () => ({ code }) => <span>{`svg-icon-${code}`}</span>);

const item = mainMenuItems[2];

describe('Accordion match snapshots', () => {
  it('default', () => {
    const component = renderer.create(
      <Accordion
        items={[{
          title:
  <TextContent
    fontSize={{ _: 2, xm: 2 }}
    mr={{ _: 2, sm: 5 }}
  >
    {item.title.en}
  </TextContent>,
          content:
  <BoxAdaptive mt="8px">
    {item.content.map(({ title, link }) => (
      <BoxAdaptive py="8px" ml="18px" key={nanoid()}>
        <LinkText
          href={link}
          currentColor
          undecorated
        >
          {title.en}
        </LinkText>
      </BoxAdaptive>
    ))}
    ]
  </BoxAdaptive>
        }]}
      />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
