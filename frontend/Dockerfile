FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.23.1-alpine As production
COPY --from=build /app/build ./usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
