import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import LogoFade from "../components/LogoFade";
import MainContent from "../components/MainContent";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <LogoFade />
      <Footer />
      <div className="noise"></div>
    </>
  );
};

export default Home;
