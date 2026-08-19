import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_APP_URL || "https://edusphere.app"
);

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#07080e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "EduSphere — O'quv Markazlarini Boshqarish Tizimi | Ta'lim ERP va CRM",
    template: "%s | EduSphere",
  },
  description:
    "EduSphere — O'quv markazlari, til akademiyalari va IT maktablar uchun #1 ERP va CRM boshqaruv tizimi. Sotuvlar CRM, QR davomat, oylik to'lovlar, avto-SMS va ko'p filialli analitika. CRM для учебных центров, языковых школ и IT академий.",
  keywords: [
    // Uzbek keywords
    "o'quv markaz dasturi",
    "ta'lim markazini boshqarish",
    "o'quv markaz CRM",
    "o'quv markaz ERP",
    "edusphere",
    "edusphere.app",
    "modme muqobili",
    "o'quv markazi avtomatlashtirish",
    "talabalar davomati",
    "QR davomat",
    "o'qituvchilar maoshi hisobi",
    "o'quv markaz to'lovlari",
    "kurslar uchun CRM",
    "til markazi dasturi",
    "IT akademiya dasturi",
    "avto SMS ota-onalarga",
    "filiallar boshqaruvi",
    "ta'lim tizimi",
    // Russian keywords
    "CRM для учебного центра",
    "ERP для школ",
    "автоматизация учебных центров",
    "программа для языковой школы",
    "учет студентов",
    "учет посещаемости QR",
    "система управления курсами",
    "CRM для IT академии",
    "расписание уроков",
    "расчет зарплаты преподавателей",
    "CRM для детских центров",
    "CRM Uzbekistan",
    "CRM Tashkent",
    // English keywords
    "learning center management software",
    "education ERP",
    "education CRM",
    "language school software",
    "tutoring center management",
    "student attendance software",
    "school billing system",
    "multi branch education platform",
    "edusphere app",
  ],
  authors: [{ name: "EduSphere Team", url: "https://edusphere.app" }],
  creator: "EduSphere",
  publisher: "EduSphere Inc.",
  category: "Education & Business Management Software",
  applicationName: "EduSphere",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "uz-UZ": "/?lang=uz",
      "ru-RU": "/?lang=ru",
      "en-US": "/?lang=en",
    },
  },
  openGraph: {
    title: "EduSphere — O'quv Markazlarini Boshqarish Tizimi | Ta'lim ERP va CRM",
    description:
      "O'quv markazlari, til akademiyalari va IT maktablar uchun 1-raqamli ERP va CRM platformasi. Sotuvlar, QR davomat, avto-SMS, to'lovlar va filiallar tahlili.",
    url: "https://edusphere.app",
    siteName: "EduSphere",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "EduSphere — Ta'lim markazlarini boshqarish platformasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduSphere — O'quv Markazlarini Boshqarish Tizimi",
    description:
      "O'quv markazlari uchun eng ilg'or ERP va CRM platformasi. Sotuvlar, davomat, to'lovlar va filiallar boshqaruvi.",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&auto=format&fit=crop&q=80",
    ],
    creator: "@edusphere",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="uz"
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#07080e] dark:text-slate-100 transition-colors duration-200">
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
