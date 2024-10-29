import { ButtonLink } from '~/components/atoms';

export default {
  title: 'Atoms/button link',
};

export const Default = () => <ButtonLink w={250}>Its Link</ButtonLink>;

Default.storyName = 'default';

export const Disabled = () => (
  <ButtonLink w={250} disabled>
    Its Link
  </ButtonLink>
);

Disabled.storyName = 'disabled';

export const Ghost = () => (
  <ButtonLink use="secondary" w={250}>
    Its Link
  </ButtonLink>
);

Ghost.storyName = 'ghost';

export const GhostBorder = () => (
  <ButtonLink use="secondary" w={250} border>
    Its Link
  </ButtonLink>
);

GhostBorder.storyName = 'ghost border';

export const GhostBorderDisabled = () => (
  <ButtonLink use="secondary" w={250} border disabled>
    Its Link
  </ButtonLink>
);

GhostBorderDisabled.storyName = 'ghost border disabled';

export const WithColorPaletteKey = () =>
  [
    'purpleIllust',
    'orangeIllust',
    'yellowIllust',
    'greenIllust',
    'blueIllust',
    'orangePaleIllust',
    'redPaleIllust',
    'greenGrassIllust',
    'pinkIllust',
  ].map((key) => (
    <>
      <ButtonLink w={250} background={key}>
        Its Link
      </ButtonLink>
      <br />
    </>
  ));

WithColorPaletteKey.storyName = 'with color palette key';
