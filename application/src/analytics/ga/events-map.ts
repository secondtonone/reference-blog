import analyticEvents from './analytic-events';
import { EventsMap } from './types';

const events: EventsMap = analyticEvents.reduce((result, item) => {
  const { name, ...params } = item;
  result[name] = { ...params };
  return result;
}, {} as EventsMap);

export default events;
