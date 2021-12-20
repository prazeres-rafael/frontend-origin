const baseConfig = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/src/utils/path-transform.js',
  },
};

const serialPattern = '**/*.serial.{test,spec}.{js,jsx,ts,tsx}';

module.exports = {
  projects: [
    {
      ...baseConfig,
      displayName: 'parallel',
      testMatch: [serialPattern.replace('.serial', ''), `!${serialPattern}`],
    },
  ],
};