import { sendAnalyticEvent } from '~/analytics';
import handlersDispatcher from './handlers-dispatcher';
import freeToolsMap from '../free-tools-map';
import FreeToolsName from '../free-tools-name';

interface HandlersParams {
  link?: string
}

const toolsHandlers = {
  [FreeToolsName.DOMAIN_CHECKER]: [
    `#${freeToolsMap[FreeToolsName.DOMAIN_CHECKER].id}`,
    ({ link }: HandlersParams) => ({
      'try-it-free': (e:Event) => {
        e.preventDefault();
        sendAnalyticEvent('article-authority-score-to-product');
        if (link) window.open(link, '_blank');
      },
      check: () => {
        sendAnalyticEvent('article-authority-score-to-check');
      }
    })
  ],
  [FreeToolsName.SITE_AUDIT]: [
    `#${freeToolsMap[FreeToolsName.SITE_AUDIT].id}`,
    () => ({
      'start-free-audit-btn': () => {
        sendAnalyticEvent('article-site-audit-start-free');
      },
      'error-btn': () => {
        sendAnalyticEvent('article-site-audit-start-full');
      }
    })
  ]
} as const;

const freeToolsHandlers = (Object.keys(toolsHandlers) as Array<keyof typeof toolsHandlers>)
  .reduce((acc, name) => {
    const [id, handlers] = toolsHandlers[name];

    acc[name] = (params: HandlersParams) => {
      const handlersWithParams = handlers(params);
      handlersDispatcher(id, handlersWithParams);
    };

    return acc;
  }, {});

export default freeToolsHandlers;
