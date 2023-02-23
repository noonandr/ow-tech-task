# ow-tech-task

Orbital Witness Technical Task

## Config

Setup using node 18.14.0

## Tasks

- [x] Plan project
- [x] Create project
- [x] Remove unneeded pages etc
- [x] Create IconComponent component
- [ ] Create TableRow component
- [ ] Add icons for sorting up, neutral and down
- [ ] Create AppButton component
- [ ] Add icon for ProgressArrow
- [ ] Create PaginationControls component
- [ ] Create TableSort component
- [ ] Create TitleListView
- [ ] Add state via Vuex
- [ ] Add GetTitleData call
- [ ] Add TableSort to TitleListView
- [ ] Add routing to pass page number to TitleListView
- [ ] Build E2E test for TitleListView
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

### Compile and Minify for Production

```sh
npm run build
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
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
