<script setup>
import { RouterLink, RouterView } from "vue-router";
import SearchBox from "./components/SearchBox.vue";
import Menu from "./components/Menu.vue";
</script>

<template>
  <header
    class="fixed top-0 left-0 h-16 leading-10 w-full pl-4 pr-3 flex items-center justify-between bg-[#1b1b1b] z-50">
    <div class="flex items-center space-x-4 pr-1">
      <!-- logo -->
      <RouterLink to="/" class="flex flex-wrap items-center gap-4">
        <img
          alt="GMA logo"
          class="logo"
          src="https://upload.wikimedia.org/wikipedia/zh/thumb/a/a5/Emblem_of_Golden_Melody_Awards.svg/640px-Emblem_of_Golden_Melody_Awards.svg.png"
          width="40"
          height="40" />
        <span class="text-white text-xl hidden sm:inline-block gap-2">
          <span class="text-[#EACD76]">Golden Melody Awards </span>
        </span>
      </RouterLink>
      <!-- title -->
    </div>
    <!-- 搜尋框 -->
    <SearchBox />
    <!-- Menu -->
    <div class="flex items-center justify-end">
      <Menu />
    </div>
  </header>
  <div class="h-16"></div>
  <RouterView />
</template>
<style>
html,
body {
  height: calc(100vh - 64px); /* 修正為 64px 而非 64xpx */
  margin: 0;
  font-family: Noto Serif, sans-serif, serif;
  padding-right: 0 !important; /* 側欄開啟的偏移 */
  background-color: #fff0d1; /* 替代 bg-cg1 */
  overflow-x: hidden; /* 替代 overflow-x-hidden */
  overflow-y: auto; /* 替代 overflow-y-auto */
  min-width: 320px; /* 替代 min-w-[320px] */
  max-width: 100%; /* 替代 max-w-full */
}
</style>
