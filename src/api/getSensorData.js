import http from "./http";

http.interceptors.request.use(config => {
  config.baseURL = "https://iot-backend-api.vercel.app";
  return config;
})

export default () => {
  return new Promise((resolve, reject) => {
    http
      .get("/humadity")
      .then(({ data }) => {
        resolve({
            indikator_kelembapan: data.data.indikator_kelembapan,
            tingkat_kelembapan: data.data.kelembapan,
            jenis_kelembapan: data.data.tingkat_kelembapan,
            jenis_koneksi: data.data.koneksi.split(" ")[1],
            inserted_at: data.data.insert_at,
            updated_at: data.data.updated_at
        })
      })
      .catch(reject);
  });
};
