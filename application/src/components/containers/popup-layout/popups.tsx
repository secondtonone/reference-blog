import popupName from '~/enums/popup';
import SubscriptionPopup from '~/components/organisms/subscription-popup';

interface Popups {
  [key: string]: () => React.ReactNode
}

const popups: Popups = {
  [popupName.SUBSCRIBE]: () => <SubscriptionPopup />
};

export default popups;
