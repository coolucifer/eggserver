importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/072c3e3d109f8ffdcd7e.js",
    "revision": "3ee65d5cfdeb16efdbea352db71b5aa1"
  },
  {
    "url": "/_nuxt/16636d63593a8411ddd3.js",
    "revision": "01eb36f00dca445c0d0451dbb6524b1d"
  },
  {
    "url": "/_nuxt/1927a27c9d6ec730c07d.js",
    "revision": "ad965ada571e3921eb3cbf0b5fc66034"
  },
  {
    "url": "/_nuxt/20b4d31fb2442d6636f9.js",
    "revision": "ef6fe823c3ec9d112f0dda1e44574f6a"
  },
  {
    "url": "/_nuxt/448872932f99a59d9b5f.js",
    "revision": "d7037d74ad2aac37782f3f4d028863d1"
  },
  {
    "url": "/_nuxt/52ad86aa3b55673d9c7c.js",
    "revision": "404926a7b03e5f9a6d070cda4b98ded5"
  },
  {
    "url": "/_nuxt/530bbcb0da3684bc9d74.js",
    "revision": "67177f027fc4309faf5a7667b913aef5"
  },
  {
    "url": "/_nuxt/665b78936a29ee174c5a.js",
    "revision": "c6a511fbe77bacbe024afe5eb8c530b4"
  },
  {
    "url": "/_nuxt/669be96fb6a8dfa47935.js",
    "revision": "72eae8eec9180700cc7c5c978c8fc273"
  },
  {
    "url": "/_nuxt/67f45135c38bbdda3562.js",
    "revision": "bb8ec66f5038be2118bb8997ec9c125e"
  },
  {
    "url": "/_nuxt/840bc8af981b1a96a2a0.js",
    "revision": "730d777e1ea49e0a20f0fdc5b282604c"
  },
  {
    "url": "/_nuxt/9c10de215ed4b644e3e8.js",
    "revision": "75346ddfba6708b0990c370473c282cb"
  },
  {
    "url": "/_nuxt/c1238c99646f7dc7d2f9.js",
    "revision": "6e07ad9d87c18a933c99c44beae8dfcd"
  },
  {
    "url": "/_nuxt/c83266433b5bad6e9962.js",
    "revision": "6f7ea13f8ed76ee4c4edb8b30098d787"
  },
  {
    "url": "/_nuxt/caa8f7ef4107239f2516.js",
    "revision": "440e55a0e641f328575c2af1ac41bb30"
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
