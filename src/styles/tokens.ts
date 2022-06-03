import { css } from '@emotion/react'

export const root = css({
  ':root': {
    // color
    '@media (prefers-color-scheme: light)': {
      '--color-gray-0': '#fff',
      '--color-gray-10': '#f5f5f5',
      '--color-gray-20': '#dedede',
      '--color-gray-30': '#c2c2c2',
      '--color-gray-40': '#a6a6a6',
      '--color-gray-50': '#8a8a8a',
      '--color-gray-60': '#707070',
      '--color-gray-70': '#545454',
      '--color-gray-80': '#383838',
      '--color-gray-90': '#1c1c1c',
      '--color-gray-100': '#000',
      '--color-red': '#db0000',
    },
    '@media (prefers-color-scheme: dark)': {
      '--color-gray-0': '#000',
      '--color-gray-10': '#1c1c1c',
      '--color-gray-20': '#383838',
      '--color-gray-30': '#545454',
      '--color-gray-40': '#707070',
      '--color-gray-50': '#8a8a8a',
      '--color-gray-60': '#a6a6a6',
      '--color-gray-70': '#c2c2c2',
      '--color-gray-80': '#dedede',
      '--color-gray-90': '#f5f5f5',
      '--color-gray-100': '#fff',
      '--color-red': '#ea3d3d',
    },
    // font-size
    '--font-size-xs': 12,
    '--font-size-s': 14,
    '--font-size-m': 16,
    '--font-size-l': 18,
    '--font-size-xl': 21,
    '--font-size-2xl': 24,
    '--font-size-3xl': 28,
    '--font-size-4xl': 32,
    // line-height
    '--line-height-s': 1.4,
    '--line-height-m': 1.6,
    '--line-height-l': 1.8,
  },
})
