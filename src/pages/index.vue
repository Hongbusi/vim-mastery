<script setup lang="ts">
import config from '~/config'
</script>

<template>
  <Header />

  <div class="grid grid-cols-3 mt-10">
    <div v-for="(item, index) in config" :key="index" class="mb-10">
      <table class="border-collapse border-spacing-x-6px border-spacing-y-3px leading-130%">
        <tbody>
          <tr>
            <td />
            <td class="pb-2 text-2xl">
              {{ item.title }}
            </td>
          </tr>
          <tr v-for="(command, j) in item.commands" :key="j" class="leading-32px">
            <td class="w-20% text-right">
              <span
                v-for="key in command.keys"
                :key="key"
                class="inline-block pt-1px px-2 mr-2 leading-20px border border-[#ccc] border-b-2 border-b-[#bbb] border-rounded-3px"
              >
                {{ key }}
              </span>
            </td>
            <td class="pr-6 w-70%">
              <span class="relative">
                {{ command.description }}
                <span v-if="command.changeKey" class="absolute -top-1 -right-5 w-16px h-16px leading-16px text-center text-xs bg-red-400 rounded-sm">改</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
