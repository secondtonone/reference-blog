import { useState } from 'react';

import SvgIcon from '~/components/containers/svg-icon';
import { CustomSwitch } from '~/components/molecules';

export default {
  title: 'Molecules/custom switch',
};

export const Off = () => {
  const [checked, setChecked] = useState(false);

  return <CustomSwitch checked={checked} onChange={(value) => setChecked(value)} />;
};

Off.storyName = 'off';

export const On = () => {
  const [checked, setChecked] = useState(true);

  return <CustomSwitch checked={checked} onChange={(value) => setChecked(value)} />;
};

On.storyName = 'on';

export const WithAddonAfter = () => {
  const [checked, setChecked] = useState(true);

  return (
    <CustomSwitch checked={checked} onChange={(value) => setChecked(value)} after="Switcher" />
  );
};

WithAddonAfter.storyName = 'with addon after';

export const DisabledChecked = () => {
  const [checked, setChecked] = useState(true);

  return (
    <CustomSwitch
      checked={checked}
      disabled
      onChange={(value) => setChecked(value)}
      before="Switcher"
    />
  );
};

DisabledChecked.storyName = 'disabled checked';

export const WithIconOnSlider = () => {
  const [checked, setChecked] = useState(true);

  return (
    <CustomSwitch
      checked={checked}
      onChange={(value) => setChecked(value)}
      slider={(value) => value && <SvgIcon code="moon" />}
    />
  );
};

WithIconOnSlider.storyName = 'with icon on slider';
