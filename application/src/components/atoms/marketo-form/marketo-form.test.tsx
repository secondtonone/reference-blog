/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import fixture from '~/__fixtures__/marketo-form';

import MarketoForm, { IMarketoProps } from '.';

const marketoFormProps = {
  ...fixture
} as IMarketoProps;

describe('Match snapshots MarketoForm', () => {
  let props: IMarketoProps;

  beforeEach(() => {
    props = { ...marketoFormProps };
  });

  it('default', () => {
    const { asFragment } = render(<MarketoForm {...props} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('without baseUrl', () => {
    delete props.baseUrl;
    const { asFragment } = render(<MarketoForm {...props} />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('without fromId', () => {
    delete props.formId;
    const { asFragment } = render((
      <MarketoForm {... props} />
    ), {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('without munchkinId', () => {
    delete props.munchkinId;
    const { asFragment } = render((
      <MarketoForm {...props} />
    ), {});
    expect(asFragment()).toMatchSnapshot();
  });
});
