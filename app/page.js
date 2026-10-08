'use client';

import { useState } from 'react';

export default function Home() {
  const [modalLayananActive, setModalLayananActive] = useState(false);
  const [activeData, setActiveData] = useState({ judul: '', syarat: [], alur: [], icon: '', iconBg: '' });
  const [modalFormActive, setModalFormActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dataLayanan = {
    'adminduk': {
      judul: 'Administrasi Kependudukan',
      icon: 'fas fa-id-card',
      iconBg: 'bg-blue-100 text-blue-900',
      syarat: [
        'Surat Pengantar dari RT dan RW setempat.',
        'Fotokopi dokumen lama (KTP/KK) jika ada.',
        'Untuk layanan Jemput Bola (Jebol), pastikan wilayah RT/RW Anda sedang mendapat giliran jadwal.'
      ],
      alur: [
        'Pemohon membawa berkas pengantar ke loket pelayanan kelurahan.',
        'Petugas kelurahan memverifikasi berkas dan mengeluarkan surat pengantar resmi.',
        'Pemohon membawa surat pengantar ke kecamatan atau layanan Disdukcapil Kota Tangerang Selatan.',
        'Khusus program <b>Jebol (Jemput Bola)</b>, warga dapat langsung mendatangi lokasi mobil layanan keliling.'
      ]
    },
    'kesehatan': {
      judul: 'Layanan Kesehatan & Posyandu',
      icon: 'fas fa-clinic-medical',
      iconBg: 'bg-teal-100 text-teal-700',
      syarat: [
        'Buku KIA / Kartu Menuju Sehat (KMS) untuk bayi/balita.',
        'Terdaftar/melapor ke kader setempat untuk mengikuti Pos Lansia Alamanda.',
        'Membawa fotokopi KTP / BPJS (jika diperlukan untuk rujukan medis).'
      ],
      alur: [
        'Warga mendatangi lokasi Posyandu balita atau Pos Lansia Alamanda sesuai jadwal rutin bulanan.',
        'Dilakukan pendaftaran, penimbangan, dan pemeriksaan dasar (tumbuh kembang/tensi darah).',
        'Warga mengikuti program penyuluhan kesehatan dan skrining dari Puskesmas Rawa Buntu.'
      ]
    },
    'surat': {
      judul: 'Surat Keterangan & Pengantar',
      icon: 'fas fa-file-signature',
      iconBg: 'bg-blue-100 text-blue-900',
      syarat: [
        'Surat Pengantar dari RT/RW setempat.',
        'Fotokopi KTP dan Kartu Keluarga (KK) pemohon.',
        'Untuk Surat Keterangan Usaha (SKU): Lampirkan foto tempat usaha / pendukung lainnya.'
      ],
      alur: [
        'Pemohon menyerahkan berkas ke petugas loket kelurahan.',
        'Petugas memeriksa kelengkapan persyaratan dokumen pendukung.',
        'Petugas mengetik draf surat (Domisili, SKU, atau Pengantar lainnya).',
        'Pengecekan dan penandatanganan surat oleh Kasi/Sekretaris Kelurahan/Lurah.'
      ]
    }
  };

  const bukaModal = (jenis) => {
    setActiveData(dataLayanan[jenis]);
    setModalLayananActive(true);
  };

  const submitFormLayanan = (e) => {
    e.preventDefault();
    alert('Pengajuan Layanan Berhasil Terkirim!\n\nPetugas Kelurahan Rawa Buntu akan segera memverifikasi data Anda.');
    setModalFormActive(false);
  };

  return (
    <main className="font-sans text-gray-800 bg-gray-50 min-h-screen overflow-x-hidden">
      {/* Header & Navigation Bar */}
      <header id="header" className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-md transition-all border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-3">
            <img src="/logotangsel.jpeg" alt="Logo Tangsel" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-base sm:text-lg font-bold text-blue-900 leading-tight">SIRATU</h1>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Sistem Informasi Kelurahan Rawa Buntu</p>
            </div>
          </div>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-blue-900 hover:text-teal-600 focus:outline-none p-2 rounded-lg bg-gray-50 border border-gray-200 transition">
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <a href="#beranda" className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg font-semibold transition text-sm lg:text-base">Beranda</a>
            <a href="#profil" className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg font-semibold transition text-sm lg:text-base">Profil</a>
            <a href="#layanan" className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg font-semibold transition text-sm lg:text-base">Layanan Publik</a>
            <a href="#berita" className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg font-semibold transition text-sm lg:text-base">Berita</a>
            <a href="#struktur" className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg font-semibold transition text-sm lg:text-base">Struktur Organisasi</a>
            <a href="#kontak" className="text-gray-700 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg font-semibold transition text-sm lg:text-base">Kontak</a>
          </nav>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-3 px-4 shadow-xl space-y-1">
            <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 font-semibold rounded-lg transition">Beranda</a>
            <a href="#profil" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 font-semibold rounded-lg transition">Profil</a>
            <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 font-semibold rounded-lg transition">Layanan Publik</a>
            <a href="#berita" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 font-semibold rounded-lg transition">Berita</a>
            <a href="#struktur" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 font-semibold rounded-lg transition">Struktur Organisasi</a>
            <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 font-semibold rounded-lg transition">Kontak</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="beranda" className="min-h-screen flex items-center justify-center text-center pt-24 pb-12 px-4 bg-cover bg-center text-white relative" style={{ backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.85), rgba(13, 148, 136, 0.7)), url('kantor.jpeg')" }}>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg leading-tight">Selamat Datang di SIRATU<br /><span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mt-2 block">Sistem Informasi Kelurahan Rawa Buntu</span></h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md text-gray-100">Pelayanan Publik Cepat, Transparan, dan Terintegrasi untuk Warga Rawa Buntu</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
            <a href="#layanan" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-lg text-sm sm:text-base">Ajukan Layanan</a>
            <button onClick={() => setModalFormActive(true)} className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded-full transition shadow-lg text-sm sm:text-base">Formulir Online</button>
          </div>
        </div>
      </section>

      {/* Profil Singkat & Visi Misi */}
      <section id="profil" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">Profil Kelurahan</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            <div className="w-full lg:w-1/3 max-w-md lg:max-w-none">
              <img src="kantor.jpeg" alt="Rawa Buntu" className="rounded-xl shadow-xl w-full object-cover lg:sticky lg:top-24" />
            </div>
            <div className="w-full lg:w-2/3">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Tentang Rawa Buntu</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                Kelurahan Rawa Buntu merupakan salah satu kelurahan yang terletak di Kecamatan Serpong, Kota Tangerang Selatan, Banten. Kami berkomitmen untuk memberikan pelayanan terbaik bagi seluruh warga dengan mengedepankan prinsip transparansi, inovasi, dan kolaborasi.
              </p>
              
              <div className="grid grid-cols-1 gap-6 mt-6">
                <div className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <img src="/logotangsel.jpeg" alt="Lambang Tangsel" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    <h4 className="font-bold text-base sm:text-lg">Visi Kelurahan Rawabuntu</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify italic">"Mewujudkan masyarakat Kelurahan Rawabuntu dalam pelayanan prima dan berorientasi kepada terciptanya SDM yang cerdas, modern, religious dan berdaya saing serta tepat guna terhadap ilmu pengetahuan dan teknologi (IPTEK)"</p>
                </div>

                <div className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <img src="/logotangsel.jpeg" alt="Lambang Tangsel" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    <h4 className="font-bold text-base sm:text-lg">Misi Kelurahan Rawabuntu</h4>
                  </div>
                  <ol className="text-xs sm:text-sm text-gray-600 list-decimal list-outside ml-4 space-y-2 text-justify">
                    <li>Mewujudkan aparatur yang berkualitas, cerdas, modern dan religious.</li>
                    <li>Terselenggaranya pelayanan prima kepada masyarakat yang professional dengan mendayagunakan seluruh aparatur.</li>
                    <li>Mewujudkan pelayanan masyarakat yang terbuka, efektif, efisien serta memuaskan.</li>
                    <li>Meningkatkan peran aktif masyarakat dalam pembangunan yang berkelanjutan dan berorientasikan kepentingan masyarakat.</li>
                    <li>Meningkatkan pemberdayaan masyarakat yang berdaya saing dan tepat guna.</li>
                  </ol>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 flex flex-col justify-center">
                    <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-800">Motto</h4>
                    <p className="text-gray-800 font-bold text-center text-base sm:text-lg mt-1">"Ramah, Efisien dan Berprestasi"</p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 flex flex-col justify-center">
                    <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-800">Maklumat</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify italic">"Dengan ini, Kami menyatakan sanggup menyelenggarakan layanan sesuai standard pelayanan yang telah ditetapkan..."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Publik */}
      <section id="layanan" className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">Layanan Publik Utama</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>
            <p className="mt-3 text-sm sm:text-base text-gray-600">Akses cepat ke berbagai layanan utama Kelurahan Rawa Buntu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-900 flex flex-col justify-between">
              <div>
                <div className="text-blue-900 text-3xl sm:text-4xl mb-4"><i className="fas fa-id-card"></i></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Administrasi Kependudukan</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">Pembuatan surat pengantar Kartu Tanda Penduduk (KTP), Kartu Keluarga (KK), serta program Jemput Bola.</p>
              </div>
              <button onClick={() => bukaModal('adminduk')} className="text-blue-900 font-semibold text-sm hover:text-teal-600 flex items-center gap-2 mt-2">Detail & Alur <i className="fas fa-arrow-right"></i></button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-600 flex flex-col justify-between">
              <div>
                <div className="text-teal-600 text-3xl sm:text-4xl mb-4"><i className="fas fa-clinic-medical"></i></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Layanan Kesehatan & Posyandu</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">Pemantauan tumbuh kembang bayi/balita, pos lansia Alamanda, serta kerja sama skrining kesehatan.</p>
              </div>
              <button onClick={() => bukaModal('kesehatan')} className="text-teal-600 font-semibold text-sm hover:text-blue-900 flex items-center gap-2 mt-2">Detail & Alur <i className="fas fa-arrow-right"></i></button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-900 flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <div className="text-blue-900 text-3xl sm:text-4xl mb-4"><i className="fas fa-file-signature"></i></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Surat Keterangan & Pengantar</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">Pengurusan surat domisili, pembuatan Surat Keterangan Usaha (SKU), dan pengantar dokumen kelurahan.</p>
              </div>
              <button onClick={() => bukaModal('surat')} className="text-blue-900 font-semibold text-sm hover:text-teal-600 flex items-center gap-2 mt-2">Detail & Alur <i className="fas fa-arrow-right"></i></button>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button onClick={() => setModalFormActive(true)} className="px-6 py-2.5 border-2 border-blue-900 text-blue-900 font-semibold rounded-full hover:bg-blue-900 hover:text-white transition shadow-sm text-sm sm:text-base">
              <i className="fas fa-laptop-house mr-2"></i> Ajukan Layanan Online
            </button>
          </div>
        </div>
      </section>

      {/* Berita & Pengumuman */}
      <section id="berita" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">Berita & Pengumuman Terbaru</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>
            <p className="mt-3 text-sm sm:text-base text-gray-600">Informasi kegiatan dan pengumuman resmi terkini dari Kelurahan Rawa Buntu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Berita 1" className="h-48 w-full object-cover" />
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <span className="text-xs text-teal-600 font-semibold mb-2">25 Mei 2026 • Kependudukan</span>
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-3">Program Jemput Bola Adminduk Keliling Hadir di Wilayah Rawa Buntu</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">Kelurahan Rawa Buntu mengadakan layanan jemput bola pencatatan sipil untuk memudahkan warga melakukan perekaman KTP.</p>
                <button onClick={() => alert('Detail berita sedang dalam pemeliharaan.')} className="mt-auto text-blue-900 font-semibold text-sm hover:text-teal-600 text-left">Baca Selengkapnya →</button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
              <img src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Berita 2" className="h-48 w-full object-cover" />
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <span className="text-xs text-teal-600 font-semibold mb-2">18 Mei 2026 • Kesehatan</span>
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-3">Gerakan Serentak Posyandu & Skrining Kesehatan Balita</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">Pemeriksaan tumbuh kembang balita dan penyuluhan gizi seimbang rutin diadakan bersama kader Posyandu.</p>
                <button onClick={() => alert('Detail berita sedang dalam pemeliharaan.')} className="mt-auto text-blue-900 font-semibold text-sm hover:text-teal-600 text-left">Baca Selengkapnya →</button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col md:col-span-2 lg:col-span-1">
              <img src="https://images.unsplash.com/photo-1541888946425-d0fbb18f06f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Berita 3" className="h-48 w-full object-cover" />
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <span className="text-xs text-teal-600 font-semibold mb-2">10 Mei 2026 • Lingkungan</span>
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-3">Kerja Bakti Massal dan Pemberantasan Sarang Nyamuk (PSN)</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">Warga bersama jajaran aparatur kelurahan menggalakkan program gerebek jentik berkala guna mengantisipasi DBD.</p>
                <button onClick={() => alert('Detail berita sedang dalam pemeliharaan.')} className="mt-auto text-blue-900 font-semibold text-sm hover:text-teal-600 text-left">Baca Selengkapnya →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section id="struktur" className="py-16 sm:py-20 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">Struktur Organisasi Kelurahan Rawa Buntu</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto rounded"></div>
            <p className="mt-3 text-gray-500 text-xs sm:text-sm">Berdasarkan Peraturan Wali Kota Tangerang Selatan Nomor 95 Tahun 2016</p>
            <p className="mt-1 text-xs text-teal-700 font-semibold block md:hidden">💡 Geser ke samping (scroll) untuk melihat bagan selengkapnya</p>
          </div>

          <div className="w-full overflow-x-auto pb-10">
            <div className="min-w-[1150px] mx-auto relative pt-8 font-sans">
              
              {/* Lurah */}
              <div className="flex justify-center relative z-10">
                <div className="w-[280px] h-[200px] bg-white border-t-4 border-blue-900 shadow-xl rounded-xl p-5 text-center flex flex-col items-center justify-center">
                  <img src="/lurah.jpeg" alt="Lurah" className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-gray-100 shadow-sm" />
                  <h3 className="font-bold text-base text-gray-800 leading-tight">Wawan Darmawan, S.K.M., M.Kes</h3>
                  <p className="text-xs text-teal-600 font-bold mt-1 uppercase tracking-wider">Lurah Rawabuntu</p>
                </div>
              </div>

              {/* Garis Vertikal Utama dari Lurah */}
              <div className="absolute top-[232px] left-1/2 w-0.5 h-[160px] bg-blue-900 transform -translate-x-1/2 z-0"></div>
              
              {/* Garis Horizontal Level 2 (Hanya ke kiri untuk Fungsional) */}
              <div className="absolute top-[280px] left-[143px] right-1/2 border-t-2 border-blue-900 z-0"></div>

              {/* Level 2: Jabatan Fungsional Saja */}
              <div className="absolute top-[280px] w-full grid grid-cols-4 gap-8 z-10">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-[30px] bg-blue-900"></div>
                  <div className="w-full bg-white border border-gray-200 shadow-sm rounded-lg p-4 text-center h-[90px] flex flex-col justify-center">
                    <h4 className="font-bold text-[11px] text-gray-700 uppercase border-b pb-1 mb-1">Kelompok Jabatan Fungsional</h4>
                    <ul className="text-[10px] text-gray-500 space-y-0.5 mt-1 text-left ml-4 list-decimal font-medium">
                      <li>.........................................</li>
                      <li>.........................................</li>
                    </ul>
                  </div>
                </div>
                <div></div><div></div><div></div>
              </div>

              {/* Garis Horizontal Level 3 (Full dari Kasi Pem sampai Sekkel di kanan) */}
              <div className="absolute top-[392px] left-[143px] right-[143px] border-t-2 border-blue-900 z-0"></div>

              {/* Level 3: 3 Kasi & Sekkel beserta Staf masing-masing */}
              <div className="mt-[160px] grid grid-cols-4 gap-8 relative z-10">
                
                {/* Kasi Pemerintahan */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-[30px] bg-blue-900"></div>
                  <div className="w-full bg-white border-t-4 border-blue-900 shadow-md rounded-xl p-4 h-[90px] flex items-center justify-center">
                    <div className="flex items-center gap-3 w-full justify-center">
                      <img src="/kasi.jpeg" alt="Kasi Pem" className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shadow-sm flex-shrink-0" />
                      <div className="text-left leading-tight">
                        <h3 className="font-bold text-[12px] text-gray-800">Sumyadi, S.E.</h3>
                        <p className="text-[9px] text-blue-900 font-bold uppercase tracking-wider mt-0.5">Kasi Pemerintahan</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-0.5 h-[30px] bg-blue-900"></div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/jelani.jpeg" alt="Jelani" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Jelani&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Jelani, SE</p><p className="text-[9px] text-gray-500">Pelaksana</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/ari.jpeg" alt="Ari" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Ari+Yulianto&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Ari Yulianto, SE</p><p className="text-[9px] text-gray-500">Pelaksana</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/desi.jpeg" alt="Desi" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Desi+Nursanti&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Desi Nursanti</p><p className="text-[9px] text-gray-500">Operator SIAK</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/ridwan.jpeg" alt="Ridwan" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Ridwan+Arifin&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">H. Ridwan Arifin</p><p className="text-[9px] text-gray-500">Operator SIAK</p></div>
                    </div>
                  </div>
                </div>

                {/* Kasi Kesejahteraan Sosial */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-[30px] bg-blue-900"></div>
                  <div className="w-full bg-white border-t-4 border-blue-900 shadow-md rounded-xl p-4 h-[90px] flex items-center justify-center">
                    <div className="flex items-center gap-3 w-full justify-center">
                      <img src="/pepen.jpeg" alt="Kasi Kesos" className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shadow-sm flex-shrink-0" />
                      <div className="text-left leading-tight">
                        <h3 className="font-bold text-[12px] text-gray-800">Pepen Apandi, S.E., M.M.</h3>
                        <p className="text-[9px] text-blue-900 font-bold uppercase tracking-wider mt-0.5">Kasi Kesos</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-0.5 h-[30px] bg-blue-900"></div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/ratno.jpeg" alt="Ratno" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Ratno+Wijaya&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Ratno Wijaya</p><p className="text-[9px] text-gray-500">Pelaksana</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/erwin.jpeg" alt="Erwin" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Erwin+Sumantri&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Erwin Sumantri</p><p className="text-[9px] text-gray-500">Pelaksana</p></div>
                    </div>
                  </div>
                </div>

                {/* Kasi Ekonomi Pembangunan */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-[30px] bg-blue-900"></div>
                  <div className="w-full bg-white border-t-4 border-teal-600 shadow-md rounded-xl p-4 h-[90px] flex items-center justify-center">
                    <div className="flex items-center gap-3 w-full justify-center">
                      <img src="/kasiEkonomi.jpeg" alt="Kasi Ekbang" className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shadow-sm flex-shrink-0" />
                      <div className="text-left leading-tight">
                        <h3 className="font-bold text-[12px] text-gray-800">Indah Agustini, S.A.P.</h3>
                        <p className="text-[9px] text-teal-600 font-bold uppercase tracking-wider mt-0.5">Kasi Ekbang</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-0.5 h-[30px] bg-blue-900"></div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/yunus.jpeg" alt="Yunus" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Yunus&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Yunus, S. Sos</p><p className="text-[9px] text-gray-500">Pelaksana</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/ujang.jpeg" alt="Ujang" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Ujang+Sukarta&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">H. Ujang Sukarta</p><p className="text-[9px] text-gray-500">Pelaksana</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/ade.jpeg" alt="Ade" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Ade+Irawan&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Ade Irawan</p><p className="text-[9px] text-gray-500">Pelaksana</p></div>
                    </div>
                  </div>
                </div>

                {/* Sekretaris Kelurahan (Sekkel) & Staf Sekretariat */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-[30px] bg-blue-900"></div>
                  <div className="w-full bg-white border-t-4 border-teal-600 shadow-md rounded-xl p-4 h-[90px] flex items-center justify-center">
                    <div className="flex items-center gap-3 w-full justify-center">
                      <img src="/sekel.jpeg" alt="Sekkel" className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shadow-sm flex-shrink-0" />
                      <div className="text-left leading-tight">
                        <p className="font-bold text-[12px] text-gray-800">M. Wildan A.K. Praja, S.STP., MA.</p>
                        <p className="text-[9px] text-teal-600 font-bold uppercase tracking-wider mt-0.5">Sekretaris Kelurahan</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-0.5 h-[30px] bg-blue-900"></div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/annticha.jpeg" alt="Annticha" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Annticha&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Annticha Hazastia A.</p><p className="text-[9px] text-gray-500">Pelaksana</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/annisa.jpeg" alt="Annisa" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Annisa+Nur&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Annisa Nur Adina</p><p className="text-[9px] text-gray-500">Pelaksana</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/dodi.jpeg" alt="Dodi" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Dodi+Dores&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Dodi Dores</p><p className="text-[9px] text-gray-500">Security</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/budi.jpeg" alt="Budi" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Budi+Rudi&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Budi Rudi</p><p className="text-[9px] text-gray-500">Security</p></div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-3 shadow-sm">
                      <img src="/ahmad.jpeg" alt="Ahmad" onError={(e)=>{e.target.src='https://ui-avatars.com/api/?name=Ahmad&background=e2e8f0&color=475569'}} className="w-8 h-8 rounded-full object-cover" />
                      <div className="text-left leading-tight"><p className="text-xs font-bold text-gray-800">Ahmad</p><p className="text-[9px] text-gray-500">Office Boy</p></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Kontak */}
      <footer id="kontak" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/logotangsel.jpeg" alt="Logo Tangsel" className="w-10 h-10 object-contain bg-white rounded-full p-1" />
                <h2 className="text-xl font-bold leading-tight">Kelurahan<br />Rawa Buntu</h2>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                SIRATU (Sistem Informasi Kelurahan Rawa Buntu) adalah portal resmi pelayanan publik dan informasi terkini Kelurahan Rawa Buntu, Kecamatan Serpong, Kota Tangerang Selatan.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Hubungi Kami</h3>
              <ul className="space-y-4 text-gray-400 text-xs sm:text-sm">
                <li className="flex items-start gap-3"><i className="fas fa-map-marker-alt mt-1 text-teal-500 flex-shrink-0"></i><span>Jl. Raya Rawabuntu-BSD City, Kec. Serpong, Kota Tangerang Selatan</span></li>
                <li className="flex items-center gap-3"><i className="fas fa-phone-alt text-teal-500 flex-shrink-0"></i><span>(021) 1234-5678</span></li>
                <li className="flex items-center gap-3"><i className="fab fa-whatsapp text-teal-500 text-base flex-shrink-0"></i><span>+62 812-3456-7890</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Jam Pelayanan</h3>
              <ul className="space-y-3 text-gray-400 text-xs sm:text-sm">
                <li className="flex justify-between"><span>Senin - Kamis</span><span>08:00 - 15:00 WIB</span></li>
                <li className="flex justify-between"><span>Jumat</span><span>08:00 - 15:30 WIB</span></li>
                <li className="flex justify-between text-red-400 mt-2"><span>Sabtu - Minggu</span><span>Tutup</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Lokasi Kantor</h3>
              <div className="w-full h-40 bg-gray-800 rounded-lg overflow-hidden relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.195325608226!2d106.6787!3d-6.3238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknMjUuTeKArDEwNsKwNDAnNDMuMyJF!5e0!3m2!1sen!2sid!4v1620000000000" width="100%" height="100%" style={{border:0, opacity:0.5}} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-xs sm:text-sm text-gray-500">
            <p>&copy; 2026 Pemerintah Kelurahan Rawa Buntu. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>

      {/* Modal Info Layanan */}
      {modalLayananActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden mx-4">
            <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-base sm:text-lg font-bold text-gray-800">{activeData.judul}</h3>
              <button onClick={() => setModalLayananActive(false)} className="text-gray-500 hover:text-red-500 font-bold text-xl p-1">×</button>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Persyaratan:</h4>
              <ul className="list-disc ml-5 text-xs sm:text-sm text-gray-600 space-y-1.5 mb-4">
                {activeData.syarat.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
              <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Alur Pelayanan:</h4>
              <ol className="list-decimal ml-5 text-xs sm:text-sm text-gray-600 space-y-1.5">
                {activeData.alur.map((item, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>)}
              </ol>
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end">
              <button onClick={() => setModalLayananActive(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-xs sm:text-sm font-bold">Tutup</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Form Pengajuan Online */}
      {modalFormActive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden mx-4">
            <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
              <h3 className="text-base sm:text-lg font-bold text-gray-800">Formulir Pengajuan Layanan Online</h3>
              <button onClick={() => setModalFormActive(false)} className="text-gray-500 hover:text-red-500 font-bold text-xl p-1">×</button>
            </div>
            <form onSubmit={submitFormLayanan} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Nama Lengkap (Sesuai KTP)</label>
                <input type="text" required className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-900 text-sm" placeholder="Masukkan nama lengkap" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">NIK</label>
                <input type="number" required className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-900 text-sm" placeholder="16 digit NIK" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">No. WhatsApp Aktif</label>
                <input type="number" required className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-900 text-sm" placeholder="Contoh: 08123456789" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">Pilih Layanan</label>
                <select required className="w-full px-3 py-2 border rounded-lg bg-white text-sm">
                  <option value="">-- Pilih Layanan --</option>
                  <option value="ktp">Surat Pengantar KTP/KK</option>
                  <option value="domisili">Surat Domisili</option>
                  <option value="sku">Surat Keterangan Usaha</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={() => setModalFormActive(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-bold">Batal</button>
                <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-lg text-xs sm:text-sm font-bold hover:bg-teal-700">Kirim Pengajuan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}