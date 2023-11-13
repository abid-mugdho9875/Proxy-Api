//express-rate-limit module loaded
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 1000,//for 1 minute
  max: 5, // limit each IP to specefic number of  requests per minute
  message: 'Too many requests from this IP, please try again later.',
});

module.exports = limiter;