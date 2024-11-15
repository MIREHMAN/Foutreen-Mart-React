import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}
 
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <title>React App</title>
          <meta name="description" content="Web site created..." />
        </head>
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    )
  }