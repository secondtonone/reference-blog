import shareUrlGenerators from './share-url-generators';

const pageTitle = 'Why Google’s 10 Blue Links Will Have to Go (Eventually)';
const url = 'https://en.example.com/blog/google-results-need-change/';

describe('share-url-generators', () => {
  it('length', () => {
    expect(Object
      .keys(shareUrlGenerators)
      .map((key) => (shareUrlGenerators[key]({}))).length).toBe(Object
      .keys(shareUrlGenerators).length);
  });

  it('empty', () => {
    expect(Object
      .keys(shareUrlGenerators)
      .map((key) => (shareUrlGenerators[key]({}))))
      .toEqual(expect.arrayContaining(['', '', 'mailto:?body=']));
  });

  it('with slug', () => {
    expect(Object
      .keys(shareUrlGenerators)
      .map((key) => (shareUrlGenerators[key]({ slug: key }))))
      .toEqual(expect.arrayContaining([
        'https://facebook.com/sharer/sharer.php?u=&quote=',
        'https://twitter.com/intent/tweet?text=&url=',
        'mailto:?body='
      ]));
  });

  it('with slug, pageTitle', () => {
    const facebookURL = new URL('https://facebook.com/sharer/sharer.php');
    facebookURL.searchParams.append('u', '');
    facebookURL.searchParams.append('quote', pageTitle);
    const twitterURL = new URL('https://twitter.com/intent/tweet');
    twitterURL.searchParams.append('text', pageTitle);
    twitterURL.searchParams.append('url', '');
    expect(Object
      .keys(shareUrlGenerators)
      .map((key) => (shareUrlGenerators[key]({ slug: key, pageTitle }))))
      .toEqual(expect.arrayContaining([
        facebookURL.toString(),
        twitterURL.toString(),
        `mailto:?body=${pageTitle}`
      ]));
  });

  it('with slug, pageTitle, url', () => {
    const facebookURL = new URL('https://facebook.com/sharer/sharer.php');
    facebookURL.searchParams.append('u', url);
    facebookURL.searchParams.append('quote', pageTitle);
    const twitterURL = new URL('https://twitter.com/intent/tweet');
    twitterURL.searchParams.append('text', pageTitle);
    twitterURL.searchParams.append('url', url);
    expect(Object
      .keys(shareUrlGenerators)
      .map((key) => (shareUrlGenerators[key]({ slug: key, pageTitle, url }))))
      .toEqual(expect.arrayContaining([
        facebookURL.toString(),
        twitterURL.toString(),
        `mailto:?body=${pageTitle}%0D%0A${url}`
      ]));
  });
});
