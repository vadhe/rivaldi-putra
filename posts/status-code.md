---
title: How to handle status code as not considered a network error
layout: post.html
seo:
  title: How to handle status code as not considered a network error | Rivaldi Putra
date: 2023-12-17T11:51:16+07:00
category: Engineering
excerpt: Sometimes, if we fetch a REST API from the server (backend) using async await it makes us confused. why is the catch block not invoked? in this article, I will try to explain what I learned from that.
description: A practical note on why fetch does not throw for HTTP status errors like 404, and how to handle that case with async and await.
tags:
  - posts
---

Sometimes, if we fetch a REST API from the server (backend) using async await it makes us confused. why is the catch block not invoked?  in this article, I will try to explain what I learned from that.

## What is async Await

async/await is simply syntactic sugar for handling operations on promises in JavaScript. We use it in most situations, especially for fetching data from the server. There are other ways to handle asynchronous fetch operations, such as using callbacks instead of try-catch. but in this article, I will use try catch because for me this is more readable than using callback if you want to learn callback you can follow this [link](https://javascript.info/promise-chaining)

take a look at this example

```js
const data = async () => {
  try {
    const data = await fetch('https://randomuser.me/apui/?results=5');
    console.log(data)
    return data.json();
  } catch {
    console.log('error');
  }
};
```
In this code, I intentionally made a typo for the URL API. As we see we expect the catch block will invoke because there is error 404 but it does not invoke instead it still invokes the try block. why?  because 404 is not considered a network error. it is successful in requesting the server but there is no path https://randomuser.me/apui/?results=5 and  the server sends a response 404. and then to make a catch block invoke we need to throw an error in a try block if there is an error for example how to handle it like this code below
```
const data = async () => {
  try {
    const data = await fetch('https://randomuser.me/apui/?results=5');
    if(data.status === 404){
      throw data
    }
    return data.json();
  } catch (error){
    console.log(error.status);
  }
};
```
this case it will same if the server response error  403, 401 and 404.
so that's it from me this is just short article but I hope you can learn something from this article
