import analyticEvents from './analytic-events';

export type AnalyticEvents = typeof analyticEvents[number]['name'];

export type AnalyticEvent = {
  category: string,
  action?: string | null,
  label?: string | null,
  value?: number | null,
  nonInteraction?: boolean | null
};

export type EventsMap = {
  [event in AnalyticEvents]: AnalyticEvent
}
