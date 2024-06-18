FROM NODE

WORKDIR /my-portfolio

COPY . .

RUN npm install

CMD ["npm", "start"]