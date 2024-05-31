import SoilMoisture from "../components/SoilMoisture";

export default function ProjectCodingClub() {
  return (
    <div className="flex justify-center items-center mt-9">
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Kelembapan Tanah</h2>
        <div className="flex justify-center flex-col items-center">
          <SoilMoisture />
        </div>
      </div>
    </div>
  </div>

  )
}