const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const response = await fetch('https://saloni-edqk.onrender.com/termin/get-appointments', {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJrby5qb3Zhbm92aWNAZ21haWwuY29tIiwiaWF0IjoxNzE4NzQ1NjMwfQ.TlDcGh-tKHl8n58VG9Omyvm9iILrBH8r-HtD7d18QjA',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  res.status(200).json(data);
};
