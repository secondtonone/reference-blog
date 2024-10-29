### Code examples

All components - [link](https://github.com/secondtonone/reference-blog/tree/main/application/src/components)

Example of Main page with test - [link](https://github.com/secondtonone/reference-blog/tree/main/application/src/components/templates/main-default)

Storybook - [link](https://github.com/secondtonone/reference-blog/tree/main/storybook)

Setup of screenshot tests - [link](https://github.com/secondtonone/reference-blog/tree/main/backstop)

### dev env
yarn [workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) supported 

local setup:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash 
nvm install 15.12.0
nvm use 15.12.0
nvm alias default 15.12.0 
curl -o- -L https://yarnpkg.com/install.sh | bash
```

#### scripts:  
`yarn` - install npm dependencies

`yarn build` - build in production mode

`yarn start` - run in production mode

`yarn dev` - development mode with api rc

`yarn dev:prod` - development mode with api prod

### local docker:
```
make build-application run
```

http://localhost:3000/  
