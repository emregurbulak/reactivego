FROM node:8
#node versiyon kontrolü ekle
EXPOSE 3000

WORKDIR usr/src/app

COPY . .

RUN npm install

CMD ["npm", "start"]
