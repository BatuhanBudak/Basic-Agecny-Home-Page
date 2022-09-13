import type { NextPage } from "next";
import Header from "../components/Header/Header";
import LogoFade from "../components/LogoFade";
import MainContent from "../components/MainContent";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <LogoFade />
    </>
  );
};

export default Home;
