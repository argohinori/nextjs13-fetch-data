import Link from "next/link"
import { Roboto } from '@next/font/google'

const inter = Roboto({weight:'500',})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className}>
      <head><title>Argohinori Main Page</title></head>
      <body>
        <nav style={{ padding: 16, margin: 8 }}>
          <Link href="/" style={{padding: "0 10px 0 0"}}>Home</Link>
          <Link href="/products" style={{padding: "0 10px 0 0"}}>Products</Link>
        </nav>
        {children}
        </body>
    </html>
  )
}
