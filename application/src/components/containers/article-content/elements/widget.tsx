import { MarkupHandler } from './types';
import widgets from '../widgets';

const paramsRegexp = new RegExp(/(([\w+]*)="(.*?)")/gi);
type RegExpWidget = <T extends { data?: string }>({ data }: T) => RegExpMatchArray | null;

const isWidget: RegExpWidget = ({ data }) => data && data.match(/\[\w+(\s.*?)?(-.*?)?]/gi);
const getWidgetName: RegExpWidget = ({ data }) => data && data.match(/[^[]([\w-]+)/gi);
const getWidgetParams: RegExpWidget = ({ data }) => data && data.match(paramsRegexp);
const paramsToProps = (params: RegExpMatchArray | null) => params && params
  .reduce((props, param) => {
    const result = paramsRegexp.exec(param);
    paramsRegexp.lastIndex = 0;
    if (result) {
      // eslint-disable-next-line prefer-destructuring
      props[result[2]] = result[3];
    }
    return props;
  }, {});

const widget: MarkupHandler = [
  (domNode) => {
    const results = isWidget<typeof domNode>(domNode);
    return results && results[0]?.startsWith('[') && results[0].endsWith(']');
  },
  (domNode) => {
    let widgetName = '';
    const widgetNameResult = getWidgetName<typeof domNode>(domNode);

    if (Array.isArray(widgetNameResult)) {
      [widgetName] = widgetNameResult;
    } else {
      return false;
    }

    if (widgetName in widgets) {
      const renderComponent = widgets[widgetName];

      if (typeof renderComponent === 'function') {
        const component = renderComponent({
          name: widgetName,
          ...paramsToProps(getWidgetParams<typeof domNode>(domNode))
        });

        if (component?.type !== 'i' && (domNode?.parent?.name === 'p')) {
          domNode.parent.name = 'div';
        }

        return component;
      }
    }

    return domNode;
  }

];

export default widget;
