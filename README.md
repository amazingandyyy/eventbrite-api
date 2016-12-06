# search-eventbrite

This is private repo of amazingandyyy-server served for [amazingandyyy](https://github.com/amazingandyyy). Andy used this for most of his Hackathons.

## install and usage
```javascript
var eventbrite = require('search-eventbrite');

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
