import { CustomAccordion } from '~/components/molecules';
import { TextContent, BoxAdaptive, LinkText } from '~/components/atoms';
import mainMenuItems from '~/__fixtures__/main-menu-items';

const item = mainMenuItems[2];

export default {
  title: 'Molecules/accordion',
};

export const Default = () => (
  <BoxAdaptive p="8px 16px">
    <CustomAccordion
      items={[
        {
          title: (
            <TextContent fontSize={{ _: 2, xm: 2 }} mr={{ _: 2, sm: 5 }}>
              {item.title.en}
            </TextContent>
          ),
          content: (
            <BoxAdaptive mt="8px">
              {item.content.map(({ title, link }) => (
                <BoxAdaptive py="8px" ml="18px" key={title + link}>
                  <LinkText href={link} currentColor undecorated>
                    {title.en}
                  </LinkText>
                </BoxAdaptive>
              ))}
            </BoxAdaptive>
          ),
        },
      ]}
    />
  </BoxAdaptive>
);

Default.storyName = 'default';
