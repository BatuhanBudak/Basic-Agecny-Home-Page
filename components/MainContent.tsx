import React from "react";
import CaseStudies from "./CaseStudies";
import Clients from "./Clients";
import Featured from "./Featured";
import HomeOverview from "./HomeOverview";
import IntroHome from "./IntroHome";
import Spotlight from "./Spotlight";

export default function MainContent() {
  return (
    <main role="main" id="content">
      <div className="content">
        <div className="home">
          <IntroHome />
          <HomeOverview />
          <CaseStudies />
          <Clients />
          <Spotlight />
          <Featured />
        </div>
      </div>
    </main>
  );
}
