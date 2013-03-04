'use strict';

var nabu_layouts = require('../nabu-layouts.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var nabu = {
  _files: [ './index.html.jade',
    './sample.md',
    './styles.css',
    './_layouts/default.jade',
    './_layouts/post.jade',
    './_posts/2012-12-1-sample1.md',
    './_posts/2013-01-12-sample2.md',
    './images/anchor-porter.jpg' ],
  files: require('../../nabu/lib/files.js'),
  site: {
    renderer: 'jade'
  }
};

exports['nabu'] = {
  setUp: function(done) {
    done();
  },
  'process': function(test) {
    test.expect(3);
    
    nabu_layouts.process(nabu, function(err, nabu){
      test.ok(nabu.site.layouts, "There shold be a nabu object");
      test.equal(nabu.site.layouts.default, './_layouts/default.jade', "There shold be a default layout path");
      test.equal(nabu.site.layouts.post, './_layouts/post.jade', "There shold be a default layout path");
      // test.ok((nabu.site.length > 0), "There shold be at least 1 page");
      test.done();
    });
    
  },
  tearDown: function(done) {
    done();
  }
};
