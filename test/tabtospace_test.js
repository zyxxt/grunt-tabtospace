'use strict';

var grunt = require('grunt');

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

exports.tabtospace = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  custom_options: function(test) {
//    test.expect(1);
    var err = 0;
    var content = grunt.file.read('./test/fixtures/123');
    content.split(/\r?\n/).forEach(function (item, idx, arr) {
        var match = item.match(/^(\s*).*/);
        if (match && match[1]) {
            match = match[1];
            if (match.indexOf('\t') !== -1) {
                err = 1;
                test.equal(err, 0, 'erfdasfadfr: ' + item);
                return false;
            }
        }
    });

//    test.done();
  }
};
