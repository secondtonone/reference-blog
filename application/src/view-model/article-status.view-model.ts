enum StatusName {
  'draft',
  'editorsReview',
  'authorsReview',
  'published',
  'rejected',
  'waitingForReview'
}

type ArticleStatusViewModel = keyof typeof StatusName;

export default ArticleStatusViewModel;
