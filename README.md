# Cek Kelulusan SDN Krian 2026

Proyek ini adalah aplikasi web untuk mengecek status kelulusan siswa SDN Krian tahun 2026.

## Cara Menjalankan di Lokal

1. Pastikan Anda memiliki Node.js terinstal.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Jalankan `npm run dev` untuk menjalankan server pengembangan.
4. Buka browser di `http://localhost:5173`.

## Cara Unggah ke Hosting

Aplikasi ini sudah siap untuk diunggah. Folder hasil build berada di folder `dist`.

### 1. Hosting Statis (Vercel / Netlify)
- Cara termudah adalah dengan mengunggah folder `dist` secara langsung ke dasbor Netlify atau Vercel.
- Atau hubungkan repositori GitHub Anda ke layanan tersebut.

### 2. Shared Hosting (cPanel)
- Unggah semua isi di dalam folder `dist` (bukan folder `dist`-nya saja, tapi isinya) ke folder `public_html` di hosting Anda.

### 3. GitHub Pages
- Anda bisa menggunakan package `gh-pages` atau konfigurasi GitHub Action untuk otomatisasi build dan deploy.

## Teknologi yang Digunakan
- React 18
- Vite 5
- Tailwind CSS 4
- TypeScript
