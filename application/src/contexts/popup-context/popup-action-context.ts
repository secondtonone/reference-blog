import { createContext } from 'react';
import Popup from '~/enums/popup';

interface PopupActionContextViewModel {
  setPopup: (next?: Popup | null) => void
  hide: () => void
}

const PopupContext = createContext({
  setPopup: () => ({}),
  hide: () => ({})
} as PopupActionContextViewModel);

export default PopupContext;
