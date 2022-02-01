# cy-fy

Cypress starter pack for UI and API automation testing. Simple and neat folder structure in combination with Cucumber and JavaScript will help you write test faster.

## Get started

#### System Requirement

- Git (download form [here](https://git-scm.com/downloads))
- Node (download from [here](https://nodejs.org/en/download/))
- Java Run Time (download from [here](https://www.oracle.com/in/java/technologies/javase-downloads.html))
- Chrome, Firefox and Edge

#### Project setup

- Git clone the project
- install dependencies by `npm ci`

#### Test configuration setup

#### Test configuration

- UI test environment file is located at `config/ui.config.json`
- API test environment file is located at `config/api.config.json`

## Run Tests

#### Run UI test scenarios

```js

// this will run the UI cucumber scenarios in headless mode 
npm run cy:headless

```

#### Run tests in multiple browsers

```js
// by-default test will be triggered in Electron
npm run cy:ui:run

// to run in chrome locally without debug
npm run cy:ui:run -- --browser chrome

// to run in firefox
npm run cy:ui:run -- --browser firefox

// to run in edge
npm run cy:ui:run -- --browser edge
```

#### Run API test scenarios

```js
npm run cy:api
```

## Folder structure

```bash
├── cypress
│   ├── fixtures
│   ├── integration
│   │  ├── api
│   │      ├── features
│   │  ├── ui
│   │      ├── features
|   |      ├── pages  
│   │      ├── step_definitions
│   ├── plugins
│   ├── support
```

- _**fixures**_: fixtures are used as external pieces of static data that can be used by your tests. Read more [here](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Fixture-Files)
- _**plugins**_: plugin file contains the helper libraries to achieve a specific tasks. Different cypress plugins can be found [here](https://docs.cypress.io/plugins/index.html)
- _**support**_: By default Cypress will automatically include the support file cypress/support/index.js. This file runs before every single spec file.
- _**integration**_: integration folder contains the actual tests. The ui test scenarios are stored in `ui` folder. `features` folder contains all cucumber feature files. `pages` folder contains all page objects and corresponding actions. `step_definitions` folder contains all glue/executable code for cucumber feature files. `api` folder contains all api test cases.
