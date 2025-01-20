import { Inter, Lora, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-source-sans' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} ${sourceSans.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Ishan Girdhar - Resume',
  description: 'Professional resume of Ishan Girdhar, Cyber Security Leader',
};
