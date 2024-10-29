import { useContext } from 'react';
import { PopupContext } from '~/contexts/popup-context';

const usePopupContext = () => useContext(PopupContext);

export default usePopupContext;
