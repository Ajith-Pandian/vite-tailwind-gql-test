import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import codegen from 'vite-plugin-graphql-codegen';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), codegen()],
  base: '/vite-tailwind-gql-test/'
})
