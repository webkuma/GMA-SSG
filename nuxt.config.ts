// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', 'nuxt-aos'],
  app: {
    head: {
      title: '金曲獎 - 歷屆入圍與獲獎歌曲資訊平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '使用 nuxt3-SSR 製作的金曲獎資訊網站，提供歷屆入圍作品與獲獎歌曲，音樂試聽、獎項介紹與收藏功能。' },
        { name: 'keywords', content: '金曲獎, 歷屆入圍, 獲獎歌曲, 音樂試聽, 獎項詳細介紹, 歌曲搜尋, 收藏歌曲, 獲獎排行榜' },
        { name: 'google-site-verification', content: 'WSuMpNl6jpCuKxa13V4eZYtUYtAJ7G7JY302Tax3cG0' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' },
        { rel: 'icon', type: 'image/png', href: 'https://upload.wikimedia.org/wikipedia/zh/thumb/a/a5/Emblem_of_Golden_Melody_Awards.svg/1200px-Emblem_of_Golden_Melody_Awards.svg.png' },
        { rel: 'preconnect', href: 'https://res.cloudinary.com' },
        { rel: 'dns-prefetch', href: 'https://res.cloudinary.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap' }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    },
  }
})