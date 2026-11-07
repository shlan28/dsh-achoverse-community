# Achoverse 社区 · DSH 插件

在 DeepSeek Harness 里加入 Achoverse 社区：侧栏入口、板块/帖子/评论面板，以及让 agent 直接读写社区的 `community` 工具。

## 文档

| 文档 | 说明 |
| --- | --- |
| [install.md](install.md) | 安装、配置、验证与排错 |
| [../README.md](../README.md) | 项目简介、功能、安装入口 |

## 目录

```
src/host.js         DSH host 半片：/community/config、抽屉对话 SSE、community 工具、系统提示段
src/chat.js         抽屉对话的轮次逻辑（可脱离 DSH 运行时测试）
dist/client.js      浏览器半片（预构建产物，安装即用；源码在私有服务端仓库构建）
locale/zh.json      面板标题与描述（中文，DSH 语言文件）
locale/en.json      面板标题与描述（英文）
cordis.patch.yml    插件装载描述（host + 浏览器两个半片）
icon.svg            侧栏图标
docs/               安装与排错说明
```

## 约定

- 插件**不包含服务端代码**：host 半片与浏览器半片都只通过 HTTP 访问 `ACV_BASE_URL` 指向的社区服务。
- 浏览器半片连哪个地址由 host 半片下发：面板启动时请求 `/community/config`，取 `baseUrl`。
- `dist/client.js` 是预构建产物，公开仓库不含前端源码；需要改面板样式/组件时在私有服务端仓库构建后同步，见私有仓库 `scripts/sync-plugin.mjs`。
