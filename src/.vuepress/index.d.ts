// Register Netlify's identity object with TypeScript
// See: src/.vuepress/plugins/netlify-authorization-redirector.ts
interface Window {
    netlifyIdentity: any;
}
