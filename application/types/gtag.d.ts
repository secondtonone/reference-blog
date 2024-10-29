declare function gtag(params: {
  event: string,
  eventCategory: string,
  eventAction: string,
  eventLabel: string,
  eventValue?: number | null
  nonInteraction: boolean
  _clear?: boolean
}): void;
