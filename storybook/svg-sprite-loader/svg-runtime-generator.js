const fs = require('fs');
const path = require('path');
const { stringifyRequest } = require('loader-utils');
const { stringifySymbol } = require('svg-sprite-loader/lib/utils');

const runtimeGenerator = ({ symbol, config, context }) => {
  const { spriteModule, symbolModule } = config;

  const spriteRequest = stringifyRequest({ context }, spriteModule);
  const symbolRequest = stringifyRequest({ context }, symbolModule);

  const component = fs.readFileSync(path.resolve(__dirname, 'component.js')).toString();

  return component
    .replace('\'$$symbolRequest$$\'', symbolRequest)
    .replace('\'$$spriteRequest$$\'', spriteRequest)
    .replace('\'$$stringifiedSymbol$$\'', stringifySymbol(symbol));
};

module.exports = runtimeGenerator;
