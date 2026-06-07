---
title: Why HTTP status codes are not network errors
layout: post.html
seo:
  title: Why HTTP status codes are not network errors | Rivaldi Putra
date: 2023-12-17T11:51:16+07:00
category: Engineering
excerpt: Fetch only rejects for network failures. HTTP responses like 401, 403, and 404 still resolve, so application code needs to inspect the response before parsing it.
description: A practical note on why fetch does not throw for HTTP status errors like 404, and how to handle that case with async and await.
tags:
  - posts
---

When you call a REST API with `fetch`, `async`, and `await`, a `404` response can look confusing at first. The request failed from the application's point of view, but the `catch` block does not run.

That is expected behavior. `fetch` rejects only when the browser cannot complete the network request. HTTP status codes such as `401`, `403`, and `404` are still valid responses from the server.

## The common mistake

This example intentionally uses the wrong endpoint path:

```js
const loadUsers = async () => {
  try {
    const response = await fetch("https://randomuser.me/apui/?results=5");
    console.log(response.status);

    return response.json();
  } catch (error) {
    console.log("Network error", error);
  }
};
```

The URL contains `apui` instead of `api`, so the server can return `404`. Even then, the browser received a response successfully. Because of that, `fetch` resolves the promise and execution stays inside the `try` block.

## Check the response before parsing

If your application treats non-2xx responses as errors, check `response.ok` or inspect `response.status` before calling `response.json()`.

```js
const loadUsers = async () => {
  try {
    const response = await fetch("https://randomuser.me/apui/?results=5");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};
```

`response.ok` is `true` for status codes in the `200` to `299` range. For anything outside that range, you can throw your own error and handle it in the `catch` block.

## The rule to remember

Use `catch` for network failures, such as no connection, DNS failure, or a blocked request. Use `response.ok` or `response.status` for server responses that completed but returned an application error.
