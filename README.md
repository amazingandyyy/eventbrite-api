# search-eventbrite

An developer-friendly API for searching for events on [Eventbrite](https://www.eventbrite.com/)

![Eventbrite](https://assets-cf.themuse.com/uploaded/companies/402/small_logo.png?v=848c27c7c48a96e3b25a23f23158b349c01869a57a4fa12cf78a5a36e368263f)

## intallation

```javascript
$ npm install --save search-eventbrite
```

## short sample

```javascript
var event = require('search-eventbrite');

event.getAll({
  q: 'Hackathon',
  'location.address':'San Francisco',
  sort_by: 'date'
}, function(err, res, events){
    if(err) return console.log('err: ', err)
    console.log('events: ', events)
  });
```

## sample response data (up to 50 events totally)

⋅⋅⋅ The API returns a beautiful JSON of events

```javascript
[ { name: '#WomenHack - The All-Women Hackathon San Francisco',
    id: '27670276542',
    url: 'https://www.eventbrite.com/e/womenhack-the-all-women-hackathon-san-francisco-tickets-27670276542?aff=ebapi',
    start: '2017-03-18T09:00:00',
    thumbnail: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24064540%2F9608873553%2F1%2Foriginal.jpg?h=200&w=450▭=0%2C40%2C2048%2C1024&s=c76201c80cfb9eb0468a9081508a1723' },
  { name: 'Artificial Intelligence - Global Hackathon',
    id: '29463496110',
    url: 'https://www.eventbrite.com/e/artificial-intelligence-global-hackathon-tickets-29463496110?aff=ebapi',
    start: '2017-03-31T09:00:00',
    thumbnail: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F25986734%2F107812564861%2F1%2Foriginal.jpg?h=200&w=450▭=0%2C95%2C1000%2C500&s=a703b70e891d0db5abf30303d79eb320' },
    { name: 'TeenTechSF Global Youth Summit and World Pitch',
      id: '29502144709',
      url: 'https://www.eventbrite.com/e/teentechsf-global-youth-summit-and-world-pitch-tickets-29502144709?aff=ebapi',
      start: '2017-02-18T08:30:00',
      thumbnail: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F26151074%2F57935709853%2F1%2Foriginal.jpg?h=200&w=450▭=150%2C306%2C754%2C377&s=365fee942e396a635373420bf2b4a09d' } ]
```

### Auther

[Amazingandyyy](amazingandyyy.github.io) ![Amazingandyyy](http://i.imgur.com/4oQCR2R.png)

- Feel free to follow me on _[GitHub](https://github.com/amazingandyyy)_ and _[LiveCoding](https://www.livecoding.tv/amazingandyyy/)_
- Want to know me more? Visit my _[page](http://amazingandyyy.github.io/)_

### License

[MIT](https://github.com/amazingandyyy/eventbrite-api/blob/master/LICENSE)
