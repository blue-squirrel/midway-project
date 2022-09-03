FROM node
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .

EXPOSE 7001
CMD npm run build && npm start