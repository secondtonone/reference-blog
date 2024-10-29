import { IllustGroupTokens } from '~/styles/palette';
import { SubdomainsViewModel } from '~/view-model';

export interface IHit {
  id: string,
  source: {
    extra: {
      background?: keyof IllustGroupTokens | 'orangeIllust',
    },
    url: string,
    language: SubdomainsViewModel,
    title: string,
    description: string,
    content: string,
    'imageUrl': string,
    'altImage': string,
    'category': {
      'name': string,
      'url': string,
    },
    'author': {
      'name': string,
      'url': string
    },
    'publishedAt': number
  },
  'score': number
}

const transformHitToArticle = (hit: IHit) => {
  const {
    id,
    source: {
      extra = {},
      title = '',
      description: preview = '',
      imageUrl: previewImage,
      altImage: altPreviewImage,
      category,
      url,
      author,
      publishedAt,
    },
  } = hit;

  return {
    id,
    url,
    title,
    preview,
    previewImage,
    altPreviewImage,
    publishedAt,
    author,
    category,
    background: extra?.background || null,
  };
};

export default transformHitToArticle;
