import axios from "axios";

const http = axios.create({
  baseURL: "https://iot-backend-api.vercel.app",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

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
            // wifi: data.data.wifi ? data.data.wifi : {SSID: "Unknown", SSID_Strength: "-99 dBm"},
            wifi: data?.data?.wifi,
            inserted_at: data.data.insert_at,
            updated_at: data.data.updated_at
        })
      })
      .catch(reject);
  });
};
