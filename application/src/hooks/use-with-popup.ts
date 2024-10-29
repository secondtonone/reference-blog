import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';

const code = 'popup';

const useWithPopup = (name?: string) => {
  const router = useRouter();
  const [isVisible, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (name) {
      let visibility = false;

      if (router.query.popup) {
        visibility = Array.isArray(router.query.popup)
          ? router.query.popup.includes(name)
          : router.query.popup === name;
      }

      setVisibility(visibility);
    }
  }, [router.query.popup, name]);

  const show = useCallback(() => {
    if (name) {
      const { query, pathname } = router;

      router.push(
        {
          pathname,
          query: {
            ...query,
            [code]: name,
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      setVisibility(true);
    }
  }, [name, router]);

  const hide = useCallback(() => {
    if (name) {
      const { pathname, query } = router;
      const {
        [code]: popup, ...params
      } = query;

      const newPath = pathname.replace(/\[(.*?)]/g, (replacement) => {
        const param = replacement.slice(1, -1);
        let segment = replacement;

        if (params[param]) {
          segment = params[param] as string;
          delete params[param];
          return segment;
        }

        return replacement;
      });

      router.push(
        {
          pathname: newPath,
          query: params,
        },
        undefined,
        {
          shallow: true
        }
      );
    } else {
      setVisibility(false);
    }
  }, [router]);

  const toggle: () => void = useCallback(
    debounce(() => {
      if (isVisible) {
        hide();
      } else {
        show();
      }
    }, 200),
    [show, hide, isVisible]
  );

  return {
    show,
    hide,
    isVisible,
    toggle,
  };
};

export default useWithPopup;
