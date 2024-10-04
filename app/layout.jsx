import localFont from "next/font/local";
import "./globals.css";
const Outfit = localFont({
  src: "./fonts/Outfit.ttf",
  weight: "100 900",
});

const Oswald = localFont({
  src: "./fonts/Oswald.ttf",
  weight: "100 900",
});


export const metadata = {
  title: "My portfolio",
  description: "Made with Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Outfit.className} antialiased  bg-[#171717]`}>
        {children}
      </body>
    </html>
  );
}
