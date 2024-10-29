import { useState } from 'react';

import { Flex } from '@semcore/flex-box';
import { InputCheckbox } from '~/components/atoms';

export default {
  title: 'Atoms/input checkbox',
};

export const Empty = () => {
  const [checked, setChecked] = useState(false);

  return <InputCheckbox checked={checked} onCheckboxChange={setChecked} />;
};

Empty.storyName = 'empty';

export const Checked = () => {
  const [checked, setChecked] = useState(true);

  return <InputCheckbox checked={checked} onCheckboxChange={setChecked} />;
};

Checked.storyName = 'checked';

export const SuccessChecked = () => {
  const [checked, setChecked] = useState(true);

  return <InputCheckbox checked={checked} onCheckboxChange={setChecked} variant="success" />;
};

SuccessChecked.storyName = 'success checked';

export const DisabledChecked = () => {
  const [checked, setChecked] = useState(true);
  const checkboxLabel = 'I consent to example using my contact data for newsletter purposes';

  return (
    <InputCheckbox checked={checked} disabled onCheckboxChange={setChecked} label={checkboxLabel} />
  );
};

DisabledChecked.storyName = 'disabled checked';

export const WithLabelSuccess = () => {
  const [checked, setChecked] = useState(true);
  const checkboxLabel = 'Almost I consent to example using my contact data for newsletter purposes';

  return (
    <InputCheckbox
      checked={checked}
      onCheckboxChange={setChecked}
      label={checkboxLabel}
      variant="success"
    />
  );
};

WithLabelSuccess.storyName = 'with label success';

export const WithLabelDisabled = () => {
  const [checked, setChecked] = useState(false);
  const checkboxLabel = 'I consent to example using my contact data for newsletter purposes';

  return (
    <InputCheckbox checked={checked} disabled onCheckboxChange={setChecked} label={checkboxLabel} />
  );
};

WithLabelDisabled.storyName = 'with label disabled';

export const WithDoubleItems = () => {
  const [checked, setChecked] = useState(true);
  const checkboxLabel = 'I consent to example using my contact data for newsletter purposes';

  return (
    <Flex direction="column">
      <InputCheckbox
        checked={checked}
        onCheckboxChange={setChecked}
        label={checkboxLabel}
        variant="success"
      />
      <InputCheckbox
        checked={false}
        disabled
        onCheckboxChange={setChecked}
        label={checkboxLabel}
        variant="success"
      />
    </Flex>
  );
};

WithDoubleItems.storyName = 'with double items';

export const WithWidthLimit280 = () => {
  const checkboxLabel = 'I consent to example using my contact data for newsletter purposes';

  return <InputCheckbox label={checkboxLabel} maxWidth={280} />;
};

WithWidthLimit280.storyName = 'with width limit 280';

export const WithWidthLimit420 = () => {
  const checkboxLabel = `
      I consent to example using my contact data for newsletter purposes.
      I consent to example using my contact data for newsletter purposes.
      I consent to example using my contact data for newsletter purposes.
    `;

  return <InputCheckbox label={checkboxLabel} maxWidth={420} />;
};

WithWidthLimit420.storyName = 'with width limit 420';
