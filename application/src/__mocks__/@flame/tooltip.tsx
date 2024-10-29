import React from 'react';

const Tooltip: React.FC<any> = props => {
  const { children } = props;

  return (
    <span>
      {children}
    </span>
  );
};

export default Tooltip;
