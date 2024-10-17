/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    // all directories and extensions will correspond to your Nuxt config
    "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/plugins/**/*.{js,ts,mjs}",
    "{srcDir}/composables/**/*.{js,ts,mjs}",
    "{srcDir}/utils/**/*.{js,ts,mjs}",
    "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "{srcDir}/app.config.{js,ts,mjs}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.unsplash.com/photo-1684690640456-381bc7183e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format%2Ccompress&fit=crop&w=1599&h=594')",
      },
      colors: {
        'custom-gold': "#eacd76",
        'main': "#ffbf00f3", // 主色
        'accent': "#FFD785", // 副色
        'cg1'  :'#FFF0D1',
        'cg2'  :'#FFE3AB',
        'cg3'  :'#DBAF54',
        'cg4'  :'#BA8C2D',
        'cg5'  :'#977100',
      },
      boxShadow: {
        // 水平, 垂直, 陰影模糊半徑, 陰影擴散半徑
        'custom-inner': "inset -2px 2px 1px 1px rgb(0 0 0 / 0.5)",
        'custom-bottom': "inset 0px -1px 1px 0px rgb(0 0 0 / 0.5)",
      },
      fontFamily:{
          /* font-family: 'EB Garamond', serif; */
        'custom-fontFamily': "EB Garamond",
      },

    },
  },
  darkMode: true,
}
