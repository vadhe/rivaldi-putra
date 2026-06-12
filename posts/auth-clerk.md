---
title: What I Learned About JWT After Moving My Go Auth to Clerk
layout: post.html
seo:
  title: What I Learned About JWT After Moving My Go Auth to Clerk | Rivaldi Putra
date:  2026-6-09T11:52:04+07:00
category: Authentication
excerpt: Moving from custom Go auth to Clerk taught me the importance of a single source of truth and how stateless JWT verification actually works.
description: Learn why mixing custom authentication with Clerk complicates your backend, and how to leverage stateless JWT validation in Go for a cleaner architecture.
tags:
  - posts
---


#### I initially built my own authentication system in Go.

The mechanism was pretty straightforward: users could register with a username and password, then log in using JWT. I also added email verification using Gmail SMTP, and a reset password flow using tokens.

At first, this felt like a normal authentication setup. I had control over the login flow, the user table, password handling, email verification, and password reset logic.

But later, I started thinking about adding a simpler login option, such as allowing users to sign in directly with email or OAuth. That was when things started to feel more complicated.

## The Initial Problem

When I tried to support another login method, I realized that building and maintaining authentication by myself was not as simple as I first thought.

I had to think about many things:

* how users register
* how users verify their email
* how password reset works
* how OAuth should be connected
* how sessions or tokens are handled
* how user data stays consistent in my own database

Because of that, I started trying Clerk as an authentication provider.

## My Initial Expectation

At first, I thought users could log in or register using Clerk, while my existing custom authentication system would still work at the same time.

My expectation was that both Clerk and my custom auth could somehow stay synchronized with my application database.

So in my mind, the flow would be something like this:

* some users register using my custom auth
* some users register or log in using Clerk
* both systems store or sync the user into my own database
* the backend can accept both authentication sources

But after thinking about it more deeply, I realized this approach could become messy.

## The Confusing Part

The main problem was the source of truth.

If I have two authentication systems, which one should be trusted as the real source of user identity?

For example, a user might exist in Clerk but not in my database. Or maybe the user exists in my database but something fails during the synchronization process. There could also be cases where the email, user ID, or auth state becomes inconsistent between the two systems.

That made me realize that mixing custom auth and Clerk auth could make the system harder to reason about.

It was not only about making login work. It was also about handling failure cases, data consistency, and deciding which system owns the authentication logic.

## What I Understand Now

The approach that makes the most sense to me is to let Clerk fully handle authentication.

That means Clerk is responsible for things like:

* login
* register
* OAuth
* email verification
* session management
* issuing tokens

Then my backend only needs to validate the token from Clerk and use the authenticated user ID inside my own application.

This is also where I understood JWT better.

Before this, I thought my backend might need to call Clerk every time it wanted to validate whether a token was valid. But JWT does not always work like that.

JWT can be stateless.

If the token is signed using an asymmetric algorithm, the backend can validate it using a public key. That means the backend does not need to ask Clerk on every request just to check the token.

The backend can verify:

* whether the token signature is valid
* whether the token is expired
* whether the issuer is correct
* whether the audience is correct
* which user the token belongs to

After that, the backend can use the Clerk user ID as the identity for the request.

## The Key Lesson

The biggest lesson for me is that authentication should have one clear source of truth.

Trying to combine my own custom auth and Clerk at the same time might work technically, but it adds unnecessary complexity.

For my case, it is cleaner to let Clerk handle authentication fully, while my Go backend focuses on validating the JWT and managing application data.

So my database can still have a `users` table, but it should not own the password or authentication logic anymore. It only needs to store application-specific user data, linked by the Clerk user ID.

## Conclusion

This experience helped me understand that JWT is not just a random token stored after login.

JWT can carry signed claims that the backend can verify without calling the authentication provider every time.

It also helped me understand why choosing one source of truth for authentication is important.

In my case, moving authentication fully to Clerk makes the system simpler, while my Go backend stays responsible for authorization, application logic, and database operations.
