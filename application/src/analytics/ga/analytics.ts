import events from './events-map';
import { AnalyticEvents, AnalyticEvent } from './types';
import { sendEvent } from './ga';

const sendAnalyticEvent = (event: AnalyticEvents, params?: Partial<AnalyticEvent>) => {
  const analyticEvent: AnalyticEvent = { ...events[event], ...params };

  sendEvent(analyticEvent);
};

export {
  sendAnalyticEvent
};
