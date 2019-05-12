const fetchJson = url => fetch(url, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(r => r.json());

export default fetchJson;
