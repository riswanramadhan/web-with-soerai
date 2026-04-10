# WITH SOERAI Website

Landing page resmi WITH SOERAI (App Router, Next.js) untuk profil organisasi, program, struktur tim, galeri member/mentor, dan CTA pendaftaran.

README ini disiapkan untuk kebutuhan handover maintenance agar developer berikutnya bisa langsung lanjut tanpa knowledge gap.

## 1) Ringkasan Cepat

- Framework: Next.js 16 (App Router)
- Language: TypeScript (strict)
- Styling: Tailwind CSS v4 + custom CSS tokens
- Animasi: Framer Motion
- Icon: lucide-react
- Data konten: hardcoded typed object (tanpa CMS)
- Data member/mentor: hardcoded typed array
- Multi-bahasa: ID/EN melalui context

## 1.1) Dokumentasi Takeover (Wajib Baca Maintainer Baru)

Urutan baca yang direkomendasikan:

1. `README.md` (dokumen ini)
2. `docs/HANDOVER.md` (onboarding + SOP maintenance)
3. `docs/CHANGE_PLAYBOOK.md` (panduan perubahan berbasis skenario)

## 2) Prasyarat

- Node.js: 20 LTS atau lebih baru
- npm: 10+ (repo ini menggunakan package-lock.json)

## 3) Setup Lokal

```bash
git clone <repo-url>
cd with-soerai
npm ci
npm run dev
```

Buka `http://localhost:3000`.

## 4) Script Yang Dipakai

```bash
npm run dev     # jalankan dev server
npm run lint    # cek ESLint
npm run build   # validasi build production
npm run start   # serve hasil build production
```

SOP minimum sebelum push:

1. `npm run lint`
2. `npm run build`

## 5) Struktur Folder Utama

```text
app/
	globals.css           # design tokens, utilities, efek global
	layout.tsx            # font setup, metadata, LanguageProvider
	page.tsx              # komposisi section homepage

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
	...

context/
	LanguageContext.tsx   # state bahasa + hook useContent()

lib/
	content.ts            # seluruh copy/content ID & EN
	members.ts            # data member + mentor
	links.ts              # seluruh external URL (form/sosial/partner)
	useStableReducedMotion.ts

public/
	images/               # hero, logo, member, mentor, botanical
	image/dekatlokal.png  # asset partner (diimport statis)
	fonts/                # custom brand fonts (lihat catatan font)
```

## 6) Arsitektur Render

Alur data utama:

1. `app/layout.tsx` mount `LanguageProvider`.
2. `app/page.tsx` merangkai semua section homepage.
3. Tiap section membaca konten dari `useContent()`.
4. `useContent()` mengambil data typed dari `lib/content.ts` berdasarkan bahasa aktif.
5. Galeri member/mentor membaca dari `lib/members.ts`.

Section anchors yang dipakai untuk navigasi:

- `#hero`
- `#tentang-kami`
- `#visi-misi`
- `#program`
- `#struktur-organisasi`
- `#galeri`

Jika menambah item nav, pastikan pasangan `href` dan `id` section sinkron.

## 7) Cara Edit Konten (Paling Sering Dipakai)

### A. Ubah teks bilingual (ID/EN)

Edit di `lib/content.ts` pada object:

- `content.id`
- `content.en`

Wajib jaga struktur key sama antara ID dan EN supaya TypeScript tetap aman.

### B. Ubah/tambah program

1. Edit data program di `lib/content.ts` pada `programsId` dan `programsEn`.
2. Setiap card wajib punya `id` unik (misal `program-1`, `program-2`, dst).
3. Jika menambah tipe program baru dan butuh icon khusus, update map icon di `components/ProgramCard.tsx`:
	 - `PROGRAM_ICON_KEY_BY_ID`
	 - `resolveProgramIconKey`

### C. Ubah data member/mentor

Edit di `lib/members.ts`.

Catatan penting:

- `type` harus salah satu dari: `member` atau `mentor`.
- Path gambar harus cocok dengan file fisik di `public/images/...`.
- Untuk member, urutan tampilan desktop diatur manual lewat `memberDisplayOrder` pada `components/MemberGallerySection.tsx`.

### D. Ubah nav, CTA, dan footer

Mayoritas ada di `lib/content.ts`:

- `header.nav`, `header.joinNow`
- `cta`
- `footer`

Untuk link external (CTA daftar, sosial, partner), edit terpusat di:

- `lib/links.ts`

Komponen yang mengonsumsi link tersebut:

- `components/Footer.tsx`
- `components/HeroSection.tsx`
- `components/CTASection.tsx`
- `components/Header.tsx`

## 8) Styling, Design Token, dan Motion

### Design token

Semua warna dan font token utama ada di `app/globals.css` dalam `:root`.

### Motion accessibility

Project ini memakai hook `useStableReducedMotion()` untuk menghindari mismatch SSR/CSR saat user mengaktifkan reduced motion.

Jika menambah animasi baru, ikuti pola section existing:

- gunakan nilai fallback non-animasi saat reduced motion aktif
- hindari animasi yang membuat elemen penting tetap tersembunyi

## 9) Asset Management

Lokasi asset utama:

- `public/images/logo-withsoerai.png`
- `public/images/hero-image-1.jpg`
- `public/images/hero-image-2.jpg`
- `public/images/members/*`
- `public/images/mentors/*`
- `public/images/botanical/*`
- `public/image/dekatlokal.png`

Catatan:

- Beberapa filename asset mengandung spasi. Di galeri, path sudah diamankan dengan `encodeURI`.
- Di Linux/CI, nama file bersifat case-sensitive. Pastikan kapitalisasi nama file sama persis.

### Catatan font custom

`app/globals.css` mereferensikan font berikut:

- `/fonts/tan-nimbus.woff2`
- `/fonts/symphony.woff2`
- `/fonts/the-seasons.woff2`

Pastikan file font tersedia di `public/fonts/` saat deploy jika ingin tampilan brand typography penuh.

## 10) Environment Variable

Saat ini tidak ada dependency terhadap `.env` untuk fitur inti situs.

Jika nanti menambah integrasi eksternal (analytics, form API, CMS), dokumentasikan variabel baru di README ini.

## 11) Deployment

### Opsi A - Vercel (paling cepat)

1. Import repo ke Vercel.
2. Framework otomatis terdeteksi sebagai Next.js.
3. Build command: `npm run build`.
4. Install command: `npm ci`.
5. Deploy.

### Opsi B - Server Node sendiri

```bash
npm ci
npm run build
npm run start
```

## 12) Troubleshooting Cepat

### A. Ada elemen yang tidak muncul di mode dev

Langkah cek:

1. Hard refresh browser (Ctrl+F5).
2. Restart dev server.
3. Coba incognito / matikan extension yang memodifikasi DOM.

### B. Hydration mismatch warning

Umumnya dipicu perbedaan output server/client atau ekstensi browser.

Checklist:

1. Hindari nilai random/time langsung saat render.
2. Gunakan pola stabil untuk motion (`useStableReducedMotion`).
3. Uji tanpa extension browser.

### C. Gambar tidak tampil

1. Pastikan path di data cocok dengan file di `public/`.
2. Cek kapitalisasi filename.
3. Pastikan file memang sudah ikut commit/push.

## 13) Handover Checklist Untuk Maintainer Baru

1. Pull branch terbaru dari GitHub.
2. Jalankan `npm ci` lalu `npm run dev`.
3. Validasi semua section homepage tampil normal.
4. Cek toggle bahasa ID/EN.
5. Cek galeri member & mentor (desktop + mobile).
6. Jalankan `npm run lint`.
7. Jalankan `npm run build`.
8. Setelah perubahan, update README ini jika ada alur baru.

## 14) Catatan Teknis Tambahan

- File `components/AOSProvider.tsx` saat ini belum digunakan di tree render utama.
- Homepage saat ini single-route (`/`) dengan section-based navigation.
- Jika menambah route baru, perbarui metadata, nav, dan dokumentasi struktur di README ini.

---

Jika ada perpindahan ownership lagi di masa depan, pastikan README ini ikut diperbarui agar dokumentasi tetap menjadi single source of truth.
