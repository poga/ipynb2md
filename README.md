# ipynb2md

convert jupyter notebook to markdown.

## Usage

```js
var convert = require('ipynb2md')
var fs = require('fs')

convert(fs.readFileSync('foo.ipynb')) // return markdown
```

## License

MIT
