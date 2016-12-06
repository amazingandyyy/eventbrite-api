var eventbrite = require('./index.js')('R5ZWGGH5QB65L3MAW62S');

var result = eventbrite.search({
  q: 'Bot',
  'location.address':'San Francisco',
  sort_by: 'date'
}, function(err, res, events){
  if(err){return console.log('err: ', err)};
  console.log(events)
  })
