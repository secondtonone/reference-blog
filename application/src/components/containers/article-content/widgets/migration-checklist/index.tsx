import { useEffect, useState } from 'react';
import { BoxAdaptive } from '~/components/atoms';
import { DEFAULT_HEIGHT } from './default-height';
import MigrationCheckList from './migration-checklist';

const CheckList: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <BoxAdaptive
      display="inline-block"
      minHeight={{
        _: 182,
        lg: DEFAULT_HEIGHT
      }}
      width={{
        _: '100%',
        lg: 1010
      }}
    >
      <MigrationCheckList active={active} />
    </BoxAdaptive>
  );
};

export default CheckList;
