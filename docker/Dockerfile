
FROM node:8-alpine as node-angular-cli

LABEL authors="Jonatas Rodrigues"

# Linux setup
# RUN apk update \
#   && apk add --update alpine-sdk \
#   && apk del alpine-sdk \
#   && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
#   && npm cache verify \
#   && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
RUN npm install -g @angular/cli

WORKDIR /var/www/

COPY package.json .
RUN npm install npm@latest -g
RUN npm install

COPY . .

RUN ls

CMD ["npm", "start"]
