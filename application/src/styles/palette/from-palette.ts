import { Groups, GroupsTokens, ThemeNames } from './types';
import elements from './elements';
import variants from './variants';

type Theme = {
  name: ThemeNames
}

export default function fromPalette<T extends Theme & GroupsTokens>(groups: Groups, index: number)
  : GroupsTokens & Theme {
  const theme = {
    name: variants[index] as ThemeNames,
  } as T;

  groups.forEach((group) => {
    elements(group).forEach(([token, ...variations]) => {
      const [, code] = variations[index] ? variations[index] : variations[0];
      theme[token] = code;
    });
  });

  return theme;
}
