import { Project, TeachingBrief } from "@/types/project";

export const SD_BRIEF: TeachingBrief = {
  documentType: "school_module",
  topic: "Siklus Air (Hidrologi) dan Menjaga Kebersihan Sungai",
  audience: "Siswa SD Kelas 4",
  duration: "1 Pertemuan (2 x 35 menit)",
  level: "beginner",
  finalOutcome: "Mampu menjelaskan tahapan siklus air dan membuat janji tertulis untuk tidak membuang sampah ke sungai",
  languageStyle: "Bahasa Indonesia yang menyenangkan, sangat interaktif, menggunakan banyak analogi sederhana untuk anak-anak",
  localContext: ["Sungai Ciliwung", "Musim Hujan", "Banjir"],
  constraints: ["Gunakan nyanyian atau yel-yel interaktif", "Jangan terlalu banyak teks panjang", "Gunakan contoh keseharian yang mudah dibayangkan anak-anak"]
};

// This creates an ACTIVE (non-demo) project for the user to try out AI generation
export const seedActiveSDProject = (): Project => {
  return {
    id: "active-sd-siklus-air",
    title: "[Draft] Modul IPA SD: Siklus Air",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "draft",
    brief: SD_BRIEF,
    isDemo: false
  };
};
