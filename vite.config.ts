import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${format}/${entryName}.${format === 'es' ? 'mjs' : 'js'}`
    },
    sourcemap: true,
    rollupOptions: {
      external: [/^react/],
      output: {
        preserveModules: true,
        exports: 'named',
      },
    },
  },
})
