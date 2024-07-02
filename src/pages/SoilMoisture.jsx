import { useEffect, useState } from "react";
import SoilMoistureComponents from "./../components/SoilMoisture";
import getSensorData from "./../api/getSensorData";
import HintMoisture from "./../components/HintMoisture";

const SoilMoisture = () => {
  const [moisture, setMoisture] = useState({});

  useEffect(() => {
    getSensorData().then(res => setMoisture(res));
  }, [moisture]);
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen">
      <Navbar data={moisture} />
      <div className="flex justify-center flex-col items-center mt-10 gap-3">
        <div className="card w-[24rem] bg-base-100 shadow-xl border-2 opacity-80 border-black">
          <div className="card-body">
            <h2 className="text-center text-xl font-bold">Kelembapan Tanah</h2>
            <div className="flex justify-center flex-col items-center">
              <SoilMoistureComponents data={moisture} />
            </div>
          </div>
        </div>
        <div className="card w-[24rem] bg-base-200 shadow-xl opacity-80">
        <HintMoisture />
        </div>
      </div>
    </div>
  );
};

function Navbar({ data }) {
  return (
    <div className="navbar bg-white">
      <div className="navbar-start"></div>
      <div className="navbar-center flex flex-col">
        <a className="btn btn-ghost text-xl">Coding Club Project</a>
        <span className="text-center text-sm text-gray-600">
          connection from: {data.jenis_koneksi}
        </span>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 h-5">
            <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SoilMoisture;
