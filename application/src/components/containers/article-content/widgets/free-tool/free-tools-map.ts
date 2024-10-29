import FreeToolsName from './free-tools-name';

const freeToolsMap = {
  [FreeToolsName.DOMAIN_CHECKER]: {
    pathTo: 'authority-checker/authority-checker-assets-loader.min.js',
    id: 'authority-checker-widget',
    ftname: 'Domain-Authority-Checker',
    theme: 'blog'
  },
  [FreeToolsName.SITE_AUDIT]: {
    pathTo: 'site-audit/site-audit-assets-loader.min.js',
    id: 'site-audit-widget',
    ftname: 'Domain-Authority-Checker',
    theme: 'blog'
  }
};

export default freeToolsMap;
