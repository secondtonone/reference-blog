import { configure } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure as configureRTL } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const getIconCode = ({ code }) => `${code}`;

jest.mock('~/components/containers/svg-icon', () => getIconCode);

const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});

global.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

// eslint-disable-next-line unicorn/consistent-function-scoping
jest.mock('next/dynamic', () => () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'DynamicComponent';
  DynamicComponent.preload = jest.fn();
  return DynamicComponent;
});

configureRTL({ testIdAttribute: 'data-test' });
configure({ adapter: new EnzymeAdapter() });

module.exports = {};
