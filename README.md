<h1>
  My Site Solution &nbsp;
</h1>

**My Site Solution** is the site management tool for contractors. Contractors can manage sites, subcontractors, work packages and labors.

---

### Tech Stack 🌿

- [Create React App][cra] (★ 73k) for development and test infrastructure (see [user guide][cradocs])
- [Material UI][mui] (★ 52k) to reduce development time by integrating Google's [Material Design][material]
- [Google Cloud][gcp] & [Firebase][firebase] for serverless architecture - Cloud SQL, Cloud Functions, CDN hosting, file storage ([docs][fbdocs])

Also, you need to be familiar with [HTML][html], [CSS][css], [Typescript][ts] ([ES2015][es2015]) and [React](https://reactjs.org/docs/).

### Directory Layout 🏛️

```bash
├── build/                         # Compiled output
├── node_modules/                  # 3rd-party libraries and utilities
├── public/                        # Static files such as favicon.ico etc.
├── src/                           # Application source code
│   ├── app/                       # Main section for Application routes management.
│   ├── components                 # Shared React Components
│       ├── layouts/               # Topbar, Sidebars Components
│       ├── shared/                # Shared Reusable Components
│   ├── config/                    # Firebase Configurations
│   ├── functions/                 # Firebase Reusable Functions
│   ├── libs/                      # Application Reusable Utilities, Interfaces and Fetch Queries. 
│   ├── pages/                     # Other pages (Auth, Sites etc.)
│   ├── store/                     # Context Api Store
│   ├── App.css                    # Global Stylesheet for Application
│   ├── index.tsx                  # Main Index file For Application Working.
│   ├── reportWebVitals.js         # Measure and report web vital metrics.
├── .env                           # Environment variables configuration file
├── .eslintrc.json                 # ESLint configuration file
├── .firebaserc                    # Firebase configuration file
├── .gitignore                     # List of files and directories to ignore in Git
├── .prettierrc.json               # Prettier code formatter configuration file
├── .yarnrc.yml                    # Yarn package manager configuration file
├── firebase.json                  # Firebase project configuration file
├── package.json                   # List of project dependencies and NPM scripts
├── react-app-env.d.ts             # TypeScript type definitions for the React application
├── README.md                      # Documentation and project readme
├── tsconfig.json                  # TypeScript configuration file
└── yarn.lock                      # Yarn package manager lock file
```

## Database Structure 🏦

We have designed the database structure using [dbdiagram.io](https://dbdiagram.io/), a convenient online tool for creating and visualizing database diagrams. The structure helps to understand the relationships between different entities in the database.

### Database Design 🎨

You can view the complete database design by clicking [here](https://dbdiagram.io/d/MSS-65134fbaffbf5169f08e413a).


### Prerequisites 👶

- [Node.js][nodejs] v18.15.0 or higher + [Yarn][yarn] v1.22.19 or higher
- [VS Code][vc] editor (preferred) + [Project Snippets][vcsnippets], [EditorConfig][vceditconfig],
  [ESLint][vceslint], [Prettier][vcprettier], and [Babel JavaScript][vcjs] plug-ins

### Getting Started 🏃

Just clone the repo, update environment variables in `.env` and/or `.env.local` file, and start
hacking:

```bash
$ git clone https://github.com/Atompoint/mySiteSolution-webApp.git
$ cd mySiteSolution-webApp
$ yarn                             # Installs dependencies; 
$ yarn dev                         # Compile the app and opens it in a browser with "live reload"
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

<p align='center'><img src='https://camo.githubusercontent.com/506a5a0a33aebed2bf0d24d3999af7f582b31808/687474703a2f2f692e696d6775722e636f6d2f616d794e66434e2e706e67' width='600' alt='npm start'></p>



### Firebase Integration 🔥

My Site Solution utilizes Firebase for its backend, providing a serverless architecture and powerful features for seamless development and deployment. Below are key points related to the Firebase integration:

- **Firebase as Backend 💻 **: My Site Solution leverages Firebase services as its backend infrastructure. Firebase offers a suite of cloud-based services, including Cloud Firestore for the database, Cloud Functions for serverless computing, and Firebase Hosting for static and dynamic content.

- **Client-Side SDK 🛃 **: Firebase's client-side SDK is employed in the frontend to interact with Firebase services directly from the web browser. This allows for real-time updates, authentication, and other features without the need for a traditional server.

- **Serverless Architecture 🏗️ **: The use of Firebase embraces a serverless architecture, eliminating the need for managing server infrastructure. Cloud Functions are used to handle backend logic, ensuring scalability and efficiency.

- **Firebase Authentication 🔑 **: My Site Solution employs Firebase Authentication for user authentication. This service provides easy-to-use and secure authentication methods, including email/password authentication, social logins, and more.

- **Firebase Security Rules 📏 **: Security is enforced through Firebase Security Rules. These rules define who has read and write access to certain parts of the database and other Firebase services. This approach ensures data integrity and follows the principle of least privilege.

- **Real-Time Updates with Cloud Firestore ⏰ **: Cloud Firestore, Firebase's NoSQL database, is used to store and synchronize data in real-time across connected devices. This enables efficient data handling and ensures that users experience the most up-to-date information.

For more details on Firebase services and configurations, refer to the [Firebase Documentation](https://firebase.google.com/docs).


### How to Deploy 🙇‍♂️

```bash
$ yarn build                       # Build in-production mode
$ yarn build-deploy                # Generate Build and Deploy on Firebase 
```

### Git Code Management Workflow ♐

**My Site Solution**

```bash
├── main                           # Main Production Branch (protected)
│   ├── staging                    # Staging Branch.
│   ├── sprint-01                  # Sprint Branch (branch structure used for initial development i.e. kick-off )
│       ├── feature-1/             # Feature 01 Branch (e.g auth, onboarding etc)
│       ├── feature-2/             # Feature 02 Branch (e.g site, work-packages etc)
│   ├── fixes                      # Fixes Branch (intended for Support and Maintance)
│       ├── fix-1/                 # Fix 01 (numbering may change depending on managment tools used i.e. use trello/JIRA card number like fix-weY23t5 etc)
│       ├── fix-2/                 # Fix 02 Branch (e.g work-packages fix etc)

```

**Main Branch (Protected):** The main branch is the primary branch of the project and is protected to ensure code stability.

**Staging Branch:** The staging branch is created from the main branch and serves as a testing and integration environment for upcoming features and bug fixes.

**Sprint Branches (e.g., sprint-01, sprint-02):** Sprint branches are created from the staging branch and are used to group and manage features and bug fixes related to specific project sprints.

**Feature Branches:** Developers create feature branches from the sprint branches to work on individual features.

**Fixes Branch:** Developers create fixes branches from the staging branch to work on individual bug fixes.

**Pull Requests (PRs):** Developers create PRs from their feature branches to the corresponding sprint branches. These PRs are reviewed, tested, and approved before merging.

**Staging Deployment:** When a PR is merged into the staging branch, the code is automatically deployed to the staging environment at https://staging-mss.web.app.

**Production Deployment:** When a PR is merged into the main branch, the code is automatically deployed to the production environment at https://my-site-solution.web.app.

For more information refer to the [Deployment](https://github.com/kriasoft/react-firebase-starter/wiki/deployment)
guide in the project's Wiki.

### Learn React.js and ES6

:mortar_board: &nbsp; [React for Beginners](https://reactforbeginners.com/friend/konstantin) and [ES6 Training Course](https://es6.io/friend/konstantin) by Wes Bos<br>
:green_book: &nbsp; [React: Up & Running: Building Web Applications](http://amzn.to/2bBgqhl) by Stoyan Stefanov (Aug, 2016)<br>
:green_book: &nbsp; [Getting Started with React](http://amzn.to/2bmwP5V) by Doel Sengupta and Manu Singhal (Apr, 2016)<br>
:green_book: &nbsp; [You Don't Know JS: ES6 & Beyond](http://amzn.to/2bBfVnp) by Kyle Simpson (Dec, 2015)<br>

### License

Copyright ©️ 2023 by [Atompoint](https://atompoint.com).

---

Made with ❤ by [Atompoint](https://atompoint.com) Team ✌. 

[rfs]: https://github.com/kriasoft/react-firebase-starter
[kriasoft]: https://github.com/kriasoft
[telegram]: https://t.me/ReactStarter
[cra]: https://github.com/facebook/create-react-app
[cradocs]: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md
[psql]: https://www.postgresql.org/
[cloudsql]: https://cloud.google.com/sql/
[knex]: http://knexjs.org/
[gqljs]: http://graphql.org/graphql-js/
[relay]: http://facebook.github.io/relay/
[mui]: https://mui.com
[material]: https://material.io/
[passport]: http://www.passportjs.org/
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[ts]: https://www.typescriptlang.org/docs/
[es2015]: http://babeljs.io/learn-es205/
[react]: https://facebook.github.io/react/
[relay]: https://facebook.github.io/relay/
[gcp]: https://cloud.google.com/
[firebase]: https://firebase.google.com/
[fbdocs]: https://firebase.google.com/docs/web
[router]: https://github.com/kriasoft/universal-router
[history]: https://github.com/ReactTraining/history
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[brew]: https://brew.sh/
[wm]: https://facebook.github.io/watchman/
[relaycompiler]: http://facebook.github.io/relay/docs/relay-compiler.html
[vc]: https://code.visualstudio.com/
[vcsnippets]: https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vcjs]: https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
[watchman]: https://github.com/facebook/watchman
[postgres]: https://www.postgresql.org/
[bc]: https://www.scootersoftware.com/
