import type { ColModuleShortcuts } from '~/types'

const shortcuts: ColModuleShortcuts[] = [
  [
    {
      title: '移动光标',
      shortcuts: [
        { key: 'h', description: '光标向左移动一个字符' },
        { key: 'j', description: '光标向下移动一个字符' },
        { key: 'k', description: '光标向上移动一个字符' },
        { key: 'l', description: '光标向右移动一个字符' },
        { key: '0', description: '移动到行首' },
        { key: '^', description: '移动到本行第一个不是 blank 字符的位置（改建为 shift + h）' },
        { key: '$', description: '移动到行尾' },
        { key: 'g_', description: '移动到本行最后一个不是 blank 字符的位置（改建为 shift + l）' },
        { key: 'e', description: '移动到单词的结尾' },
        { key: 'b', description: '移动到上一个单词的开头' },
        { key: 'w', description: '移动到单词的开头' },
        { key: 'ge', description: '移动到上一个单词的结尾' }
      ]
    },
    {
      title: '进入插入模式',
      shortcuts: [
        { key: 'i', description: '在光标前插入' },
        { key: 'a', description: '在光标后插入' },
        { key: 'I', description: '在光标所在行的行首插入' },
        { key: 'A', description: '在光标所在行的行尾插入' },
        { key: 'o', description: '在光标所在行的上一行行首插入' },
        { key: 'O', description: '在光标所在行的下一行行首插入' }
      ]
    },
    {
      title: '退出插入模式',
      shortcuts: [
        { key: 'esc', description: '退出插入模式，进入正常模式' },
        { key: 'ctrl + [', description: '退出插入模式，进入正常模式' }
      ]
    }
  ],
  [
    {
      title: '复制、粘贴、剪切',
      shortcuts: [
        { key: 'yy', description: '复制当前行' },
        { key: 'p', description: '粘贴' },
        { key: 'dd', description: '剪切当前行' }
      ]
    },
    {
      title: '操作',
      shortcuts: [
        { key: 'd', description: '删除' },
        { key: 'c', description: '删除并进入插入模式' },
        { key: 'y', description: '复制' }
      ]
    }
  ]
]

export default shortcuts
