import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useRedirect = (condition: () => boolean, redirectTo: string) => {
  const router = useRouter();

  useEffect(() => {
    if (condition()) {
      router.push(redirectTo);
    }
  }, [router, condition]);
};

export default useRedirect;
