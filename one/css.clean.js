
var fs = require('fs');


var CleanCSS = require('clean-css');

var p = console.log;

var input = 'a{font-weight:bold;}';
var options = { /* options */ };
//var output = new CleanCSS(options).minify(input);
//console.log(output);

//var cssInput = "./public/out.css";
var cssInput = "./public/src/a.css";

//fs.readFile(cssInput, 'utf8', (err, data)=>{
//    if(err) return console.log('err: ', err);
//
//    console.log(data);
//    //console.log(data.toString());
//    var mini = new CleanCSS({
//        inline:['all'],
//        format:'beautify'
//    }).minify(data, (err, minified)=>{
//
//
//        p('write');
//        p(minified);
//        fs.writeFile('/tmp/a.css', minified, 'utf8', (err)=>{
//            if(err) console.log('write /tmp/a.css err', err);
//        });
//
//    });
//
//});




fs.readFile(cssInput, 'utf8', (err, data)=>{
    if(err) return console.log('err: ', err);

    console.log(data);
    //console.log(data.toString());
    var mini = new CleanCSS({
        inline:['all'],
        format:'beautify'
    }).minify({
            './public/src/normalize.css': {'styles': fs.readFileSync('./public/src/normalize.css', 'utf8')},
            './public/src/a.scss':        {'styles': fs.readFileSync('./public/src/a.scss', 'utf8')}
        }, (err, minified)=>{


            p('write');
            p(minified);
            fs.writeFile('/tmp/a.css', minified.styles, 'utf8', (err)=>{
                if(err) console.log('write /tmp/a.css err', err);
            });

        });

});


var ta = {
    './public/src/normalize.css': {'styles': fs.readFileSync('./public/src/normalize.css', 'utf8')},
    './public/src/a.scss':        {'styles': fs.readFileSync('./public/src/a.scss', 'utf8')}
}



