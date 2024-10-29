export type EffectCondition = (domNode: any) => boolean;

export type Effect = (domNode: any) => void;

export type EffectHandler = [
  EffectCondition,
  Effect
];
