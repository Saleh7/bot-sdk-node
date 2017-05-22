/*
  * hackerNews Bot for Wire
  *
*/
const service = require('../lib/service');
const config = require('./config');
var options = config.getOptions();

const hackernews = require('firebase-hackernews');
const news = hackernews();

const page = 1;
const count = 7;

service.createService(options, (bot) => {

  bot.on('message', (from, message) => {
      // get message from user
      var msg = message.text.content.toLowerCase();
      // get HN top
      if (msg == "top") {
        items = '';
        news.stories('top', {page: page, count: count}).then(stories => {
          stories.forEach(function(item) {
            title = item.title;
            url = item.url;
            items += `🔘 = ${title}\n${url}\n\n`;
          });
          bot.sendMessage(items, (sendStatus) => {});
        });
      }
      // get HN new
      if (msg == "new") {
        items = '';
        news.stories('new', {page: page, count: count}).then(stories => {
          stories.forEach(function(item) {
            title = item.title;
            url = item.url;
            items += `🔘 = ${title}\n${url}\n\n`;
          });
          bot.sendMessage(items, (sendStatus) => {});
        });
      }
      // get HN best
      if (msg == "best") {
        items = '';
        news.stories('best', {page: page, count: count}).then(stories => {
          stories.forEach(function(item) {
            title = item.title;
            url = item.url;
            items += `🔘 = ${title}\n${url}\n\n`;
          });
          bot.sendMessage(items, (sendStatus) => {});
        });
      }
      // get HN ask
      if (msg == "ask") {
        items = '';
        news.stories('ask', {page: page, count: count}).then(stories => {
          stories.forEach(function(item) {
            title = item.title;
            url = item.url;
            items += `🔘 = ${title}\n${url}\n\n`;
          });
          bot.sendMessage(items, (sendStatus) => {});
        });
      }
      // get HN show
      if (msg == "show") {
        items = '';
        news.stories('show', {page: page, count: count}).then(stories => {
          stories.forEach(function(item) {
            title = item.title;
            url = item.url;
            items += `🔘 = ${title}\n${url}\n\n`;
          });
          bot.sendMessage(items, (sendStatus) => {});
        });
      }
      // get HN job
      if (msg == "job") {
        items = '';
        news.stories('job', {page: page, count: count}).then(stories => {
          stories.forEach(function(item) {
            title = item.title;
            url = item.url;
            items += `🔘 = ${title}\n${url}\n\n`;
          });
          bot.sendMessage(items, (sendStatus) => {});
        });
      }
      // Message Help
      if(msg != "top" && msg != "new" && msg != "show" && msg != "jop" && msg != "best"){
        help = "**Bot Hacker News**\n\n◾️Here's how you can use me:\n\n🔘 **top**     = _Shows the top stories_\n🔘 **new**   = _Shows the most recent posts_\n🔘 **show** = _Shows the top show HNs_\n🔘 **ask**    = _Shows the top ask HNs_\n🔘 **jop**     = _Shows the top jop posts_\n🔘 **best**   = _Shows the best stories_";
        bot.sendMessage(help, (sendStatus) => {
          console.log(`message successfully sent with status ${sendStatus}`);
        });
      }
  });
  bot.on('join', (members, conversation) => {
    console.log(`New members ${members} joined conversation ${conversation.id}`);
  });
  bot.on('leave', (members, conversation) => {
    console.log(`Members ${members} have left conversation ${conversation.id}`);
  });
  bot.on('rename', (name, conversation) => {
    console.log(`Conversation ${conversation.id} renamed to ${name}`);
  });
});
