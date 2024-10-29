import {
  WidthProps, HeightProps, TopProps, RightProps, BottomProps, LeftProps
} from 'styled-system';

import { BannerColor } from '~/styles/palette';
import { AnalyticEvents } from '~/analytics';

import ImageBySizes from '~/view-model/image-by-sizes';

interface PromoViewModel {
  title: string,
  body: string,
  link: string,
  textLimit?: number
  background?: BannerColor,
  image?: string
  textLink?: string
  headerContent?: React.ReactNode
  analyticEventOnShown?: AnalyticEvents
  analyticEventOnClick?: AnalyticEvents
  label?: string
  labelBackgroundColor?: BannerColor
  labelColor?: BannerColor
  titleColor?: BannerColor
  bodyColor?: BannerColor
  textContentWidth?: WidthProps,
  imagesBySizes?: ImageBySizes,
  isImageCorner?: boolean,
  imageWidth?: WidthProps,
  imageHeight?: HeightProps,
  imgTop?: TopProps,
  imgRight?: RightProps,
  imgLeft?: LeftProps,
  imgBottom?: BottomProps
}

export default PromoViewModel;
