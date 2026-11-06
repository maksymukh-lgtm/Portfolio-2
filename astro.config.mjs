import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    // Put each page's CSS inside its HTML, so a page can never load without its styles
    // (e.g. while a new deploy is rolling out and browsers hold a mix of old and new files)
    inlineStylesheets: 'always',
  },
});
