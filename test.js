const tape = require('tape')
const convert = require('.')
const fs = require('fs')

var ipynb = fs.readFileSync('./test.ipynb')

var expect = fs.readFileSync('./test.md').toString().trim()

tape('test', function (t) {
  t.same(convert(ipynb), expect)
  t.end()
})
