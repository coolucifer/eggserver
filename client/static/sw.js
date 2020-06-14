importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02f6fa682f73809b4786.js",
    "revision": "d0c0418af864560bb54958b644287a86"
  },
  {
    "url": "/_nuxt/2644d1f07ec1f6da892b.js",
    "revision": "35eb7649da09e8ba6b8392366db44c7c"
  },
  {
    "url": "/_nuxt/3a8d4188bc3e66ae6677.js",
    "revision": "1d498a6622cb394b9a46fbebd1817b6a"
  },
  {
    "url": "/_nuxt/3f7acf800a3862fd2557.js",
    "revision": "8a7bc44dd87eef222dead6f72abb575a"
  },
  {
    "url": "/_nuxt/444e0728dea32df0fb48.js",
    "revision": "2a498763ab60742f61182994fd9286d1"
  },
  {
    "url": "/_nuxt/9288826c8d22bf146ed4.js",
    "revision": "c5cd8379d605c7ea1701cbb6c8f4bc44"
  },
  {
    "url": "/_nuxt/a19a8f91c9bc31dabac4.js",
    "revision": "3b241d85bff90e29c7923b0016591523"
  },
  {
    "url": "/_nuxt/b274895e5fc255bf9ab1.js",
    "revision": "c95cde34b80de98115ff286799fa5a9d"
  },
  {
    "url": "/_nuxt/bb129b779720fb2e67dd.js",
    "revision": "133b70547caa9196653b2a7e362e9384"
  },
  {
    "url": "/_nuxt/c17e5deb7380c36b839e.js",
    "revision": "8140d83fb51b8c827308f50d95c256d0"
  },
  {
    "url": "/_nuxt/c5d485c563e18ec2cf4a.js",
    "revision": "4b7d91bf4491936262ea6f655e6a2117"
  },
  {
    "url": "/_nuxt/e4830d91191237244655.js",
    "revision": "6d857382208e69ac09ea80d17199465d"
  },
  {
    "url": "/_nuxt/e91bd6b565d2c6cbd035.js",
    "revision": "e9f4809720bc250e8568c33a6e75f0bf"
  },
  {
    "url": "/_nuxt/f06426ac6cbc988aab4a.js",
    "revision": "e642fa6aec59847f18e6487cafff3835"
  },
  {
    "url": "/_nuxt/f5684842e4f5986ba2ff.js",
    "revision": "1078395ddb7f933a45e290a029100a26"
  },
  {
    "url": "/_nuxt/fdcd137712ec474d1235.js",
    "revision": "cf45dfe0b0a4775e93a6ec453b9d99af"
  }
], {
  "cacheId": "blog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
