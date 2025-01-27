import "./globals.css";
import { Manrope } from 'next/font/google';

const ManRope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Marc Ruizenaar - Front-end developer",
  description: "Front-end developer in Stockholm, looking for a new challenge!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ManRope.className}>
      <body>{children}</body>
    </html>
  );
}
