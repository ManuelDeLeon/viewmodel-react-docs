var fs = require('fs');

var replaceInFile = function(file) {
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      //'[{}]': "{'$3'}"
      '{': '{"{"}',
      '}': '{"}"}',
      '\n': "{'\\n'}"
    };

    var result = "";
    var inBlock = false;
    var openTag ="<pre><code>";
    var endTag = "</code></pre>";
    for (var i = 0; i < data.length; i++) {
      var char = data[i];
      if (!inBlock && result.endsWith(openTag)) inBlock = true;
      if (inBlock && (data.length - i > endTag.length) && data.substr(i, endTag.length) === endTag) inBlock = false;
      if (inBlock && replacements[char]) {
        result += replacements[char];
      } else {
        result += char;
      }
    }

    //
    // for(var key in replacements) {
    //   var value = replacements[key];
    //   var regex = new RegExp("(<pre><code>)([\\s\\S]*?)(" + key + ")([\\s\\S]*?)(<\\/code><\\/pre>)", "g");
    //   result = result.replace(regex, '$1$2' + value + '$4$5')
    // }

    fs.writeFile(file, result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
};

var walk = function (dir, done) {
  fs.readdir(dir, function (error, list) {
    if (error) {
      return done(error);
    }

    var i = 0;

    (function next () {
      var file = list[i++];

      if (!file) {
        return done(null);
      }

      file = dir + '/' + file;

      fs.stat(file, function (error, stat) {

        if (stat && stat.isDirectory()) {
          walk(file, function (error) {
            next();
          });
        } else {
          // do stuff to file here
          if(file.endsWith('.js')){
            replaceInFile(file);
          }
          next();
        }
      });
    })();
  });
};

walk('./out_pre', function(error) {
  if (error) {
    throw error;
  }
});
