
import "./globals.css";
import { Onest } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { Providers } from "./providers";
import { homepageMetadata } from "@/lib/metadata";
import { ChatProvider } from "./chat-provider"; // Import the ChatProvider
import ChatForm from "../components/chat-form/chat-form";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = homepageMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-background-dark ${onest.className}`}>
        <Providers>
          <Navbar />
          <ChatProvider> {/* Wrap the entire layout with ChatProvider */}
            <main className={`min-h-fit ${onest.className}`}>
              {/* Uncomment or remove CalendlyButton as needed */}
              {/* <CalendlyButton
                buttonClassname="py-1 px-3 rounded-full relative radial-gradient linear-mask bg-background-calendly shadow-sm shadow-white hover:bg-background-calendly-hover hover:scale-105 duration-75"
                className="fixed bottom-5 right-5 z-30  rounded-full bg-white"
                content="Book an appointment!"
                contentClassname="font-bold text-sm"
                forJose={false}
              /> */}
              <ChatForm />
              {children}
            </main>
          </ChatProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
