
var request = require('request'),
    util = require('util'),
    fs = require('fs');

var stream = fs.createWriteStream("data/stories.txt", { flags: 'r+' });
var url = "http://content.guardianapis.com/search?format=json&page-size=50&api-key=%s"
var apiKey = process.env.API_KEY;

stream.once('open', function(fd) {

    var uri = util.format(url, apiKey);
    request(uri, function (err, response, body) {
        if (err) {
            console.log(i, err, response, body);
        } else {
            JSON.parse(body).response.results.map(function(result){
                stream.write([result.id, result.webPublicationDate].join("\t"));
                stream.write("\n")
                });
            }
        })
});

