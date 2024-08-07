const SoilMoistureComponents = ({ data }) => {
  const circleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `7px solid hsl(${data.tingkat_kelembapan * 2}, 100%, 50%)`, // Adjust color based on moisture
  };

  return (
    <div className="flex flex-col items-center">
      <div style={circleStyle}>
        <span className="text-lg font-bold">
          {data.tingkat_kelembapan ?? 99}%
        </span>
      </div>
      <p className="text-lg font-bold mt-4">
        Kondisi tanah: {data.jenis_kelembapan}
      </p>
      <span className="text-sm text-gray-500 mt-2 text-center">Updated: {new Date(data.updated_at).toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",  dateStyle: 'full', timeStyle: 'short' 
      })}</span>
    </div>
  );
};

export default SoilMoistureComponents;
