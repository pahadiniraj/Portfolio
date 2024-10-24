"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ContainerWrapper from "@/Components/ContainerWrapper";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "@/Redux/Store";
import { SkeletonTheme } from "react-loading-skeleton";

const inter = Inter({ subsets: ["latin"] });
export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Niraj Pahadi | Fullstack Developer</title>
        <meta
          name="description"
          content="Official website of Niraj Pahadi, showcasing projects and blog posts related to web development, coding, and more."
        />
        <meta
          name="keywords"
          content="Niraj Pahadi, Web Developer, Fullstack Developer, Projects, Blog"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph meta tags for SEO and social media */}
        <meta
          property="og:title"
          content="Niraj Pahadi | Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Official website of Niraj Pahadi, showcasing projects and blog posts related to web development, coding, and more."
        />
        <meta property="og:url" content="https://www.nirajpahadi.com.np" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/pahadi123/image/upload/v1729750281/dev-1_ttaknd.jpg" // Update this with the correct image path
        />
        <meta
          property="og:image:alt"
          content="Niraj Pahadi Fullstack Developer" // Alt description for the image
        />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Niraj Pahadi | Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="Official website of Niraj Pahadi, showcasing projects and blog posts related to web development, coding, and more."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/pahadi123/image/upload/v1729750281/dev-1_ttaknd.jpg" // Update this with the correct image path
        />
        <meta
          name="twitter:image:alt"
          content="Niraj Pahadi Fullstack Developer"
        />

        <link rel="icon" href="/logo.png" sizes="any" />
      </Head>
      <body className={`${inter.className} `}>
        <Provider store={store}>
          <main className="bg-transparent h-screen flex justify-center items-center ">
            <GoogleOAuthProvider
              clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}`}
            >
              <SkeletonTheme baseColor="#000000" highlightColor="#79737d">
                {children}
              </SkeletonTheme>
            </GoogleOAuthProvider>
            <ContainerWrapper />
          </main>
        </Provider>
      </body>
    </html>
  );
}
