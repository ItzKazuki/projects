export default function HintMoisture({ jenisKelembapan }) {
  let hint = "No data found";

  jenisKelembapan = "Kering"

  if (jenisKelembapan == "Kering") {
    hint = `
    Irigasi Teratur: Pastikan tanah mendapat suplai air yang cukup dengan sistem irigasi tetes atau penyiraman yang teratur.
    Mulsa: Gunakan mulsa organik seperti jerami atau daun kering untuk menjaga kelembaban tanah dan mengurangi penguapan.
    Tanaman Tahan Kering: Pilih tanaman yang toleran terhadap kekeringan seperti kaktus, succulents, atau beberapa jenis rumput tertentu.
    Pengolahan Tanah: Tambahkan bahan organik seperti kompos untuk meningkatkan kemampuan tanah menahan air.
    `;
  } else if(jenisKelembapan == "Agak Lembab") {
    hint = ``;
  } else if(jenisKelembapan == "Lembab") {
    hint = ``;
  } else if(jenisKelembapan == "Terlalu Lembab") {
    hint = ``;
  } else if(jenisKelembapan == "Terlalu Kering") {
    hint = ``;
  }



  return (
    <div id="hint" className="text-black my-8 text-center">
      <h1 className="text-xl font-extrabold">Hint:</h1>
      <p className="mx-6 text-lg">{hint}</p>
    </div>
  );
}
