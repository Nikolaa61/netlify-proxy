const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const target_url = 'https://saloni-edqk.onrender.com/termin/get-appointments';
  const authToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJrby5qb3Zhbm92aWNAZ21haWwuY29tIiwiaWF0IjoxNzE4NzQ1NjMwfQ.TlDcGh-tKHl8n58VG9iILrBH8r-HtD7d18QjA';

  try {
    const response = await fetch(target_url, {
      method: 'GET',
      headers: {
        'Authorization': authToken,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' })
    };
  }
};
