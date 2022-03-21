const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@emotion/babel-preset-css-prop'],
  }),
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}))
    return config
  },
}
