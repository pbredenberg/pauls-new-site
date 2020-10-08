# Typescript + VuePress Template for Netlify CMS

A Netlify VuePress project with TypeScript configured, ready for development.

This is pre-configured with:

- SCSS
- A bare-bones theme

## Let's Get On With It Already!

You, throwing caution to the wind, are the sort of person who loves to click buttons!

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/pbredenberg/typescript-vuepress-template-netlify-cms&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

## Gotchas

1. Restart dev server after adding components to the theme

   Whenever you add a component to `_content/.vuepress/theme/components` you
   may get console errors. To resolve them, simply restart the dev server.

2. Export a default object from Vue components

   Some auto-complete Vue tooling will create a Vue.js component exporting an
   extended Vue object through `Vue.extend`, however, VuePress does not like this.
   instead, export a default object from component file like so:

   ```html
   <template>
      <h1>hi</h1>
   </template>
   <script lang="ts">

   export default {
      name: 'Foo'
   }
   </script>
   ```
