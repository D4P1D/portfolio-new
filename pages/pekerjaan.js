import React from 'react';

function RiwayatPekerjaan() {
  // Daftar pekerjaan atau pengalaman kerja
  const pengalamanKerja = [
    {
      posisi: "KETUA",
      perusahaan: "PT. Tidur Sejahtera",
      lokasi: "Bandung, Indonesia",
      periode: "2002 - Sekarang",
      deskripsi: "Tiada hari Tampa Tidur "
    },
  
    

  ];

  return (
    <div id="riwayat-pekerjaan" className="py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-8">Riwayat Pekerjaan</h2>
      
      <div className="max-w-4xl mx-auto">
        {pengalamanKerja.map((pekerjaan, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-semibold text-indigo-900">{pekerjaan.posisi}</h3>
              <span className="ml-4 text-lg text-gray-600">{pekerjaan.periode}</span>
            </div>
            <p className="text-xl text-indigo-700">{pekerjaan.perusahaan}</p>
            <p className="text-gray-600 italic">{pekerjaan.lokasi}</p>
            <p className="mt-4 text-lg text-gray-800">{pekerjaan.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RiwayatPekerjaan;
