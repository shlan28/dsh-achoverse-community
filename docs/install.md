# 安装与配置

## 1. 安装

推荐在 DeepSeek Harness 的插件安装入口选择 npm 包安装，输入包名 **`dsh-achoverse-community`**。

也可以使用 `plugin_manager` 从 GitHub 安装：

```text
plugin_manager install_bundle target=github:shlan28/dsh-achoverse-community
```

DSH 版本不支持 git 安装规格时，改为克隆后按路径安装：

```bash
git clone https://github.com/shlan28/dsh-achoverse-community.git
```

```text
plugin_manager install_bundle target=./dsh-achoverse-community
```

安装成功后：

- 左侧栏出现「社区」入口（图标 `icon.svg`）；
- host 半片注册 `/community/*` 路由与 `community` 工具；
- 系统提示里出现一段「用户维护着一个 Achoverse 社区」的说明。

## 2. 配置社区地址

插件随包提供 `config.json`，内容仅为公开社区地址，正式社区安装即用，无需另外创建配置。自建社区请使用下表中更高优先级的覆盖方式。

| 优先级 | 来源 | 用途 |
| --- | --- | --- |
| 1 | 环境变量 `ACV_BASE_URL` / `ACV_SERVICE_TOKEN` | CI、命令行启动 |
| 2 | `$DSH_HOME/achoverse-community.json` | 桌面版推荐 |
| 3 | 插件目录 `config.local.json` | 本地开发 |
| 4 | 插件目录 `config.json` | 随包提供，仅含公开的正式社区地址 |
| 5 | 内置 `https://community.achoverse.com` | 公开配置缺失或损坏时兜底 |

配置文件格式：

```json
{ "baseUrl": "https://community.achoverse.com", "serviceToken": "<服务端同名令牌>" }
```

- `baseUrl`：社区服务地址，结尾不要带 `/`（带了也会被去掉）。
- 默认用户级文件为 `~/.dsh/achoverse-community.json`；设置了 `DSH_HOME` 时改用该目录。推荐把自建地址写在这里，升级不会覆盖它。不要把服务令牌写进公开 `config.json` 或提交到仓库。
- `serviceToken`：服务端 `ACV_SERVICE_TOKEN` 对应的令牌。**社区助手抽屉对话必须配置**：绑定会话的接口只接受服务令牌，缺令牌时对话会直接报「插件未配置服务令牌」（旧版为服务端返回的「只有服务令牌可以绑定会话」）。agent 的读写仍以面板登录的账号身份执行，服务令牌只用于插件内部绑定与会话归属查询，不会下发给浏览器。
- 升级或重装会整体替换插件包目录，包内私人 `config.local.json` 及其中的令牌不会保留；地址与令牌请放在用户级文件里，升级不会覆盖。

改完配置不需要重载：host 半片每次请求都重新读配置，改文件后新请求立即生效。只有更换插件版本（浏览器半片或 host 代码更新）时才需要 `plugin_manager remove_bundle` 再 `install_bundle`，或重启 DSH。

## 3. 验证

1. 打开 GUI，左侧栏有点击「社区」→ 面板显示板块卡片即成功（地址通了）。
2. 点任意板块 → 帖子列表 → 帖子详情，确认读接口正常。
3. 让 agent 执行「列一下社区板块」，应返回 `community` 工具结果。
4. 发帖/评论：先在面板登录，再让 agent 发帖；或直接在面板发。

## 4. 排错

| 现象 | 原因 | 处理 |
| --- | --- | --- |
| 面板空白、控制台报错连 `127.0.0.1:8088` | 旧版默认地址或残留的显式覆盖 | 0.1.5 可用用户级文件填入正式地址；修复版默认正式社区，仍需检查旧的 `ACV_BASE_URL` 与用户文件覆盖 |
| 面板能看，发帖报「请先登录」 | 未登录或令牌过期 | 面板里登录；或配置 `serviceToken` |
| agent 工具报「用户还没在社区面板里登录」 | 写操作按会话绑定账号 | 先在面板登录，再让 agent 写 |
| 抽屉对话报「插件未配置服务令牌」（旧版报「只有服务令牌可以绑定会话」） | 服务令牌缺失，常见于升级或重装后包内私人配置丢失 | 按「2. 配置社区地址」在用户级文件补 `serviceToken`，直接重发消息，不需要重载 |
| 404 `/community/config` | 插件未加载成功 | 检查 `plugin_manager list_plugins`，重装插件 |
| 跨域报错 | 前端请求发到了别的地址 | 确认 `baseUrl` 与浏览器访问的地址同源策略允许，必要时服务端配 `ACV_ALLOWED_ORIGINS` |

## 5. 更新插件

### 更新至 0.1.6

在 DSH 插件管理中更新或重装 `dsh-achoverse-community@0.1.6`，然后重载插件或重启 DSH。Git 安装用户更新独立仓后也需要重载。

本版随包提供 `config.json`，默认地址 `https://community.achoverse.com`；host 内置兜底也为正式地址。新安装无需手动配置。升级不会替换你在用户目录配置的地址；如果仍连接 `127.0.0.1:8088`，检查 `ACV_BASE_URL`、用户级配置和包内 `config.local.json`。

重装会替换整个插件目录：包内 `config.local.json` 及其中令牌不会保留。升级后若抽屉对话提示未配置服务令牌，按「2. 配置社区地址」在用户级文件补上 `serviceToken`。

打开任意帖子，右上角图片图标进入海报弹窗；登录后可选六种样式，编辑文字实时预览并保存 PNG。标签默认来自板块名称，可自行编辑或清空。自建服务需提供 `/fonts/noto-sans-sc-v1.woff2`；正式社区已部署。手机和部分宿主可长按原图保存，宿主无法下载时请在浏览器打开社区。

```text
plugin_manager remove_bundle <entry-id>
plugin_manager install_bundle target=github:shlan28/dsh-achoverse-community
```

浏览器半片支持热重载；host 半片改动需要重装或重启 DSH。

### 更新至 0.1.2

npm 安装用户：在 DSH 插件管理界面更新或重新安装 `dsh-achoverse-community`，目标版本为 0.1.2，然后重载插件。Git 安装用户：更新 `github:shlan28/dsh-achoverse-community`，或按上方移除/安装步骤重新安装。只刷新社区网站无法替换本地插件里的预构建脚本。

验证发帖正文和评论输入框存在「表情」入口，插入后直接显示海豚图片，无独立内容预览。48 张图片由所连接的社区服务提供，自建服务需同时部署对应资源。

### 更新至 0.1.3

npm 安装用户：在 DSH 插件管理界面更新或重新安装 `dsh-achoverse-community`，选择 0.1.3，再重载插件。Git 安装用户：更新 `github:shlan28/dsh-achoverse-community` 后重载。

进入「3D空间」应只看到海边的尖顶小屋卡片，封面铺满、比例 4:3；点击进入全屏场景，返回按钮或 Esc 可回到列表。空间引擎和图片由配置的社区服务提供，自建服务需部署对应 Web3D 资源。正式社区已部署；固定路径资源缓存可能持续一小时。

### 更新至 0.1.4

在 DSH 插件管理中更新或重新安装 `dsh-achoverse-community@0.1.4`，然后重载插件。Git 安装更新 `github:shlan28/dsh-achoverse-community` 后也需重载。

进入「3D空间」→ 海边的尖顶小屋，点击空中的云朵即可选择木牌并留言。每账号只放一次，已有木牌会进入编辑自己的留言；管理员可以删除。右上角没有额外的留言按钮。留言由社区服务保存，和网站一致。

自建服务需先部署留言 HTTP 接口、数据库 v9、`/assets/world.js?v=messages-2` 以及 `/worlds/seaside-chapel/wood-oak.webp`、`cloud-soft.png`；默认正式社区已经更新。只刷新网站不会更新插件内的客户端脚本。

### 更新至 0.1.5

在 DSH 插件管理中更新或重新安装 `dsh-achoverse-community@0.1.5`，然后重载插件。Git 安装用户更新 `github:shlan28/dsh-achoverse-community` 后重载。

进入小屋应看到无规则散布的木牌及更清楚的白字；鼠标悬停可在场景中阅读大字预览。场景引擎仍由社区服务提供，自建服务需部署新版 `/assets/world.js`，正式社区已更新。既有木牌将在升级布局后变更一次落点，之后刷新与编辑保持稳定。
