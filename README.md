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

### Directory

```
.
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── index.tsx
│   ├── app.tsx
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

│   ├── common
│   │   └── css
│   │       ├── colors.scss
│   │       ├── index.scss
│   │       ├── reset.scss
│   │       ├── skeleton.scss
│   │       ├── typography.scss
│   │       └── ui-element.scss
│   ├── components
│   │   └── src
│   │       ├── header
│   │       │   ├── header.tsx
│   │       │   └── scss
│   │       │       └── header.scss
│   │       ├── not-found
│   │       │   └── not-found.tsx
│   │       └── user-list
│   │           ├── scss
│   │           │   ├── user-list-filter.scss
│   │           │   ├── user-list-grid.scss
│   │           │   └── user-list.scss
│   │           ├── user-list-filter.tsx
│   │           ├── user-list-grid-header.tsx
│   │           ├── user-list-grid-item.tsx
│   │           ├── user-list-grid.tsx
│   │           └── user-list.tsx
│   ├── containers
│   │   └── user-list-container.tsx
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
├── tsconfig.json
├── tslint.json
├── webpack.config.js
├── yarn-error.log
└── yarn.lock
```

### TODO
- HOC loading indicator
- unit tests for components (enzym)
- seperate webapck dev and prod