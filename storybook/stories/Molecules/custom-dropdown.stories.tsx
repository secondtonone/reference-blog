import CustomDropdown from '~/components/molecules/custom-dropdown';
import { LinkText } from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';
import mainMenuItems from '~/__fixtures__/main-menu-items';

const item = mainMenuItems[2];

export default {
  title: 'Molecules/dropdown',
};

export const Default = () => (
  <CustomDropdown
    offset={[0, 14]}
    trigger={
      <div style={{ padding: '8px 16px' }}>
        <SvgIcon
          code="up"
          style={{
            marginRight: '8px',
            display: 'inline-block',
            transform: 'rotate(180deg) scale(0.8) translateY(-15%)',
          }}
        />
        {item.title.en}
      </div>
    }
    items={item.content.map(({ link, title }) => (
      <LinkText href={link} currentColor undecorated>
        {title.en}
      </LinkText>
    ))}
  />
);

Default.storyName = 'default';
