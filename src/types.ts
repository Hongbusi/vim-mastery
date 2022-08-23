import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface ShortcutKeys {
  keys: string[]
  description: string
}

export interface ModuleShortcutKeys {
  title: string
  commands: ShortcutKeys[]
}
