import styled from 'styled-components';
import { sm } from '~/styles/scheme/breakpoints';
import {
  BoxAdaptive, TextContent
} from '~/components/atoms';
import Popup from '~/enums/popup';
import { sendAnalyticEvent } from '~/analytics';
import { usePopupActionContext, useSubdomainContext } from '~/hooks';

import serviceMenuData from './service-menu-data';

interface Props {
  hideSubscribe?: boolean
}

const menuServices: Array<{
  popupName: Popup,
  dataTest: string,
  ariaLabel: string,
  analytics: Parameters<typeof sendAnalyticEvent>[0]
}> = [
  {
    popupName: Popup.SUBSCRIBE,
    dataTest: 'subscribe-popup-open',
    ariaLabel: 'Subscribe',
    analytics: 'menu-sub-subscription'
  }];

const ServiceMenu: React.FC<Props> = ({ hideSubscribe }) => {
  const { setPopup } = usePopupActionContext();
  const { language = 'en' } = useSubdomainContext();
  const { title } = serviceMenuData[language];

  return (
    <>
      {menuServices.map(({
        popupName,
        dataTest,
        ariaLabel,
        analytics
      }) => (
        !hideSubscribe && (
        <li key={`service-menu-${title}`}>
          <SubscribeName>
            <button
              type="button"
              aria-label={ariaLabel}
              data-test={dataTest}
              onClick={() => {
                setPopup(popupName);
                sendAnalyticEvent(analytics);
              }}
            >
              <TextContent
                fontSize={2}
                lineHeight={1.6}
                fontWeight="normal"
              >
                {title}
              </TextContent>
            </button>
          </SubscribeName>
          <MobileSubscribeName
            accentFont
            fontWeight={{ _: 'accent' }}
            fontSize={{ _: 3, sm: 11, md: 3 }}
            mr={{ _: 2, sm: 5, md: 0 }}
          >
            <button
              type="button"
              aria-label={ariaLabel}
              data-test={dataTest}
              onClick={() => {
                setPopup(popupName);
                sendAnalyticEvent(analytics);
              }}
            >
              {title}
            </button>
          </MobileSubscribeName>
        </li>
        )
      ))}
    </>
  );
};

const SubscribeName = styled(BoxAdaptive)`
  & button {
    background: ${({ theme }) => theme.orangeBrand};
    color: ${({ theme }) => theme.white};
    padding: 7px 16px;
    border-radius: 10px;
    margin-top: -18px;
    border: 0;
    position: relative;
    display: flex;
    align-items: center;
    top: 8px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.orangeDark};
    }

    &:active {
      background: ${({ theme }) => theme.orangeDarkest};
    }
  }
  @media (max-width: ${sm}) {
    display: none;
  }
`;

const MobileSubscribeName = styled(BoxAdaptive)`
  display: none;

  & button {
    background: transparent;
    color: inherit;
    font-weight: inherit;
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
  }

  @media (max-width: ${sm}) {
    display: inline-block;
  }
`;

export default ServiceMenu;
