import http, { movieApiBearer, movieApiKey } from "../http";

http.interceptors.request.use(config => {
  config.baseURL = "https://api.themoviedb.org/3";
  config.headers['Authorization'] = `Bearer ${movieApiBearer}`;
  return config;
})

export default (query) => {
  return new Promise((resolve, reject) => {
    http.get(`/search/movie?api_key=${movieApiKey}&query=${query}`).then(({ data }) => {
      resolve({
        items: data.results
      });
    }).catch(reject)
  });
}