import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],

  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@css': path.resolve(__dirname, './src/assets/css'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@customtypes': path.resolve(__dirname, './src/types')
    }
  }
}))
