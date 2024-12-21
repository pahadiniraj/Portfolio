import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import ContainerWrapper from "@/Components/ContainerWrapper";
import AuthRedirect from "@/Components/AuthRedirect/AuthRedirect";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "@/Redux/Store";
import { SkeletonTheme } from "react-loading-skeleton";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

// SEO Component
const SEO = () => (
  <>
    <title>Niraj Pahadi</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Official website of Niraj Pahadi, showcasing projects and blog posts related to web development, coding, and more."
    />
    <meta
      name="keywords"
      content="Niraj Pahadi, Web Developer, Fullstack Developer, nepal"
    />
    <meta name="robots" content="index, follow" />

    {/* Open Graph meta tags for SEO and social media */}
    <meta property="og:title" content="Niraj Pahadi" />
    <meta
      property="og:description"
      content="Official website of Niraj Pahadi, showcasing projects and blog posts related to web development, coding, and more."
    />
    <meta property="og:url" content="https://www.nirajpahadi.com.np" />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/pahadi123/image/upload/v1729750281/dev-1_ttaknd.jpg"
    />
    <meta property="og:image:alt" content="Niraj Pahadi Fullstack Developer" />

    {/* Twitter meta tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Niraj Pahadi" />
    <meta
      name="twitter:description"
      content="Official website of Niraj Pahadi, showcasing projects and blog posts related to web development, coding and more."
    />
    <meta
      name="twitter:image"
      content="https://res.cloudinary.com/pahadi123/image/upload/v1729750281/dev-1_ttaknd.jpg"
    />
    <meta name="twitter:image:alt" content="Niraj Pahadi " />
    <link rel="icon" href="/logo.png" sizes="any" />
  </>
);

function Providers({ children }: { children: React.ReactNode }) {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  return (
    <Provider store={store}>
      <AuthRedirect />
      {googleClientId && (
        <GoogleOAuthProvider clientId={googleClientId}>
          <SkeletonTheme baseColor="#000000" highlightColor="#79737d">
            {children}
          </SkeletonTheme>
        </GoogleOAuthProvider>
      )}
    </Provider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SEO />
      </head>
      <body className={`${inter.className} bg-transparent h-screen`}>
        <Providers>
          <main className="flex">
            {/* Sidebar with image */}
            <aside className="w-1/4 p-4">
              <img
                src="https://res.cloudinary.com/pahadi123/image/upload/v1729750281/dev-1_ttaknd.jpg"
                alt="Niraj Pahadi Fullstack Developer"
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
                width={300}
                height={400}
              />
            </aside>
            <section className="w-3/4 p-6">{children}</section>
          </main>
          <ContainerWrapper />
        </Providers>
      </body>
    </html>
  );
}
