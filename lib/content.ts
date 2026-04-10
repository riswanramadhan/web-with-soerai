export type LanguageCode = "id" | "en";

export interface NavItem {
  label: string;
  href: string;
}

export interface ProgramCardContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  outputs: string[];
  outcomes: string[];
  indicator: string;
}

export interface MemberRoleLabel {
  member: string;
  mentor: string;
}

export interface SiteContent {
  metadata: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
    missionShort: string;
  };
  header: {
    nav: NavItem[];
    joinNow: string;
    languageLabel: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    badge: string;
    headline: [string, string, string];
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    collageLabel: string;
  };
  about: {
    title: string;
    context: {
      eyebrow: string;
      subtitle: string;
      pullQuote: string;
      paragraph: string;
    };
    urgency: {
      eyebrow: string;
      subtitle: string;
      pillars: string[];
      paragraph: string;
    };
    overview: {
      eyebrow: string;
      subtitle: string;
      quote: string;
      pillars: {
        name: string;
        detail: string;
      }[];
      closing: string;
    };
  };
  visionMission: {
    sectionTitle: string;
    visionTitle: string;
    visionBody: string;
    missionTitle: string;
    missionPoints: string[];
  };
  program: {
    sectionTitle: string;
    intro: string;
    cards: ProgramCardContent[];
  };
  org: {
    sectionTitle: string;
    intro: string;
    president: {
      role: string;
      name: string;
    };
    secretary: {
      role: string;
      name: string;
    };
    treasurer: {
      role: string;
      name: string;
    };
    liaison: {
      role: string;
      name: string;
    };
    divisions: {
      name: string;
      leader: string;
      members: string[];
    }[];
    memberLabel: string;
  };
  gallery: {
    sectionTitle: string;
    filters: {
      all: string;
      member: string;
      mentor: string;
    };
    photoLabel: string;
    roleLabel: MemberRoleLabel;
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  footer: {
    navTitle: string;
    contactTitle: string;
    missionLine: string;
    location: string;
    email: string;
    socials: {
      instagram: string;
      linkedin: string;
      email: string;
    };
    copyright: string;
  };
}

const programsId: ProgramCardContent[] = [
  {
    id: "program-1",
    title: "WITH VISION",
    subtitle: "Personal Career & Self Discovery Consulting",
    description:
      "Konsultasi bersama expert sebanyak 2 sesi (awal & akhir program). Peserta mengikuti assessment personal untuk mengenali potensi, minat, dan kecocokan arah karier. Metode disesuaikan dengan karakteristik individu agar hasil lebih relevan dan personal.",
    highlights: ["Program 01"],
    outputs: [
      "Hasil assessment individu",
      "Rekomendasi arah pengembangan diri & karier",
      "Personal development plan awal & akhir program",
    ],
    outcomes: [
      "≥ 90% peserta ikuti sesi konsultasi awal & akhir",
      "≥ 80% peserta miliki personal development plan",
      "≥ 70% peserta tunjukkan peningkatan kejelasan karier",
    ],
    indicator: "Program 01",
  },
  {
    id: "program-2",
    title: "WITH STRATEGY",
    subtitle: "Leadership & Personal Growth Mentorship",
    description:
      "Pendampingan intensif dengan mentor terkurasi dari WITH SOERAI. Ruang aman untuk berbagi tantangan seputar perkuliahan, pengembangan diri, dan karier - dilengkapi modul, sesi expert, dan activity tracker di setiap pertemuan.",
    highlights: ["Program 02"],
    outputs: [
      "Sesi mentoring rutin terlaksana",
      "Activity tracker terisi secara berkala",
      "Sesi sharing bersama expert terlaksana",
      "Rencana aksi pengembangan diri peserta",
    ],
    outcomes: [
      "≥ 80% kehadiran peserta dalam sesi mentoring",
      "≥ 75% peserta konsisten isi activity tracker",
      "≥ 70% peserta tunjukkan peningkatan soft skills",
    ],
    indicator: "Program 02",
  },
  {
    id: "program-3",
    title: "WITH IMPACT",
    subtitle: "Community Project Implementation",
    description:
      "Fase implementasi di mana peserta merealisasikan ide menjadi proyek nyata, khususnya pemberdayaan perempuan. Peserta berkontribusi langsung melalui solusi atas permasalahan lokal di lingkungan sekitarnya.",
    highlights: ["Program 03"],
    outputs: [
      "Proyek sosial terlaksana (individu/kelompok)",
      "Dokumentasi & laporan kegiatan",
      "Kolaborasi dengan komunitas/masyarakat lokal",
    ],
    outcomes: [
      "≥ 70% peserta/kelompok berhasil jalankan proyek",
      "≥ 60% proyek miliki potensi keberlanjutan",
      "Tingkat kepuasan masyarakat terhadap program",
    ],
    indicator: "Program 03",
  },
];

const programsEn: ProgramCardContent[] = [
  {
    id: "program-1",
    title: "WITH VISION",
    subtitle: "Personal Career & Self Discovery Consulting",
    description:
      "Two expert consultation sessions are held at the beginning and end of the program. Participants complete a personal assessment to identify strengths, interests, and career fit. The approach is tailored to each participant so the results are more relevant and personal.",
    highlights: ["Program 01"],
    outputs: [
      "Individual assessment results",
      "Recommendations for personal development and career direction",
      "Initial and final personal development plan",
    ],
    outcomes: [
      ">= 90% of participants attend both initial and final consultation sessions",
      ">= 80% of participants complete a personal development plan",
      ">= 70% of participants show improved career clarity",
    ],
    indicator: "Program 01",
  },
  {
    id: "program-2",
    title: "WITH STRATEGY",
    subtitle: "Leadership & Personal Growth Mentorship",
    description:
      "Intensive mentoring with curated mentors from WITH SOERAI. It provides a safe space to discuss academic, personal growth, and career challenges, supported by modules, expert sessions, and an activity tracker in every meeting.",
    highlights: ["Program 02"],
    outputs: [
      "Regular mentoring sessions conducted",
      "Activity tracker consistently completed",
      "Expert sharing sessions delivered",
      "Participants' personal development action plan",
    ],
    outcomes: [
      ">= 80% participant attendance in mentoring sessions",
      ">= 75% of participants consistently fill out the activity tracker",
      ">= 70% of participants show improvement in soft skills",
    ],
    indicator: "Program 02",
  },
  {
    id: "program-3",
    title: "WITH IMPACT",
    subtitle: "Community Project Implementation",
    description:
      "An implementation phase where participants turn ideas into real projects, especially for women's empowerment. Participants contribute directly by designing solutions for local issues in their surrounding communities.",
    highlights: ["Program 03"],
    outputs: [
      "Social projects implemented (individual/group)",
      "Activity documentation and reports",
      "Collaboration with local communities and stakeholders",
    ],
    outcomes: [
      ">= 70% of participants/groups successfully execute a project",
      ">= 60% of projects have sustainability potential",
      "Community satisfaction level toward the program",
    ],
    indicator: "Program 03",
  },
];

export const content: Record<LanguageCode, SiteContent> = {
  id: {
    metadata: {
      title: "WITH SOERAI | Woman Illuminating Through Harmony",
      description:
        "Komunitas pemberdayaan perempuan muda Indonesia Timur melalui capacity building, mentorship, dan kepemimpinan berbasis komunitas.",
    },
    brand: {
      name: "WITH SOERAI",
      tagline: "Woman Illuminating Through Harmony",
      missionShort:
        "Empowering young women of Eastern Indonesia through capacity building, mentorship, and community-driven leadership.",
    },
    header: {
      nav: [
        { label: "Tentang Kami", href: "#tentang-kami" },
        { label: "Program", href: "#program" },
        { label: "Struktur Organisasi", href: "#struktur-organisasi" },
      ],
      joinNow: "Bergabung Sekarang",
      languageLabel: "Pilih Bahasa",
      menuOpen: "Buka Menu",
      menuClose: "Tutup Menu",
    },
    hero: {
      badge: "Women Empowerment Community",
      headline: ["Perempuan yang", "Menyala", "Bersama."],
      subtext:
        "Woman Illuminating Through Harmony. Kami mendampingi perempuan muda Indonesia Timur untuk tumbuh percaya diri, berdaya, dan siap memimpin perubahan di komunitasnya.",
      ctaPrimary: "Bergabung Sekarang",
      ctaSecondary: "Tentang Kami",
      collageLabel: "[ Botanical Image Collage - Y2K ]",
    },
    about: {
      title: "Tentang Kami",
      context: {
        eyebrow: "Latar Belakang",
        subtitle: "The Context",
        pullQuote:
          "Perempuan muda di Indonesia Timur masih menghadapi akses yang tidak merata untuk belajar, bertumbuh, dan memimpin.",
        paragraph:
          "Di berbagai wilayah Indonesia Timur, perempuan muda tumbuh di tengah realitas yang belum sepenuhnya setara. Stigma sosial, keterbatasan akses, dan minimnya ruang aman masih menjadi hambatan nyata. Data pendidikan menunjukkan kesenjangan yang berkelanjutan, padahal ketika seorang perempuan diberdayakan, dampaknya mengalir ke keluarga, komunitas, hingga generasi berikutnya.",
      },
      urgency: {
        eyebrow: "Urgensi",
        subtitle: "Why NOW",
        pillars: ["Akses yang Terbuka", "Ruang yang Aman", "Ekosistem yang Mendorong"],
        paragraph:
          "WITH SOERAI hadir sekarang karena momentum perubahan sedang terjadi. Kami percaya perempuan muda Indonesia Timur membutuhkan ruang belajar yang relevan, jaringan dukungan yang nyata, dan kesempatan membangun kepemimpinan sejak dini agar dapat menciptakan dampak lokal yang berkelanjutan.",
      },
      overview: {
        eyebrow: "Gambaran Umum",
        subtitle: "Who We Are",
        quote: "Bukan hanya membuka akses - tapi mendampingi setiap langkah.",
        pillars: [
          {
            name: "WITH VISION",
            detail:
              "Membantu peserta mengenali potensi diri dan arah karier secara sadar.",
          },
          {
            name: "WITH STRATEGY",
            detail:
              "Menyediakan kerangka design thinking untuk keputusan dan aksi terukur.",
          },
          {
            name: "WITH IMPACT",
            detail:
              "Mendorong proyek lokal yang memberi kontribusi nyata bagi masyarakat.",
          },
        ],
        closing: "Kami hadir agar perempuan muda tidak lagi merasa sendirian.",
      },
    },
    visionMission: {
      sectionTitle: "Visi & Misi",
      visionTitle: "Visi",
      visionBody:
        "Menjadi ruang aman yang melahirkan generasi perempuan muda Indonesia Timur yang percaya diri, berdaya, dan mampu menciptakan dampak bagi lingkungannya.",
      missionTitle: "Misi",
      missionPoints: [
        "Meningkatkan kepercayaan diri melalui pembelajaran yang reflektif dan berkelanjutan.",
        "Membekali peserta dengan design thinking untuk karier dan solusi sosial.",
        "Menyediakan mentorship dan ruang aman untuk pertumbuhan personal.",
        "Mendorong local project sebagai kontribusi nyata bagi masyarakat.",
      ],
    },
    program: {
      sectionTitle: "Program Kami",
      intro:
        "Rangkaian program intensif untuk membangun kejelasan arah, keberanian mengambil langkah, dan dampak sosial yang terukur.",
      cards: programsId,
    },
    org: {
      sectionTitle: "Struktur Organisasi",
      intro:
        "Kolaborasi lintas divisi untuk memastikan setiap program berjalan berdampak dan berkelanjutan.",
      president: {
        role: "PRESIDENT",
        name: "Rizkiyah Ananda Mutmainnah",
      },
      secretary: {
        role: "SEKRETARIS",
        name: "Annisa Aulia Maharani",
      },
      treasurer: {
        role: "BENDAHARA",
        name: "Nur Qalby Salsabila",
      },
      liaison: {
        role: "LIAISON",
        name: "-",
      },
      divisions: [
        {
          name: "R&E",
          leader: "Fathinah Nur Jannah",
          members: ["Nurul Azizah Rahman Marasabessy", "Sabina Jnuiar Tutupoho"],
        },
        {
          name: "MEDIA",
          leader: "Andi Putri Cahaya Ningrum",
          members: [
            "Aulia Khairunnisa Isman",
            "Najwa Putri Larasati",
            "Nasywa Elysia Apsari",
            "Ikha Hilwa R Khaliky",
            "Nur Fadilah S. Jaga",
          ],
        },
        {
          name: "PROGRAM",
          leader: "Vashajadyah Al Fadillah Ahmad",
          members: [
            "Shafiyyah Nur Fadhilah Salandra",
            "Dhiska Dwi Hermalia H",
            "Putri Atiqah Rana",
            "Mevie Heatubun",
          ],
        },
        {
          name: "HRD",
          leader: "Andi Shifa Salsabilla",
          members: [
            "Angel Eleonor Theophilina Manuputty",
            "Dinah Zhafirah",
            "Safrina Inayah",
          ],
        },
      ],
      memberLabel: "Anggota",
    },
    gallery: {
      sectionTitle: "Tim & Mentor WITH SOERAI",
      filters: {
        all: "Semua",
        member: "Member",
        mentor: "Mentor",
      },
      photoLabel: "[ Photo ]",
      roleLabel: {
        member: "Member",
        mentor: "Mentor",
      },
    },
    cta: {
      title: "Siap untuk Bertumbuh Bersama?",
      subtitle:
        "Bergabunglah dengan komunitas perempuan muda yang saling menguatkan.",
      primary: "Daftar Sekarang",
      secondary: "Pelajari Lebih Lanjut",
    },
    footer: {
      navTitle: "Navigasi",
      contactTitle: "Kontak Kami",
      missionLine:
        "Mendampingi perempuan muda Indonesia Timur melalui pembelajaran, mentorship, dan kepemimpinan komunitas.",
      location: "Indonesia Timur",
      email: "withsoerai@gmail.com",
      socials: {
        instagram: "Instagram",
        linkedin: "LinkedIn",
        email: "Email",
      },
      copyright: "© 2026 With Soerai. All Rights Reserved | Powered by DekatLokal",
    },
  },
  en: {
    metadata: {
      title: "WITH SOERAI | Woman Illuminating Through Harmony",
      description:
        "A community empowering young women in Eastern Indonesia through capacity building, mentorship, and community-driven leadership.",
    },
    brand: {
      name: "WITH SOERAI",
      tagline: "Woman Illuminating Through Harmony",
      missionShort:
        "Empowering young women of Eastern Indonesia through capacity building, mentorship, and community-driven leadership.",
    },
    header: {
      nav: [
        { label: "About Us", href: "#tentang-kami" },
        { label: "Programs", href: "#program" },
        { label: "Organization", href: "#struktur-organisasi" },
      ],
      joinNow: "Join Now",
      languageLabel: "Choose Language",
      menuOpen: "Open Menu",
      menuClose: "Close Menu",
    },
    hero: {
      badge: "Women Empowerment Community",
      headline: ["Women Who", "Illuminate", "Together."],
      subtext:
        "Woman Illuminating Through Harmony. We support young women in Eastern Indonesia to build confidence, strengthen their skills, and lead change in their communities.",
      ctaPrimary: "Join Now",
      ctaSecondary: "About Us",
      collageLabel: "[ Botanical Image Collage - Y2K ]",
    },
    about: {
      title: "About Us",
      context: {
        eyebrow: "Background",
        subtitle: "The Context",
        pullQuote:
          "Young women in Eastern Indonesia still face uneven access to learning, growth, and leadership opportunities.",
        paragraph:
          "Across many parts of Eastern Indonesia, young women grow up in conditions that do not always provide equal room to dream, develop, and lead. Social stigma, limited access, and the absence of safe spaces remain real barriers. Education indicators still show gaps, even though empowering one woman can create ripple effects for families, communities, and future generations.",
      },
      urgency: {
        eyebrow: "Urgency",
        subtitle: "Why NOW",
        pillars: ["Open Access", "Safe Spaces", "A Supportive Ecosystem"],
        paragraph:
          "WITH SOERAI exists now because this is a pivotal moment for change. Young women in Eastern Indonesia need relevant learning spaces, practical support networks, and early leadership opportunities to build meaningful and sustainable local impact.",
      },
      overview: {
        eyebrow: "Overview",
        subtitle: "Who We Are",
        quote: "Not only opening access - but walking every step together.",
        pillars: [
          {
            name: "WITH VISION",
            detail:
              "Helping participants recognize their strengths and career direction with clarity.",
          },
          {
            name: "WITH STRATEGY",
            detail:
              "Equipping them with design-thinking frameworks for intentional decision-making.",
          },
          {
            name: "WITH IMPACT",
            detail:
              "Encouraging local projects that generate meaningful social contribution.",
          },
        ],
        closing: "We are here so no young woman has to grow alone.",
      },
    },
    visionMission: {
      sectionTitle: "Vision & Mission",
      visionTitle: "Vision",
      visionBody:
        "To become a safe space that nurtures a generation of confident and empowered young women in Eastern Indonesia who can create positive impact in their communities.",
      missionTitle: "Mission",
      missionPoints: [
        "Strengthen confidence through reflective and sustainable learning.",
        "Equip participants with design thinking for careers and social solutions.",
        "Provide mentorship and safe spaces for personal growth.",
        "Encourage local projects as tangible contributions to society.",
      ],
    },
    program: {
      sectionTitle: "Our Programs",
      intro:
        "An intensive learning series designed to build clarity, courage, and measurable social impact.",
      cards: programsEn,
    },
    org: {
      sectionTitle: "Organization Structure",
      intro:
        "Cross-functional collaboration that keeps every program impactful and sustainable.",
      president: {
        role: "PRESIDENT",
        name: "Rizkiyah Ananda Mutmainnah",
      },
      secretary: {
        role: "SECRETARY",
        name: "Annisa Aulia Maharani",
      },
      treasurer: {
        role: "TREASURER",
        name: "Nur Qalby Salsabila",
      },
      liaison: {
        role: "LIAISON",
        name: "-",
      },
      divisions: [
        {
          name: "R&E",
          leader: "Fathinah Nur Jannah",
          members: ["Nurul Azizah Rahman Marasabessy", "Sabina Juniar Tutupoho"],
        },
        {
          name: "MEDIA",
          leader: "Andi Putri Cahaya Ningrum",
          members: [
            "Aulia Khairunnisa Isman",
            "Najwa Putri Larasati",
            "Nasywa Elysia Apsari",
            "Ikha Hilwa R Khaliky",
            "Nur Fadilah S. Jaga",
          ],
        },
        {
          name: "PROGRAM",
          leader: "Vashajadyah Al Fadillah Ahmad",
          members: [
            "Shafiyyah Nur Fadhilah Salandra",
            "Dhiska Dwi Hermalia H",
            "Putri Atiqah Rana",
            "Mevie Heatubun",
          ],
        },
        {
          name: "HRD",
          leader: "Andi Shifa Salsabilla",
          members: [
            "Angel Eleonor Theophilina Manuputty",
            "Dinah Zhafirah",
            "Safrina Inayah",
          ],
        },
      ],
      memberLabel: "Members",
    },
    gallery: {
      sectionTitle: "WITH SOERAI Team & Mentors",
      filters: {
        all: "All",
        member: "Members",
        mentor: "Mentors",
      },
      photoLabel: "[ Photo ]",
      roleLabel: {
        member: "Member",
        mentor: "Mentor",
      },
    },
    cta: {
      title: "Ready to Grow Together?",
      subtitle:
        "Join a young women community built on mutual support, growth, and leadership.",
      primary: "Apply Now",
      secondary: "Learn More",
    },
    footer: {
      navTitle: "Navigation",
      contactTitle: "Contact Us",
      missionLine:
        "Supporting young women in Eastern Indonesia through learning, mentorship, and community-based leadership.",
      location: "Eastern Indonesia",
      email: "withsoerai@gmail.com",
      socials: {
        instagram: "Instagram",
        linkedin: "LinkedIn",
        email: "Email",
      },
      copyright: "© 2026 With Soerai. All Rights Reserved | Powered by DekatLokal",
    },
  },
};
