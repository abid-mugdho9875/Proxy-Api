const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const weatherRoutes = require('./routes/proxyRoutes');

app.use('/api', weatherRoutes);

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
