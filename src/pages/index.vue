<script setup lang="ts">
import allShortcuts from '../shortcuts'
</script>

<template>
  <div class="flex border border-gray-800 shadow-lg">
    <div v-for="(colShortcuts, index) in allShortcuts" :key="index" class="flex-1 p-6">
      <template v-if="index === 0">
        <div class="flex justify-between items-center py-4 text-xl">
          <h2 class="font-600">
            Vim keyboard shortcuts
          </h2>
          <a class="mx-2" rel="noreferrer" href="https://github.com/Hongbusi/vim-keyboard-shortcuts" target="_blank" title="GitHub">
            <div i-carbon-logo-github />
          </a>
        </div>
        <a href="https://learn.cuixueshe.com/" class="pb-1px text-sm border-b border-gray-200/80 dark:border-gray-800/50 hover:border-gray-200" target="_blank">整理于崔大的键盘侠课程。</a>
      </template>

      <div v-for="shortcuts in colShortcuts" :key="shortcuts.title" class="mt-4">
        <div class="pb-2 mb-2 border-b-2 border-gray-200 dark:border-gray-800">
          {{ shortcuts.title }}
        </div>
        <div
          v-for="(shortcut, i) in shortcuts.shortcuts"
          :key="i"
          class="relative flex p-1 mt-1px text-xs rounded-1px"
          :class="i % 2 === 0 && 'bg-gray-600/10'"
        >
          <div class="w-30%">
            {{ shortcut.key }}
          </div>
          <div class="w-70%">
            {{ shortcut.description }}
          </div>
          <span v-if="shortcut.changeKey" class="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-red-500 rounded-full" />
        </div>
      </div>
    </div>
  </div>
</template>
