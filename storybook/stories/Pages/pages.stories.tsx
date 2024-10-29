export default {
  title: 'Pages/page',
};

export const Main = () => (
  <a href="https://front-prod.k1.example.net/blog/" target="_blank" rel="noreferrer">
    <b>Main page</b> /blog/
  </a>
);

Main.storyName = 'main';

export const Category = () => (
  <a
    href="https://front-prod.k1.example.net/blog/category/seo/"
    target="_blank"
    rel="noreferrer"
  >
    <b>Category level 1</b> /blog/category/seo/
  </a>
);

Category.storyName = 'category';

export const Subcategory = () => (
  <a href=" https://front-prod.k1.example.net/blog/category/advanced-seo/" target="_blank">
    <b>Sub-category level 2</b> /blog/category/advanced-seo/
  </a>
);

Subcategory.storyName = 'subcategory';

export const User = () => (
  <a href="https://front-prod.k1.example.net/user/146886433/" target="_blank" rel="noreferrer">
    <b>User</b> /user/146886433/
  </a>
);

User.storyName = 'user';

export const Subscribe = () => (
  <a
    href="https://front-prod.k1.example.net/blog/?popup=subscription"
    target="_blank"
    rel="noreferrer"
  >
    <b>Subscribe</b> /blog/?popup=subscription
  </a>
);

Subscribe.storyName = 'subscribe';

export const AllTags = () => (
  <a href="https://front-prod.k1.example.net/blog/all-tags/" target="_blank" rel="noreferrer">
    <b>All tags</b> /blog/all-tags/
  </a>
);

AllTags.storyName = 'all-tags';

export const _404 = () => (
  <a href="https://front-prod.k1.example.net/blog/404/" target="_blank" rel="noreferrer">
    <b>404</b> /blog/404/
  </a>
);

export const ArticleBase = () => (
  <a
    href="https://front-preprod.k1.example.net/blog/subdomain-vs-subdirectory/"
    target="_blank"
    rel="noreferrer"
  >
    <b>Article base</b> /blog/subdomain-vs-subdirectory/
  </a>
);

ArticleBase.storyName = 'article base';
