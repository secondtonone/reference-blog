import { WidgetGroupTokens } from '~/styles/palette';

interface YoutubeViewModel {
  title: string,
  body: string,
  link: string,
  youtube: string,
  background?: keyof WidgetGroupTokens,
  image?: string
}

export default YoutubeViewModel;
