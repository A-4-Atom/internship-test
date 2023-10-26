import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "400"],
  subsets: ["latin"],
});


export const metadata = {
  title: 'Vikas Chauhan',
  description: 'Assignment for Internship',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
