const fetchJson = url => fetch(url, {
  method: 'GET',
  mode: 'cors',
}).then(r => r.json());

export default fetchJson;
