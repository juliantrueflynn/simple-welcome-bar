## Simple Welcome Bar

Note: This was practice for using Next.js and Koa server for API. It is now archived because I moved onto using Rails for the API. View the new repo [here](https://github.com/juliantrueflynn/conditional_welcome_bar).

Shopify app with React, Redux, Next, Koa, PostgreSQL.

## Contents
- [Run locally](#run-locally)
- [Deploy](#deploy)
- [Built with](#built-with)
  - [Core stack](#core-stack)
  - [Third party APIs](#third-party-apis)


## Run locally
- Clone the project and run `yarn` to add packages.
- Before you start the app, create a `.env` file at the app and api directory roots. This file must have values for env variables specified below.

  `.env` :
  ```
  PG_DEVELOPMENT_URL=XXXXXXXX
  PG_TEST_URL=XXXXXXXX

  API_URL=XXXXXXXX
  ```
  
- Start the app with `yarn dev`.

## Deploy
See the [deploy section](https://github.com/builderbook/builderbook#deploy) on our main repository README.

## Built with

#### Core stack
- [React](https://github.com/facebook/react)
- Redux
- [Next](https://github.com/zeit/next.js)
- Koa
- PostgreSQL

#### Third party APIs
- Shopify API

Check out [package.json](https://github.com/builderbook/builderbook/blob/master/boilerplate/package.json).
