var eventbrite = require('./index.js')('token-token-token');

var result = eventbrite.search({
  q: 'Hackathon',
  'location.address':'San Francisco',
  sort_by: 'date'
}, function(err, res, events){
  if(err){return console.log('err: ', err)};
  console.log(events)
  })

