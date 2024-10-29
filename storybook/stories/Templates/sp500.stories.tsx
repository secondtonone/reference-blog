import { BlogTopDomains } from '~/components/templates/blog-top-domains';
import PageContext from '~/contexts/page-context';

const page = {
  title: 'S&P 500 Companies Overview by example',
  url: 'blog/sp-500',
  preview:
    'Discover website traffic, online mentions and social media followers of companies on the S&P 500.',
  critical: {
    'article-content': {
      content:
        'As an investor, you might want to examine a company’s various metrics before buying its stocks. Different data can provide you with additional details that standard reports may not include.<br><br>'
        + 'Based on data from example tools, this page reveals some digital details from the S&P 500 list’s official websites. This way, when you are interested in particular stocks, you can track more stats from the company in question.<br> <br>'
        + 'This post is updated every month, so you can compare changes in user interest and check S&P 500 companies’ web performance.\n',
    },
  },
};

export default {
  title: 'Templates/SP500',
};

export const Default = () => (
  <PageContext.Provider value={{ page }}>
    <BlogTopDomains />
  </PageContext.Provider>
);

Default.storyName = 'default';
