const axios = require('axios');
const getFutureWeather = async (req, res) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/future.json',
      params: {
        q: 'London',
        dt: '2022-12-25',
      },
      headers: {
        'X-RapidAPI-Key': '03f8490efcmsh81fdb3742186abep123901jsn758ea15cb04a',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };
  
    try {
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching future weather data.' });
    }
  };
  

const getCurrentWeather = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: '53.1,-0.13' },
      headers: {
        'X-RapidAPI-Key': '03f8490efcmsh81fdb3742186abep123901jsn758ea15cb04a',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching weather data.' });
  }
};
const getTimezoneData = async (req, res) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
      params: { q: req.query.location }, // Use req.query.location to get the location parameter
      headers: {
        'X-RapidAPI-Key': '03f8490efcmsh81fdb3742186abep123901jsn758ea15cb04a',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };
  
    try {
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching timezone data.' });
    }
  };
  // Define a controller to handle the Coinranking API request
const coinController = async (req, res) => {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0',
      },
      headers: {
        'X-RapidAPI-Key': '03f8490efcmsh81fdb3742186abep123901jsn758ea15cb04a',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    };
  
    try {
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  };

module.exports ={
    getFutureWeather,
    getCurrentWeather,
    getTimezoneData,
    coinController
}
