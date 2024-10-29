interface BlocksViewModel {
  articleContent: {
    code: 'article-content',
    itemId: number,
    enabled: true
  },
  subscriptionForm?: {
    code: 'subscription-form',
    itemId: number,
    enabled: boolean
  },
  topArticles: {
    code: 'top-articles',
    itemId: number,
    enabled: boolean,
    value: number[]
  }
}

export default BlocksViewModel;
