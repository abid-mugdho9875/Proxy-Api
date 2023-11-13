const ProxyModel = require('../models/proxyModel');
const cacheMiddleware = require('../middlewares/cacheMiddleware');

class ProxyController {
  static async proxyRequest(req, res) {
    try {
      // caching middleware apply here to store data for specefic time and limit the request time
      await cacheMiddleware(req, res, async () => {
        const data = await ProxyModel.fetchData();
        res.status(200).json(data);
      });
    } catch (error) {
      console.error('Proxy Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ProxyController;
