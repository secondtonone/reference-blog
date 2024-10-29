import { useContext } from 'react';
import { PopupActionContext } from '~/contexts/popup-context';

const usePopupActionContext = () => useContext(PopupActionContext);

export default usePopupActionContext;
