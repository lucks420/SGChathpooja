import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  // Respect VITE_BASE if explicitly passed (e.g. from GitHub Actions configure-pages),
  // otherwise auto-detect repo name from GITHUB_REPOSITORY (e.g. /<repo-name>/),
  // with special handling for *.github.io root user pages and fallback to relative './'.
  let base = process.env.VITE_BASE;
  if (!base && process.env.GITHUB_REPOSITORY) {
    const rawRepo = process.env.GITHUB_REPOSITORY.split('/')[1] || '';
    if (rawRepo.toLowerCase().endsWith('.github.io')) {
      base = '/';
    } else if (rawRepo) {
      base = `/${rawRepo}/`;
    }
  }

  // Format base correctly: ensure trailing slash if absolute, or fallback to relative './'
  if (base && base !== './') {
    if (!base.endsWith('/')) {
      base = `${base}/`;
    }
    if (!base.startsWith('/') && !base.startsWith('.')) {
      base = `/${base}`;
    }
  } else {
    base = './';
  }

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
