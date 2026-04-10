# Change Playbook

Panduan praktis: jika ingin mengubah fitur tertentu, edit file apa dan cek apa setelahnya.

## 1) Ganti Teks Section (ID/EN)

Edit:

- `lib/content.ts`

Langkah:

1. Cari key section terkait (`hero`, `about`, `program`, `cta`, dll).
2. Ubah teks di `content.id` dan `content.en`.
3. Pastikan struktur key kedua bahasa tetap identik.

Validasi:

- Toggle bahasa harus menampilkan teks baru di kedua bahasa.
- Tidak ada error TypeScript.

## 2) Ganti Link Form Pendaftaran

Edit:

- `lib/links.ts` pada `registrationForm`

Dipakai di:

- `components/HeroSection.tsx`
- `components/CTASection.tsx`

Validasi:

1. Klik tombol hero CTA.
2. Klik tombol CTA sebelum footer.
3. Keduanya harus membuka tab baru ke URL yang benar.

## 3) Ganti Link Sosial Media Footer/Header

Edit:

- `lib/links.ts`

Dipakai di:

- `components/Footer.tsx`
- `components/Header.tsx` (partner link)

Validasi:

- Semua icon sosial membuka URL yang sesuai.

## 4) Tambah/Ubah Program Card

Edit data:

- `lib/content.ts` (`programsId`, `programsEn`)

Jika butuh ikon baru:

- `components/ProgramCard.tsx`

Validasi:

1. Card front tampil normal.
2. Flip card ke sisi detail bekerja.
3. Label ID/EN tetap benar saat toggle bahasa.

## 5) Tambah/Ubah Member atau Mentor

Edit:

- `lib/members.ts`

Cek tambahan:

- `components/MemberGallerySection.tsx` untuk urutan member desktop (`memberDisplayOrder`).

Validasi:

1. Filter Member menampilkan profile sesuai urutan yang diinginkan.
2. Filter Mentor menampilkan data mentor lengkap.
3. Gambar tampil tanpa error.

## 6) Ubah Navigasi Header

Edit:

- `lib/content.ts` pada `header.nav`

Sinkronkan dengan:

- ID section di komponen terkait (`id="..."`).

Validasi:

- Klik item nav harus scroll ke section yang benar.

## 7) Ubah Gaya Global atau Token Warna

Edit:

- `app/globals.css`

Fokus area:

- `:root` token warna/font
- class global reusable (`cta-gradient-btn`, `ghost-btn`, dll)

Validasi:

1. Cek kontras teks tetap terbaca.
2. Cek mobile dan desktop.
3. Cek hover/transition tidak merusak layout.

## 8) Menambah Section Baru

Edit utama:

- Tambah komponen baru di `components/`
- Pasang di `app/page.tsx`
- Tambahkan copy di `lib/content.ts` (ID dan EN)
- Tambahkan nav item di `lib/content.ts` jika perlu

Validasi:

1. Urutan section sesuai desain.
2. Anchor nav sinkron.
3. Tidak ada hydration warning/error runtime.

## 9) Definition of Done (DoD) Sebelum Push

Wajib:

1. `npm run lint` lolos.
2. `npm run build` lolos.
3. Uji visual minimal desktop + mobile untuk area yang diubah.
4. Jika ubah konten/link, uji bahasa ID dan EN.

## 10) Commit Message yang Direkomendasikan

Contoh format:

- `docs: add handover and change playbook`
- `feat: update registration CTA links`
- `chore: centralize external links in lib/links`
- `fix: sync id/en hero CTA labels`
