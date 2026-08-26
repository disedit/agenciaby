<script setup>
useHead({
  htmlAttrs: { lang: 'es-ES', class: 'bg-gray font-sans' },
  script: [
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55JRZWHN');`
    }
  ],
  meta: [
    { name: 'theme-color', content: '#f1f0eb' },
    { name: 'msapplication-TileColor', content: '#f1f0eb' },
    { name: 'apple-mobile-web-app-title', content: 'Mans' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' }
  ]
})
</script>

<template>
  <div>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-55JRZWHN"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      />
    </noscript>
    <NuxtLoadingIndicator color="#000" />
    <slot />
    <SiteFooter />
    <SiteLoader />
  </div>
</template>
