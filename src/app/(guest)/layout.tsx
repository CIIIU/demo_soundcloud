import '@/styles/app.css';
export const metadata = {
    title: 'Next.js Hỏi Dân IT',
    description: 'Generated by Next.js',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
      {children}
      </>
    )
  }
  