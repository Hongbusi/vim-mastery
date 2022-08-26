<script setup lang="ts">
import shortcuts from '../shortcuts'
import { toggleDark } from '~/composables'
</script>

<template>
  <div class="flex border border-gray-200 dark:border-gray-800 shadow-lg">
    <div v-for="index in 3" :key="index" class="flex-1 p-6">
      <div v-if="index === 1" class="flex justify-between items-center py-4 text-2xl">
        <h2 class="font-600">
          Vim keyboard shortcuts
        </h2>
        <div class="flex">
          <button class="mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
            <div i="carbon-sun dark:carbon-moon" />
          </button>
          <a class="mx-2" rel="noreferrer" href="https://github.com/Hongbusi/vim-cheat-sheet" target="_blank" title="GitHub">
            <div i-carbon-logo-github />
          </a>
        </div>
      </div>

      <div v-for="item in 2" :key="item" class="mt-4">
        <div class="pb-2 mb-2 border-b-2 border-gray-200 dark:border-gray-800">
          光标
        </div>
        <div
          v-for="j in 10"
          :key="j"
          class="flex p-1 mt-1px text-xs rounded-1px"
          :class="j % 2 !== 0 && 'bg-gray-600/10'"
        >
          <div class="w-30%">
            j
          </div>
          <div class="w-70%">
            左边移动
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
