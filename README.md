# search-eventbrite

This is private repo of amazingandyyy-server served for [amazingandyyy](https://github.com/amazingandyyy). Andy used this for most of his Hackathons.

##intallation
```javascript
$ npm install --save search-eventbrite
```

##short sample
```javascript
var eventbrite = require('search-eventbrite')('your-eventbrite-key-here');

eventbrite.search({
  q: 'Hackathon',
  'location.address':'San Francisco'
}, function(err, res, events){
    if(err) return console.log('err: ', err)
    console.log('events: ', events)
  }
})
```

##preparation
### 1. Create your Eventbrite app [here](https://www.eventbrite.com/myaccount/apps/new/).
-> link: https://www.eventbrite.com/myaccount/apps/new/
![Create Eventbrite App][create_eventbrite_app]

### 2. Copy your Eventbrite key [here](https://www.eventbrite.com/myaccount/apps/).
-> link: https://www.eventbrite.com/myaccount/apps/
![Get Eventbrite Key][get_eventbrite_key]

## usage (with sample code)
```javascript
var eventbrite_key = 'paste_your_eventbrite_key_here'
var eventbrite = require('search-eventbrite')(eventbrite_key);

// call search to get events
eventbrite.search({
  q: 'Hackathon',
  'location.address':'San Francisco',
  sort_by: 'date'
}, function(err, res, events){
  // err is err
  if(err){return console.log('err: ', err)};

  // res is the response
  console.log('res.body: ', res.body)

  // events is a short list of events(up to 50 events)
  console.log('events: ', events)
})
```

### events sample data (up to 50 events totally)
#### it's a beautifuy json
```javascript
[ { name: 'The Power of Prototyping with Adobe and Protohack - The Code-free hackathon',
    id: '29770424140',
    url: 'https://www.eventbrite.co.uk/e/the-power-of-prototyping-with-adobe-and-protohack-the-code-free-hackathon-tickets-29770424140?aff=ebapi',
    thumbnail: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F26278407%2F25644367735%2F1%2Foriginal.jpg?h=200&w=450&rect=0%2C9%2C622%2C311&s=bd294db9c4f163fc866cbe712f4ae68c' },
  { name: 'Teen Hackathon (teenhackathon.com) #teenhackathon',
    id: '26576438844',
    url: 'https://www.eventbrite.com/e/teen-hackathon-teenhackathoncom-teenhackathon-tickets-26576438844?aff=ebapi',
    thumbnail: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F19049414%2F1621623457%2F1%2Foriginal.jpg?h=200&w=450&rect=0%2C40%2C1440%2C720&s=de23d119d6b441d5850872e6107e3188' },
  { name: 'self.TaughtCoder: iOS 10 Dev Training, Prep for TechCrunch SF Hackathon',
    id: '26939450622',
    url: 'https://www.eventbrite.com/e/selftaughtcoder-ios-10-dev-training-prep-for-techcrunch-sf-hackathon-tickets-26939450622?aff=ebapi',
    thumbnail: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F23027421%2F1621623457%2F1%2Foriginal.jpg?h=200&w=450&rect=0%2C30%2C970%2C485&s=6cb95103c58a98af518737dd14eded70' },
  { name: 'self.TaughtCoder: Prep/train for upcoming hackathon(s)',
    id: '26418551599',
    url: 'https://www.eventbrite.com/e/selftaughtcoder-preptrain-for-upcoming-hackathons-tickets-26418551599?aff=ebapi',
    thumbnail: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F22302094%2F1621623457%2F1%2Foriginal.jpg?h=200&w=450&rect=14%2C12%2C828%2C414&s=10dd159ce2699905f847874ce9fec438' }]
```

### Auther
[Amazingandyyy](amazingandyyy.github.io)


[create_eventbrite_app]: http://i.imgur.com/WGn2hir.png "Create Eventbrite App"
[get_eventbrite_key]: http://i.imgur.com/oRtmL8f.png "Get Eventbrite Key"
