import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NexusPlay - بازی بدون مرز',
  description: 'بهترین بازی‌های آنلاین و رایگان با تجربه‌ای بی‌نظیر',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
