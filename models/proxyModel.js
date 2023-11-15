const axios = require('axios');

class ProxyModel {
  static async fetchData(params) {
    const { url, ...otherParams } = params;
    const options = {
      method: 'GET',
      url,
      params,
      // params: {
      //   referenceCurrencyUuid: 'yhjMzLPhuIDl',
      //   timePeriod: '24h',
      //   'tiers[0]': '1',
      //   orderBy: 'marketCap',
      //   orderDirection: 'desc',
      //   limit: '50',
      //   offset: '0'
      // },
      headers: {
        'X-RapidAPI-Key': '03f8490efcmsh81fdb3742186abep123901jsn758ea15cb04a',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProxyModel;