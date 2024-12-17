---
title: "Two Forms of Pre-rendering"
date: "2023-03-14"
---

Next.js offers two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The key difference lies in **when** the HTML for a page is generated.

- **Static Generation**: This method generates the HTML at **build time**. The pre-rendered HTML is _reused_ for each request.
- **Server-side Rendering**: This method generates the HTML on **each request**.

Notably, Next.js allows you to **choose** which pre-rendering method to use on a per-page basis. This flexibility enables you to create a "hybrid" Next.js application by using Static Generation for most pages and Server-side Rendering for others.
