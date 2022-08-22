export const useUserStore = defineStore('user', () => {
  const name = ref('vim-memo')

  function setName(value: string) {
    name.value = value
  }

  return {
    name,
    setName
  }
})
