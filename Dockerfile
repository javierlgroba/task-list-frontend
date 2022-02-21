# build environment
FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install react-scripts -g
RUN npm ci
COPY . ./
RUN npm run build

# production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf.template /etc/nginx/templates/
CMD ["nginx", "-g", "daemon off;"]
