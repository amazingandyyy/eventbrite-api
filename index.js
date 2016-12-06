var request = require('request');
var publicKey = 'R5ZWGGH5QB65L3MAW62S';
var eb_event_search_uri = 'https://www.eventbriteapi.com/v3/events/search/';

module.exports = {
    getAll: function(filter, cb) {
        var result, events, filter_uri = '',
            combine;
        for (var key in filter) {
            combine = key + '=' + filter[key].split(' ').join('+')
            filter_uri = filter_uri + combine + '&'
        }
        var api_uri = eb_event_search_uri + '?' + filter_uri + 'token=' + publicKey;
        request(api_uri, function(err, res) {
            result = JSON.parse(res.body).events;
            events = result.map(function(event) {
                return {
                    name: event.name.text,
                    id: event.id,
                    url: event.url,
                    start: event.start.local,
                    // end: event.end,
                    thumbnail: event.logo ? event.logo.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
                }
            })
            cb(err, res, events);
        })
    }
}
