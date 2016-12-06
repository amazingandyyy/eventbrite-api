var request = require('request');
var instance;
module.exports = function(token) {
  if(!token){
    return console.log('No or Bad token. Please visit https://www.eventbrite.com/myaccount/apps/ to create an Eventbrite app and paste token to this api.')
  }
    var eb_event_search_uri = 'https://www.eventbriteapi.com/v3/events/search/'
    instance = {
        // event: {
            search: function(filter, cb) {
              var result, events;
                var filter_uri = [];
                for (var key in filter) {
                    var combine = key + '=' + filter[key].split(' ').join('+')
                    filter_uri.push(combine)
                }
                filter_uri = filter_uri.join("&")
                var api_uri = eb_event_search_uri + '?' + filter_uri + '&token=' + token;
                console.log('api_uri: ', api_uri);
                request(api_uri, function(err, res, body) {
                    result = JSON.parse(body).events;
                    events = result.map(function(event) {
                      return {
                        name: event.name.text,
                        id: event.id,
                        url: event.url,
                        // start: event.start,
                        // end: event.end,
                        thumbnail: event.logo?event.logo.url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
                      }
                    })
                    cb(err, res, events);
                })
            }
        // }
    }
    return instance;
}
