import { useState } from 'react';

const useFocus = () => {
  const [focused, setFocused] = useState(false);

  return {
    focused,
    setFocused
  };
};

export default useFocus;
