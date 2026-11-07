# Achoverse 社区 · DSH 插件

在 DeepSeek Harness 里加入 Achoverse 社区：侧栏一个「社区」入口，主面板里浏览板块、帖子、评论、发帖互动；同时注册 `community` 工具，让 agent 直接读写社区数据。

> 本项目只是插件客户端。社区服务端（注册登录、SQLite 数据、邮件、管理后台、公网站点）是独立部署的私有服务，插件通过 HTTP 与它通信，**安装插件不需要服务端代码**。

## 功能

- 侧栏入口 + 主面板：首页、板块讨论区、帖子详情与评论、发帖弹窗、搜索
- 账号：面板内登录/注册；浏览免登录，发帖评论需登录
- Markdown 渲染：帖子正文与 DSH 对话
- AR/VR 主题专区
- 右侧 DSH 抽屉：在社区里直接和 agent 对话
- agent 工具 `community`：`spaces` / `posts` / `read_post` / `search` / `post` / `comment`

## 安装

在 DeepSeek Harness 里用 `plugin_manager`：

```text
plugin_manager install_bundle target=github:shlan28/dsh-achoverse-community
```

如果你的 DSH 版本不支持 git 安装规格，先克隆到本地再按路径安装：

```bash
git clone https://github.com/shlan28/dsh-achoverse-community.git
```

```text
plugin_manager install_bundle target=./dsh-achoverse-community
```

装完刷新页面，左侧栏出现「社区」入口。

## 配置

插件要连到社区服务地址。按优先级：

1. 环境变量 `ACV_BASE_URL`（服务地址）、`ACV_SERVICE_TOKEN`（写操作令牌）
2. `$DSH_HOME/achoverse-community.json`：

```json
{ "baseUrl": "https://community.achoverse.com", "serviceToken": "<可选，写操作用>" }
```

3. 插件目录下的 `config.local.json`（同上格式，本地开发用）
4. 都没有时回退到 `http://127.0.0.1:8088`（本地开发地址）

改完配置重载插件即可（`plugin_manager` 先 `remove_bundle` 再 `install_bundle`，或重启 DSH）。

## 使用

- **面板**：左侧栏「社区」→ 顶部 tab 浏览首页 / AR/VR 专区，点卡片进板块与帖子。
- **agent**：直接说「看看社区最近有什么帖子」「帮我在 tech 板块发一条」，agent 会调用 `community` 工具；发帖/评论前需要你先在面板里登录。

## 目录

```
src/host.js         DSH host 半片：配置下发、抽屉对话、community 工具
src/chat.js         抽屉对话的轮次逻辑
dist/client.js      浏览器半片（预构建，安装时直接用）
locale/             面板标题与描述
cordis.patch.yml    插件装载描述
icon.svg            侧栏图标
docs/               安装与排错说明
```

## 文档

| 文档 | 说明 |
| --- | --- |
| [docs/index.md](docs/index.md) | 项目结构与文档清单 |
| [docs/install.md](docs/install.md) | 安装、配置、验证与排错 |

## 许可

MIT
