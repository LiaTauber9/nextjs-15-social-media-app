import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';

// const geistSans = localFont({
//   src: './fonts/GeistSans.woff',
//   variable: '--font-geist-sans',
// });

// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
// });
export const metadata: Metadata = {
  title: {
    template: '%s | bugbook',
    default: 'bugbook',
  },
  description: 'Social media app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      //   className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
