export const setDelayTime = (ms: number) => new Promise<void>((resolve) => {
  const delayTimeOut = setTimeout(() => {
    resolve();
    clearTimeout(delayTimeOut);
  }, ms);
});

export const sendMarketoForm = async ({
  formId,
  values,
}: {
  formId?: number;
  values?;
}) => new Promise((resolve, reject) => {
  // @ts-ignore
  const { MktoForms2 } = window;

  if (!MktoForms2) reject(new Error('Invalid MktoForms2'));

  if (MktoForms2 && formId && values?.constructor === Object) {
    const form = MktoForms2.getForm(formId);
    if (form) {
      const handleErrorMessage = (event) => {
        const { origin, data } = event || {};
        if (window.location.origin === origin) {
          try {
            const { mktoResponse } = JSON.parse(data) || {};
            if (mktoResponse?.constructor === Object) {
              const { error } = mktoResponse;

              if (error) {
                window.removeEventListener('message', handleErrorMessage);
                reject(error);
              }
            }
          } catch (error) {
            reject(error);
          }
        }
      };
      window.addEventListener('message', handleErrorMessage);
      form.addHiddenFields(values);

      return form.submit().onSuccess((data) => {
        window.removeEventListener('message', handleErrorMessage);
        resolve(data);
        return false;
      });
    /* eslint-disable-next-line no-else-return */
    } else {
      reject(new Error('Invalid form'));
    }
  }

  return reject(new Error('Invalid data'));
});
