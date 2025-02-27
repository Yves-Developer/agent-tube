import Navbar from "@/components/Navbar";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AngentTube AI Agent For Youtube Creator",
  description: "Generated anything with AgentTube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Navbar />
          {children}
          {/* Footer */}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
