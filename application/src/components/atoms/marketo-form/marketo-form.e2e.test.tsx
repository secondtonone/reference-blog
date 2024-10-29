/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';

import fixture from '~/__fixtures__/marketo-form';

import MarketoForm, { IMarketoProps } from '.';

const marketoFormProps = {
  ...fixture
} as IMarketoProps;

describe('MarketoForm', () => {
  it('default', () => {
    const { getByTestId } = render(
      <MarketoForm {...marketoFormProps} />,
      {}
    );
    const elementForm = getByTestId('marketo-form');

    expect(elementForm).toBeInTheDocument();
    expect(elementForm).toHaveAttribute('id', `mktoForm_${marketoFormProps.formId}`);
  });
});
