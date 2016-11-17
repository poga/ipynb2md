module.exports = convert

function convert (ipynb) {
  var md = []
  JSON.parse(ipynb)['cells'].forEach(cell => {
    var body = cell.source.join('').trim()
    if (cell.cell_type === 'code') {
      md.push(['```', body, '```'].join('\n'))
    } else if (cell.cell_type === 'markdown') {
      md.push(body)
    }
  })

  return md.join('\n')
}
