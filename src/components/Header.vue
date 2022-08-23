<script setup lang="ts">
import { toggleDark } from '~/composables'
</script>

<template>
  <header class="flex justify-between items-center">
    <h3 class="text-3xl">
      Vim Cheat Sheet
    </h3>
    <div class="flex text-xl">
      <button class="mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
      <a class="mx-2" rel="noreferrer" href="https://github.com/Hongbusi/vim-cheat-sheet" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>
    </div>
  </header>
</template>
