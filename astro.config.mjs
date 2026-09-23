import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sunschool.mmcs.sfedu.ru',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
