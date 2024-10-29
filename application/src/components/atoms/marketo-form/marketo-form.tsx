import { useEffect, useState } from 'react';
import Script from 'next/script';

import { TypeSubscriptionMarketoId } from '~/constants/subscription-marketo-id';

export interface IMarketoProps {
  baseUrl?: string;
  munchkinId?: string,
  formId?: TypeSubscriptionMarketoId,
  callback?: () => void;
}

const MarketoForm: React.FC<IMarketoProps> = ({
  baseUrl = '', munchkinId = '', formId = '', callback
}) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const handleScriptLoad = () => (setScriptLoaded(true));

  useEffect(() => {
    // @ts-ignore
    if (scriptLoaded && window.MktoForms2) {
      // @ts-ignore
      window.MktoForms2.loadForm(baseUrl, munchkinId, formId, callback);
    }
  }, [baseUrl, munchkinId, formId, callback, scriptLoaded]);

  return (
    <>
      <Script
        id="marketo-form2-min-js"
        src={`${baseUrl}/js/forms2/js/forms2.min.js`}
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />
      <form id={`mktoForm_${formId}`} style={{ display: 'none' }} data-test="marketo-form" />
    </>
  );
};

export default MarketoForm;
