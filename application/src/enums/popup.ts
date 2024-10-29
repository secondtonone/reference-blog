enum Popup {
  ALL_TAGS = 'ALL_TAGS',
  SUBSCRIBE = 'SUBSCRIBE',
  FEEDBACK = 'FEEDBACK'
}

export type PopupName = keyof typeof Popup;

export default Popup;
