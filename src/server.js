const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>tara-test-service is running!</h1><p>Connectivity test successful.</p>');
});

app.listen(port, () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});
