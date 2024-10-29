import { SubdomainsViewModel } from '~/view-model';

export type TypeSubscriptionMarketoId = 1066 | 1069 | 1070 | 1071 | 1072 | 1079

const SubscriptionMarketoId: { [key in SubdomainsViewModel]: TypeSubscriptionMarketoId} = {
  en: 1066,
  es: 1069,
  fr: 1070,
  it: 1071,
  pt: 1072,
  de: 1079
};

export default SubscriptionMarketoId;
