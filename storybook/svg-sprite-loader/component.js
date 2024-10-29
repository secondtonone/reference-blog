const React = require('react');
const SpriteSymbol = require('$$symbolRequest$$');
const sprite = require('$$spriteRequest$$');

const symbol = new SpriteSymbol('$$stringifiedSymbol$$');

sprite.add(symbol);

const SvgSpriteIcon = (props) => React.createElement(
  'svg',
  { viewBox: symbol.viewBox, ...props },
  React.createElement(
    'use',
    {
      xlinkHref: `#${symbol.id}`
    }
  )
);

SvgSpriteIcon.viewBox = symbol.viewBox;
SvgSpriteIcon.id = symbol.id;
SvgSpriteIcon.content = symbol.content;
SvgSpriteIcon.url = symbol.url;
SvgSpriteIcon.toString = symbol.toString;

module.exports = SvgSpriteIcon;
