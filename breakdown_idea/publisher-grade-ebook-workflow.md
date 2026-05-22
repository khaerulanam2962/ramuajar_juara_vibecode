# Workflow Publisher-Grade Ebook

Gunakan workflow ini setiap kali user men-tag file ini untuk membuat ebook baru. Tujuannya adalah menghasilkan naskah ebook Markdown yang konsisten, padat, rapi, dan siap masuk ke folder content website tanpa user perlu bolak-balik memberi instruksi kecil.

## 0. Router Eksekusi

Workflow ini panjang karena berfungsi sebagai manual lengkap. Saat eksekusi, jangan memproses semua bagian sekaligus. Gunakan router ini untuk memilih bagian yang aktif, lalu buka detail hanya saat relevan.

### 0.1. Hierarki Instruksi

Gunakan prioritas berikut saat menjalankan workflow:

1. **MUST:** wajib selalu dipatuhi. Jika ada konflik, bagian MUST menang.
2. **SHOULD:** default yang sangat disarankan, tetapi boleh disesuaikan dengan jenis ebook.
3. **REFERENCE:** contoh, template, dan inspirasi. Jangan dipakai sebagai cetakan kaku.

Aturan prioritas internal:

- Instruksi user terbaru dan batasan project tetap menjadi konteks utama.
- **Execution Contract**, **Full Daging 80/20**, **Quality Gate Final**, dan **QA Otomatis** adalah MUST.
- Struktur buku, template bab, contoh before/after, dan pola subbab adalah REFERENCE kecuali user meminta format tertentu.
- Jika template bertabrakan dengan kualitas naskah, kualitas naskah menang.

### 0.2. Fast Path 10 Langkah

Jika user meminta ebook baru, jalankan alur cepat ini:

1. **Project discovery:** cek folder target, schema Astro, dan 2-3 contoh ebook existing jika output masuk repository.
2. **Brief internal:** kunci judul, janji buku, audiens, level, gaya bahasa, model, output, sapaan, dan artefak akhir.
3. **Pilih mode ebook:** teknis, soft skill, certification, tutorial, handbook, playbook, cheat sheet, atau hybrid.
4. **Outline:** buat bagian, bab, subbab, fungsi setiap bab, dan elemen praktis.
5. **Skeleton file:** buat frontmatter, H1, intro, daftar isi, bagian utama, penutup, dan sumber.
6. **Draft bertahap:** isi maksimal 2-3 bab per pass untuk menjaga kualitas.
7. **80/20 enrichment:** tambah contoh, keputusan, checklist, validasi, troubleshooting, template, atau latihan.
8. **Human touch dan anti-template pass:** tambah konflik nyata, rasa, konteks kerja, transisi, dan variasi pola bab.
9. **Accuracy dan production pass:** cek klaim, sumber resmi, Markdown, frontmatter, code fence, quote box, numbering, dan TOC.
10. **QA dan final report:** jalankan QA otomatis, beri skor rubrik, sebutkan path file, status QA, dan risiko yang tersisa.

### 0.3. Mode Selector

Pilih bagian aktif berdasarkan jenis ebook. Bagian lain tetap boleh dirujuk, tetapi tidak perlu diproses penuh.

| Mode Ebook | Bagian Aktif | Catatan Eksekusi |
|---|---|---|
| Blog-ready Astro | 2, 4, 4A, 19, 20 | Wajib cek schema dan contoh content existing. |
| Teknis / DevOps / Cloud / AI / Security | 5, 7, 8, 13A, 14, 15, 16, 19, 20 | Wajib ada command/config/code, validasi, risiko, dan sumber resmi. |
| Certification-oriented | 5, 8, 15, 16, 18, 19, 20 | Ikuti domain/objective resmi bila tersedia. |
| Soft skill / refleksi / kebiasaan | 5, 8, 10, 17, 18, 19, 20 | Human touch kuat, latihan realistis, dan pegangan saat gagal wajib terasa. |
| Buku saku / cheat sheet | 6, 8, 11, 12, 13, 20 | Lebih banyak tabel, checklist, template, dan referensi cepat. |
| Tutorial / playbook implementasi | 7, 14, 15, 16, 19, 20 | Setiap langkah wajib punya tujuan, command/config, validasi, dan pitfall. |
| Seri banyak ebook | 1B, 1C, 8, 9, 19, 20 | Konsisten format, tetapi hook, contoh, mini project, risiko, dan penutup harus unik. |
| Hybrid | Pilih 2 mode terdekat | Jangan menggabungkan semua struktur. Pilih satu tulang punggung utama. |

### 0.4. Peta Fase ke Bagian

Gunakan peta ini agar agent tidak perlu memegang seluruh dokumen sekaligus.

> **Konvensi notasi:** `A / B` berarti pilih A untuk hard skill, pilih B untuk soft skill. `A / B / C` berarti pilih sesuai jenis ebook yang paling dominan.

| Fase | Bagian yang Dipakai | Tujuan |
|---|---|---|
| Sebelum menulis | 0, 0A, 2, 3, 4.1, 19 Fase 0-1 | Mengunci konteks dan mencegah salah format project. |
| Outline | 5 (komprehensif) / 6 (cheat sheet) / 7 (tutorial), 18, 19 Fase 2 | Memilih struktur yang cocok dengan jenis ebook. |
| Draft | 1A, 1B, 1C, 8, 9, 10, 16 (hard skill) / 17 (soft skill), 19 Fase 3 | Menulis isi yang mengalir, spesifik, praktis, dan manusiawi. |
| Enrichment | 8, 11, 12, 13, 13A, 14, 16 (hard skill) / 17 (soft skill), 19 Fase 4 | Menambah daging, contoh, template, validasi, dan latihan. |
| Editorial | 1D, 8, 9, 10, 19 Fase 5 | Menghapus repetisi, AI smell, struktur kaku, dan bagian tipis. |
| Accuracy | 15, 16 (hard skill) / 17 (soft skill) | Mengecek klaim, sumber resmi, batasan, dan risiko. |
| Production | 4, 4A, 11, 12, 13, 14, 19 Fase 6 | Membersihkan Markdown dan memastikan render stabil. |
| QA final | 19 Fase 7, 20, 23 | Menentukan publish-ready atau belum. |

### 0.5. Aturan Anti-Overload untuk Agent

- Jangan memakai semua template bab sekaligus. Pilih satu template dasar yang paling cocok, lalu variasikan.
- Jangan membaca bagian REFERENCE sebagai kewajiban format. Pakai hanya untuk membantu ketika bagian naskah butuh contoh.
- Jangan membuat semua bab punya subjudul identik kecuali formatnya memang cheat sheet.
- Jika konteks kerja mulai terlalu besar, prioritaskan: Execution Contract → 80/20 → human touch → struktur aktif → production → QA.
- Jika user meminta cepat, gunakan Fast Path 10 Langkah dan tetap jalankan **QA minimum**.
- Jika user meminta kualitas 10/10, jalankan semua quality gate dan beri skor rubrik akhir.

**Definisi QA minimum** (dijalankan selalu, bahkan untuk quick draft):
- [ ] Frontmatter ada dan memuat `title`, `description`, `publishDate`.
- [ ] Hanya ada satu `# H1`.
- [ ] Tidak ada placeholder: `TODO`, `TBD`, `<isi>`, `<placeholder>`.
- [ ] Code fence tertutup dan seimbang.
- [ ] Tidak ada credential, token, atau private key.

Untuk publisher-grade dan 10/10, jalankan QA lengkap di Fase 7.

## 0A. Execution Contract

Saat workflow ini dipakai, agent wajib menjalankan kontrak kerja berikut sebelum menyatakan ebook selesai:

- Kunci brief internal terlebih dahulu: judul, janji buku, audiens, level, gaya bahasa, model, output file, sapaan utama, dan artefak akhir.
- Jika input user minim, gunakan default. Jangan berhenti bertanya kecuali jawaban user benar-benar mengubah struktur buku.
- Jika output masuk ke Astro content, baca minimal 2-3 file ebook existing atau schema content yang relevan sebelum membuat file baru.
- Terapkan standar **full daging 80/20**: mayoritas isi harus berupa contoh, framework, langkah, keputusan, validasi, template, studi kasus, troubleshooting, atau latihan.
- Untuk ebook lebih dari 7 bab, tulis bertahap secara internal ke file agar kualitas tidak turun. Jangan berhenti meminta review kecuali user memang meminta proses interaktif.
- Verifikasi klaim yang cepat berubah dengan sumber resmi, atau tulis klaim secara aman dan terbatas.
- Jalankan editorial pass, production pass, dan QA otomatis sebelum final.
- Final response wajib menyebut path file, status QA, skor rubrik, dan catatan risiko jika ada bagian yang tidak bisa diverifikasi.

## 1. Prinsip Utama

Perlakukan pembuatan ebook seperti kerja satu tim penerbit:

- **Editor akuisisi:** mengunci target audiens, janji buku, sudut pandang, dan batasan topik.
- **Penulis utama:** menulis isi yang padat, jelas, praktis, dan tidak bertele-tele.
- **Editor struktur:** menjaga alur bab, subbab, transisi, dan kedalaman pembahasan.
- **Penyunting bahasa:** menjaga gaya bahasa konsisten dari awal sampai akhir.
- **Fact checker:** memeriksa klaim, contoh teknis, istilah, dan risiko halusinasi.
- **Production editor:** memastikan Markdown, frontmatter, heading, quote box, bullet, numbering, code block, dan daftar isi tidak rusak.

Ebook harus terasa seperti buku yang selesai, bukan kumpulan artikel.

## 1A. Standar 10/10 untuk Ebook Berikutnya

Target workflow ini bukan sekadar "rapi" atau "panjang". Targetnya adalah naskah yang layak dipublikasikan di blog tanpa terasa seperti draft AI. Setiap ebook harus punya tiga kualitas sekaligus:

- **Alur buku yang natural:** mulai dari masalah, konteks, fondasi, praktik, studi kasus, lalu penutup. Jangan membuka buku dengan terlalu banyak toolkit, checklist, atau playbook sebelum ide utamanya matang.
- **Kedalaman yang terasa spesifik:** setiap judul harus punya contoh, istilah, risiko, mini project, dan keputusan teknis/perilaku yang khas untuk topik itu. Jangan memakai struktur isi yang bisa ditempel ke semua judul tanpa perubahan berarti.
- **Manfaat yang terlihat:** setelah selesai membaca, Anda/kamu tahu apa yang dipahami, apa yang bisa dicoba, apa yang harus dihindari, dan artefak apa yang bisa dibuat.

Skor internal 10/10 berarti:

- Judul, janji buku, dan isi benar-benar selaras.
- Bab punya fungsi berbeda, bukan variasi dari paragraf yang sama.
- Ada ritme: narasi, konsep, contoh, tindakan, refleksi, dan ringkasan saling mengalir.
- Untuk hard skill, isi harus teknis-praktis dan punya bukti eksekusi.
- Untuk soft skill, isi harus menyentuh pengalaman batin, bukan hanya memberi nasihat.
- Naskah memakai sapaan langsung seperti **Anda** atau **kamu** sesuai gaya buku. Jangan menyebut audiens dengan sapaan orang ketiga di dalam naskah final.

## 1B. Standar Full Daging 80/20

Setiap ebook harus memakai prinsip **80/20**: 80% naskah berisi hal yang langsung memberi pemahaman, keputusan, contoh, atau tindakan; maksimal 20% dipakai untuk pengantar, motivasi, teori umum, atau transisi.

Isi yang dihitung sebagai "daging":

- Framework atau mental model yang bisa dipakai pembaca.
- Contoh nyata, studi kasus mini, dialog, log, workflow, command, konfigurasi, atau skenario kerja.
- Keputusan praktis: kapan memilih A, kapan memilih B, dan kapan tidak memakai keduanya.
- Kesalahan umum yang ditulis lengkap: kesalahan -> dampak -> perbaikan.
- Template, checklist, worksheet, SOP, latihan, mini project, atau Definition of Done.
- Validasi hasil: expected output, indikator keberhasilan, pertanyaan audit, atau bukti yang harus dicek.
- Risiko dan mitigasi: security, biaya, data, operasional, emosi, kebiasaan, atau dampak bisnis.

Isi yang harus dibatasi:

- Definisi panjang tanpa contoh.
- Motivasi umum tanpa mekanisme.
- Pengantar yang mengulang judul.
- Ringkasan yang hanya mengulang daftar isi.
- Bullet yang terlihat padat tetapi tidak memberi keputusan atau contoh.

Quality gate 80/20:

- Setiap bab utama wajib punya minimal 1 contoh spesifik dan 1 tindakan konkret.
- Mayoritas bab wajib punya elemen praktis: checklist, latihan, template, mini project, validasi, atau troubleshooting.
- Jika 2 paragraf berturut-turut hanya menjelaskan konsep abstrak, tambahkan contoh, keputusan, atau skenario.
- Jika sebuah subbab bisa dipakai di ebook lain tanpa perubahan berarti, revisi sampai spesifik pada topik.

## 1C. Standar Humanis untuk Semua Ebook

Ebook yang bagus tidak hanya rapi dan informatif, tetapi juga membuat Anda/kamu merasa ditemani. Ini berlaku untuk semua genre. Hard skill pun tetap punya sisi manusia: takut salah deploy, bingung membaca error, panik saat incident, malu bertanya, ragu saat belajar tool baru, atau ingin menjadi engineer yang lebih dipercaya.

Setiap ebook idealnya punya:

- Situasi nyata yang membuat Anda/kamu merasa, "ini yang sering saya alami."
- Konflik kecil sebelum masuk konsep: error yang membingungkan, kebiasaan yang sulit diubah, risiko yang membuat ragu, atau keputusan yang tidak sederhana.
- Contoh kegagalan yang manusiawi, bukan hanya error teknis atau nasihat abstrak.
- Nada yang membantu, bukan menghakimi.
- Kalimat editorial yang punya empati dan pendirian.
- Penutup yang memberi arah tindakan tanpa membuat Anda/kamu merasa tertinggal.

Untuk hard skill, human touch bisa muncul lewat skenario kerja:

- Pipeline gagal menjelang release.
- Engineer takut salah menjalankan command di production.
- Tim bingung membedakan warning penting dan noise.
- Junior engineer malu bertanya karena merasa harus sudah paham.
- Security finding muncul, tetapi tim tidak tahu prioritas perbaikannya.

Untuk soft skill, human touch harus muncul lewat pengalaman batin:

- Dialog internal.
- Rasa tubuh saat cemas, lelah, takut, atau malu.
- Pola menghindar.
- Momen ingin berubah tetapi gagal lagi.
- Kebutuhan untuk dipahami sebelum diberi solusi.

Pilih intensitas human touch sesuai jenis ebook:

- **Ringan:** untuk whitepaper, compliance, certification, atau dokumentasi teknis serius. Gunakan skenario kerja singkat, tekanan keputusan, dan konsekuensi nyata tanpa terlalu naratif.
- **Sedang:** untuk ebook teknis-praktis, DevOps, AI, security, cloud, bisnis, dan portfolio. Gunakan konflik kerja, error, risiko, dan konteks tim sebagai pintu masuk konsep.
- **Kuat:** untuk soft skill, kebiasaan, emosi, refleksi diri, Gen Z, atau buku perubahan perilaku. Gunakan pengalaman batin, dialog internal, rasa gagal, dan pegangan saat kambuh.

Human touch tidak berarti menambah drama. Human touch berarti konsep terasa menempel pada pengalaman pembaca yang nyata.

Hindari:

- Isi yang hanya berupa definisi, checklist, dan langkah.
- Kalimat terlalu steril seperti dokumentasi vendor.
- Nada seolah semua orang sudah paham.
- Contoh teknis tanpa konteks manusia.
- Nasihat soft skill yang terdengar benar tetapi tidak menyentuh rasa.

## 1D. Rubrik Penilaian Internal

Gunakan rubrik ini sebelum menyatakan ebook selesai.

| Aspek | Bobot | Indikator |
|---|---:|---|
| Struktur dan alur | 20 | Urutan bab natural, tiap bab punya fungsi, transisi tidak mekanis. |
| Kedalaman isi | 20 | Konsep dijelaskan spesifik, tidak generik, ada sudut pandang editorial, dan memenuhi prinsip 80/20. |
| Kepraktisan | 20 | Ada contoh, latihan, mini project, validasi, checklist, template, atau keputusan praktis yang bisa dipakai. |
| Human touch | 20 | Ada situasi nyata, konflik manusiawi, nada empatik, dan tidak terasa dingin. |
| Akurasi dan produksi | 20 | Klaim aman, sumber dicek, Markdown rapi, code fence valid, tidak ada placeholder. |

Interpretasi skor total:

- **95-100:** siap publish dan layak disebut 10/10.
- **85-94:** publish-ready, tetapi masih bisa dipoles.
- **70-84:** draft bagus, perlu editorial pass.
- **Di bawah 70:** belum layak publish.

Jika skor human touch di bawah 15/20, jangan publish dulu meskipun struktur dan teknisnya rapi.

### Deskriptor Skor per Aspek

Gunakan deskriptor ini untuk kalibrasi yang konsisten. Jangan hanya berikan angka tanpa alasan.

**Struktur dan alur (20):**
- **20:** Urutan bab terasa seperti buku yang dirancang, bukan dirakit. Setiap bab punya fungsi berbeda dan transisi antarbab terasa alami.
- **18:** Alur logis dan tidak melompat, tetapi ada 1-2 transisi yang mekanis atau bab dengan fungsi yang terlalu mirip.
- **15:** Bab bisa dipindahkan urutannya tanpa banyak dampak. Transisi terasa seperti daftar, bukan narasi.
- **Di bawah 15:** Struktur terasa seperti outline yang belum dikerjakan. Bab tidak punya fungsi yang jelas.

**Kedalaman isi (20):**
- **20:** Setiap bab punya contoh spesifik domain, sudut pandang editorial, dan insight yang tidak bisa didapat dari googling judul saja.
- **18:** Isi substansial dan tidak generik, tetapi ada 1-2 bagian yang bisa lebih spesifik atau lebih dalam.
- **15:** Isi benar secara faktual tetapi terasa seperti ringkasan artikel. Tidak ada sudut pandang atau keputusan yang diambil.
- **Di bawah 15:** Isi terlalu umum, bisa ditempel ke topik lain tanpa perubahan berarti. Tidak ada daging.

**Kepraktisan (20):**
- **20:** Setiap bab utama punya minimal satu elemen yang bisa langsung dicoba: command, template, latihan, checklist, atau decision table. Standar 80/20 terasa kuat.
- **18:** Mayoritas bab punya elemen praktis, tetapi ada 1-2 bab yang hanya berisi penjelasan konsep tanpa tindakan.
- **15:** Elemen praktis ada, tetapi tersebar tidak merata. Banyak bab yang berakhir tanpa action step.
- **Di bawah 15:** Elemen praktis hampir tidak ada atau terlalu abstrak untuk langsung dicoba.

**Human touch (20):**
- **20:** Ada minimal 2 skenario nyata yang dekat dengan pengalaman pembaca, plus minimal 1 elemen batin (konflik, rasa tubuh, dialog internal, atau momen kambuh). Nada tidak menggurui.
- **18:** Ada skenario nyata dan nada empatik, tetapi kedalaman emosional bisa ditambah. Tidak ada bagian yang terasa dingin.
- **15:** Ada skenario kerja atau situasi nyata, tetapi masih terasa generik. Tidak ada elemen batin yang konkret.
- **Di bawah 15:** Naskah terasa seperti dokumentasi: benar secara isi, tetapi dingin, impersonal, dan tidak membuat pembaca merasa dikenali.

**Akurasi dan produksi (20):**
- **20:** Semua klaim diverifikasi atau dibatasi dengan tepat. Markdown sempurna: frontmatter valid, heading tidak lompat, code fence tertutup, tidak ada placeholder atau secret pattern.
- **18:** Satu aspek produksi bisa lebih rapi atau ada satu klaim yang perlu pembatasan, tetapi tidak ada kesalahan fatal.
- **15:** Ada placeholder yang terlupa, heading yang inkonsisten, atau klaim teknis yang terlalu spesifik tanpa verifikasi.
- **Di bawah 15:** Ada error produksi yang akan merusak render, atau ada klaim signifikan yang tidak bisa dipertanggungjawabkan.

**Prioritas perbaikan jika skor di bawah threshold:**

| Aspek yang kurang | Perbaiki dengan |
|---|---|
| Struktur dan alur < 18 | Tulis ulang transisi antarbab, periksa apakah setiap bab punya fungsi unik |
| Kedalaman isi < 18 | Tambahkan contoh spesifik domain dan hapus bagian yang bisa ditempel ke topik lain |
| Kepraktisan < 18 | Tambahkan action step, template, atau latihan di setiap bab yang kosong |
| Human touch < 18 | Buka setiap bab dengan skenario nyata, tambahkan minimal 1 elemen batin per bagian besar |
| Akurasi dan produksi < 18 | Jalankan QA otomatis, batasi klaim yang tidak terverifikasi, periksa Markdown manual |

### Contoh Scoring Rubrik

Gunakan contoh ini sebagai kalibrasi saat menilai draft. Setiap contoh ditampilkan dalam dua kondisi: **sebelum revisi** (untuk menunjukkan diagnosis yang benar) dan **setelah revisi** (untuk menunjukkan target yang harus dicapai).

---

**Hard skill — Ebook GitHub Actions (Sebelum Revisi):**

| Aspek | Skor | Catatan |
|---|---:|---|
| Struktur dan alur | 18/20 | Alur dari workflow dasar ke security dan production readiness sudah natural. |
| Kedalaman isi | 18/20 | Ada permission, OIDC, reusable workflow, runner, dan troubleshooting. |
| Kepraktisan | 20/20 | Ada YAML, validasi, mini project CI, dan checklist review. |
| Human touch | 16/20 | Ada skenario pipeline gagal, tetapi tidak ada rasa panik tim, tekanan waktu, atau konflik keputusan yang nyata. |
| Akurasi dan produksi | 19/20 | Sumber resmi ada, Markdown rapi, klaim versi tidak berlebihan. |
| **Total** | **91/100** | ⚠️ **Belum layak publish.** Human touch 16/20 di bawah threshold minimum 18/20. Revisi diperlukan sebelum final. |

> **Diagnosis:** Tambahkan 1-2 pembuka bab yang menyebut situasi nyata (engineer panik menjelang deploy, tim bingung melihat log merah semua) sebelum masuk ke konsep. Sisipkan kalimat yang menggambarkan tekanan waktu atau rasa tidak yakin saat memegang token production.

**Hard skill — Ebook GitHub Actions (Setelah Revisi):**

| Aspek | Skor | Catatan |
|---|---:|---|
| Struktur dan alur | 18/20 | Alur tetap natural, transisi antarbab diperhalus. |
| Kedalaman isi | 19/20 | Contoh ditambah skenario decision point: kapan pakai OIDC vs. secret manual. |
| Kepraktisan | 20/20 | YAML, validasi, mini project CI, dan checklist review tetap ada. |
| Human touch | 19/20 | Setiap bab dibuka dengan skenario kerja nyata; ada rasa panik, tekanan release, dan konflik tim. |
| Akurasi dan produksi | 19/20 | Tidak ada perubahan — sudah rapi. |
| **Total** | **95/100** | ✅ Layak publish. Semua aspek di atas threshold 18/20. |

---

**Soft skill — Ebook Konsistensi (Sebelum Revisi):**

| Aspek | Skor | Catatan |
|---|---:|---|
| Struktur dan alur | 19/20 | Masalah, mekanisme, latihan, dan rencana 30 hari mengalir. |
| Kedalaman isi | 18/20 | Ada pola emosi, kebiasaan, dan jebakan overcommitment. |
| Kepraktisan | 17/20 | Latihan ada, tetapi template tracking terlalu kompleks dan tidak reusable sehari-hari. |
| Human touch | 20/20 | Situasi gagal, malu, lelah, dan mulai ulang terasa dekat. |
| Akurasi dan produksi | 19/20 | Markdown rapi, tidak ada klaim psikologis berlebihan. |
| **Total** | **93/100** | ⚠️ **Belum layak publish sebagai 10/10.** Kepraktisan 17/20 di bawah threshold 18/20. Sederhanakan template tracking. |

> **Diagnosis:** Template latihan terlalu banyak kolom dan asumsi bahwa pembaca punya waktu lebih dari 10 menit. Buat versi "minimal viable habit tracker" yang hanya butuh 3 poin per hari: apa yang dilakukan, bagaimana rasanya, satu langkah besok.

**Soft skill — Ebook Konsistensi (Setelah Revisi):**

| Aspek | Skor | Catatan |
|---|---:|---|
| Struktur dan alur | 19/20 | Tidak berubah — alur sudah baik. |
| Kedalaman isi | 19/20 | Contoh ditambah jebakan "false consistency" — terlihat konsisten tapi sebenarnya menghindari hal yang sulit. |
| Kepraktisan | 19/20 | Template disederhanakan jadi 3 poin harian; ada versi digital dan versi tulis tangan. |
| Human touch | 20/20 | Tidak berubah — sudah sangat kuat. |
| Akurasi dan produksi | 19/20 | Tidak berubah. |
| **Total** | **96/100** | ✅ Layak publish sebagai 10/10. Semua aspek ≥ 18/20. |

---

Target final sebelum publish:

- Total minimal **95/100** jika user meminta kualitas 10/10.
- Tidak ada aspek di bawah **18/20**.
- Human touch minimal **18/20**, termasuk untuk hard skill.
- Full daging 80/20 harus terasa di seluruh buku: setiap bab utama punya contoh spesifik dan tindakan konkret.
- QA otomatis tidak boleh gagal untuk frontmatter, H1, daftar isi, code fence, placeholder, atau secret pattern.

## 2. Input Minimal dari User

Jika user hanya memberi sedikit informasi, lanjutkan dengan asumsi default. Jangan berhenti kecuali informasinya benar-benar menentukan arah buku.

Input yang ideal:

- **Judul/topik:** wajib.
- **Audiens:** umum, pemula, engineer, founder, manager, pelajar, Gen Z, profesional, atau kombinasi.
- **Gaya bahasa:** populer, formal, semi-formal, teknis-praktis, santai, naratif, atau tajam.
- **Model penulisan:** komprehensif, buku saku, cheat sheet, handbook, playbook, tutorial, workbook, atau ringkasan teknis.
- **Tujuan Anda/kamu setelah membaca:** skill, mindset, keputusan bisnis, implementasi, persiapan ujian, atau perubahan perilaku.
- **Panjang:** ringkas, sedang, panjang, atau sangat lengkap.
- **Sumber khusus:** file, catatan, transcript, link, paper, standar, atau dokumentasi yang harus dipakai.
- **Output target:** file Markdown biasa atau file Astro content di `PORTOFOLIO PROJECT/portfolio-web/src/content/ebooks`.
- **Target kualitas:** quick draft, standard, publisher-grade, atau 10/10.
- **Intensitas human touch:** ringan, sedang, atau kuat.

Default bila tidak disebutkan:

- Audiens: orang Indonesia level pemula-menengah.
- Gaya bahasa: semi-formal populer, jelas, tidak kaku.
- Model: komprehensif praktis.
- Panjang: sedang-panjang.
- Format: Markdown dengan frontmatter Astro.
- Bahasa: Indonesia.
- Sudut pandang: edukatif, praktis, langsung ke inti.
- Target kualitas: publisher-grade.
- Intensitas human touch: sedang untuk hard skill, kuat untuk soft skill.

Level target kualitas:

- **Quick draft:** boleh berupa draft awal, tetapi tetap rapi dan tidak boleh punya placeholder.
- **Standard:** struktur jelas, contoh cukup, Markdown valid, tetapi belum wajib mencapai kedalaman 10/10.
- **Publisher-grade:** siap masuk blog/content website, sudah melewati editorial pass, production pass, dan QA.
- **10/10:** publisher-grade plus total rubrik minimal 95/100, tidak ada aspek di bawah 18/20, human touch minimal 18/20, dan standar 80/20 terasa kuat di semua bab.

## 3. Pertanyaan Klarifikasi

Tanyakan maksimal 3 pertanyaan hanya jika perlu. Prioritaskan pertanyaan yang mengubah struktur buku secara besar.

Pertanyaan yang paling berguna:

1. "Ebook ini untuk level apa: pemula, menengah, atau profesional?"
2. "Modelnya mau komprehensif, buku saku/cheat sheet, atau tutorial langkah demi langkah?"
3. "Ada sumber/catatan wajib yang harus dijadikan basis agar isi tidak melenceng?"

Jika user meminta "langsung buat", jangan bertanya. Gunakan default dan lanjut.

## 4. Format Output Utama

Untuk ebook portfolio web, gunakan format Markdown berikut:

```md
---
title: "Judul Ebook"
description: "Deskripsi 1-2 kalimat yang sangat menarik, memikat (hook), dan menjual manfaat spesifik buku tanpa berlebihan. Hindari frasa monoton seperti 'Buku ini membahas...'. Gunakan copywriting yang langsung menyentuh rasa ingin tahu atau pain point pembaca."
publishDate: "YYYY-MM-DD"
---

# Judul Ebook
*Subjudul opsional yang menjelaskan janji buku*

---

## Daftar Isi

1. [Bab 1: Judul Bab](#bab-1-judul-bab)
2. [Bab 2: Judul Bab](#bab-2-judul-bab)

---

## Bab 1: Judul Bab
```

Aturan:

- Gunakan satu `#` saja untuk judul utama.
- Gunakan `##` untuk bagian besar dan bab.
- Gunakan `###` untuk subbab.
- Gunakan `####` hanya jika benar-benar perlu.
- Jangan mencampur format `BAB 1`, `Bab 1`, dan `1)` dalam satu buku. Pilih satu gaya dan konsisten.
- Untuk website Astro saat ini, frontmatter minimal harus punya `title`, `description`, dan `publishDate`.
- `publishDate` gunakan tanggal hari ini jika user tidak memberi tanggal.
- Filename gunakan slug huruf kecil, pisahkan dengan tanda hubung, tanpa simbol aneh.

### 4.1. Wajib Cek Schema dan Contoh Existing

Sebelum membuat file untuk website Astro, jangan hanya mengandalkan format di workflow ini. Baca konteks project terlebih dahulu:

- Cek schema content bila tersedia, misalnya `src/content/config.*`, `src/content/schema.*`, atau file konfigurasi Astro lain.
- Baca minimal 2-3 ebook existing di folder target untuk melihat frontmatter, heading, gaya slug, dan pola penutup.
- Jika schema existing lebih ketat daripada workflow ini, ikuti schema project.
- Jika file existing punya field tambahan seperti `category`, `tags`, `draft`, `cover`, atau `author`, gunakan pola yang konsisten bila relevan.
- Jangan menambahkan field baru tanpa alasan. Frontmatter harus cukup untuk project dan tidak membuat render gagal.

## 4A. Standar Blog-Ready

Jika ebook akan dipush ke blog, pastikan naskah siap dibaca sebagai artikel panjang atau content page.

Wajib ada:

- Frontmatter `title`, `description`, dan `publishDate`.
- Description 120-160 karakter bila memungkinkan, sangat menarik (engaging), tidak monoton, dan langsung menjawab "Kenapa saya harus membaca ini?". Hindari pola kalimat usang seperti "Panduan ini membahas..." atau "Buku ini berisi...". Gunakan sudut pandang yang menyentuh *pain point* atau janji spesifik.
- Slug/filename rapi, huruf kecil, tanpa simbol aneh.
- Intro kuat 2-3 paragraf sebelum daftar isi atau sebelum bab utama.
- Daftar isi yang sesuai heading.
- Heading yang mudah discan tanpa terasa seperti slide.
- Penutup dengan CTA halus: lanjutkan ke lab, cek sumber resmi, mulai latihan, atau simpan checklist.
- Catatan sumber resmi untuk topik teknis, sertifikasi, cloud, AI, security, regulasi, atau tool yang cepat berubah.

SEO dan readability:

- Judul harus mengandung topik utama secara jelas.
- Deskripsi harus menjanjikan manfaat konkret, bukan klaim berlebihan.
- Hindari paragraf pembuka yang terlalu generik.
- Gunakan istilah utama secara natural di awal naskah.
- Jangan melakukan keyword stuffing.
- **Internal Linking:** Jika naskah menyebutkan konsep yang berkaitan erat dengan bab lain, gunakan tautan jangkar (anchor link) ke bab tersebut. Jika memungkinkan, sarankan rujukan ke artikel/project portofolio lain di bagian penutup.
- Pecah paragraf panjang jika melebihi 5-6 kalimat.
- Pastikan tabel tidak terlalu lebar untuk mobile.

## 5. Struktur Buku Komprehensif

Gunakan struktur ini untuk ebook mendalam, handbook, atau buku soft skill panjang.

```md
## Kata Pengantar
## Cara Menggunakan Buku Ini
## Daftar Isi

## Bagian 1: Fondasi
### Bab 1: Masalah Utama
### Bab 2: Konsep Dasar

## Bagian 2: Kerangka Berpikir
### Bab 3: Prinsip Inti
### Bab 4: Pola dan Kesalahan Umum

## Bagian 3: Praktik
### Bab 5: Langkah Implementasi
### Bab 6: Studi Kasus
### Bab 7: Troubleshooting / Hambatan

## Bagian 4: Sistem Lanjutan
### Bab 8: Optimasi
### Bab 9: Checklist dan SOP

## Penutup
## Lampiran
```

Untuk ebook teknis, DevOps, AI, security, cloud, data, dan certification-oriented, struktur yang lebih natural adalah:

```md
## Kata Pengantar
## Cara Menggunakan Buku Ini
## Daftar Isi

## Hasil Akhir yang Akan Anda Punya

## Bagian 1: Fondasi dan Konteks
### Bab 1: Masalah, Peran, dan Scope
### Bab 2: Konsep Dasar yang Wajib Rapi

## Bagian 2: Praktik Inti
### Bab 3: Workflow Utama
### Bab 4: Konfigurasi / Implementasi / Studi Kasus
### Bab 5: Security, Quality, atau Risk Control

## Bagian 3: Operasional dan Roadmap
### Bab 6: Troubleshooting, Observability, atau Optimasi
### Bab 7: Roadmap Belajar, Lab, atau Rencana Implementasi

## Bagian 4: Buku Saku dan Praktik Lapangan
### Peta Teknis Cepat
### Mini Project
### Checklist Review
### Kesalahan Umum dan Perbaikannya

## Penutup
## Lampiran
## Catatan Sumber Resmi
```

Untuk ebook soft skill, struktur yang lebih menyentuh adalah:

```md
## Kata Pengantar
## Cara Menggunakan Buku Ini
## Daftar Isi

## Kenapa Buku Ini Penting untuk Anda/Kamu

## Bagian 1: Mengenali Luka atau Pola
### Bab 1: Masalah yang Sering Tidak Diakui
### Bab 2: Kenapa Pola Ini Terjadi

## Bagian 2: Memahami Diri dengan Lebih Jujur
### Bab 3: Mekanisme Emosi atau Perilaku
### Bab 4: Pola yang Membuat Anda/Kamu Terjebak
### Bab 5: Cara Membaca Diri Tanpa Menghakimi

## Bagian 3: Latihan dan Perubahan Kecil
### Bab 6: Latihan Harian
### Bab 7: Rencana 7/14/30 Hari

## Bagian 4: Pegangan Saat Kambuh atau Gagal
### Kalimat Pengingat
### Latihan Refleksi
### Checklist Perilaku

## Penutup
## Lampiran
```

Aturan struktur penting:

- Jangan menaruh semua checklist, template, dan playbook di awal. Letakkan setelah bab utama kecuali formatnya memang cheat sheet.
- Bab awal harus menarik orang masuk ke masalah, bukan langsung memberi daftar fitur.
- Bagian praktis boleh banyak, tetapi harus muncul setelah konteks dan konsep cukup matang.
- Untuk seri ebook, struktur boleh konsisten, tetapi contoh, mini project, istilah, dan risiko wajib spesifik per judul.

Untuk setiap bab, gunakan pola:

1. **Hook pembuka:** masalah nyata, skenario, atau pertanyaan tajam.
2. **Inti konsep:** definisi dan prinsip utama.
3. **Daging utama:** framework, langkah, perbandingan, contoh, mental model, atau SOP.
4. **Contoh konkret:** teknis, bisnis, perilaku, dialog, command, workflow, atau studi kasus mini.
5. **Kesalahan umum:** minimal 3 jika relevan.
6. **Checklist / action step:** Anda/kamu tahu harus melakukan apa.
7. **Ringkasan bab:** 3-5 poin pendek.

## 6. Struktur Buku Saku / Cheat Sheet

Gunakan untuk panduan cepat, handbook harian, materi ujian, atau referensi praktis.

```md
## Cara Pakai
## Peta Cepat
## Daftar Isi

## 1. Topik Utama
### Inti 80/20
### Kapan Dipakai
### Langkah Praktis
### Contoh
### Pitfall
### Checklist
### Cheat Sheet

## 2. Topik Utama Berikutnya
...

## Lampiran: Template, SOP, dan One-Liners
```

Aturan buku saku:

- Lebih banyak bullet, tabel, checklist, template, dan contoh.
- Paragraf pendek: 2-5 kalimat.
- Setiap bagian harus bisa dipakai tanpa membaca semua bab sebelumnya.
- Hindari teori panjang kecuali dibutuhkan untuk mencegah salah praktik.

## 7. Struktur Tutorial / Playbook

Gunakan untuk ebook engineer, DevOps, AI, security, automation, atau implementasi sistem.

```md
## Prasyarat
## Arsitektur Target
## Setup Environment
## Langkah 1: ...
## Langkah 2: ...
## Validasi
## Troubleshooting
## Hardening / Best Practices
## Checklist Produksi
## Lampiran
```

Setiap langkah teknis wajib punya:

- Tujuan langkah.
- Perintah atau konfigurasi.
- Penjelasan singkat kenapa langkah itu perlu.
- Cara validasi.
- Pitfall yang sering terjadi.
- Catatan keamanan jika menyentuh credential, akses, jaringan, data user, atau produksi.

## 8. Standar Kedalaman Isi

Setiap ebook harus banyak berisi "daging", bukan motivasi kosong.

Gunakan rasio 80/20: 80% isi harus membantu pembaca mengambil keputusan, mencoba sesuatu, memahami contoh, menghindari kesalahan, atau memvalidasi hasil. Teori umum hanya dipakai sejauh membantu pembaca menjalankan bagian praktis dengan benar.

Isi dianggap padat jika memiliki:

- Framework yang bisa dipakai.
- Contoh nyata atau skenario konkret.
- Checklist tindakan.
- Kesalahan umum dan cara menghindarinya.
- Perbandingan opsi bila ada beberapa pendekatan.
- Template siap pakai.
- Mini case study.
- Definisi istilah penting.
- Langkah validasi hasil.

Hindari:

- Pengulangan kalimat dengan makna sama.
- Nasihat generik tanpa contoh.
- Klaim besar tanpa batasan.
- Quote palsu dari tokoh.
- Bab yang hanya berisi motivasi tanpa mekanisme.
- Terlalu banyak istilah Inggris tanpa penjelasan.

## 9. Standar Anti-PPT dan Anti-Generate AI

Ebook tidak boleh terasa seperti slide presentasi, outline mentah, atau hasil generate AI sekali jalan. Naskah harus terasa seperti buku yang ditulis, diedit, dan diberi ritme baca.

### Aturan Anti-Template Hampa

Konsistensi struktur boleh, tetapi isi tidak boleh terasa seperti cetakan yang sama. Setiap ebook harus punya identitas topiknya sendiri.

Wajib:

- Setiap bab punya fungsi unik: fondasi, konsep, praktik, risiko, troubleshooting, roadmap, refleksi, atau studi kasus.
- Pembuka bab tidak boleh memakai pola kalimat yang sama berulang.
- Mini project harus spesifik pada judul. Jangan memakai mini project generik seperti "buat lab kecil" tanpa konteks domain.
- Contoh harus menyebut situasi nyata, tool, workflow, perilaku, atau konflik yang sesuai judul.
- Kesalahan umum harus spesifik: kesalahan -> dampak -> perbaikan.
- Hasil akhir harus jelas: artefak apa yang Anda/kamu punya setelah selesai membaca.

Larangan:

- Mengulang paragraf pembuka dengan hanya mengganti nama topik.
- Memakai subbab yang sama persis di semua bab tanpa kebutuhan.
- Menulis checklist yang bisa ditempel ke semua ebook.
- Menggunakan contoh abstrak seperti "gunakan tool dengan baik" tanpa skenario.
- Membuat bab yang panjang tetapi tidak memberi keputusan, contoh, atau tindakan.

### Contoh Before / After

Gunakan pola ini saat editorial pass.

Hard skill:

- **Before:** "GitHub Actions berguna untuk membuat workflow CI/CD. Anda harus mengatur workflow dengan benar agar pipeline aman."
- **After:** "Bayangkan pipeline release gagal 20 menit sebelum deploy. Semua orang melihat log, tetapi tidak ada yang yakin job mana yang memegang secret production. Di titik ini, GitHub Actions bukan lagi sekadar YAML. Anda perlu memahami trigger, permission token, secret exposure, runner, dan approval agar pipeline tetap membantu tim, bukan menambah risiko."

Soft skill:

- **Before:** "Konsistensi membutuhkan disiplin dan komitmen. Kamu harus membangun kebiasaan yang baik setiap hari."
- **After:** "Ada hari ketika kamu sudah tahu harus melakukan apa, tetapi tubuh rasanya menolak bergerak. Bukan karena kamu malas sepenuhnya. Kadang sistem yang kamu buat terlalu berat untuk kondisi hidupmu hari itu. Di bab ini, kita akan mengecilkan langkah sampai cukup ringan untuk dimulai lagi."

Aturan before/after:

- Before biasanya terlalu umum, menggurui, atau steril.
- After harus punya situasi, konflik, rasa, dan arah tindakan.
- Untuk hard skill, tambahkan tekanan kerja nyata.
- Untuk soft skill, tambahkan pengalaman batin dan nada yang menemani.

### Standar Seri Ebook

Jika membuat banyak ebook sekaligus, jaga keseimbangan antara konsistensi dan keunikan.

Yang boleh konsisten:

- Frontmatter.
- Pola bagian besar.
- Gaya daftar isi.
- Format quote box, checklist, dan code block.
- Posisi lampiran dan sumber resmi.

Yang wajib unik per judul:

- Janji buku.
- Hook pembuka.
- Mini project.
- Contoh teknis atau contoh hidup.
- Kesalahan umum.
- Artefak akhir.
- Studi kasus mini.
- Sumber resmi.
- Penutup.

Checklist seri:

- [ ] Jika judul dihapus dari satu bab, isi bab masih terasa spesifik atau menjadi generik?
- [ ] Apakah mini project hanya cocok untuk judul itu?
- [ ] Apakah contoh gagal/error/konflik sesuai domain?
- [ ] Apakah ada istilah unik yang memang milik topik tersebut?
- [ ] Apakah 3 ebook dalam seri tidak punya pembuka bab yang terasa sama?

Tanda ebook terasa seperti PPT:

- Terlalu banyak heading pendek yang memecah alur.
- Terlalu banyak bullet tanpa paragraf penghubung.
- Setiap bab memakai pola subjudul yang sama persis.
- Tiap bagian terasa seperti daftar poin, bukan pembahasan.
- Checklist muncul sebagai struktur kaku di setiap bab tanpa variasi.
- Transisi antarbab tidak ada atau terlalu mekanis.
- Paragraf pembuka langsung definisi tanpa konteks manusiawi.

Tanda ebook terasa seperti generate AI:

- Kalimat terlalu simetris dan repetitif.
- Banyak frasa generik seperti "di era modern ini", "sangat penting untuk", atau "dapat membantu Anda" tanpa contoh konkret.
- Semua bab punya panjang, pola, dan urutan yang terlalu sama.
- Contoh terasa abstrak dan tidak hidup.
- Nada terlalu netral, licin, dan tidak punya sudut pandang editorial.
- Terlalu sering menyimpulkan dengan kalimat aman tetapi kosong.
- Banyak list yang benar secara struktur, tetapi tidak meninggalkan rasa atau insight.

Aturan agar terasa seperti buku:

- Awali bab penting dengan situasi nyata, konflik audiens, atau skenario sehari-hari sebelum masuk definisi.
- Gunakan paragraf naratif sebagai penghubung sebelum dan sesudah bullet.
- Jadikan bullet sebagai alat bantu, bukan bentuk utama seluruh naskah.
- Variasikan pola bab: tidak semua bab harus memiliki subjudul dan urutan yang identik.
- Jika memakai latihan/checklist berulang, ubah pengantarnya agar tidak copy-paste.
- Tambahkan contoh spesifik yang dekat dengan audiens.
- Sisipkan kalimat editorial yang punya pendirian, misalnya "masalahnya bukan kurang niat, tetapi desain awal yang terlalu rapuh."
- Pastikan setiap bagian punya alur: masalah -> penjelasan -> contoh -> tindakan.
- Biarkan beberapa paragraf bernapas lebih panjang jika itu membuat gagasan lebih matang.
- Hindari menumpuk quote box, tabel, bullet, dan checklist berdekatan tanpa narasi.

Rasio praktis:

- Untuk ebook populer atau soft skill, mayoritas isi harus berupa paragraf naratif, bukan bullet.
- Dalam satu bab, idealnya ada minimal 2-4 paragraf utuh sebelum daftar panjang.
- Jangan memakai lebih dari 3 heading level `###` dalam satu bab kecuali buku memang berbentuk handbook atau cheat sheet.
- Checklist per bab boleh ada, tetapi jangan selalu dijadikan heading yang sama persis.
- Jika satu halaman terlihat seperti slide saat discan cepat, ubah sebagian list menjadi paragraf.

## 10. Gaya Bahasa

Pilih satu gaya dan pertahankan sampai akhir.

### Sapaan dan Sudut Pandang

Gunakan sapaan langsung agar naskah terasa dekat:

- Pakai **Anda** untuk ebook teknis, profesional, certification, DevOps, security, cloud, AI, bisnis, dan portfolio.
- Pakai **kamu** untuk ebook soft skill, Gen Z, refleksi diri, kebiasaan, emosi, dan topik yang lebih personal.
- Pilih satu sapaan utama untuk satu ebook. Jangan mencampur **Anda** dan **kamu** di naskah final kecuali ada alasan gaya yang jelas.
- Hindari menyebut audiens dengan sapaan orang ketiga di naskah final. Ganti dengan "Anda", "kamu", "tim Anda", "di pekerjaan Anda", atau "dalam hidup kamu".
- Jangan menulis dengan nada terlalu jauh seperti laporan akademik jika user meminta semi-formal, santai, atau populer.
- Hindari frasa generik seperti "audiens akan mendapatkan". Tulis lebih langsung: "Anda akan punya...", "kamu akan mulai melihat...", atau "setelah bab ini, Anda bisa...".

Contoh revisi:

- Kurang dekat: "Materi ini menjelaskan konsep dasar IAM."
- Lebih baik: "Anda akan memahami cara IAM membatasi siapa boleh melakukan apa."
- Kurang emosional: "Materi ini membahas cara mengelola overthinking."
- Lebih baik: "Kamu akan belajar mengenali momen ketika pikiran mulai menyeretmu terlalu jauh."

### Populer

- Kalimat pendek-menengah.
- Boleh memakai analogi.
- Cocok untuk umum, Gen Z, soft skill, produktivitas, AI untuk non-teknis.
- Hindari terlalu banyak jargon.

### Semi-Formal Praktis

- Profesional tapi tetap ringan.
- Cocok untuk ebook portfolio, engineer, bisnis, DevOps, AI, security.
- Gunakan istilah teknis, tetapi jelaskan saat pertama muncul.

### Formal

- Struktur rapi, minim slang.
- Cocok untuk laporan, enterprise, whitepaper, atau materi kebijakan.
- Klaim harus lebih hati-hati dan bernada objektif.

### Teknis-Praktis

- Langsung ke command, konfigurasi, SOP, dan validasi.
- Cocok untuk engineer, sysadmin, DevOps, security, cloud, data, AI implementation.
- Setiap konsep idealnya punya contoh runnable atau pseudo-runnable.

### Panduan Campuran Istilah Teknis dan Bahasa Indonesia

Ebook berbahasa Indonesia untuk topik teknis tidak harus memaksakan terjemahan. Gunakan panduan berikut untuk konsistensi:

**Tulis dalam bahasa Inggris (tanpa kursif, tanpa tanda kutip) jika:**
- Istilah tidak punya padanan Indonesia yang terasa alami: `pipeline`, `container`, `deployment`, `cluster`, `webhook`, `rollback`, `caching`, `middleware`.
- Terjemahan akan membuat pembaca lebih bingung daripada istilah aslinya.
- Istilah adalah nama produk, tool, atau protokol resmi: `Docker`, `Kubernetes`, `GitHub Actions`, `IAM`, `OAuth`, `JWT`.

**Terjemahkan ke Indonesia jika:**
- Padanan sudah baku dan umum dipakai: `keamanan` (security), `basis data` (database), `pengguna` (user), `server` (tetap server), `jaringan` (network).
- Terjemahan lebih dekat dengan audiens pemula yang memang belum akrab dengan istilah asing.

**Aturan tambahan:**
- Saat istilah teknis pertama kali muncul di naskah, tulis versi Indonesia (jika ada) diikuti istilah Inggris dalam tanda kurung, atau sebaliknya. Contoh: *"kontainer (container)"* atau *"deployment (proses penerapan ke server)"*.
- Setelah diperkenalkan sekali, gunakan satu versi saja secara konsisten untuk satu ebook.
- Jangan mencampur: satu paragraf tulis `deployment`, paragraf berikutnya tulis `penerapan` tanpa alasan editorial.
- Jangan paksakan terjemahan yang terasa janggal hanya karena ingin terlihat "murni Indonesia". Tujuannya adalah keterbacaan, bukan kemurnian bahasa.

## 11. Aturan Quote Box dan Admonition

Gunakan quote box untuk menonjolkan prinsip, peringatan, tips, catatan, atau ringkasan. Jangan terlalu banyak sampai efek penekanannya hilang.

Format aman:

```md
> **Prinsip:** Kalimat inti yang ingin ditekankan.
```

Format multi-paragraf:

```md
> **Catatan Penting:** Paragraf pertama.
>
> Paragraf kedua masih bagian dari quote box yang sama.
```

Format dengan list:

```md
> **Checklist Cepat:**
> - Poin pertama.
> - Poin kedua.
> - Poin ketiga.
```

Jika ingin memakai gaya GitHub admonition, pastikan semua baris tetap diawali `>`:

```md
> [!WARNING]
> **Risiko:** Jangan menyimpan credential di repository.
```

Aturan penting:

- Jangan membuat quote box dengan hanya baris pertama memakai `>`.
- Jangan mencampur quote box dan heading tanpa jarak kosong.
- Jangan mengutip tokoh nyata kecuali yakin sumbernya benar.
- Untuk quote inspiratif tanpa sumber, tulis sebagai prinsip penulis, bukan kutipan tokoh.
- Maksimal 1-3 quote box per bab kecuali buku memang berbentuk cheat sheet.

## 12. Aturan Bullet, Numbering, dan Checklist

Gunakan bullet untuk daftar setara:

```md
- Poin pertama.
- Poin kedua.
- Poin ketiga.
```

Gunakan numbering untuk urutan proses:

```md
1. Lakukan langkah pertama.
2. Validasi hasilnya.
3. Perbaiki jika ada error.
```

Gunakan checklist untuk audit atau tindakan:

```md
- [ ] Item belum dilakukan.
- [ ] Item berikutnya.
```

Aturan:

- Jangan campur bullet `*` dan `-` dalam satu buku. Gunakan `-`.
- Numbering harus berurutan.
- Jika item panjang, pecah menjadi paragraf setelah bullet, bukan membuat bullet raksasa.
- Hindari nested bullet lebih dari 2 level.
- Setiap list harus punya pengantar singkat.

## 13. Aturan Tabel

Gunakan tabel untuk perbandingan, checklist ringkas, atau matrix keputusan.

```md
| Opsi | Cocok Untuk | Kelebihan | Risiko |
|---|---|---|---|
| RAG | Knowledge base stabil | Aman dan murah | Butuh indexing |
| Agent | Workflow kompleks | Fleksibel | Attack surface lebih besar |
```

Aturan:

- Jangan membuat tabel sangat lebar.
- Maksimal 4-5 kolom.
- Jika isi sel panjang, ubah menjadi bullet section.

## 13A. Aturan Visualisasi (Mermaid Diagram)

Untuk ebook teknis (misal: arsitektur cloud, pipeline CI/CD, alur traffic) atau buku yang memiliki logika keputusan bercabang, pertimbangkan penggunaan representasi visual menggunakan code block `mermaid`.

Aturan:
- Gunakan syntax Mermaid.js yang umum seperti `flowchart TD`, `graph LR`, atau `sequenceDiagram`.
- Jangan memaksakan diagram untuk langkah linier yang terlalu sederhana.
- Pastikan nama node dan label tidak terlalu panjang agar tidak rusak saat di-render di mobile.
- Diagram adalah pendukung, bukan pengganti narasi. Tetap sediakan paragraf penjelasan untuk elemen-elemen di dalam diagram.

## 14. Aturan Code Block dan Command

Untuk ebook teknis:

```bash
docker compose up -d
docker compose ps
```

```yaml
services:
  web:
    image: example/app:1.0.0
```

Aturan:

- Selalu beri info string: `bash`, `yaml`, `json`, `python`, `dockerfile`, `go`, `typescript`, atau `text`.
- Jelaskan placeholder seperti `<domain>`, `<user>`, dan `<path>`.
- Jangan menaruh credential asli.
- Jika perintah berisiko, beri peringatan dan alternatif aman.
- Untuk command destruktif seperti `rm`, `drop`, `delete`, atau `reset`, tambahkan validasi sebelum eksekusi.

## 15. Aturan Riset dan Akurasi

Jika topik menyangkut hal yang bisa berubah, lakukan verifikasi terbaru sebelum menulis detail spesifik.

Wajib verifikasi untuk:

- Versi software, harga, fitur cloud, sertifikasi, exam objective, regulasi, model AI, security advisory, CVE, dependency, dan layanan SaaS.
- Klaim medis, legal, finansial, keamanan, atau keputusan bisnis berisiko.
- Quote tokoh, data statistik, benchmark, dan standar resmi.

Jika tidak bisa verifikasi:

- Tulis dengan batasan: "secara umum", "pada banyak implementasi", "pastikan cek dokumentasi resmi".
- Hindari angka spesifik.
- Jangan mengarang sumber.

Untuk topik teknis, prioritaskan sumber resmi:

- Dokumentasi vendor.
- Spesifikasi standar.
- Repository resmi.
- Paper atau RFC.
- Dokumentasi project open source.

Format bagian sumber resmi:

```md
## Catatan Sumber Resmi

- **Nama sumber:** Dokumentasi resmi vendor / standar / repository.
  **Dipakai untuk:** Versi, konsep, command, exam objective, API, atau batasan fitur.
  **Catatan:** Klaim yang cepat berubah harus dicek ulang sebelum dipakai di production.
  **URL:** https://...
```

Aturan sumber:

- Jangan mencantumkan sumber yang tidak benar-benar dipakai.
- Untuk topik cepat berubah, tulis tanggal akses atau tanggal verifikasi jika informasi itu penting.
- Untuk sertifikasi, rujuk exam guide/objective resmi dan beri catatan bahwa objective bisa berubah.
- Untuk keamanan, regulasi, medis, legal, dan finansial, batasi klaim serta arahkan pembaca mengecek sumber resmi atau profesional terkait.
- Jika sumber tidak bisa diverifikasi, jangan buat daftar pustaka palsu. Tulis bagian "Batasan Akurasi" singkat.

## 16. Aturan Khusus Ebook Teknis

Ebook teknis harus mengajari Anda berpikir dan mengeksekusi. Untuk hard skill, jangan berhenti pada konsep. Setiap ebook harus memberi gambaran cara kerja nyata, risiko implementasi, dan artefak yang bisa dibuat.

Wajib ada bila relevan:

- Prasyarat.
- Diagram tekstual atau arsitektur ringkas.
- Struktur folder.
- Contoh konfigurasi.
- Command utama.
- Validasi output.
- Troubleshooting.
- Security notes.
- Checklist production readiness.
- Lampiran cheat sheet.

Standar hard skill 10/10:

- Ada **peta teknis**: input -> proses -> output -> validasi -> risiko.
- Ada **mini project** yang spesifik untuk judul, bukan generik.
- Ada **contoh command/config/code** minimal 2-3 blok jika topiknya teknis.
- Ada **cara validasi**: expected output, log, test, lint, dry-run, plan, atau health check.
- Ada **kesalahan nyata** beserta dampak dan perbaikannya.
- Ada **catatan security** untuk credential, permission, network, data, CI/CD, production, dan biaya cloud.
- Ada **decision point**: kapan memakai opsi A, kapan opsi B, dan kapan jangan memakai tool itu.
- Ada **troubleshooting** dengan gejala, kemungkinan penyebab, dan langkah cek.
- Ada **Definition of Done** untuk lab atau implementasi kecil.

Untuk sertifikasi teknis:

- Ikuti domain resmi ujian bila tersedia.
- Jelaskan materi sebagai skenario kerja, bukan sekadar daftar objective.
- Beri peta belajar: konsep -> layanan/tool -> skenario -> risiko -> latihan.
- Cantumkan catatan bahwa exam objective bisa berubah dan harus dicek di sumber resmi.

Pola subbab yang disarankan:

```md
### Fokus Bab
### Keputusan Teknis yang Perlu Dibuat
### Contoh Kerja
### Contoh Konfigurasi / Command
### Validasi dan Expected Output
### Kesalahan Umum dan Perbaikannya
### Checklist Bab Ini
```

## 17. Aturan Khusus Ebook Soft Skill

Ebook soft skill tidak boleh berisi motivasi kosong. Setiap konsep harus turun menjadi tindakan.

Ebook soft skill juga harus terasa manusiawi. Tugasnya bukan hanya membuat kamu "paham", tetapi membuat kamu merasa dikenali. Naskah harus bisa menyentuh pengalaman batin: rasa lelah, takut gagal, malu, bingung, ingin berubah tetapi sering jatuh lagi, atau sulit jujur pada diri sendiri.

Wajib ada bila relevan:

- Masalah psikologis atau perilaku yang nyata.
- Mekanisme: kenapa masalah itu terjadi.
- Framework sederhana.
- Contoh situasi sehari-hari.
- Latihan refleksi.
- Checklist perilaku.
- Script percakapan jika topik komunikasi.
- Rencana 7 hari, 14 hari, atau 30 hari.

Standar soft skill 10/10:

- Bab dibuka dengan situasi yang terasa dekat, bukan definisi.
- Ada kalimat yang membuat kamu merasa, "ini gue banget" atau "ini yang sering terjadi sama saya".
- Ada penjelasan mekanisme tanpa menghakimi.
- Ada contoh batin: dialog internal, rasa tubuh, kebiasaan menghindar, atau pola pikiran.
- Ada latihan refleksi yang lembut tetapi konkret.
- Ada langkah kecil yang realistis untuk hari ini, bukan target perubahan besar yang membuat makin bersalah.
- Ada bagian "saat gagal/kambuh" agar kamu tidak merasa prosesnya rusak hanya karena belum konsisten.
- Hindari nada menggurui seperti "Anda harus". Gunakan nada menemani: "coba mulai dari...", "perhatikan saat...", "kalau hari ini belum bisa, kecilkan langkahnya".
- Jangan terlalu banyak bullet. Soft skill butuh paragraf bernapas, cerita kecil, dan transisi yang hangat.

Pola subbab yang disarankan:

```md
### Situasi yang Mungkin Sedang Kamu Alami
### Kenapa Ini Terjadi
### Pola yang Sering Tidak Disadari
### Cara Membaca Diri Tanpa Menghakimi
### Latihan Kecil Hari Ini
### Saat Kamu Gagal atau Kambuh
### Ringkasan yang Perlu Kamu Ingat
```

## 18. Standar Bab dan Subbab

Gunakan skala berikut:

- Ebook ringkas: 5-7 bab.
- Ebook sedang: 8-12 bab.
- Ebook komprehensif: 12-20 bab.
- Buku saku: 10-20 section pendek.
- Cheat sheet: section kecil berbasis kebutuhan praktis.

Setiap bab idealnya:

- 800-1.800 kata untuk buku komprehensif.
- 400-900 kata untuk buku sedang.
- 200-600 kata untuk buku saku.
- Memiliki minimal 2 subbab.
- Memiliki minimal 1 elemen praktis: checklist, framework, contoh, template, atau latihan.

## 19. Alur Kerja Pembuatan

Ikuti fase ini secara berurutan.

### Fase 0: Project Discovery

Jika output berupa file di repository, pahami konteks project sebelum menulis:

- Cari folder target dan pola nama file existing.
- Baca schema content atau konfigurasi Astro bila ada.
- Baca minimal 2-3 file ebook existing untuk memastikan frontmatter dan gaya heading cocok.
- Catat batasan teknis: field wajib, format tanggal, slug, dan pola render Markdown.

### Fase 1: Brief

Ambil input user dan ubah menjadi brief internal:

- Judul final.
- Janji buku.
- Audiens.
- Level audiens.
- Gaya bahasa.
- Model buku.
- Batasan topik.
- Output file.
- Jenis buku: hard skill, soft skill, certification, tutorial, handbook, playbook, atau hybrid.
- Sapaan utama: Anda atau kamu.
- Artefak akhir yang akan dimiliki setelah membaca: mini project, checklist, worksheet, SOP, roadmap, atau latihan refleksi.

### Fase 2: Outline

Buat outline sebelum menulis isi panjang:

- Bagian besar.
- Bab.
- Subbab.
- Tujuan setiap bab.
- Elemen praktis setiap bab.
- Fungsi setiap bab: fondasi, konsep, praktik, risiko, troubleshooting, roadmap, refleksi, atau latihan.
- Untuk hard skill: mini project, validasi, command/config, risiko, dan Definition of Done.
- Untuk soft skill: situasi emosional, mekanisme batin, latihan refleksi, dan pegangan saat gagal.

Jika user meminta langsung final dan topiknya jelas, outline boleh langsung dimasukkan sebagai "Daftar Isi" tanpa meminta approval.

### Fase 3: Draft

Tulis isi dengan pola bab yang konsisten. Jaga transisi antarbab agar buku terasa mengalir.

**PENTING: Strategi Manajemen Konteks AI (Mencegah Degradasi Kualitas)**
Untuk ebook yang komprehensif (melebihi 7 bab), **JANGAN** men-generate seluruh isi buku secara sekaligus dalam satu respons. Ini akan menyebabkan AI kehabisan konteks (context limit) yang membuat tulisan di bagian akhir menjadi sangat dangkal, berulang, atau melupakan gaya bahasa awal.

Lakukan drafting bertahap tanpa mengorbankan target final:

1. Buat skeleton file lengkap terlebih dahulu: frontmatter, judul, intro, daftar isi, bagian, bab, penutup, dan sumber.
2. Isi maksimal 2-3 bab per pass agar gaya bahasa, kedalaman, dan sapaan tetap konsisten.
3. Setelah setiap pass, lakukan micro-review internal: fungsi bab, 80/20, human touch, contoh spesifik, dan transisi.
4. Jika user meminta "langsung final", lanjutkan sampai file selesai tanpa meminta approval di tengah.
5. Jika user meminta proses interaktif, berhenti setelah Bagian 1 atau maksimal 3 bab pertama untuk review.
6. Sebelum final, baca ulang keseluruhan file dari awal sampai akhir dan revisi bagian yang melemah di akhir.

### Fase 4: Enrichment

Tambahkan:

- Quote box yang benar.
- Checklist.
- Tabel keputusan.
- Template.
- Studi kasus mini.
- Latihan.
- Troubleshooting.
- Ringkasan bab.
- Hasil akhir yang akan Anda/kamu punya setelah membaca.
- Mini project untuk hard skill atau latihan refleksi untuk soft skill.
- Contoh kesalahan: kesalahan -> dampak -> perbaikan.
- Bagian "saat gagal/kambuh" untuk soft skill.
- Bukti 80/20 di setiap bab: contoh spesifik, keputusan praktis, validasi, atau action step.

### Fase 5: Editorial Pass

Periksa:

- Apakah gaya bahasa konsisten?
- Apakah ada bab yang terlalu tipis?
- Apakah ada pengulangan?
- Apakah heading rapi?
- Apakah urutan bab logis?
- Apakah ada klaim yang perlu dibatasi?
- Apakah naskah terasa seperti buku, bukan slide presentasi?
- Apakah bullet terlalu dominan dibanding paragraf naratif?
- Apakah contoh cukup spesifik dan dekat dengan audiens?
- Apakah pengantar latihan, checklist, dan transisi bab tidak copy-paste?
- Apakah ada frasa generik khas AI yang perlu diganti dengan observasi konkret?
- Apakah naskah memakai sapaan langsung, bukan sapaan orang ketiga?
- Apakah satu sapaan utama konsisten dari awal sampai akhir?
- Apakah human touch terasa, termasuk untuk ebook hard skill?
- Apakah mini project dan contoh benar-benar spesifik pada judul?
- Apakah standar full daging 80/20 terlihat, bukan hanya teori dan motivasi?
- Apakah setiap bab utama punya contoh spesifik dan tindakan konkret?
- Untuk hard skill, apakah ada teknis praktis yang benar-benar bisa dicoba?
- Untuk soft skill, apakah ada bagian yang menyentuh rasa, bukan hanya instruksi?
- Berapa skor rubrik internal? Jika di bawah 85, jangan publish.

### Fase 6: Production Pass

Periksa:

- Frontmatter valid.
- Satu H1 saja.
- Heading tidak lompat tidak perlu.
- Quote box tidak rusak.
- Code fence tertutup.
- Numbering rapi.
- Bullet konsisten.
- Daftar isi sesuai heading.
- Tidak ada placeholder yang lupa diisi.
- Tidak ada credential atau data sensitif.
- Frontmatter sesuai schema/pola content existing.
- Sumber resmi atau batasan akurasi ada untuk topik yang cepat berubah.
- Description, slug, intro, daftar isi, dan penutup sudah blog-ready.

### Fase 7: QA Otomatis

Jika membuat file Markdown di workspace, jalankan QA otomatis sebelum final.

Checklist QA:

- [ ] Frontmatter ada dan memiliki `title`, `description`, `publishDate`.
- [ ] Frontmatter sesuai schema/pola content existing.
- [ ] Description idealnya 120-160 karakter, atau punya alasan editorial jika lebih pendek/panjang.
- [ ] Hanya ada satu H1.
- [ ] Ada daftar isi.
- [ ] Anchor daftar isi sesuai heading.
- [ ] Code fence seimbang.
- [ ] Tidak ada placeholder seperti `TODO`, `TBD`, `<isi>`, atau `<placeholder>`.
- [ ] Tidak ada credential, token, password nyata, private key, atau secret.
- [ ] Tidak ada sapaan orang ketiga yang menggantikan `Anda` atau `kamu`.
- [ ] Tidak ada campuran sapaan `Anda` dan `kamu` kecuali sengaja dan dijelaskan.
- [ ] Tidak ada frasa generik khas AI yang dominan.
- [ ] Standar 80/20 terlihat: contoh, keputusan, latihan, validasi, atau template muncul di mayoritas bab.
- [ ] Sumber resmi atau batasan akurasi ada untuk topik teknis, sertifikasi, cloud, AI, security, regulasi, atau tool cepat berubah.
- [ ] Untuk hard skill, ada code/config/command dan validasi.
- [ ] Untuk soft skill, ada situasi emosional dan latihan refleksi.

Gunakan QA helper jika tersedia:

```bash
python3 workflow_ebook/ebook_quality_gate.py path/to/ebook.md
```

Contoh command QA dasar jika helper tidak tersedia:

```bash
rg -n "TODO|TBD|<isi>|<placeholder>|AKIA|BEGIN PRIVATE KEY|password\\s*=|token\\s*=|BEGIN OPENSSH PRIVATE KEY" path/to/ebook.md
```

Contoh validasi cepat dengan Python minimal:

```python
from pathlib import Path
import re

path = Path("path/to/ebook.md")
text = path.read_text(encoding="utf-8")

fence = "`" * 3
frontmatter = text.split("---", 2)[1] if text.startswith("---\n") and len(text.split("---", 2)) >= 3 else ""
checks = {
    "frontmatter": text.startswith("---\n"),
    "title": re.search(r"^title:", frontmatter, re.M) is not None,
    "description": re.search(r"^description:", frontmatter, re.M) is not None,
    "publishDate": re.search(r"^publishDate:", frontmatter, re.M) is not None,
    "single_h1": len(re.findall(r"^# ", text, re.M)) == 1,
    "toc": "## Daftar Isi" in text,
    "balanced_code_fence": text.count(fence) % 2 == 0,
    "no_placeholder": re.search(r"TODO|TBD|<isi>|<placeholder>", text, re.I) is None,
    "no_secret_pattern": re.search(r"AKIA|BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY|password\s*=|token\s*=", text, re.I) is None,
}

failed = [name for name, ok in checks.items() if not ok]
if failed:
    raise SystemExit(f"QA failed: {failed}")

print("QA passed")
```

### Fase 7.5: Revisi Mode

Gunakan fase ini **khusus saat user meminta perbaikan parsial** pada ebook yang sudah ada, bukan membuat dari nol.

**Kapan masuk Revisi Mode:**
- User meminta revisi bab tertentu ("perbaiki Bab 3 supaya lebih manusiawi").
- User meminta upgrade ebook lama ke standar baru ("tambahkan human touch ke semua bab").
- User memberikan feedback spesifik setelah review ("bagian troubleshooting terlalu tipis").
- User meminta iterasi setelah Fase 3 atau Fase 4 draft awal.

**Yang wajib dilakukan di Revisi Mode:**

1. **Baca file existing terlebih dahulu** — jangan langsung menulis ulang tanpa membaca konteks lengkap bab yang dimaksud.
2. **Identifikasi scope revisi** — apakah hanya satu bab, satu subbab, atau seluruh aspek tertentu di semua bab?
3. **Pertahankan konteks yang sudah benar** — jangan mengubah gaya bahasa, sapaan, atau pola yang sudah konsisten hanya karena sedang merevisi satu bagian.
4. **Jangan mereset seluruh naskah** — jika user meminta "perbaiki human touch", tambahkan elemen yang kurang, jangan tulis ulang semua bab dari nol.
5. **Jalankan skor rubrik sebelum dan sesudah** — nyatakan skor awal dan skor setelah revisi agar user bisa melihat peningkatan yang konkret.

**Pola revisi per aspek rubrik:**

| Aspek yang direvisi | Fokus tindakan |
|---|---|
| Struktur dan alur | Tulis ulang transisi, geser urutan bab jika perlu, pastikan setiap bab punya fungsi berbeda |
| Kedalaman isi | Tambahkan contoh spesifik domain, hapus paragraf yang bisa ditempel ke topik lain |
| Kepraktisan | Tambahkan action step, template, atau latihan di bab yang kosong |
| Human touch | Buka bab dengan skenario nyata, sisipkan konflik/rasa/dialog internal, perbaiki nada |
| Akurasi dan produksi | Batasi klaim tidak terverifikasi, perbaiki Markdown, jalankan QA ulang |

**Output wajib setelah Revisi Mode:**
- Sebutkan bab atau bagian mana yang diubah.
- Nyatakan skor rubrik sebelum dan sesudah revisi (estimasi jika tidak bisa hitung ulang seluruh naskah).
- Jika ada bagian lain yang sebaiknya direvisi juga, sebutkan sebagai rekomendasi opsional.

## 20. Quality Gate Final

Sebelum menyatakan selesai, ebook harus lolos checklist ini:

- [ ] Judul, deskripsi, dan publishDate ada di frontmatter.
- [ ] Frontmatter mengikuti schema/pola content existing jika output masuk project Astro.
- [ ] Ada satu `# Judul`.
- [ ] Ada daftar isi.
- [ ] Ada bagian hasil akhir yang jelas: apa yang akan Anda/kamu pahami, coba, atau miliki.
- [ ] Bab dan subbab konsisten.
- [ ] Setiap bab punya isi yang substantif.
- [ ] Standar full daging 80/20 terpenuhi: setiap bab utama punya contoh spesifik dan tindakan konkret.
- [ ] Ada elemen praktis di mayoritas bab.
- [ ] Tidak memakai sapaan orang ketiga di naskah final; gunakan Anda atau kamu.
- [ ] Satu sapaan utama konsisten dari awal sampai akhir.
- [ ] Naskah terasa seperti buku yang mengalir, bukan PPT atau outline.
- [ ] Bullet/list tidak mendominasi isi tanpa paragraf penghubung.
- [ ] Pola bab tidak terlalu seragam sampai terasa template.
- [ ] Ada contoh, skenario, atau narasi konkret yang membuat isi terasa manusiawi.
- [ ] Human touch terasa: ada konflik, rasa, tekanan kerja, kebingungan, atau pengalaman batin yang relevan.
- [ ] Frasa generik khas AI sudah diganti dengan bahasa yang lebih spesifik.
- [ ] Untuk hard skill: ada command/config/code, validasi output, troubleshooting, security note, dan mini project bila relevan.
- [ ] Untuk soft skill: ada situasi emosional, dialog internal, latihan refleksi, pegangan saat gagal, dan nada yang tidak menghakimi.
- [ ] Quote box valid dan tidak rusak.
- [ ] Bullet memakai `-`, bukan campuran.
- [ ] Numbering berurutan.
- [ ] Code block punya bahasa dan tertutup.
- [ ] Tidak ada quote tokoh palsu.
- [ ] Klaim yang berubah cepat sudah diverifikasi atau dibuat umum.
- [ ] Catatan sumber resmi atau batasan akurasi ada untuk topik teknis, sertifikasi, cloud, AI, security, regulasi, atau tool cepat berubah.
- [ ] Tidak ada repetisi mencolok.
- [ ] Mini project, latihan, atau template spesifik pada judul, bukan generik.
- [ ] Skor rubrik internal minimal 85/100, idealnya 95+/100.
- [ ] Jika user meminta 10/10, setiap aspek rubrik minimal 18/20 dan total minimal 95/100.
- [ ] QA otomatis sudah dijalankan dengan `workflow_ebook/ebook_quality_gate.py` atau dicek manual dengan hasil setara.
- [ ] Untuk seri ebook, elemen unik per judul sudah dicek: hook, mini project, contoh, kesalahan, dan penutup.
- [ ] Description, slug, intro, daftar isi, dan penutup sudah blog-ready.
- [ ] Penutup memberi rangkuman dan arah tindakan.
- [ ] Filename slug rapi jika membuat file.

## 21. Template Prompt Saat Workflow Ini Dipakai

Jika user men-tag workflow ini dengan informasi singkat, tafsirkan seperti:

```text
Buat ebook publisher-grade berdasarkan workflow ini.
Judul/topik: ...
Audiens: ...
Gaya bahasa: ...
Model penulisan: ...
Panjang: ...
Sumber wajib: ...
Output: ...
Target kualitas: publisher-grade / 10/10
Intensitas human touch: ringan / sedang / kuat
```

Jika output diminta sebagai file content website, simpan ke:

```text
PORTOFOLIO PROJECT/portfolio-web/src/content/ebooks/<slug-judul>.md
```

Jika output diminta sebagai draft umum, simpan ke folder yang user sebutkan atau folder kerja yang relevan.

## 22. Template Bab Siap Pakai

Template ini adalah titik awal, bukan cetakan kaku. Variasikan subbab agar tidak terasa copy-paste antar bab.

### Template Bab Hard Skill

````md
## Bab X: Judul Bab

Paragraf pembuka yang menghubungkan masalah nyata di pekerjaan Anda dengan fungsi bab ini.

> **Prinsip:** Satu ide teknis yang menjadi pegangan bab.

### Fokus Bab

Jelaskan konsep utama, istilah penting, dan batasan scope.

### Keputusan Teknis yang Perlu Dibuat

| Pertanyaan | Jawaban Praktis |
|---|---|
| Apa yang dipilih? | ... |
| Apa yang dibatasi? | ... |
| Apa risikonya? | ... |
| Apa buktinya? | ... |

### Contoh Kerja

Berikan skenario konkret yang dekat dengan engineer, tim IT, cloud, DevOps, security, automation, atau data.

### Contoh Command / Konfigurasi / Code

```bash
command --example
```

Jelaskan apa yang harus diganti, apa output yang diharapkan, dan apa yang tidak boleh dipakai di production.

### Validasi dan Troubleshooting

- Expected output:
- Jika error A:
- Jika error B:
- Log atau bukti yang perlu dicek:

### Kesalahan Umum dan Perbaikannya

- **Kesalahan:** ...
  **Dampak:** ...
  **Perbaikan:** ...

### Latihan 20 Menit

1. Buat lab kecil.
2. Jalankan validasi aman.
3. Catat risiko.
4. Minta review.

### Ringkasan

- Poin inti pertama.
- Poin inti kedua.
- Poin inti ketiga.
````

### Template Bab Soft Skill

```md
## Bab X: Judul Bab

Paragraf pembuka yang menyentuh situasi emosional yang mungkin sedang kamu alami.

> **Pegangan:** Satu kalimat yang menenangkan sekaligus memberi arah.

### Situasi yang Mungkin Sedang Kamu Alami

Gambarkan momen nyata: pikiran, rasa tubuh, kebiasaan menghindar, atau konflik kecil yang sering terjadi.

### Kenapa Ini Terjadi

Jelaskan mekanisme psikologis atau perilaku dengan bahasa sederhana, tanpa menghakimi.

### Pola yang Sering Tidak Disadari

Tunjukkan pola yang membuat kamu terjebak.

### Cara Membaca Diri Tanpa Menghakimi

Beri framework sederhana untuk memahami diri.

### Latihan Kecil Hari Ini

1. Latihan ringan.
2. Pertanyaan refleksi.
3. Langkah kecil yang bisa dilakukan hari ini.

### Saat Kamu Gagal atau Kambuh

Berikan kalimat pengingat dan cara kembali mulai tanpa merasa rusak.

### Ringkasan yang Perlu Kamu Ingat

- Poin inti pertama.
- Poin inti kedua.
- Poin inti ketiga.
```

### Template Umum

```md
## Bab X: Judul Bab

Paragraf pembuka yang menghubungkan masalah Anda/kamu dengan janji bab ini.

> **Prinsip:** Satu ide penting yang menjadi pegangan bab.

### Masalah Utama

Jelaskan masalah dengan contoh konkret.

### Kerangka Berpikir

Jelaskan konsep, model, atau framework.

### Cara Menerapkan

1. Langkah pertama.
2. Langkah kedua.
3. Langkah ketiga.

### Contoh Praktis

Berikan contoh yang sesuai audiens.

### Kesalahan Umum

- Kesalahan pertama dan cara menghindarinya.
- Kesalahan kedua dan cara menghindarinya.
- Kesalahan ketiga dan cara menghindarinya.

### Checklist Bab Ini

- [ ] Item tindakan pertama.
- [ ] Item tindakan kedua.
- [ ] Item tindakan ketiga.

### Ringkasan

- Poin inti pertama.
- Poin inti kedua.
- Poin inti ketiga.
```

## 23. Definisi "Publisher-Grade" untuk Proyek Ini

Naskah disebut publisher-grade jika:

- Bisa dibaca dari awal sampai akhir dengan alur yang jelas.
- Setiap bab punya fungsi yang berbeda.
- Anda/kamu mendapat pemahaman, contoh, dan tindakan.
- Isi memenuhi prinsip full daging 80/20: lebih banyak contoh, keputusan, validasi, dan latihan daripada teori umum.
- Format Markdown bersih dan stabil saat dirender.
- Frontmatter sesuai schema project jika masuk website.
- Tidak terasa seperti hasil sekali generate.
- Tidak sekadar panjang, tetapi bernilai.
- Konsisten dengan karakter ebook portfolio yang sudah ada: praktis, edukatif, dan langsung bisa dipakai.
- Tidak terasa seperti PPT, outline mentah, atau hasil generate AI sekali jalan.
- Punya ritme baca: narasi, contoh, penjelasan, dan latihan saling mengalir.
- QA otomatis lulus atau semua temuan kritis sudah diperbaiki.
