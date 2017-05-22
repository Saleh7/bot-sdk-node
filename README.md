# hackerNews for Wire™

This is a chat bot for [Wire™](https://wire.com) chat app, developed in Node.JS on top of [Wire Bot Node SDK](https://github.com/wireapp/bot-sdk-node)

## Examples
Bot hackerNews: https://wire.com/b/hn

![Image hackerNews](http://i.imgur.com/4ILeBvg.gif)


## Main Feature
- Use as [hackernews](https://www.npmjs.com/package/firebase-hackernews) - send you a chat message where the latest news | types, 'top', 'new', 'best', 'ask', 'show', 'job'

## [Bot registration and creation](https://github.com/wireapp/bot-sdk-node#bot-registration-and-creation)

## Installation
```bash
git clone https://github.com/Saleh7/hackerNewsBot.git
npm install
```

- Create service key and certificate:
```bash
cd hackerNewsBot
openssl genrsa -out server.key 4096
openssl req -new -key server.key -out csr.pem
openssl x509 -req -days 7300 -in csr.pem -signkey server.key -out server.crt
openssl rsa -in server.key -pubout -out pubkey.pem
```

- Write your own configuration file (`hackerNews/config.js`) is a good starting point for building your own.
```js
getOptions() {
  return {
      port: 8051,
      key: 'server.key',
      cert: 'server.crt',
      storePath: 'store',
      auth: '<put your auth token here>',
  }
}
```

## Start .. 
- Then you can start the bot
```bash
node hackerNews/bot.js
```

