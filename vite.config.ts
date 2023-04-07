import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
    },
    sourcemap: true,
    rollupOptions: {
      external: [/^react/],
      output: [
        {
          format: 'esm',
          dir: 'dist/esm',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
        },
      ],
    }
  },
})
