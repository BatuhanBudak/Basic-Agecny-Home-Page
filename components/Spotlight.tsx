import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Spotlight() {
  const [ref, inViewRef] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewRef) {
      document.body.classList.add("intersect");
    } else {
      document.body.classList.remove("intersect");
    }
  }, [inViewRef]);

  return (
    <section className="spotlight" ref={ref}>
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
                playsInline={true}
                autoPlay={true}
                loop={true}
                muted
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
