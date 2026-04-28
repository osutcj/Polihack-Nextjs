import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import SiteShell from "@/features/site/SiteShell";

export const metadata = {
  title: "PoliHack",
  description: "PoliHack official website",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
