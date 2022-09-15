import React from "react";

export default function Spotlight() {
  return (
    <section className="spotlight">
      <div className="row">
        <div className="col">
          <div className="asset">
            <div className="asset__wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 866 1214"
                width="866"
                height="1214"
                preserveAspectRatio=""
              ></svg>
              <video
                playsInline
                muted
                loop
                autoPlay
                title="BASIC® Branding Agency — Culture Manual{} Employee Onboarding Video"
              >
                <source src="Culture-Loop_v1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <q>
              BASIC/DEPT® helps brands{" "}
              <span className="dot-wrapped">
                <span>●</span>
                <span>connect </span>
              </span>{" "}
              w/ culture
            </q>
            <span className="spotlight__label">
              ADWEEK <strong>(AGENCY SPOTLIGHT)</strong>
            </span>
            <p>
              <a href="/about" className="button-pill">
                About Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
