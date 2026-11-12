# Website KUA Cipeundeuy

Portal layanan dan informasi KUA Cipeundeuy, Kabupaten Subang.

## Pemasangan GitHub Pages

1. Simpan seluruh berkas website di root repositori (index.html, admin.html, berkas JavaScript/CSS, serta folder assets).
2. Pertahankan CNAME berisi kuacipeundeuy.my.id.
3. Periksa Settings → Pages. Jika menggunakan Deploy from a branch, pilih main dan / (root). Jika sudah memakai alur lain, sesuaikan tanpa mengganti pengaturan domain.
4. Tunggu deployment selesai, kemudian periksa domain menggunakan HTTPS.

## Pemeriksaan setelah pemasangan

- Beranda, layanan, panduan nikah, profil, informasi, kontak, dan statistik.
- Login/logout, pencarian dan edit arsip, impor Excel, serta pengumuman.
- Gambar pegawai/kepala KUA dan tautan dokumen standar pelayanan.
- Tampilan ponsel.

Website menggunakan proyek Supabase yang sama. config.js hanya memuat URL dan kunci publik/publishable; jangan menambahkan service_role key atau kata sandi. Hak akses database tetap ditentukan oleh kebijakan Supabase. Arsip nikah memerlukan izin sand_admins.

Tidak diperlukan npm install atau proses build. Jangan unggah arsip backup, token, kata sandi, atau data arsip pribadi ke repositori publik.

## Pembaruan

Data pegawai, kepala KUA, pengumuman, dan arsip dikelola melalui Panel Admin sesuai izin akun. Teks layanan, halaman profil/kontak, dan jam pelayanan masih tersimpan dalam kode frontend.
