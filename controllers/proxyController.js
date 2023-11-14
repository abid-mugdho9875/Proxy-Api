const ProxyModel = require('../models/proxyModel');
const cacheMiddleware = require('../middlewares/cacheMiddleware');

class ProxyController {
  static async proxyRequest(req, res) {
    try {
      // Destructure parameters from the request query
      const {
        referenceCurrencyUuid,
        timePeriod,
        tiers,
        orderBy,
        orderDirection,
        limit,
        offset,
      } = req.query;
      // caching middleware apply here to store data for specefic time and limit the request time
      await cacheMiddleware(req, res, async () => {
        const data = await ProxyModel.fetchData({
          referenceCurrencyUuid,
          timePeriod,
          tiers,
          orderBy,
          orderDirection,
          limit,
          offset,
        });
        res.status(200).json(data);
      });
    } catch (error) {
      console.error('Proxy Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = ProxyController;