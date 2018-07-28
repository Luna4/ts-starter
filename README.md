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
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── apis
│   │   └── src
│   │       ├── api-helpers
│   │       │   ├── fetcher.ts
│   │       │   └── util.ts
│   │       ├── mutations
│   │       └── queries
│   │           ├── types
│   │           │   └── get-users-response.ts
│   │           └── user-api.ts
│   ├── app.tsx
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
│   ├── index.tsx
│   ├── stores
│   │   └── src
│   │       ├── base-store.ts
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
- unit test (jest | enzym)
- seperate webapck dev and prod