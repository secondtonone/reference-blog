import {
  useState,
  FC,
  useCallback,
  useEffect,
} from 'react';
import styled from 'styled-components';

import {
  Button, InputField, BoxAdaptive, MarketoForm,
} from '~/components/atoms';

import SubscriptionResult from './subscription-result';
import { getScheme } from '~/styles/scheme';
import { getColorProperty } from '~/styles/helpers';

import { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

import { sendAnalyticEvent } from '~/analytics';
import { setDelayTime, sendMarketoForm } from './utils';
import rules from './validation-rule';

import { useSubdomainContext } from '~/hooks';
import SubscriptionMarketoId from '~/constants/subscription-marketo-id';

const lightTheme = getScheme();
const SECONDARY5_60 = getColorProperty(lightTheme.secondary5, 0.6);

export interface SubscriptionFormProps extends BoxAdaptiveProps {
  button: React.ReactNode;
  tip?: React.ReactNode;
  title?: React.ReactNode;
  successMessage?: React.ReactNode;
  errorMessage?: React.ReactNode;
  placeholder: string;
  internal?: boolean;
  padding?: number | number[];
  onSuccess?: () => void;
  onError?: () => void;
}

const SUBMIT_DELAY = 500;
const SUCCESS_HIDE_DELAY = SUBMIT_DELAY * 60;
const validate = (value: string) => Object.values(rules).reduce((message, rule) => message || rule(value), '');

const SubscriptionForm: FC<SubscriptionFormProps> = ({
  placeholder,
  button,
  internal,
  tip,
  title,
  successMessage,
  errorMessage,
  onSuccess,
  onError,
  ...props
}) => {
  const [loading, setLoad] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isTouched, setTouch] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [validation, setValidation] = useState<string>('');
  const { language = 'en', isUserDevice } = useSubdomainContext();
  const marketoId = SubscriptionMarketoId[language];
  const marketoFormConfig = {
    baseUrl: 'https://lp.example.com',
    munchkinId: '519-IIY-869',
    formId: marketoId,
  };

  useEffect(() => {
    sendAnalyticEvent('form-subscribe-show');
  }, []);

  const onChange = useCallback(
    (value: string) => {
      setEmail(value);
      if (isTouched) {
        const message = validate(value);
        setValidation(message);
      }
    },
    [isTouched]
  );

  const onBlur = useCallback(() => {
    setTouch(true);
    const message = validate(email);
    setValidation(message);
  }, [email]);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    sendAnalyticEvent('form-subscribe-click');
    const message = validate(email);

    if (message) {
      setValidation(message);
      return;
    }

    const success = async () => {
      setLoad(false);
      setSuccess(true);
      setValidation('');
      setError(false);
      await setDelayTime(SUCCESS_HIDE_DELAY);
      setSuccess(false);
      if (onSuccess) onSuccess();
    };
    try {
      setError(false);
      setLoad(true);
      await setDelayTime(SUBMIT_DELAY);
      await sendMarketoForm({
        formId: marketoFormConfig.formId,
        values: { Email: email, mail_education: 'yes' },
      });
      success();
    } catch {
      if (onError) onError();
      setError(true);
      setLoad(false);
    }
  }, [email, onSuccess, onError]);

  const onChangeHandler = useCallback((value) => {
    onChange(value);
  }, []);

  return (
    <BoxAdaptive position="relative" p={{ _: '0 20px', x: 0 }} {...props}>
      {
        isUserDevice && (
          <MarketoForm
            {...marketoFormConfig}
          />
        )
      }
      <Form onSubmit={onSubmit} isVisible={!isSuccess && !isError}>
        {title}
        <InputField
          name="email"
          autocomplete="email"
          data-test="subscription-input"
          onChange={onChangeHandler}
          onBlur={onBlur}
          tooltipDirection="right"
          internal={internal}
          placeholder={placeholder}
          state={validation ? 'invalid' : 'normal'}
          error={validation}
          mb={3}
        />
        <Button
          data-test="subscription-button"
          w="100%"
          internal={internal}
          loading={loading}
          type="submit"
          style={{ marginTop: 12 }}
        >
          {button}
        </Button>
        <TipStyled>{tip}</TipStyled>
      </Form>
      {isSuccess && <SubscriptionResult text={successMessage} />}
      {isError && <SubscriptionResult text={errorMessage} />}
    </BoxAdaptive>
  );
};

const Form = styled.form<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => Number(isVisible)};

  a span {
    text-decoration: underline;
  }
`;

const TipStyled = styled(BoxAdaptive)`
  color: ${({ theme }) => (theme.isLight ? SECONDARY5_60 : theme.secondary4)};
`;

export default SubscriptionForm;
