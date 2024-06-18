FROM node

WORKDIR /my-portfolio

COPY . .

RUN npm install

CMD ["npm", "start"]