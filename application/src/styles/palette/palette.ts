import {
  MainGroup,
  IllustGroup,
  GreysGroup,
  SupportGroup,
  Groups,
  WidgetGroup
} from './types';

const mainGroup: MainGroup = [
  ['purpleBrand', ['Purple Brand', '#421983'], ['', '#663BA3']],
  ['orangeBrand', ['Orange Brand', '#FF642D'], ['', '#FF8157']],
  ['yellow', ['Yellow', '#FFC600'], ['', '#FFD44C']],
  ['error', ['Red (Error)', '#F51A38'], ['', '#FA7588']],
  ['success', ['Green (Check)', '#00BA96'], ['', '#66D7C1']],
  ['topic', ['Topic', '#FFC600'], ['', '#FFD44C']],
];

const illustGroup: IllustGroup = [
  ['purpleIllust', ['Purple (Illustration)', '#B880FF'], ['', '#A374DB']],
  ['orangeIllust', ['Orange (Illustration)', '#FF642D'], ['', '#E55C32']],
  ['yellowIllust', ['Yellow (Illustration)', '#FFE84D'], ['', '#D9C61C']],
  ['greenIllust', ['Green (Illustration)', '#45E0A8'], ['', '#24B58E']],
  ['blueIllust', ['Blue (Illustration)', '#6EDBFF'], ['', '#41AAD1']],
  ['orangePaleIllust', ['Orange Pale (Illustration)', '#FFB26E'], ['', '#DB8F56']],
  ['redPaleIllust', ['Red Pale (Illustration)', '#FF788F'], ['', '#DE7C95']],
  ['greenGrassIllust', ['Green Grass (Illustration)', '#C7FA73'], ['', '#9FD13B']],
  ['pinkIllust', ['Pink (Illustration) - Alias Red Pale', '#FF788F'], ['', '#DE7C95']],
];

const greysGroup: GreysGroup = [
  ['secondary5', ['Dark Grey', '#3E424B'], ['87% White', '#E1E1E2']],
  ['secondary4', ['Grey (Text)', '#898D9A'], ['60% White', '#898D9A']],
  ['secondary3', ['Grey (Stroke)', '#D1D4DB'], ['38% White', '#6F7176']],
  ['secondary2', ['Grey', '#E9EBEF'], ['Stroke (16% White)', '#3C3F45']],
  ['secondary1', ['Light Grey', '#F6F7F8'], ['Grey (8% White)', '#2A2C34']],
];

const supportGroup: SupportGroup = [
  ['background', ['Background', '#FFFFFF'], ['', '#21232B']],
  ['opposed', ['Opposed', '#171A22'], ['', '#31195D']],
  ['white', ['White', '#FFFFFF']],
  ['black', ['Black', '#000000']],
  ['newGrey', ['New Grey', '#21232B']],
  ['textColor', ['Black', '#000000'], ['White', '#FFFFFF']],
  ['orangeDark', ['Orange Dark', '#B33300']],
  ['orangeDarkest', ['Orange Darkest', '#7E1E00']],
  ['orangeBackground', ['Orange BG', '#4D192F']],
];

const widgetBackgroundGroup: WidgetGroup = [
  ['blue', ['Blue', '#C9EDFF']],
  ['green', ['Green', '#EDFFA8']],
  ['greenLight', ['GreenLight', '#BAFFD6']],
  ['yellowPD', ['Yellow (Paris Daisy)', '#FFE84D']]
];

const group: Groups = [mainGroup, illustGroup, greysGroup, supportGroup, widgetBackgroundGroup];

export default group;
