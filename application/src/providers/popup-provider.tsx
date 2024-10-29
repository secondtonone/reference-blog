import { useState, useMemo } from 'react';
import { PopupContext, PopupActionContext } from '~/contexts/popup-context';
import Popup from '~/enums/popup';

const PopupProvider: React.FC = ({ children }) => {
  const [currentPopup, setPopup] = useState<Popup | null>(null);

  const handlers = useMemo(() => ({
    setPopup,
    hide: () => setPopup(null)
  }), [currentPopup]);

  const value = useMemo(() => ({
    currentPopup
  }), [currentPopup]);

  return (
    <PopupContext.Provider
      value={value}
    >
      <PopupActionContext.Provider
        value={handlers}
      >
        {children}
      </PopupActionContext.Provider>
    </PopupContext.Provider>
  );
};

export default PopupProvider;
