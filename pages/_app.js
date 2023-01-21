import Head from "next/head";
import Layout from "../components/layout/Layout";
import { UiProvider } from "../context/context";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alireza Mashayekhi</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="description" content="Resume & CV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UiProvider>
    </>
  );
}
