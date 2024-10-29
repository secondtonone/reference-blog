import { useState } from 'react';

import { InputField } from '~/components/atoms';

export default {
  title: 'Molecules/input field',
};

export const Empty = () => {
  const [value, setValue] = useState('');

  return (
    <InputField
      error="Fill me"
      placeholder="Field"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      w={300}
    />
  );
};

Empty.storyName = 'empty';

export const WithError = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  return (
    <InputField
      w={300}
      placeholder="Field"
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        setError('Dont type');
      }}
      error={error}
    />
  );
};

WithError.storyName = 'with error';

export const Disabled = () => {
  const [value, setValue] = useState('');

  return (
    <InputField
      placeholder="Field"
      disabled
      value={value}
      onChange={(newValue) => setValue(newValue)}
      w={300}
    />
  );
};

Disabled.storyName = 'disabled';

export const DisabledWithValue = () => {
  const [value, setValue] = useState('Value');

  return (
    <InputField
      placeholder="Field"
      disabled
      value={value}
      onChange={(newValue) => setValue(newValue)}
      w={300}
    />
  );
};

DisabledWithValue.storyName = 'disabled with value';

export const InternalUnaffectedByTheme = () => {
  const [value, setValue] = useState('');
  return (
    <div style={{ padding: '20px', background: '#111317' }}>
      <InputField
        error="I'm on black"
        placeholder="Field"
        value={value}
        internal
        onChange={(newValue) => setValue(newValue)}
        w={300}
      />
    </div>
  );
};

InternalUnaffectedByTheme.storyName = 'internal, unaffected by theme';
