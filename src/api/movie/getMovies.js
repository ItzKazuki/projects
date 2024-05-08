import http, { movieApiBearer } from "../http";

http.interceptors.request.use((config) => {
  config.baseURL = "https://api.themoviedb.org/3";
  config.headers["Authorization"] = `Bearer ${movieApiBearer}`;
  return config;
});

export default (page) => {
  return new Promise((resolve, reject) => {
    http
      .get(`/movie/popular?language=en-EN&page=${page ? page : 1}`)
      .then(({ data }) => {
        resolve({
          items: data.results,
          page: data.page,
        });
      })
      .catch(reject);
  });
};
