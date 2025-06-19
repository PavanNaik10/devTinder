const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
app.use('/hello', (req, res) => {
  res.send('Hello From the Server');
});

app.get('/', (req, res) => {
  res.send('Hello From Home Page');
});
