import http, { movieApiBearer } from "../http";



export default (id) => {
  return new Promise((resolve, reject) => {
    http.get(`/movie/${id}`).then(({ data }) => {
      resolve({
        movie_id: data.id,
        poster: data.poster_path,
        title: data.title,
        genres: data.genres.map((genre) => genre.name),
        homepage: data.homepage,
        status: data.status,
        overview: data.overview
      })
    }).catch(reject)
  });
}