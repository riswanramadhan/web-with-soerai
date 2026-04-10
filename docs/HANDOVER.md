# WITH SOERAI - Handover Guide

Panduan ini disiapkan agar maintainer baru bisa langsung melanjutkan project tanpa kebingungan.

## 1) Tujuan Dokumen

Dokumen ini menjawab:

1. Project ini jalan dengan stack apa?
2. Kalau ingin ubah bagian tertentu, edit file mana?
3. Bagaimana cara validasi aman sebelum push?
4. Risiko umum apa yang sering bikin bug/regresi?

## 2) Tech Stack Singkat

- Next.js 16 (App Router)
- React 19 + TypeScript strict
- Tailwind CSS v4 + custom CSS tokens
- Framer Motion
- lucide-react (ikon)

## 3) Struktur Inti Codebase

```text
app/
  layout.tsx              # root layout, font setup, LanguageProvider
  page.tsx                # urutan section homepage
  globals.css             # token warna/font + utility class global

components/
  Header.tsx
  HeroSection.tsx
  AboutSection.tsx
  VisionMissionSection.tsx
  ProgramSection.tsx
  ProgramCard.tsx
  OrgStructureSection.tsx
  MemberGallerySection.tsx
  CTASection.tsx
  Footer.tsx

context/
  LanguageContext.tsx     # bahasa aktif + hook useContent()

lib/
  content.ts              # source of truth konten ID/EN
  members.ts              # data member & mentor
  links.ts                # source of truth semua external link
  useStableReducedMotion.ts
```

## 4) Arsitektur Data dan Render

Alur render utama:

1. `app/layout.tsx` mount `LanguageProvider`.
2. `app/page.tsx` merangkai semua section homepage.
3. Komponen section ambil copy dari `useContent()`.
4. `useContent()` baca `content[language]` dari `lib/content.ts`.
5. Galeri profil membaca dari `lib/members.ts`.

## 5) Anchor Navigasi (Harus Sinkron)

Anchor yang dipakai untuk scroll navigation:

- `#hero`
- `#tentang-kami`
- `#visi-misi`
- `#program`
- `#struktur-organisasi`
- `#galeri`

Jika ada perubahan ID section, update juga `header.nav` di `lib/content.ts`.

## 6) Source of Truth Per Jenis Perubahan

### A. Ubah teks website (ID/EN)

Edit: `lib/content.ts`

Aturan penting:

1. Jangan ubah struktur key `content.id` dan `content.en` agar tetap sama.
2. Setiap perubahan copy di ID harus dipertimbangkan padanannya di EN.
3. Jika TypeScript error, biasanya ada key yang hilang di salah satu bahasa.

### B. Ubah link eksternal (form pendaftaran, sosial media, partner)

Edit: `lib/links.ts`

Catatan:

- Komponen `HeroSection`, `CTASection`, `Footer`, dan `Header` sudah mengambil link dari file ini.
- Ini adalah file pertama yang harus dicek jika ada link salah/expired.

### C. Ubah data member/mentor

Edit: `lib/members.ts`

Aturan:

1. `type` wajib `member` atau `mentor`.
2. Path image harus cocok file fisik di `public/images/...`.
3. Untuk urutan member desktop, cek map `memberDisplayOrder` di `components/MemberGallerySection.tsx`.

### D. Ubah card program

Edit data: `lib/content.ts` (`programsId`, `programsEn`)

Jika tambah jenis program baru yang butuh ikon khusus:

- Update `PROGRAM_ICON_KEY_BY_ID` di `components/ProgramCard.tsx`.
- Tambahkan resolver jika perlu di `resolveProgramIconKey`.

### E. Ubah style global

Edit: `app/globals.css`

Area penting:

- `:root` untuk design token warna/font
- utility class reusable seperti `cta-gradient-btn`, `ghost-btn`, `interactive-card`

## 7) SOP Kerja Sebelum Push

Jalankan berurutan:

```bash
npm ci
npm run dev
npm run lint
npm run build
```

Checklist visual minimum:

1. Header navigation scroll ke section benar.
2. Toggle bahasa ID/EN bekerja.
3. Hero CTA ke link yang benar.
4. CTA section sebelum footer ke link yang benar.
5. Galeri member dan mentor tampil normal desktop + mobile.
6. Footer social link terbuka normal.

## 8) Aturan Aman Saat Modifikasi

1. Hindari hardcode URL baru di komponen, simpan di `lib/links.ts`.
2. Pertahankan parity struktur konten ID/EN di `lib/content.ts`.
3. Jika menambah animasi baru, ikuti pola `useStableReducedMotion`.
4. Jangan ubah nama file gambar sembarang (case sensitive penting saat deploy Linux/CI).
5. Jika menambah section baru, pastikan ID section, nav item, dan urutan `app/page.tsx` konsisten.

## 9) Bug/Regresi yang Sering Terjadi

1. Hydration mismatch dari animasi/client-only logic.
2. Broken image karena path atau kapitalisasi nama file.
3. Nav tidak sinkron karena anchor berubah tapi `href` belum diupdate.
4. Teks hanya berubah di satu bahasa.
5. Ikon/link sosial tetap lama karena edit di komponen, bukan di `lib/links.ts`.

## 10) Workflow Takeover Untuk Maintainer Baru

### Hari Pertama

1. Clone repo dan jalankan `npm ci`.
2. Jalankan `npm run dev`.
3. Baca `README.md`, lalu dokumen ini sampai selesai.
4. Lakukan 1 perubahan kecil (misal copy text) untuk memahami alur.
5. Jalankan lint + build untuk verifikasi local environment.

### Sebelum Mengerjakan Task Baru

1. Identifikasi tipe perubahan: copy, data, style, atau layout.
2. Buka `docs/CHANGE_PLAYBOOK.md`.
3. Ikuti langkah sesuai skenario.
4. Jalankan checklist QA.

## 11) Deployment Ringkas

### Vercel

- Install command: `npm ci`
- Build command: `npm run build`
- Start command: default Next.js

### Node server

```bash
npm ci
npm run build
npm run start
```

## 12) Catatan Tambahan

- `components/AOSProvider.tsx` saat ini tidak dipakai di render tree utama.
- Homepage masih single route (`/`) dengan section-based navigation.
- Jika menambah route baru, update metadata + dokumentasi agar tidak terjadi knowledge gap berikutnya.
