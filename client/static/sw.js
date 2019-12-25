importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1db36b957cfe53346954.js",
    "revision": "c4c95d441504445095b00ed77586dbe4"
  },
  {
    "url": "/_nuxt/2b3b9f9fc8cd3cc2d6b4.js",
    "revision": "1b2be3b3e5c5361f511808253c46c302"
  },
  {
    "url": "/_nuxt/3255bc57b665583dbd55.js",
    "revision": "7eadef2ed578e55231f84442a9463392"
  },
  {
    "url": "/_nuxt/33a2c4066966b0da5155.js",
    "revision": "cef9887c764acc7ecdec011a8f3b70a4"
  },
  {
    "url": "/_nuxt/4b924810749168917385.js",
    "revision": "4dda9c8872f364a20b305a7673e762ba"
  },
  {
    "url": "/_nuxt/6c91eb8f7e6b63ec0fc3.js",
    "revision": "1b1f89f50150249f337db98b04ebe54a"
  },
  {
    "url": "/_nuxt/7a30913f041cc7549e37.js",
    "revision": "fc1c3f3a5eb70f5be81223a38c5207c3"
  },
  {
    "url": "/_nuxt/94214e11101136d2e9e1.js",
    "revision": "9ff5fbaefec80b42a4b65b4ba5b433e8"
  },
  {
    "url": "/_nuxt/9fdee4496d2c4b01dbac.js",
    "revision": "7d299cf57a8f078447b42f68fd46bb93"
  },
  {
    "url": "/_nuxt/a16d9d64a6c82b3f6dab.js",
    "revision": "29dc521d95b3cd0a79847c010ccf7611"
  },
  {
    "url": "/_nuxt/d72bc045cf25ab70ea0e.js",
    "revision": "ec9e3524d4e74359f78b0f6daa1dd705"
  },
  {
    "url": "/_nuxt/d8381a1f908ca69b41d1.js",
    "revision": "448f66a45d5ea7db1a061302fc868dd7"
  },
  {
    "url": "/_nuxt/f6cbe37c5d15379b8b7d.js",
    "revision": "4528ca6da2cd2c7348236bec460331ca"
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
