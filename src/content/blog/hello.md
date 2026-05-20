---
title: 'Hello, world'
description: '博客刚上线 — 为什么从 Next.js 搬来 Astro，以及这个站接下来想成为什么样子。'
pubDate: '2026-05-20'
subtitle: 'first transmission · 博客上线'
tag: 'meta'
featured: true
readMinutes: 2
---

这个博客刚搭好 — 主题选了 **Astro**，部署在 **GitHub Pages**。技术细节后面会单独写一篇。

接下来的内容会按首页提到的三个方向慢慢沉淀：**前端工程踩坑**、**AI 视觉设计**、**跨界笔记**。

更新会比较慢，每篇都按 _「过半年回头看仍然觉得有用」_ 的标准来写 — 欢迎下次再来。

## 为什么从 Next.js 搬到 Astro

主要是 bundle size。这个站 99% 的页面是静态 markdown，没有客户端状态，没有用户交互。把 React + App Router 这一整套带上来，得到的是 `~410kb` 的 JS bundle 和一个 4s 的 cold build —— 投入产出比不对。

Astro 用 islands 策略，默认零 JS，需要交互的小块（比如顶部时钟、状态栏）单独打包成"岛"。同一个站，bundle 从 `~410kb` 降到 `~12kb`。这件事我会写得更细。

## 写作节奏

不追热点。**当天发生的事，半年后大概率没人记得。** 这里会比较慢。
