import React from 'react';
import popups from './popups';
import { PopupName } from '~/enums/popup';

interface PopupLayoutProps {
  isShifted?: boolean,
  code: PopupName
}

const PopupLayout: React.FC<PopupLayoutProps> = ({ isShifted, code }) => {
  const popupCode = popups[code];

  if (!popupCode) {
    return null;
  }

  return (
    <div data-popup-layout={isShifted ? 'shifted' : 'page'}>
      {popupCode()}
    </div>
  );
};

export default PopupLayout;
