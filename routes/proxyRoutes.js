const express = require('express');
const rateLimitMiddleware = require('../middlewares/rateLimitMiddleware');
const ProxyController = require('../controllers/proxyController');

const router = express.Router();

// Apply rate limiting to the proxy route
router.use('/api-proxy', rateLimitMiddleware);

// Proxy all requests to the target API with caching
router.all('/api-proxy', ProxyController.proxyRequest);

module.exports = router;