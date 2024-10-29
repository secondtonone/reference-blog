const domainMap = {
  cn: 'examplechina.cn'
};

const isDomain = (langCode: keyof typeof domainMap) => () => (
  window.location.hostname.includes(domainMap[langCode])
);

export default isDomain;
