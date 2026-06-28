import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'K. Sri Phani Charan | Software Developer & AI Enthusiast',
  description: 'Portfolio of K. Sri Phani Charan, a Software Developer specializing in Full-Stack Development and Artificial Intelligence. Explore my projects, skills, and experience.',
  keywords: ['K. Sri Phani Charan', 'Software Developer', 'Full-Stack Developer', 'AI Enthusiast', 'Portfolio', 'GITAM University'],
  authors: [{ name: 'K. Sri Phani Charan' }],
  creator: 'K. Sri Phani Charan',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://karalapatiphanicharan.vercel.app',
    title: 'K. Sri Phani Charan | Software Developer',
    description: 'Software Developer specializing in Full-Stack Development and Artificial Intelligence.',
    siteName: 'K. Sri Phani Charan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K. Sri Phani Charan | Software Developer',
    description: 'Software Developer specializing in Full-Stack Development and Artificial Intelligence.',
    creator: '@phani_charan01',
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#030712',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
