#  Simple frontend application with deploy in GitHub Pages
node version: v18.17.0

### Project proposed in the first evaluation activity of the discipline CSI-26 Web Application Development of the Computer Engineering course at ITA.

### Tools
- typescript
- Vite
- React
- styled-components
- axios
- gh-pages
- eslint
- json-server



## Install dependencies

```
npm i
```
## Run APP dev mode
```
npm run dev
```
## Run api fake JSON-SERVER (backend: `server.json` file)
```
npm run api
```
## Run api fake + APP dev mode
```
npm run dev:api
```
## Run build APP
```
npm run build
```
## Run deploy to GitHub Pages
```
npm run deploy
```


## Config GitHub Pages Deploy
- `vite.config.ts` set:
```
export default defineConfig({
    ... ,
    base: '/<REPO>/'
})
```
- `package.json` set:
```
{
    ... ,
    "homepage": "https://<USER>.github.io/<REPO>",
    ...
}
```