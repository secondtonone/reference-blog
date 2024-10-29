import {
  BlocksViewModel, PageViewModel
} from '~/view-model';

interface MainPageViewModel {
  title: string,
  type: 'main',
  template: 'main-default',
  preview: string,
  altSocialImage: string,
  hidePreviewImage?: number,
  metaTitle: string,
  metaDescription: string,
  schemaOrg: string,
  blocks: BlocksViewModel,
  critical: {
    'top-articles': PageViewModel[]
  }
}

export default MainPageViewModel;
