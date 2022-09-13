import React from "react";

export default function MainContent() {
  return (
    <main role="main" id="content">
      <div className="content">
        <div className="home">
          <section className="intro-home">
            <div className="intro-home__wrapper">
              <div className="intro-home__poster">
                <div className="asset">
                  <div className="asset__wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1920 1080"
                      width="1920"
                      height="1080"
                      preserveAspectRatio=""
                    ></svg>
                    <video playsInline muted loop autoPlay>
                      <source src="reelloop.mp4" type="video/mp4"></source>
                    </video>
                  </div>
                </div>
              </div>
              <div className="intro-home__video">
                <video src="reel-2.mp4" playsInline></video>
              </div>
              <div className="button-circle">
                <button className="meta" role="button">
                  <span className="button-circle__text__container">
                    <span className="button-circle__text">Play Reel</span>
                  </span>{" "}
                  <span className="button-circle__bg"></span>
                </button>{" "}
                <span className="meta button-circle__footer">
                  BASIC/DEPT® 2010-22
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
