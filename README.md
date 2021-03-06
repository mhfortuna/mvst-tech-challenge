# MVST Timer
This app is a timer application that allows the user to start counting time by clicking the button on the center of the screen, which also displays the currently tracked time. Clicking the button again stops the timer and resets the small timer displayed in the button.

The total tracked time by **all users** is shown in the timer above the button. The big timer should be updated when the app loads on the screen, and when the user stops his timer.

There is also a switch to toggle between light and dark mode.

> You can see this project deployed at [here](https://home-5005832531.app-ionos.space/)

### Features
- LocalStorage to save dark/light mode selected by user 
- Toggle spring animation
- On background change soft transition
- Page animation on load
- Toast notifications from API errors

# Index

- [MVST Timer](#mvst-timer)
    - [Features](#features)
- [ð Getting Started](#-getting-started)
  - [Requirements ð](#requirements-)
  - [Installation ð§](#installation-)
- [ðĶī Project Structure](#-project-structure)
  - [Folder structure ð](#folder-structure-)
- [Testing](#testing)
- [Decisions made](#decisions-made)
- [âĻ Wishlist](#-wishlist)
- [Exercise feedback](#exercise-feedback)
- [ðĩïļââïļ Resources](#ïļïļ-resources)
- [ðïļ Contributing](#ïļ-contributing)
- [âĻ Contributors](#-contributors)

# ð Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
This repo is a monorepo configured with [Yarn Workspaces](https://yarnpkg.com/features/workspaces). Both the frontend and backend of the app are in this repo.

## Requirements ð

You need to have [NodeJs](https://nodejs.org/) installed. If you don't have Yarn already need to install it globally: `npm install --global yarn` 

Once you have installed these programs, you need to create an account for: [MongoAtlas](https://www.mongodb.com/atlas/database) or have another MongoDB already configures 

## Installation ð§

First, you will need to `clone` or `fork` the repository into your Github account:

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

`$ git clone https://github.com/mhfortuna/mvst-tech-challenge`

Then run `yarn install` in the root folder.

When you have all the dependencies installed you need to create two `.env` files located one in `packages/client` and the other in `packages/server` :
`packages/server/.env`

```
# Server settings
PORT=4000

# Mongo Atlas settings
MONGO_DB_URL={MongoAtlasDbUrl}

CLIENT_URL={Route of the client for CORS policies, '*' will allow all}
```
`packages/client/.env`
```
REACT_APP_BACKEND_API_ROUTE={The backend API route (for development http://localhost:4000/api}

CLIENT_URL=<Route of the client for CORS policies>
```

# ðĶī Project Structure

## Folder structure ð

<pre>  
ââââ.github		<i>// Github actions config files </i>
ââââpackages
    ââââclient
    â   ââââpublic
    â   ââââsrc
    â       ââââapi		<i>//Call to external APIs </i>
    â       ââââcomponents
    â       ââââconstants
    â       ââââpages
    â       ââââutils		<i>// Multipurpose code </i>
    ââââserver
        ââââsrc
            ââââconfig		<i>// configuration read from .env </i>
            ââââcontrollers
            ââââdb
            ââââmodels
            ââââroutes

</pre>

# Testing
To run test  run:
```
$	yarn client-test
```
The only testing is made for the frontend. There are two small tests to verify the page renders correctly and that the dark mode toggle is working


# Decisions made

- Tailwind was used for faster development. Dark mode was implemented using Tailwind class detection.
- Framer motion was used for better control of transitions and animations
- Since there is no authentication, for security only CORS policies were used

# âĻ Wishlist
- Add some sort of username and a global records ranking

# Exercise feedback
Being my first Typescript app it was challenging, specially for the project setup. Anyways, it is a short exercise, focused on very important concepts.
Maybe the use of react router would be a thing to add.

# ðĩïļââïļ Resources
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Express](https://expressjs.com/)
- [Framer-motion](https://www.framer.com/motion/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [PostCSS](https://postcss.org/)
- [Prettier](https://prettier.io/)
- [React](https://es.reactjs.org/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [React-toastify](https://github.com/fkhadra/react-toastify)
- [Tailwind](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

# ðïļ Contributing

If you want to contribute, please fork the repository, create a new branch whit your contribution, and push the branch as a pull requests.

# âĻ Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section --> <!-- prettier-ignore-start --> <!-- markdownlint-disable --> <table> <tr> <td align="center"><a href="https://github.com/mhfortuna"><img src="https://avatars.githubusercontent.com/u/66578026?v=4s=100" width="100px;" alt=""/><br /><sub><b>Mathias Fortuna</b></sub></a><br /><a href="https://github.com/rocket-team-webdev/wave/commits/develop?author=mhfortuna" title="Code">ðŧ</a></td> </tr> </table> <!-- markdownlint-restore --> <!-- prettier-ignore-end --> <!-- ALL-CONTRIBUTORS-LIST:END --> This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome! <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section --> [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-) <!-- ALL-CONTRIBUTORS-BADGE:END -->
