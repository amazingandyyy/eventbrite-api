var request = require('request');
var qs = require('querystring');

var publicKey = 'R5ZWGGH5QB65L3MAW62S';
var eb_event_search_uri = 'https://www.eventbriteapi.com/v3/events/search/';
var dev_mode = false;

module.exports = {
    getAll: function(filter, cb) {
        var events, clean_res;
        filter.token = publicKey
        var api_uri = eb_event_search_uri + '?' + qs.stringify(filter);
        if (!dev_mode) {
            request(api_uri, function(err, res) {
                events = JSON.parse(res.body).events;
                clean_res = events.map(function(event) {
                    return {
                        name: event.name.text,
                        id: event.id,
                        url: event.url,
                        start: event.start.local,
                        // end: event.end,
                        thumbnail: event.logo ? event.logo.url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
                    }
                })
                cb(err, res, clean_res);
            })
        } else {
            console.log('development mode on')
            cb(null, {
                body: 'developed body'
            }, 'events');
        }
    }
}
