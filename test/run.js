var fs = require("fs");
var page = require('webpage').create();

var url = fs.workingDirectory+'/test/build/index.html';

page.onConsoleMessage = function(msg, lineNum, sourceId, lol) {
    console.log(msg);
};

page.open(url, function (status) {
    phantom.exit();
});