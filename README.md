# ow-tech-task

Orbital Witness Technical Task

## Config

Setup using node 18.14.0

## Tasks

- [x] Plan project
- [x] Create project
- [x] Remove unneeded pages etc
- [x] Create IconComponent component
- [x] Create TableRow component
- [x] Add icons for sorting up, neutral and down
- [x] Create AppButton component
- [x] Add icon for ProgressArrow
- [x] Create PaginationControls component
- [x] Create TableHeadItem component
- [x] Create TableHeader component
- [x] Create TableSort component
- [x] Create TitleListView
- [x] Add state via Vuex
- [x] Add GetTitleData call
- [x] Add TableSort to TitleListView
- [x] Add routing to pass page number to TitleListView
- [ ] Create TagPill component
- [ ] Create DetailsMap component
- [ ] Create TitleDetailsInfo component
- [ ] Create TitleDetailsView
- [ ] Add back button to TitleDetailsView
- [ ] Add TitleDetailsInfo to TitleDetailsView
- [ ] Add routing for titleID to TitleDetailsView
- [ ] Build E2E test for TitleDetailsView

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Test

```sh
npm run test
```

### Run Unit Test

```sh
npm run coverage
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests on Build with [Cypress](https://www.cypress.io/)
It is recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

