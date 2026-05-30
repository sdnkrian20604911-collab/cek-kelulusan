import { useState } from 'react';

// Data Siswa diekstrak dari PDF yang diberikan
const dataSiswa = [
  {
    nama: "Abdul Fatah", ttl: "Serang, 19 Desember 2012", ortu: "Sawinah", nis: "846", nisn: "3123581184", status: "LULUS",
    nilai: ["73,50", "70,00", "77,67", "73,33", "71,67", "73,33", "73,00", "76,33", "78,00"], rataRata: "74,09"
  },
  {
    nama: "Afif Firdaus", ttl: "Serang, 08 Mei 2014", ortu: "Khatimah", nis: "873", nisn: "3142181941", status: "LULUS",
    nilai: ["83,75", "81,75", "81,67", "85,67", "83.00", "83,00", "88,00", "85,67", "83,67"], rataRata: "84,02"
  },
  {
    nama: "Amira Darra Afrillia", ttl: "Bandar Lampung, 12 April 2014", ortu: "Fitriah", nis: "963", nisn: "0148484274", status: "LULUS",
    nilai: ["82,00", "85,00", "86,00", "89,33", "85,67", "86.33", "86,67", "88,33", "83,67"], rataRata: "85,89"
  },
  {
    nama: "Ardiyansah", ttl: "Serang, 15 Maret 2014", ortu: "Ajijah", nis: "869", nisn: "3145485527", status: "LULUS",
    nilai: ["80,50", "77,25", "81,67", "81,67", "81,00", "80,67", "81,00", "83,00", "80,00"], rataRata: "80,75"
  },
  {
    nama: "Arya Saputra", ttl: "Serang, 02 Desember 2013", ortu: "Sukenah", nis: "854", nisn: "0137059141", status: "LULUS",
    nilai: ["75,00", "70,25", "75,00", "75,33", "71,67", "74,33", "74,67", "77,00", "78,00"], rataRata: "74,58"
  },
  {
    nama: "Azka Daniel", ttl: "Serang, 21 Februari 2014", ortu: "Mas'Amah", nis: "868", nisn: "3141947674", status: "LULUS",
    nilai: ["74,25", "72,00", "75,33", "74,33", "75,00", "72,33", "77,33", "77,67", "78,00"], rataRata: "75,14"
  },
  {
    nama: "Bisri Mustofa", ttl: "Serang, 25 Maret 2014", ortu: "Bairoh", nis: "871", nisn: "3145064548", status: "LULUS",
    nilai: ["75,00", "73,00", "77,33", "74,33", "72,00", "73,00", "76,00", "77,67", "78,67"], rataRata: "75,22"
  },
  {
    nama: "Faisal Arjuna Putra", ttl: "Serang, 17 Mei 2014", ortu: "Sumarni", nis: "874", nisn: "3146525595", status: "LULUS",
    nilai: ["76,00", "73,75", "79,00", "75,67", "75,33", "75,00", "79,33", "80.33", "79,33"], rataRata: "77,08"
  },
  {
    nama: "Fathan Al Hadi", ttl: "Serang, 4 September 2014", ortu: "Aminah", nis: "881", nisn: "3143320121", status: "LULUS",
    nilai: ["74,00", "71,00", "78,67", "74,00", "72,67", "75,00", "75,33", "78,67", "78,67"], rataRata: "75,33"
  },
  {
    nama: "Hoirunnisa Az Zahra", ttl: "Serang, 18 Oktober 2014", ortu: "Jasinah", nis: "883", nisn: "3141661614", status: "LULUS",
    nilai: ["74,00", "72,50", "76,00", "72,67", "73,33", "73,00", "73,33", "78,67", "78,67"], rataRata: "74,69"
  },
  {
    nama: "Ilham Suhada", ttl: "Serang, 3 November 2014", ortu: "Ida", nis: "886", nisn: "3146237513", status: "LULUS",
    nilai: ["73,00", "70,50", "75.33", "74,67", "73,33", "72,67", "76,67", "79,00", "78,33"], rataRata: "74,83"
  },
  {
    nama: "Khoerul Azam", ttl: "serang, 12 Maret 2014", ortu: "Fatimah", nis: "870", nisn: "0149095771", status: "LULUS",
    nilai: ["77,00", "73,50", "78,33", "77,33", "76,33", "76,67", "79,33", "79,67", "78,33"], rataRata: "77,39"
  },
  {
    nama: "Kusaeni", ttl: "Serang, 25 Januari 2014", ortu: "Kasminah", nis: "867", nisn: "3146206177", status: "LULUS",
    nilai: ["74,50", "69,75", "77,00", "73,67", "72,00", "72,67", "75,00", "77,33", "77,67"], rataRata: "74,40"
  },
  {
    nama: "Muhamad Thoriful Fazri", ttl: "Serang, 23 Desember 2014", ortu: "Basiyah", nis: "887", nisn: "0146092243", status: "LULUS",
    nilai: ["73,75", "70,75", "76,33", "75,67", "71,33", "71,33", "72,33", "77,33", "78,00"], rataRata: "74,09"
  },
  {
    nama: "Naelal Amal", ttl: "Serangm 21 Juni 2014", ortu: "Masamah", nis: "875", nisn: "3141738800", status: "LULUS",
    nilai: ["82,50", "78,50", "84,33", "85,67", "82.67", "79,33", "85,33", "84,33", "81,33"], rataRata: "82,67"
  },
  {
    nama: "Naifah", ttl: "Serang, 2 November 2014", ortu: "Isah", nis: "884", nisn: "3140599526", status: "LULUS",
    nilai: ["79,75", "76,75", "82,00", "82,00", "79,00", "78,33", "79,33", "80.33", "81,33"], rataRata: "79,87"
  },
  {
    nama: "Rahmawati", ttl: "Sersang, 10 Januari 2013", ortu: "Basariyah", nis: "844", nisn: "3136889151", status: "LULUS",
    nilai: ["71,75", "69,25", "71,00", "71,33", "74,00", "71,00", "73,33", "73,00", "77,00"], rataRata: "72,41"
  },
  {
    nama: "Raiyatul Millah", ttl: "Serang, 19 September 2014", ortu: "Jaimah", nis: "882", nisn: "3141268184", status: "LULUS",
    nilai: ["78,75", "75,75", "82,33", "81,67", "78,00", "77,00", "78,67", "76,67", "81,33"], rataRata: "78,91"
  },
  {
    nama: "Silatul Atikah", ttl: "Serang, 7 Mei 2014", ortu: "Aat Aryati", nis: "872", nisn: "3144970216", status: "LULUS",
    nilai: ["79,75", "75,75", "81,00", "83,33", "77,00", "80,33", "85,00", "81,67", "81,00"], rataRata: "80,54"
  },
  {
    nama: "Siti Marisah", ttl: "Serang, 9 November 2014", ortu: "Daryuni", nis: "885", nisn: "3142468200", status: "LULUS",
    nilai: ["79,50", "76,50", "82,33", "81,67", "79,33", "78,67", "79,00", "81.33", "81,33"], rataRata: "79,96"
  },
  {
    nama: "Siti Nadilah", ttl: "Serang, 29 Juni 2012", ortu: "Saeni", nis: "863", nisn: "3142034085", status: "LULUS",
    nilai: ["76,75", "72,00", "80,33", "77,67", "75,67", "73.33", "77,00", "78,00", "80,33"], rataRata: "76,79"
  },
  {
    nama: "Siti Romanah", ttl: "Serang, 3 September 2014", ortu: "Khaeriyah", nis: "879", nisn: "3140403193", status: "LULUS",
    nilai: ["76,50", "74,25", "77,33", "78,33", "74,33", "74,00", "79,33", "78,33", "78,33"], rataRata: "76,75"
  },
  {
    nama: "Sulaiman", ttl: "TANGERANG, 23 September 2014", ortu: "Ranti", nis: "880", nisn: "3141122369", status: "LULUS",
    nilai: ["74,50", "71,75", "76,00", "77,00", "73,33", "75.33", "75,33", "78,67", "78,00"], rataRata: "75,55"
  },
  {
    nama: "Syania Az Zahra", ttl: "Serang, 19 Juni 2014", ortu: "Embay", nis: "877", nisn: "3146873528", status: "LULUS",
    nilai: ["77,00", "75,00", "79,67", "81,33", "77,33", "76,33", "80,33", "76,33", "80,67"], rataRata: "78,22"
  },
  {
    nama: "Timan", ttl: "Serang, 15 Juli 2014", ortu: "Tinah", nis: "878", nisn: "3143538981", status: "LULUS",
    nilai: ["73,00", "71,50", "75,00", "76,33", "73,67", "72,33", "75,33", "77,33", "77,67"], rataRata: "74,69"
  },
  {
    nama: "Umar Nurdin", ttl: "Serang, 14 Agustus 2013", ortu: "Umirah", nis: "860", nisn: "3133378974", status: "LULUS",
    nilai: ["74,25", "71,25", "77,33", "76,33", "73,00", "73.33", "73,00", "79,00", "79,33"], rataRata: "75,20"
  }
];

const mapelList = [
  "Pend. Agama dan Budi Pekerti",
  "Pend. Pancasila dan Kewarganegaraan",
  "Bahasa Indonesia",
  "Matematika",
  "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
  "Seni Budaya dan Prakarya",
  "PJOK",
  "Bahasa Inggris",
  "B. Jawa Serang"
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setResult(null);
    setHasSearched(false);

    const term = searchTerm.toLowerCase().trim();
    
    // Simulasi loading sebentar agar efek terlihat
    setTimeout(() => {
      // Cari berdasarkan NISN persis, atau Nama yang mengandung kata kunci
      const found = dataSiswa.find(
        siswa => 
          siswa.nisn === term || 
          siswa.nama.toLowerCase().includes(term)
      );

      setResult(found || null);
      setHasSearched(true);
      setIsLoading(false);
    }, 1500); // loading 1.5 detik
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      
      {/* CSS Khusus untuk Print agar UI pencarian disembunyikan */}
      <style>
        {`
          @media print {
            .no-print { display: none !important; }
            .print-area { 
              background: white; 
              width: 100%; 
              padding: 0;
              margin: 0;
              box-shadow: none;
            }
            body { background: white; }
          }
        `}
      </style>

      {/* Bagian Pencarian (Tidak ikut di-print) */}
      <div className="max-w-3xl mx-auto pt-10 px-4 no-print">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 text-center border-t-4 border-blue-600">
          <div className="flex justify-center items-center gap-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9 5m9-5l9 5" />
            </svg>
            <h1 className="text-2xl font-bold text-gray-800">Cek Kelulusan Siswa 2026</h1>
          </div>
          <p className="text-gray-600 font-medium">SD Negeri Krian - Kec. Lebak Wangi</p>
          
          <form onSubmit={handleSearch} className="mt-6 max-w-lg mx-auto">
            <div className="flex shadow-sm rounded-md">
              <input
                type="text"
                placeholder="Masukkan Nama atau NISN Siswa..."
                className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 border text-gray-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-r-md text-white transition-colors ${
                  isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }`}
              >
                Cari
              </button>
            </div>
            
            <div className="h-6 mt-2 text-left">
              {isLoading ? (
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  MRLOADING... Mencarikan data siswa
                </div>
              ) : (
                <p className="text-xs text-gray-500">
                  Contoh: "31XXXXXXXX" atau "MR LOADING"
                </p>
              )}
            </div>
          </form>
        </div>

        {!isLoading && hasSearched && !result && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg text-center font-medium border border-red-200">
            Maaf, data dengan Nama/NISN "{searchTerm}" tidak ditemukan. Silakan periksa kembali ketikan Anda.
          </div>
        )}
      </div>

      {/* Bagian Hasil Surat Kelulusan (Printable Area) */}
      {!isLoading && result && (
        <div className="max-w-4xl mx-auto px-4 pb-12 print-area">
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm print:shadow-none border border-gray-200">
            
            {/* Header Kop Surat */}
            <div className="text-center border-b-4 border-black pb-4 mb-6">
              <h2 className="text-lg font-bold">PEMERINTAH KABUPATEN SERANG</h2>
              <h1 className="text-2xl font-black mt-1 mb-1">SDN KRIAN LEBAK WANGI</h1>
              <p className="text-sm">Alamat: Kp. Kriyan Ds. Kebonratu Kec. Lebak Wangi Kab. Sertang - Banten 42181</p>
              <p className="text-sm">E-mail: sdnkrian20604911@gmail.com | NPSN: 20604911 | NSS: 10.1.28.04.09.030</p>
            </div>

            {/* Judul Surat */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold underline">SURAT KETERANGAN KELULUSAN</h3>
              <p className="text-md">Nomor: 400.3.5 /10/ SD.123/2026</p>
            </div>

            {/* Pembuka */}
            <p className="mb-4 text-justify">
              Yang bertanda tangan di bawah ini, Kepala Sekolah SD Negeri Krian Kecamatan Lebak Wangi menerangkan bahwa :
            </p>

            {/* Data Diri */}
            <div className="pl-4 md:pl-10 mb-6">
              <table className="w-full text-left">
                <tbody>
                  <tr><td className="w-48 py-1">Nama</td><td className="w-4">:</td><td className="font-bold">{result.nama}</td></tr>
                  <tr><td className="py-1">Tempat Tanggal Lahir</td><td>:</td><td>{result.ttl}</td></tr>
                  <tr><td className="py-1">Nama Orang Tua/Wali</td><td>:</td><td>{result.ortu}</td></tr>
                  <tr><td className="py-1">Nomor Induk Siswa (NIS)</td><td>:</td><td>{result.nis}</td></tr>
                  <tr><td className="py-1">NISN</td><td>:</td><td>{result.nisn}</td></tr>
                </tbody>
              </table>
            </div>

            <p className="mb-4">Berdasarkan:</p>
            <ol className="list-decimal pl-8 mb-4 text-sm text-justify space-y-1">
              <li>Permendikbud Nomor: 20 Tahun 2016 Tentang Standar Kompetensi Lulusan</li>
              <li>Permendikbud Nomor: 23 Tahun 2016 Tentang Standar Penilaian</li>
              <li>Keputusan Kepala Dinas Pendidkan dan Kebudayaan Kabupaten Serang Nomor:420/1089- Disdikbud.2024 Tentang Kalender Pendidikan Pada Satuan Pendidikan Di Kabupaten Serang Tahun Pelajaran 2026;</li>
              <li>SE Kepala Dinas Pendidikan dan Kebudayaan Kabuparen Serang Nomor: 420 / - Disdikbud.2025 tentang Juknis Penyelenggaraan US dan PAT SD Kab.Serang Tahun Pelajaran 2025 / 2026;</li>
              <li>Hasil Rapat Dewan Guru tanggal Krian Tentang Penentuan Kelulusan Peserta Didik sebagaimana tersebut di atas dinyatakan :</li>
            </ol>

            {/* Status Lulus */}
            <div className="text-center my-6">
              <span className="inline-block text-3xl font-black text-green-700 tracking-widest border-4 border-green-700 py-2 px-8 rounded-md bg-green-50 print:bg-transparent print:border-black print:text-black">
                {result.status}
              </span>
            </div>

            <p className="mb-4">dari SD Negeri Krian Dengan Nilai Ijazah / Sebagai berikut:</p>

            {/* Tabel Nilai */}
            <table className="w-full border-collapse border border-black mb-6 text-sm">
              <thead>
                <tr className="bg-gray-100 print:bg-transparent">
                  <th className="border border-black p-2 text-center w-12">No</th>
                  <th className="border border-black p-2 text-left">Mata Pelajaran</th>
                  <th className="border border-black p-2 text-center w-24">Nilai</th>
                </tr>
              </thead>
              <tbody>
                {mapelList.map((mapel: string, index: number) => (
                  <tr key={index}>
                    <td className="border border-black p-2 text-center">{index + 1}</td>
                    <td className="border border-black p-2 pl-4">{mapel}</td>
                    <td className="border border-black p-2 text-center font-medium">{result.nilai[index]}</td>
                  </tr>
                ))}
                <tr className="font-bold bg-gray-50 print:bg-transparent">
                  <td colSpan={2} className="border border-black p-2 text-right pr-4">Nilai Rata - Rata</td>
                  <td className="border border-black p-2 text-center">{result.rataRata}</td>
                </tr>
              </tbody>
            </table>

            <p className="mb-8">Demikian surat keterangan ini dibuat, untuk digunakan sebagaimana mestinya.</p>
            
            {/* Tombol Cetak (Hanya tampil di layar) */}
            <div className="mt-8 text-center no-print">
              <button 
                onClick={handlePrint}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                </svg>
                Cetak / Simpan PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
