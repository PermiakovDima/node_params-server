'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const normalizedURL = new URL(req.url, `http://${req.headers.host}`);

  const parts = normalizedURL.pathname.split('/').slice(1);
  const query = Object.fromEntries(normalizedURL.searchParams.entries());

  const result = {
    parts,
    query,
  };

  res.end(JSON.stringify(result));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${PORT}`);
});
