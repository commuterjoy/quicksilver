
var request = require('request'),
    util = require('util'),
    fs = require('fs');

var fronts = ['uk-home', 'sport', 'culture', 'technology', 'commentisfree', 'business', 'uk', 'world', 'football'];
var url = "http://content.guardianapis.com/%s?format=json&show-editors-picks=true&edition=UK&order-by=newest&api-key=%s"
var apiKey = process.env.API_KEY;

fronts.forEach(function(front) {
    var stream = fs.createWriteStream("data/fronts/"+front+".txt", { flags: 'a' });
    stream.once('open', function(fd) {
        var uri = util.format(url, front, apiKey);
        request(uri, function (err, response, body) {
            if (err) {
                console.log(err, response, body);
            } else {
                JSON.parse(body).response.editorsPicks.map(function(result){
                    stream.write([result.id, result.sectionId].join("\t"));
                    stream.write("\n")
                    });
                }
            })
    });
});

