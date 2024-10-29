import { createPortal } from 'react-dom';
import Widgets from '~/components/containers/article-content/widgets';
import isServer from '~/constants/is-server';

const widgetsNames = [
  'create-campaign',
  'youtube'
];

const widgetSelector = widgetsNames
  .map(widget => `[data-widget="${widget}"]`)
  .join(',');

const WidgetsPortal = () => {
  const widgets = [...(!isServer ? document.querySelectorAll(widgetSelector) : [])];

  if (widgets?.length > 0) {
    return (
      widgets.map((widget) => {
        // @ts-ignore
        const Component = Widgets[widget?.dataset?.widget];

        if (!Component) {
          return null;
        }

        // @ts-ignore
        return createPortal(<Component {...widget.dataset} />, widget);
      }));
  }

  return null;
};

export default WidgetsPortal as any;
