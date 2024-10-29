import { useEffect } from 'react';

const useTweetTheme = (selector: string, themeName: 'light' | 'dark' = 'light') => {
  useEffect(() => {
    const tweets: NodeListOf<HTMLIFrameElement> = document.querySelectorAll(selector);

    if (tweets?.length > 0) {
      [...tweets].forEach(tweet => {
        const url = new URL(tweet.src);
        const { searchParams } = url;

        if (themeName) {
          searchParams.set('theme', themeName);

          url.search = searchParams.toString();
        }

        tweet.src = url.toString();
      });
    }
  }, [themeName]);
};

export default useTweetTheme;
