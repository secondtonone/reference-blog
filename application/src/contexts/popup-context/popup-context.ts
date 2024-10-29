import { createContext } from 'react';
import { PopupName } from '~/enums/popup';

interface PopupContextViewModel {
  currentPopup?: PopupName
}

const PopupContext = createContext({
  currentPopup: undefined
} as PopupContextViewModel);

export default PopupContext;
