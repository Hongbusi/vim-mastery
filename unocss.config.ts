import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['link', 'inline-block cursor-pointer select-none opacity-80 transition duration-200 ease-in-out hover:opacity-100 hover:text-red-400'],
    ['vim-keys', 'inline-block pt-1px px-4px leading-5 border border-[#ccc] border-b-2 border-b-[#bbb] border-rounded-3px']
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
