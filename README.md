# Vim keyboard shortcuts

[Online Preview](https://vim.hongbusi.com)

## Mac Setting

- 快速移动：
  - 配置：[https://github.com/VSCodeVim/Vim#mac](https://github.com/VSCodeVim/Vim#mac)；
  - 修改键盘设置：系统偏好设置 -> 键盘 -> 按键重复 & 重复前延迟都调到最大。

## [Karabiner Elements](https://github.com/pqrs-org/Karabiner-Elements)

- `ctrl` 和 `caps` 调换位置；
- `Left ctrl + hjkl to arrow keys Vim`。

## VSCode Setting

``` json
{
  "vim.normalModeKeyBindings": [
    {
      "before": ["H"],
      "after": ["^"]
    },
    {
      "before": ["L"],
      "after": ["g", "_"]
    }
  ]
}
```

## License

[MIT](./LICENSE) License © 2022 [Hongbusi](https://github.com/Hongbusi) 
