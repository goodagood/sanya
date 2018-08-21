
var fs = require('fs');


var CleanCSS = require('clean-css');

var p = console.log;

var input = 'a{font-weight:bold;}';
var options = { /* options */ };
//var output = new CleanCSS(options).minify(input);
//console.log(output);



var outputFile = "/tmp/a.css";
//var cssInput = "./public/out.css";
var cssFile = "./public/src/a.css";

var cssFileHash = {
    './public/src/normalize.css': {
        'styles': fs.readFileSync('./public/src/normalize.css', 'utf8')},
    './node_modules/animate.css/animate.css': {
        'styles': fs.readFileSync('./node_modules/animate.css/animate.css', 'utf8')},
    './public/src/style/test.css':        {'styles': fs.readFileSync('./public/src/style/test.css', 'utf8')}
};



// give the Hash of css files, .minify() will concatenate them to single output.
// 0820

var m = new CleanCSS({
    inline:['all'],
    format:'beautify'
}).minify(cssFileHash, (err, minified)=>{
    if(err){return p('.minify err: ', err);}

    p('before write');
    //p(minified);
    fs.writeFile(outputFile, minified.styles, 'utf8', (err)=>{
        if(err) console.log('write err', err);
    });

});






