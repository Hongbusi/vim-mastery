import type { ModuleShortcutKeys } from '~/types'

const config: ModuleShortcutKeys[] = [
  {
    title: '移动光标',
    commands: [
      { keys: ['k'], description: '上移光标' },
      { keys: ['j'], description: '下移光标' },
      { keys: ['h'], description: '左移光标' },
      { keys: ['l'], description: '右移光标' },
      { keys: ['0'], description: '移动到行首' },
      { keys: ['$'], description: '移动到行尾' },
      { keys: ['^'], description: '移动到本行第一个不是 blank 字符的位置' },
      { keys: ['g_'], description: '移动到本行最后一个不是 blank 字符的位置' },
      { keys: ['H'], description: '移动到本行第一个不是 blank 字符的位置', changeKey: true },
      { keys: ['L'], description: '移动到本行最后一个不是 blank 字符的位置', changeKey: true }
    ]
  },
  {
    title: '插入模式',
    commands: [
      { keys: ['i'], description: '从光标前插入字符' },
      { keys: ['I'], description: '从行首插入字符' },
      { keys: ['a'], description: '从光标后插入字符' },
      { keys: ['A'], description: '从行尾插入字符' },
      { keys: ['o'], description: '从行后插入字符' },
      { keys: ['O'], description: '从行前插入字符' },
      { keys: ['ea'], description: '从当前单词末尾插入字符' },
      { keys: ['esc'], description: '退出插入模式' },
      { keys: ['ctrl + ['], description: '退出插入模式' }
    ]
  }
]

export default config
