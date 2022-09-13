import type { NextPage } from "next";
import Header from "../components/Header/Header";
import MainContent from "../components/MainContent";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

export default Home;
