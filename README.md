### Keywords
React, Mobx, Typescript, Scss

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
├── dist
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── api
│   │   └── utils
│   │       ├── fetcher.ts
│   │       └── util.ts
│   ├── components
│   │   ├── Hello.tsx
│   │   └── hello.scss
│   ├── containers
│   ├── index.tsx
│   ├── stores
│   │   └── base-store.ts
│   └── types
├── tsconfig.json
├── tslint.json
├── webpack.config.js
├── yarn-error.log
└── yarn.lock
```


### TODO
- router
- unit test (jest | enzym)
- seperate webapck dev and prod
- api mock