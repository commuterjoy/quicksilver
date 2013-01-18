
var request = require('request'),
    util = require('util'),
    fs = require('fs'),
    now = new Date().toISOString(),
    stdin = '',
    storyPackages = {};

// http://stackoverflow.com/questions/1187518/javascript-array-difference
Array.prototype.diff = function(a) {
        return this.filter(function(i) {return !(a.indexOf(i) > -1);});
};

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    stdin += chunk;
});

process.stdin.on('end', function () {

    stdin.trim().split("\n").forEach(function(record) {
        
        var tokens = record.split("\t"),
            dt = tokens[0],
            id = tokens[1];
        
        if (!storyPackages.hasOwnProperty(dt)) 
            storyPackages[dt] = [];
        
        storyPackages[dt].push(id);    
    })

    Object.keys(storyPackages).sort().forEach(function (val, i, arr) {
        
        if (i > 0) { 
            
            var a = storyPackages[val],
                b = storyPackages[arr[i-1]],
                add = a.diff(b), 
                del = b.diff(a);
           
            if (add.length > 0 || del.length > 0) {
                console.log([val, 'add', a.length, a.diff(b).toString()].join("\t"));
                console.log([val, 'del', a.length, b.diff(a).toString()].join("\t"));
            } else {
                console.log([val, 'n/a'].join("\t"));
            }

        } else { 
            var a = storyPackages[val];
            console.log(val, a.length, a);
        }

    });

});


