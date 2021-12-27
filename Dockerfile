FROM node:alpine

RUN mkdir -p /chat-group

WORKDIR /chat-group

COPY package*.json /chat-group

RUN yarn install

COPY . /chat-group

EXPOSE 3000

CMD ["yarn" ,"dev"]