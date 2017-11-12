const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

app.use(express.static('client/build'))


const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('React Startpoint app listening at http://%s:%s', host, port)
})
