module.exports = {
  collectCoverageFrom: [
    './src/components/**/*.tsx',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  setupFilesAfterEnv: ['./adapter.setup.js'],
  testRegex: '.test.(js?|ts?|tsx?)$',
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel-transform.js' }],
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
};
