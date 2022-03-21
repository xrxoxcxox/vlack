import { css } from '@emotion/react'

export const root = css`
  :root {
    --color-gray-0: #fff;
    --color-gray-10: #f5f5f5;
    --color-gray-20: #dedede;
    --color-gray-30: #c2c2c2;
    --color-gray-40: #a6a6a6;
    --color-gray-50: #8a8a8a;
    --color-gray-60: #707070;
    --color-gray-70: #545454;
    --color-gray-80: #383838;
    --color-gray-90: #1c1c1c;
    --color-gray-100: #000;
    @media (prefers-color-scheme: light) {
      --color-gray-primary: var(--color-gray-80);
      --color-gray-on-primary: var(--color-gray-0);
      --color-gray-secondary: var(--color-gray-60);
      --color-gray-background: var(--color-gray-0);
      --color-text-primary: rgba(0 0 0 / 89%);
      --color-text-secondary: rgba(0 0 0 / 56%);
      --color-text-diasbled: rgba(0 0 0 / 35%);
    }
    @media (prefers-color-scheme: dark) {
      --color-gray-primary: var(--color-gray-20);
      --color-gray-on-primary: var(--color-gray-100);
      --color-gray-secondary: var(--color-gray-40);
      --color-gray-background: var(--color-gray-100);
      --color-text-primary: rgba(255 255 255 / 96%);
      --color-text-secondary: rgba(255 255 255 / 65%);
      --color-text-diasbled: rgba(255 255 255 / 44%);
    }

    --font-size-xs: 12px;
    --font-size-s: 14px;
    --font-size-m: 16px;
    --font-size-l: 18px;
    --font-size-xl: 21px;
    --font-size-2xl: 24px;
    --font-size-3xl: 28px;
    --font-size-4xl: 32px;
  }
`

export const color = {
  gray: {
    0: 'var(--color-gray-0)',
    10: 'var(--color-gray-10)',
    20: 'var(--color-gray-20)',
    30: 'var(--color-gray-30)',
    40: 'var(--color-gray-40)',
    50: 'var(--color-gray-50)',
    60: 'var(--color-gray-60)',
    70: 'var(--color-gray-70)',
    80: 'var(--color-gray-80)',
    90: 'var(--color-gray-90)',
    100: 'var(--color-gray-100)',
    primary: 'var(--color-gray-primary)',
    onPrimary: 'var(--color-gray-on-primary)',
    secondary: 'var(--color-gray-secondary)',
    background: 'var(--color-gray-background)',
  },
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    disabled: 'var(--color-text-diasbled)',
  },
}

export const fontSize = {
  xs: 'var(--font-size-xs)',
  s: 'var(--font-size-s)',
  m: 'var(--font-size-m)',
  l: 'var(--font-size-l)',
  xl: 'var(--font-size-xl)',
  '2xl': 'var(--font-size-2xl)',
  '3xl': 'var(--font-size-3xl)',
  '4xl': 'var(--font-size-4xl)',
}
