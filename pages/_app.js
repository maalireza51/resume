import Head from "next/head";
import Layout from "../components/layout/Layout";
import { UiProvider } from "../context/context";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alireza Mashayekhi</title>
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
