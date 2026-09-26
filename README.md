# 羡鱼的小水洼

这个博客已经改造成 Hexo 项目。日常写作只需要编辑 Markdown，不再需要手写整页 HTML。

## 开始使用

```bash
npm install
npm run server
```

浏览器打开 `http://localhost:4000` 即可预览。

## 新建文章

```bash
npm run new -- "文章标题"
```

Hexo 会在 `source/_posts/` 下生成 Markdown 文件。文件开头的 Front Matter 用于填写文章信息：

```yaml
---
title: 文章标题
date: 2026-09-24 20:00:00
categories:
  - 日常
description: 一句话摘要，会显示在首页和搜索结果中。
eyebrow: DAILY · 日常
---
```

从第二个 `---` 之后直接用 Markdown 写正文即可。支持标题、引用、列表、链接、图片和代码块。

## 常用命令

```bash
npm run server   # 本地预览，修改后自动刷新
npm run build    # 生成可部署的网站到 public/
npm run clean    # 清理生成缓存
```

站点名称、网址、文章链接格式等全局设置在 `_config.yml`；页面模板和样式位于 `themes/xiaoshuiwa/`；文章位于 `source/_posts/`。

正式部署前，请把 `_config.yml` 中的 `url` 改成你的真实域名。
