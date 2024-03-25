FROM node:latest as build
WORKDIR /usr/local/app
RUN npm cache clean --force
COPY ./ /usr/local/app/
RUN npm install
RUN npm install -g @angular/cli@16.2.12
RUN ng build --configuration production

FROM nginx:latest
COPY --from=build /usr/local/app/dist/integrator-ui /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80
