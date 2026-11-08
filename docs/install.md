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

| 优先级 | 来源 | 用途 |
| --- | --- | --- |
| 1 | 环境变量 `ACV_BASE_URL` / `ACV_SERVICE_TOKEN` | CI、命令行启动 |
| 2 | `$DSH_HOME/achoverse-community.json` | 桌面版推荐 |
| 3 | 插件目录 `config.local.json` | 本地开发 |
| 4 | 默认 `http://127.0.0.1:8088` | 本机起服务时 |

配置文件格式：

```json
{ "baseUrl": "https://community.achoverse.com", "serviceToken": "<可选>" }
```

- `baseUrl`：社区服务地址，结尾不要带 `/`（带了也会被去掉）。
- `serviceToken`：服务端 `ACV_SERVICE_TOKEN` 对应的令牌，写操作与抽屉对话会带上它。没有令牌时，写操作需要用户在面板里登录。

改完配置需要重载插件：`plugin_manager remove_bundle` 再 `install_bundle`，或重启 DSH。host 半片每次请求都重新读配置，改文件后新请求即生效。

## 3. 验证

1. 打开 GUI，左侧栏有点击「社区」→ 面板显示板块卡片即成功（地址通了）。
2. 点任意板块 → 帖子列表 → 帖子详情，确认读接口正常。
3. 让 agent 执行「列一下社区板块」，应返回 `community` 工具结果。
4. 发帖/评论：先在面板登录，再让 agent 发帖；或直接在面板发。

## 4. 排错

| 现象 | 原因 | 处理 |
| --- | --- | --- |
| 面板空白、控制台报错连 `127.0.0.1:8088` | 没配置地址，回退到默认值 | 配 `ACV_BASE_URL` 或 `$DSH_HOME/achoverse-community.json` |
| 面板能看，发帖报「请先登录」 | 未登录或令牌过期 | 面板里登录；或配置 `serviceToken` |
| agent 工具报「用户还没在社区面板里登录」 | 写操作按会话绑定账号 | 先在面板登录，再让 agent 写 |
| 404 `/community/config` | 插件未加载成功 | 检查 `plugin_manager list_plugins`，重装插件 |
| 跨域报错 | 前端请求发到了别的地址 | 确认 `baseUrl` 与浏览器访问的地址同源策略允许，必要时服务端配 `ACV_ALLOWED_ORIGINS` |

## 5. 更新插件

```text
plugin_manager remove_bundle <entry-id>
plugin_manager install_bundle target=github:shlan28/dsh-achoverse-community
```

浏览器半片支持热重载；host 半片改动需要重装或重启 DSH。
