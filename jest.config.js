module.exports = {
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  testRegex: [
    'commands/.+\\.(spec|test|inspect)\\.[jt]sx?$',
    'apis/conversion/.+\\.inspect\\.[jt]sx?$',
    'apis/enigma-mocker/.+\\.inspect\\.[jt]sx?$',
    'apis/locale/.+\\.inspect\\.[jt]sx?$',
    'apis/nucleus/.+\\.inspect\\.[jt]sx?$',
    'apis/snapshooter/.+\\.inspect\\.[jt]sx?$',
    'apis/supernova/.+\\.inspect\\.[jt]sx?$',
    'apis/test-utils/.+\\.inspect\\.[jt]sx?$',
    'apis/theme/.+\\.inspect\\.[jt]sx?$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'commands/**/*.{js,jsx}',
    'apis/conversion/**/*.{js,jsx}',
    'apis/enigma-mocker/**/*.{js,jsx}',
    'apis/locale/**/*.{js,jsx}',
    'apis/nucleus/src/__tests__/*.{js,jsx}',
    'apis/nucleus/src/components/**/*.{js,jsx}',
    'apis/nucleus/src/plugins/*.{js,jsx}',
    'apis/nucleus/src/hooks/*.{js,jsx}',
    'apis/nucleus/src/sn/*.{js,jsx}',
    'apis/nucleus/src/stores/*.{js,jsx}',
    'apis/nucleus/src/utils/*.{js,jsx}',
    'apis/nucleus/src/object/*.{js,jsx}',
    'apis/snapshooter/**/*.{js,jsx}',
    'apis/supernova/**/*.{js,jsx}',
    'apis/test-utils/**/*.{js,jsx}',
    'apis/theme/**/*.{js,jsx}',

    '!apis/enigma-mocker/examples/**',
    '!apis/enigma-mocker/index.js',
    '!commands/create/**/*.{js,jsx}',
    '!commands/build/command.js',
    '!commands/sense/command.js',
    '!commands/serve/command.js',
    '!commands/sense/src/ext.js',
    '!commands/sense/src/empty-ext.js',
    '!apis/snapshooter/client.js',
    '!apis/test-utils/index.js',
    '!apis/nucleus/src/components/selections/__stories__',

    '!**/lib/**',
    '!**/dist/**',
    '!**/node_modules/**',
    '!**/*.config.js',
    '!**/*.conf.js',
  ],
  coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage/junit/' }]],
  transformIgnorePatterns: ['/node_modules/(?!@qlik/sdk)'],
};
