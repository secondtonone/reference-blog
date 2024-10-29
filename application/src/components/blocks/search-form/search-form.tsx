import {
  useState, FC, useCallback, useRef, useEffect
} from 'react';
import styled from 'styled-components';
import { brUp } from '~/styles/helpers';
import {
  InputField,
  BoxAdaptive,
  Button
} from '~/components/atoms';
import { RadioValue } from '~/components/atoms/radio-button';

import { BoxAdaptiveProps } from '~/components/atoms/box-adaptive';

export interface SearchFormProps extends BoxAdaptiveProps {
  placeholder: string
  defaultValue: string;

  defaultParam: string;
  padding?: number | number[]
  searchParams?: {
    value: string;
    title: string;
  }[]
  onSubmit?: (value: string, searchParam: RadioValue) => void
}

const SearchForm: FC<SearchFormProps> = ({
  placeholder,
  onSubmit,
  searchParams,
  defaultParam,
  defaultValue = '',
  ...props
}) => {
  // const [loading, setLoad] = useState<boolean>(false);
  /* const [isError, setError] = useState<boolean>(false);
  const [isSuccess, setSuccess] = useState<boolean>(false); */
  const [isTouched, setTouch] = useState<boolean>(false);
  const [request, setRequest] = useState<string>(defaultValue);
  const [searchParam] = useState<RadioValue>(defaultParam);

  const field = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (field.current) {
      field.current.focus();
    }
  }, []);

  const onChangeHandler = useCallback((value) => {
    setRequest(value);
  }, [isTouched, searchParam]);

  // const onChangeParamHandler = useCallback((value) => {
  //   setSearchParam(value);
  // }, [request]);

  const onBlur = useCallback(() => {
    setTouch(true);
  }, []);

  const onSubmitHandler = useCallback(async (e) => {
    e.preventDefault();

    onSubmit(request, searchParam);
  }, [request, searchParam]);

  return (
    <BoxAdaptive {...props} display="flex" justifyContent="space-between">
      <Form data-test="search-form" onSubmit={onSubmitHandler} style={{ flex: 1 }}>
        <InputField
          name="request"
          autocomplete="request"
          data-test="search-input"
          borderless
          onChange={onChangeHandler}
          value={request}
          handleBlur={onBlur}
          tooltipDirection="right"
          placeholder={placeholder}
          state="normal"
          error=""
          inputRef={field}
        />
        {/* <RadioContainer */}
        {/*  display="flex" */}
        {/*  justifyContent={{ _: 'space-between', x: 'flex-start' }} */}
        {/*  flexWrap="wrap" */}
        {/* > */}
        {/*  {searchParams ? ( */}
        {/*    <RadioGroup name="radio" value={searchParam} onChange={onChangeParamHandler}> */}
        {/*      {searchParams */}
        {/*        .map(({ */}
        {/*          value, */}
        {/*          title */}
        {/*        }) => ( */}
        {/*          <RadioButton */}
        {/*            dataTest={`search-form-${value}-radio`} */}
        {/*            key={`search-form-${value}-radio`} */}
        {/*            label={title} */}
        {/*            value={value} */}
        {/*          /> */}
        {/*        ))} */}
        {/*    </RadioGroup> */}
        {/*  ) : null} */}
        {/* </RadioContainer> */}
      </Form>
      <BoxAdaptive ml={{ _: 20, sm: 30 }}>
        <Button
          onClick={onSubmitHandler}
          type="button"
          w="90px"
        >
          Search
        </Button>
      </BoxAdaptive>
    </BoxAdaptive>
  );
};

const Form = styled.form`
  input {
    font-size: 20px !important;
    line-height: 1.6 !important;
    padding: 0 !important;
  }

  label {
    padding-top: 24px !important;
    padding-right: 32px !important;

    ${brUp('x', `
      padding-top: 32px !important;
      padding-right: 32px !important;
    `)}
  }
`;

// const RadioContainer = styled(BoxAdaptive)`
//   & label:last-child {
//     padding-right: 0 !important;
//   }
// `;

export default SearchForm;
