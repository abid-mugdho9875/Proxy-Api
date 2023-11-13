
const express = require('express');
const proxyRoutes = require('./routes/proxyRoutes');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Use helmet for security purpose
app.use(helmet());
// API proxy routes
app.use('/', proxyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
