import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SoilMoisture = () => {
  const [moisture, setMoisture] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get('https://iot-backend-api.vercel.app/humadity');
        setMoisture(data.data.kelembapan);
        setData(data.data);
        // console.log(response)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // fetch data initially
    const intervalId = setInterval(fetchData, 3000); // fetch data every 3 seconds

    return () => {
      clearInterval(intervalId); // clear interval when component unmounts
    };
  }, []);

  const circleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `10px solid hsl(${moisture * 3.6}, 100%, 50%)`, // Adjust color based on moisture
  };

  return (
    <div className="flex flex-col items-center">
      <div style={circleStyle}>
        <span className="text-lg font-bold">{moisture}%</span>
      </div>
      <p className="text-lg font-bold mt-4">Kondisi tanah: {data.tingkat_kelembapan}</p>
    </div>
  );
};

export default SoilMoisture;