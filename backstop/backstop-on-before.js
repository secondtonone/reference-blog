module.exports = async (page) => {
  await page.setDefaultNavigationTimeout(0);
};
