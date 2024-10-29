import { useState } from 'react';

import { TextareaField } from '~/components/atoms';

export default {
  title: 'Molecules/textarea field',
};

export const Empty = () => {
  const [value, setValue] = useState('');

  return (
    <TextareaField
      error="Fill me"
      placeholder="Any text"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      w={300}
    />
  );
};

Empty.storyName = 'empty';

export const With4MinAnd10MaxRows = () => {
  const [value, setValue] = useState('');

  return (
    <TextareaField
      error="i'm Fat!"
      minRows={4}
      maxRows={10}
      placeholder="Any text"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      w={500}
    />
  );
};

With4MinAnd10MaxRows.storyName = 'with 4 min and 10 max rows';

export const Resizable = () => {
  const [value, setValue] = useState('');

  return (
    <TextareaField
      error="Size it"
      minRows={4}
      maxRows={10}
      resize="auto"
      placeholder="Any text"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      w={500}
    />
  );
};

Resizable.storyName = 'resizable';
