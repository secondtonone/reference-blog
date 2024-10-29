import dayjs from 'dayjs';

const CookieControl = {
  check: (cookieKey: string) => document?.cookie.includes(`${cookieKey}`),
  set: (cookieKey: string, cookieValue: string, expireYears: number) => {
    let cookieString = `${cookieKey}=${cookieValue}; path=/;`;

    if (!document) {
      return;
    }

    if (expireYears) {
      const cookieDate = dayjs(new Date()).add(expireYears, 'year').valueOf();
      const cookieUTC = new Date(cookieDate).toUTCString();

      cookieString = cookieString.concat(`expires=${cookieUTC};`);
    }

    if (cookieKey && cookieValue) {
      document.cookie = cookieString;
    }
  },
};

export default CookieControl;
