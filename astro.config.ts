import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  // used to generate images
  site: 
    process.env.VERCEL_ENV === 'production'
      ? 'https://infostrikes.com/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://infostrikes.com/',
    
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
 
  },
  redirects: {
   '/blog': '/news',
   '/blog/[...slug]': '/news/[...slug]' 
  },
  devToolbar: {enabled: true}, 
});
