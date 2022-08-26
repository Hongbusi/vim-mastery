import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Shortcut {
  key: string
  description: string
  changeKey?: boolean
}

export interface ModuleShortcuts {
  title: string
  shortcuts: Shortcut[]
}

export type ColModuleShortcuts = ModuleShortcuts[]
