# search-eventbrite

This is private repo of amazingandyyy-server served for [amazingandyyy](https://github.com/amazingandyyy). Andy used this for most of his Hackathons.

##prepare
### 1. Create your Eventbrite app.
![Create Eventbrite App][create_eventbrite_app]
Visit [Eventbrite Request a new Key](https://www.eventbrite.com/myaccount/apps/new/) to create an Eventbrite app

### 2. Copy your Eventbrite key.
Vist [Eventbrite App Management](https://www.eventbrite.com/myaccount/apps/) and copy your Eventbrite unique key from the app console

## install and usage with sample code
```javascript
var eventbrite_key = '<your-eventbrite-key>'
var eventbrite = require('search-eventbrite')(eventbrite_key);

eventbrite.search({
  q: 'Bot',
  'location.address':'San Francisco',
  sort_by: 'date'
}, function(err, res, events){
  if(err){return console.log('err: ', err)};
  console.log('res.body: ', res.body)
  console.log('events: ', events)
})
```

### Auther
[Amazingandyyy](amazingandyyy.github.io)


[create_eventbrite_app]: http://i.imgur.com/WGn2hir.png "Create Eventbrite App"
