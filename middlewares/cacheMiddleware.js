//apiache module loaded
const apicache = require('apicache');

// Cache responses for declaration time
const cache = apicache.middleware('30 seconds');

module.exports = cache;