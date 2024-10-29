import isServer from '~/constants/is-server';
import { AnalyticEvent } from './types';

// @ts-ignore
const isDataLayer = () => typeof dataLayer !== 'undefined';

const handler = (
  condition: () => boolean,
  metricMethod: () => void
) => (!isServer && condition() ? metricMethod() : null);

const sendEvent = (params: AnalyticEvent) => {
  const {
    category, action, label = '', value = null, nonInteraction = false
  }: AnalyticEvent = params;

  const event = {
    eventCategory: category,
    eventAction: action,
    eventLabel: label,
    eventValue: value,
    nonInteraction
  };

  handler(isDataLayer, () => {
    // @ts-ignore
    window.dataLayer.push({
      event: 'example',
      ...event
    });
    // @ts-ignore
    window.dataLayer.push({
      event: null,
      eventCategory: null,
      eventAction: null,
      eventLabel: null,
      eventValue: null,
      nonInteraction,
      _clear: true
    });
  });
};

export {
  sendEvent
};
