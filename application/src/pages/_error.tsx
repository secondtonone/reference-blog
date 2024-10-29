import NextErrorComponent from 'next/error';
import { NextPageContext } from 'next';
import * as Sentry from '@sentry/node';
import { Errors } from '~/components/organisms';

const errors = {
  404: 'We can\'t find the page you\'re looking for.',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout'
};

const CustomError = ({
  statusCode, hasGetInitialPropsRun, err,
}) => {
  if (!hasGetInitialPropsRun && err) {
    // eslint-disable-next-line no-console
    console.error(err);

    Sentry.captureException(err);
  }

  const errorMessage = `${errors[statusCode] ?? 'Oops!'}`;

  if (statusCode === 404) {
    return (
      <Errors.PageError
        statusCode={statusCode}
        heading={errorMessage}
      />
    );
  }

  if (statusCode >= 500 && statusCode < 600) {
    return (
      <Errors.PageError
        heading={`${statusCode} ${errorMessage}`}
      />
    );
  }

  return (
    <Errors.Maintenance />
  );
};

CustomError.getInitialProps = async ({ res, err, asPath }) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  } as NextPageContext);

  const customErrorProps = (errorInitialProps as any);

  customErrorProps.hasGetInitialPropsRun = true;
  customErrorProps.asPath = asPath;

  if (err) {
    Sentry.captureException(err);
    await Sentry.flush(2000);
  }

  if (res?.statusCode >= 500 && res?.statusCode < 600) {
    Sentry.captureException(err);
    await Sentry.flush(2000);
  }

  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  );

  return errorInitialProps;
};

export default CustomError;
