import Layout from "../components/layout/Layout";
import { UiProvider } from "../context/context";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <UiProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UiProvider>
  );
}
