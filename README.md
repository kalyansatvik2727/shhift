# cy-fy

Cypress starter pack for UI and API automation testing. Simple and neat folder structure in combination with typescript will help you write test faster. .yml file will guide you to setup the github actions flow quickly.

## Get started

#### System Requirement

- Git (download form [here](https://git-scm.com/downloads))
- Node (download from [here](https://nodejs.org/en/download/))
- Java Run Time (download from [here](https://www.oracle.com/in/java/technologies/javase-downloads.html))
- Chrome, Firefox and Edge

#### Project setup

- Git clone the project
- install dependencies by `npm install`

#### Test configuration setup

## Run Tests
// by-default test will be triggered in Electron
npm run cy:ui:run

#### Run tests in multiple browsers

// to run in chrome
npm run cy:ui:run -- --browser chrome

// to run in firefox
npm run cy:ui:run -- --browser firefox

// to run in edge
npm run cy:ui:run -- --browser edge
```

## Test Reports

Overall report will be generated in github actions flow.

## Folder structure

```bash
├── cypress
│   ├── fixtures
│   ├── integration
│   │  ├── ui
│   │      ├── pages
│   │      ├── specs
│   ├── plugins
│   ├── support
```

- _**fixures**_: fixtures are used as external pieces of static data that can be used by your tests. Read more [here](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Fixture-Files)
- _**plugins**_: plugin file contains the helper libraries to achieve a specific tasks. Different cypress plugins can be found [here](https://docs.cypress.io/plugins/index.html)
- _**support**_: By default Cypress will automatically include the support file cypress/support/index.js. This file runs before every single spec file.
- _**integration**_: integration folder contains the actual tests.

