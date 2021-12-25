const baseConfig = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/src/utils/path-transform.js',
  },
  setupFilesAfterEnv: ['jest-styled-components'],
};

const serialPattern = '**/*.serial.{test,spec}.{js,jsx,ts,tsx}';

module.exports = {
  projects: [
    {
      ...baseConfig,
      displayName: 'parallel',
      testMatch: [serialPattern.replace('.serial', ''), `!${serialPattern}`],
      moduleDirectories: ['node_modules', 'src'],
    },
  ],
};
