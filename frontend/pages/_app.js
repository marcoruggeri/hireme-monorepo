import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/_shared/Footer";
import Layout from "../components/_shared/Layout";
import NavBar from "../components/_shared/NavBar";
import { HireMeProvider } from "../context/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <HireMeProvider>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=optional" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HireMeProvider>
  );
}

export default MyApp;
