FROM node:21-alpine as development

WORKDIR /app

COPY package.json ./
COPY npm-shrinkwrap.json ./
COPY .npmrc ./

RUN npm install --global npm@latest
RUN npm ci

COPY .*.js ./
COPY *config.?js ./
COPY sanity.*ts ./
COPY tsconfig.*json ./
COPY public ./public
COPY app ./app
COPY components ./components
COPY sanity ./sanity
COPY styles ./styles
COPY types ./types

CMD [ "npm", "start"]

FROM development as builder

RUN npm run build

FROM nginx:1.21-alpine as production

COPY --from=builder /app/build /usr/share/nginx/html
