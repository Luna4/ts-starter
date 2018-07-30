### Keywords
React, Mobx, Typescript, Scss, React Router

### Pre-requisite

- [Strict mode of Mobx](https://mobx.js.org/refguide/api.html#-enforceactions-boolean)

- [Bem css naming convention](http://getbem.com/naming/)

### Get started

```code
yarn install
npm start
```

### Lint check

```code
npm run lint:style // stylelint check
npm run lint:ts // tslint check
npm run lint // style & ts lint check
```

### Run unit tests

```code
// run stores unit tests
npm run stores:test
npm run stores:test:watch // watch mode
npm run stores:test:coverage // unit tests coverage check

// run api unit tests
npm run apis:test
npm run apis:test:watch // watch mode
npm run apis:test:coverage // unit tests coverage check

// run component unit tests
npm run c:test
npm run c:test:watch // watch mode
npm run c:test:coverage // unit tests coverage check

// run all unit tests
npm run test
```

### Build

```code
npm run build // `dist` is the output dir
```

### Bundle output test

```code
npm run dist // http-server would start a local server and open dist/index.html
```

### Directory

```
.
├── README.md
├── dist
│   ├── 404.html
│   ├── css
│   │   └── bundle.e91ad2dfc4e730731c0c.css
│   ├── index.html
│   └── js
│       ├── bundle.e91ad2dfc4e730731c0c.js
│       └── bundle.e91ad2dfc4e730731c0c.map.js
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── apis
│   │   ├── jest.config.json
│   │   ├── src
│   │   │   ├── api-helpers
│   │   │   │   ├── fetcher.ts
│   │   │   │   └── util.ts
│   │   │   ├── mutations
│   │   │   └── queries
│   │   │       ├── test
│   │   │       │   └── user-api.test.ts
│   │   │       ├── types
│   │   │       │   └── get-users-response.ts
│   │   │       └── user-api.ts
│   │   └── test-utils
│   │       └── fetch-polyfill.js
│   ├── app.tsx
│   ├── common
│   │   └── scss
│   │       ├── all.scss
│   │       ├── colors.scss
│   │       ├── reset.scss
│   │       ├── skeleton.scss
│   │       ├── typography.scss
│   │       └── ui-element.scss
│   ├── components
│   │   ├── jest.config.json
│   │   ├── src
│   │   │   ├── header
│   │   │   │   ├── header.tsx
│   │   │   │   ├── scss
│   │   │   │   │   └── header.scss
│   │   │   │   └── test
│   │   │   │       └── header.test.tsx
│   │   │   ├── not-found
│   │   │   │   └── not-found.tsx
│   │   │   └── user-list
│   │   │       ├── scss
│   │   │       │   ├── user-list-filter.scss
│   │   │       │   ├── user-list-grid.scss
│   │   │       │   └── user-list.scss
│   │   │       ├── test
│   │   │       │   └── user-list-filter.test.tsx
│   │   │       ├── user-list-filter.tsx
│   │   │       ├── user-list-grid-header.tsx
│   │   │       ├── user-list-grid-item.tsx
│   │   │       ├── user-list-grid.tsx
│   │   │       └── user-list.tsx
│   │   └── test-utils
│   │       ├── setupTests.js
│   │       └── styleMock.js
│   ├── containers
│   │   └── user-list-container.tsx
│   ├── index.tsx
│   ├── stores
│   │   ├── jest.config.json
│   │   └── src
│   │       ├── base-store.ts
│   │       ├── test
│   │       │   └── user-store.test.ts
│   │       └── user-store.ts
│   └── types
│       ├── user-store-sate.ts
│       └── user.ts
├── stylelint.config.js
├── tsconfig.json
├── tslint.json
├── webpack.common.js
├── webpack.dev.config.js
├── webpack.prod.config.js
├── yarn-error.log
└── yarn.lock
```

### TODO
- HOC loading indicator
- Error Boundary
