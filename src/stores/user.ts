export const useUserStore = defineStore('user', () => {
  const name = ref('Vim keyboard shortcuts')

  function setName(value: string) {
    name.value = value
  }

  return {
    name,
    setName
  }
})
