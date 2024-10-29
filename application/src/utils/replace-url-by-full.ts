const replaceUrlByFull = (link: string, subdomain: string): string => (link.startsWith('/')
  ? `https://${subdomain === 'en' ? 'www' : subdomain}.example.com${link}`
  : link);

export default replaceUrlByFull;
