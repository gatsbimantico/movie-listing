import fetchJson from '../framework/logic/fetchJson';

const API_KEY = '9e77e8e8b03b6f122f96eacc1da8bc10';

export function getNowPlaying() {
  return fetchJson(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
}

export function getImage(img) {
  return `https://image.tmdb.org/t/p/original/${img}`;
}

export function getGenres() {
  return fetchJson(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
}
