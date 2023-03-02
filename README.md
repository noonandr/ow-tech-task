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
- [x] Create TagPill component
- [x] Create GoogleMap component
- [x] Create TitleDetailsInformation component
- [x] Create TitleDetailsView
- [x] Add back button to TitleDetailsView
- [x] Add TitleDetailsInfo to TitleDetailsView
- [x] Add routing for titleID to TitleDetailsView
- [x] Create LoadingAnimation
- [x] Create ToastMessage
- [x] Add LoadingAnimation and ToastMessage to TitleListView
- [x] Add LoadingAnimation and ToastMessage to TitleDetailsView

## Project Setup

```sh
npm install
```

## Project Setup

Add .env file to root for Google Maps API and insert key provided

```
VITE_GOOGLE_MAPS_API=
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

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Compile and Minify for Production

```sh
npm run build
```

```sh
npm run preview
```

### Docker

```sh
docker build -t ow-tech-task:dev .
```

```sh
docker run -v ${PWD}:/app -v /app/node_modules -p 5177:5177 --rm ow-tech-task:dev
```
