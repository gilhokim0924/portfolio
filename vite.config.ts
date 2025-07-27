import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'development' ? '/' : '/portfolio/',
  };
});


// to build and deploy the project, use the following commands:
// npm run build 
// npm run deploy