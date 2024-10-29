const backstop = require('backstopjs');
const config = require('./backstop.config');

const reference = async () => {
  await backstop('reference', { config });
};

const test = async () => {
  await backstop('test', { config });
};

const report = async () => {
  await backstop('openReport', { config });
};

const approve = async () => {
  await backstop('approve', { config });
};

const run = async () => {
  await reference();
  await test();
  await report();
};

run();

module.exports = {
  reference,
  test,
  report,
  approve,
  run
};
