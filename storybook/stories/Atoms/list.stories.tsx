import { List, BoxAdaptive } from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';

const suggestions = [
  'Ensure words are spelled correctly.',
  'Try rephrasing keywords or using synonyms.',
  'If you can learn all of the little ways to optimize them, you have the potential to see a significant improvement in your website’s organic search visibility.',
  'Make your queries as concise as possible.',
  'Determine the purpose of your study.',
  'Look at your industry’s outlook.',
  'Pinpoint target customers.',
  'Compare your competition.',
  'Gather additional data.',
  'Analyze your findings.',
  'Want to improve your website’s SEO? One of the commonly overlooked aspects is title tag optimization.',
];

export default {
  title: 'Atoms/lists',
};

export const Unodered = () => (
  <BoxAdaptive px={20}>
    <List data-test="suggestions-list" items={suggestions} />
  </BoxAdaptive>
);

Unodered.storyName = 'unodered';

export const Internal = () => (
  <BoxAdaptive p={20} bg="#4D192F">
    <List data-test="suggestions-list" items={suggestions} internal />
  </BoxAdaptive>
);

Internal.storyName = 'internal';

export const CustomBullet = () => (
  <BoxAdaptive px={20}>
    <List
      bullet={<SvgIcon code="bullet" size={[8, 8]} />}
      data-test="suggestions-list"
      items={suggestions}
    />
  </BoxAdaptive>
);

CustomBullet.storyName = 'custom bullet';

export const Odered = () => (
  <BoxAdaptive px={20}>
    <List fromIdx={50} tag="ol" data-test="suggestions-list" items={suggestions} />
  </BoxAdaptive>
);

Odered.storyName = 'odered';
