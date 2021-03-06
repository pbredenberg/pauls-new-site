/**
 * TODO: Wouldn't it be nice if we could write this in TypeScript?
 */
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Your website meta description.',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    // For redirecting to netlify admin.
    // See: https://www.netlifycms.org/docs/add-to-your-site/#authentication
    // Also see: https://github.com/vuejs/vuepress/issues/790
    // TODO: See if this can be executed via runtime plugin or in an otherwise
    // cleaner way.
    ['script', {}, `
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', user => {
          if (!user) {
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/';
            });
          }
        });
      }
    `]
  ],
  /**
   * Apply plugins，ref：https://vuepress.vuejs.org/plugin/
   */
  plugins: ['vuepress-plugin-typescript']
}
