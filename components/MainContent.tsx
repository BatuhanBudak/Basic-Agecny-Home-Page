import React from "react";
import CaseStudies from "./CaseStudies";
import HomeOverview from "./HomeOverview";
import IntroHome from "./IntroHome";

export default function MainContent() {
  return (
    <main role="main" id="content">
      <div className="content">
        <div className="home">
          <IntroHome />
          <HomeOverview />
          <CaseStudies />
        </div>
      </div>
    </main>
  );
}
