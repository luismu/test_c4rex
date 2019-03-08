const express = require('express');
const app = express();
const routes = require('./src/routes')



//routes
app.get('/', (req, res) => {
  res.send('works!')
});
app.use('/', routes);

app.listen(3000, () => {
  console.log('server on port 3000')
});