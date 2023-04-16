# vlack

vlack is a black-based UI toolkit for React.

[Figma data](https://www.figma.com/community/file/1110281395043583052)

> **Warning**
> This library is still in an experimental stage.
> Destructive changes may be made without notice.

## Installation

```sh
npm i vlack
```

## Getting started

To use vlack, please follow these steps.

### Import CSS file

The following example assumes Next.js.

```tsx
import '@/styles/globals.css'
import 'vlack/dist/style.css' // CSS for vlack
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
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
