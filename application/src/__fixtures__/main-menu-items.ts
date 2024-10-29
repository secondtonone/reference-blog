import { SubdomainsViewModel } from '~/view-model';
import navigation from '~/externals/navigation.json';

type Translation = {
  [ key in SubdomainsViewModel ]?: string;
};

export interface Item {
  title: Translation
  link?: string
  text?: Translation
  horizontal?: boolean
  button?: string
  content?: Item[]
}

export type IMainMenuItems = Item[];

const mainMenuItems = navigation.header as IMainMenuItems;

export default mainMenuItems;
