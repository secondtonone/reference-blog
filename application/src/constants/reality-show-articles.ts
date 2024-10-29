const realityShowArticles = [
  {
    name: 'Boosting Bakery’s SEO - 8 Steps',
    ids: [5916, 5915, 5914, 5913, 5900, 5819, 5818, 5795, 5739],
  },
  {
    name: 'Bakery’s Blog Creation and Optimization',
    ids: [5917, 6097, 6098, 6343, 6419, 6439],
  },
];

export const seoRealityIds = realityShowArticles
  .reduce((acc, { ids }) => [...acc, ...ids], [] as number[]);

export default realityShowArticles;
