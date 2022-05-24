import { css } from '@emotion/react'

export const root = css`
  :root {
    /* color */
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
      --color-gray-primary-variant: var(--color-gray-90);
      --color-gray-on-primary: var(--color-gray-0);
      --color-gray-secondary: var(--color-gray-60);
      --color-gray-secondary-variant: var(--color-gray-80);
      --color-gray-background: var(--color-gray-0);
      --color-gray-background-variant: var(--color-gray-10);
      --color-text-primary: rgba(0 0 0 / 89%);
      --color-text-secondary: rgba(0 0 0 / 56%);
      --color-text-diasbled: rgba(0 0 0 / 35%);
    }
    @media (prefers-color-scheme: dark) {
      --color-gray-primary: var(--color-gray-20);
      --color-gray-primary-variant: var(--color-gray-10);
      --color-gray-on-primary: var(--color-gray-100);
      --color-gray-secondary: var(--color-gray-40);
      --color-gray-secondary-variant: var(--color-gray-20);
      --color-gray-background: var(--color-gray-100);
      --color-gray-background-variant: var(--color-gray-90);
      --color-text-primary: rgba(255 255 255 / 96%);
      --color-text-secondary: rgba(255 255 255 / 65%);
      --color-text-diasbled: rgba(255 255 255 / 44%);
    }

    /* font-size */
    --font-size-xs: 12px;
    --font-size-s: 14px;
    --font-size-m: 16px;
    --font-size-l: 18px;
    --font-size-xl: 21px;
    --font-size-2xl: 24px;
    --font-size-3xl: 28px;
    --font-size-4xl: 32px;

    /* line-height */
    --line-height-s: 1.4;
    --line-height-m: 1.6;
    --line-height-l: 1.8;
  }
`
