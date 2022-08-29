import Head from "next/head";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layanan from "./components/Layanan";

export default function Home() {
  return (
    <>
      <Head>
        <title>Company Profile</title>
      </Head>
      <Hero />
      <Layanan />
      <Footer />
    </>
  );
}
