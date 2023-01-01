# vlack

vlack is a black-based UI toolkit for React.

[Figma data](https://www.figma.com/community/file/1110281395043583052)

> **Warning**
> This library is still in an experimental stage.
> Destructive changes may be made without notice.

## Installation

```sh
# with npm
npm i vlack @emotion/react

# with yarn
yarn add vlack @emotion/react
```

## Getting started

To use vlack, please follow these steps.

### Use the `GlobalStyles` component.

`GlobalStyles` provides style resets and basic styles.

The following example assumes Next.js.

```tsx
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'vlack'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```

### Now you can start using components.

```tsx
import { Button } from 'vlack'

function Page() {
  return (
    <div>
      <Button>This is a "v"lack button</Button>
    </div>
  )
}
```
