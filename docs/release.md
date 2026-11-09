# npm 与 Git 发布流程

## 发布目标

让通过 Git、npm 官方源和 npmmirror 镜像安装的用户都能获取同一版本的插件。发布完成的标准是：独立仓已推送、npm 官方包可下载、已手动触发一次 npmmirror 同步，并验证镜像已提供目标版本。

表情图片由社区服务提供；涉及服务或资源的功能，先部署社区，再发布插件。源码构建在维护源码的工作区完成，独立仓只接收公开运行文件。

## 1. 同步与准备版本

在源码工作区执行构建、相应测试及 `npm run sync:plugin`。确认运行文件已同步；独立仓不应出现 server、data、环境文件、用户令牌或本地配置。

随后在本独立仓升级 `package.json` 版本，并在 `docs/index.md` 更新功能说明。已发布的 npm 版本不能覆盖，需要使用新的版本号。

以下命令均在独立仓目录运行：

```bash
npm pack --dry-run --json
git diff --check
git status --short
```

检查打包清单仅包含 package.json 白名单内的插件运行文件、README 与公开文档。确认 `docs/release.md` 也在包内，索引中的发布流程链接不会失效。

## 2. 提交并推送独立仓

提交本次明确需要发布的文件，再推送 main。提交前检查变更内容，避免把其他未完成工作带入发布。

```bash
git push origin main
git ls-remote origin refs/heads/main
```

核对远程 main 与本次发布提交一致。

## 3. 发布到 npm 官方源并验证

```bash
npm publish --access public --tag latest --registry=https://registry.npmjs.org
npm view dsh-achoverse-community version dist-tags --json --registry=https://registry.npmjs.org
```

确认目标版本和 latest 标签正确，再从官方源实际下载该版本，检查包清单、dist.integrity 及 client.js 哈希与发布构建一致。npm 返回发布成功后仍可能需要等待注册表处理，不应在官方版本尚不可读时立即判定发布完成。

## 4. 必做：手动触发一次 npmmirror 同步

**每次 npm 官方发布成功并确认目标版本可读后，都必须手动触发一次镜像同步，不只依赖自动同步。**

打开本包同步页面，按页面提示触发同步并查看任务状态：

[手动同步 dsh-achoverse-community](https://npmmirror.com/sync/dsh-achoverse-community)

也可在已有 cnpm 工具的环境中执行：

```bash
cnpm sync dsh-achoverse-community
```

上述网页和命令为二选一的手动触发方式。npmmirror 官方说明见[镜像站「同步模块」](https://npmmirror.com/)。

## 5. 验证镜像同步完成

先比较两边的 latest 与版本；以下命令不会修改全局 registry：

```bash
npm view dsh-achoverse-community version dist-tags --json --registry=https://registry.npmjs.org
npm view dsh-achoverse-community version dist-tags --json --registry=https://registry.npmmirror.com
```

然后指定本次发布版本，比较官方与镜像的包完整性（将下面版本改为本次目标版本）：

```bash
npm view dsh-achoverse-community@0.1.2 dist.integrity --registry=https://registry.npmjs.org
npm view dsh-achoverse-community@0.1.2 dist.integrity --registry=https://registry.npmmirror.com
```

镜像能查询到目标版本、latest 一致且 dist.integrity 一致后，再从镜像实际下载该版本验证可用。**触发任务成功不代表同步已经完成。** 如仍是旧版本或暂时 404，查看同步页面日志，适当等待后复查；未通过就把镜像步骤记为待完成，不重复发布 npm 来解决镜像延迟。

## 6. 发布记录与用户更新

记录版本、Git 提交、官方 npm 下载校验、手动同步时间/任务结果及镜像验收结果。通知用户更新或重新安装插件并重载 DSH；只刷新社区网站无法替换本地插件的预构建脚本。

## 本文档维护 Todo

- [x] `docs/release.md`：完整发布流程，包含手动同步 npmmirror 和同步后验证。
- [x] `docs/index.md`：提供维护者发布流程入口。
- [x] `package.json`：打包白名单包含发布文档，确保包内文档链接有效。
