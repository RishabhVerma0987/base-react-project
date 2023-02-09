# base-react-project

This is the base template for a "SPA React" project inclusive of dev configuration of linting, pre-commits etc.

1. Create Vite project with react + (typescript + sw)
2. Add scss to the project

```JavaScript
npm add -D sass
```

3. Engine Locking - npmrc and nvmrc
4. Eslint setup -
   1. Install and initialize eslint - Do not enforce just yet!
   2. Add eslint config file (.eslintrc) and install extra dev library for enforing code rules,
      eg - airbnb
   3. Add Ignore file for the config.
5. Prettier setup -
   1. Install and intialize prettier settings.
   2. Make it work with eslint config rules
