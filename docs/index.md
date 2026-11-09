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

## 0.1.1 更新

面板顶栏新增「反馈」入口，位于 DSH 助手左侧。登录后可向管理员提交反馈；管理员可在后台「反馈内容」页查看。提交成功显示确认提示，失败保留输入。需要连接已支持反馈接口的社区服务，正式社区已更新。

## 0.1.2 更新

新增 48 张海豚表情，发帖正文与评论支持分类搜索及光标处插入。表情直接显示在输入框中，可整张删除、选区替换、复制剪切粘贴与撤销重做；不再使用独立内容预览。旧内容格式保持兼容，图片从配置的社区服务加载，正式社区已部署所需资源。

更新插件后需重载或重新安装，使新版预构建浏览器半片生效。仅刷新社区网站不会更新本地 DSH 插件。
