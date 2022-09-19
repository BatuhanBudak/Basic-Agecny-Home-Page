import React from "react";
import CaseStudies from "./CaseStudies";
import Clients from "./Clients";
import Featured from "./Featured";
import HomeOverview from "./HomeOverview";
import IntroHome from "./IntroHome";
import Spotlight from "./Spotlight";

const MainContent = React.forwardRef((props, ref) => (
  <main role="main">
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
));

MainContent.displayName = "MainContent";
export default MainContent;
