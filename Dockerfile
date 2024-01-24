FROM node:16.20 as builder

WORKDIR /app

COPY . .

RUN npm i --force

# RUN npm audit fix --force

RUN npm run build

FROM httpd:latest

COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

EXPOSE 80