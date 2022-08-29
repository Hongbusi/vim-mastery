import type { ColModuleShortcuts } from '~/types'

const shortcuts: ColModuleShortcuts[] = [
  [
    {
      title: '移动光标',
      shortcuts: [
        { key: 'k', description: '上移光标' },
        { key: 'j', description: '下移光标' },
        { key: 'h', description: '左移光标' },
        { key: 'l', description: '右移光标' },
        { key: '0', description: '移动到行首' },
        { key: '$', description: '移动到行尾' },
        { key: '^', description: '移动到本行第一个不是 blank 字符的位置' },
        { key: 'g_', description: '移动到本行最后一个不是 blank 字符的位置' },
        { key: 'H', description: '移动到本行第一个不是 blank 字符的位置', changeKey: true },
        { key: 'L', description: '移动到本行最后一个不是 blank 字符的位置', changeKey: true }
      ]
    },
    {
      title: '插入模式',
      shortcuts: [
        { key: 'i', description: '从光标前插入字符' },
        { key: 'I', description: '从行首插入字符' },
        { key: 'a', description: '从光标后插入字符' },
        { key: 'A', description: '从行尾插入字符' },
        { key: 'o', description: '从行后插入字符' },
        { key: 'O', description: '从行前插入字符' },
        { key: 'ea', description: '从当前单词末尾插入字符' },
        { key: 'esc', description: '退出插入模式' },
        { key: 'ctrl + [', description: '退出插入模式' }
      ]
    }
  ],
  [
    {
      title: '剪切和粘贴',
      shortcuts: [
        { key: 'yy', description: '复制一行' },
        { key: '2yy', description: '复制二行' },
        { key: 'p', description: '在光标后粘贴' },
        { key: 'P', description: '在光标前粘贴' },
        { key: 'dd', description: '剪切一行' },
        { key: '2dd', description: '剪切二行' }
      ]
    }
  ]
]

export default shortcuts
