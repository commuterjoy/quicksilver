
var request = require('request'),
    util = require('util'),
    fs = require('fs'),
    now = new Date().toISOString();

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    chunk.trim().split("\n").forEach(function(id) {
        logStoryPackage(id);
    })
});

process.stdin.on('end', function () {
    //process.stdout.write('end');
    });

var logStoryPackage = function (id) { 

    var idAsFile = id.replace(/\//g, '_');
    var stream = fs.createWriteStream("data/items/" + idAsFile, { flags: 'a' });
    var url = "http://content.guardianapis.com/%s?format=json&edition=UK&show-story-package=true&order-by=newest&api-key=%s"
    var apiKey = process.env.API_KEY;
    
    stream.once('open', function(fd) {

        var uri = util.format(url, id, apiKey);
        request(uri, function (err, response, body) {
            if (err) {
                console.log(err, response, body);
            } else {
                var package = JSON.parse(body).response.storyPackage;
                if ( package.length > 0 ) { 
                    package.map(function(result) {
                        stream.write([now, result.id].join("\t"));
                        stream.write("\n");
                        });
                } else { 
                    stream.write('# ' + (new Date().toISOString()) + "\n");
                    }

                }
            })
    });

}

