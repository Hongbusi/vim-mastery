<template>
  <Header />

  <div class="grid grid-cols-3 mt-10">
    <div v-for="i in 10" :key="i" class="mb-10">
      <table class="border-collapse border-spacing-x-6px border-spacing-y-3px leading-130%">
        <tbody>
          <tr>
            <td />
            <td class="pb-2 text-2xl">
              光标
            </td>
          </tr>
          <tr v-for="j in 20" :key="j" class="leading-32px">
            <td class="w-40%">
              <span v-for="s in 2" :key="s" class="inline-block pt-1px px-2 mr-2 leading-20px border border-[#ccc] border-b-2 border-b-[#bbb] border-rounded-3px">f</span>
            </td>
            <td class="pr-6 w-60%">
              左移光标左移r
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
