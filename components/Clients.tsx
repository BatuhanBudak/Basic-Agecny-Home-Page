import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import "@splidejs/react-splide/css";
import Image from "next/image";

export default function Clients() {
  const ref = useRef();

  const SPLIDE_OPTIONS = {
    arrows: false,
    perPage: 1,
    pagination: false,
    rewind: false,
    drag: "free",
    snap: true,
    padding: "5.4vw",
  };
  //   useEffect(() => {
  //     if (ref.current) {
  //       console.log(ref.current.splide.length);
  //     }
  //   }, []);
  return (
    <section className="clients">
      <div className="clients__meta">
        <div className="meta-bar meta-bar-count meta">
          <figure className="meta-bar__line"></figure>
          <div className="row">
            <div className="col">01</div>
            <div className="col">
              <span>05</span>
              <span>●</span>
            </div>
          </div>
        </div>
      </div>
      <div className="clients__header">
        <h2 id="carousel-header">Featured Engagements</h2>
      </div>

      <Splide
        options={SPLIDE_OPTIONS}
        hasTrack={false}
        aria-labelledby="carousel-header"
        className="carousel__wrap"
        // ref={ref}
        onMove={(splide, index, prev, dest) => {
          const end = splide.Components.Controller.getEnd() + 1;
          const rate = Math.min((splide.index + 1) / end, 1);
          console.log(end, rate);
        }}
        //   // bar.style.width = String( 100 * rate ) + '%';
        // }}
        // onDrag={(splide) => {
        //   console.log(splide);
        // }}
      >
        <SplideTrack className="carousel__stage">
          <SplideSlide className="carousel__stage__item">
            <div className="asset">
              <div className="asset__wrapper">
                <Image
                  src="/logos/google-dark.svg"
                  alt=""
                  layout="fill"
                  objectPosition={"center left"}
                  objectFit="contain"
                />
              </div>
            </div>
            <h5 className="clients__title">Google</h5>
            <p className="clients__body">
              Our embedded partnership with Google is as deep as it gets. We’re
              the lead creative agency for Google Store and provide strategy,
              design, and prototyping to other divisions. Learn more about our
              partnership{" "}
              <a href="" className="clients__body__link">
                here
              </a>
              .
              <br />
            </p>
          </SplideSlide>
          <SplideSlide>
            <div className="asset">
              <div className="asset__wrapper">
                <Image
                  src="/logos/KFC-Logo.svg"
                  alt=""
                  layout="fill"
                  objectPosition={"center left"}
                  objectFit="contain"
                />
              </div>
            </div>
            <h5 className="clients__title">KFC</h5>
            <p className="clients__body">
              An award-winning global, digital transformation engagement
              spanning eCommerce, mobile app, and new drive thru experiences.
              Bringing KFC’s brand story to life while making it easier for
              customers to buy chicken. Learn more about our partnership
              <a href="" className="clients__body__link">
                {" "}
                here
              </a>
              .
              <br />
            </p>
          </SplideSlide>
          <SplideSlide>
            <div className="asset">
              <div className="asset__wrapper">
                <Image
                  src="/logos/Wilson-Logo.svg"
                  alt=""
                  layout="fill"
                  objectPosition={"center left"}
                  objectFit="contain"
                />
              </div>
            </div>
            <h5 className="clients__title">Wilson</h5>
            <p className="clients__body">
              Redesigning the digital flagship for the largest
              telecommunications company in the world. Creating frictionless
              paths to purchase for a wide range of consumers across a vast
              portfolio of products and services.
              <a href="" className="clients__body__link">
                {" "}
                here
              </a>
              .
              <br />
            </p>
          </SplideSlide>
          <SplideSlide>
            <div className="asset">
              <div className="asset__wrapper">
                <Image
                  src="/logos/ATT-Logo.svg"
                  alt=""
                  layout="fill"
                  objectPosition={"center left"}
                  objectFit="contain"
                />
              </div>
            </div>
            <h5 className="clients__title">AT{"&"}T</h5>
            <p className="clients__body">
              Redesigning the digital flagship for the largest
              telecommunications company in the world. Creating frictionless
              paths to purchase for a wide range of consumers across a vast
              portfolio of products and services.
              <a href="" className="clients__body__link">
                {" "}
                here
              </a>
              .
              <br />
            </p>
          </SplideSlide>
          <SplideSlide>
            <div className="asset">
              <div className="asset__wrapper">
                <Image
                  src="/logos/patagonia-dark.svg"
                  alt=""
                  layout="fill"
                  objectPosition={"center left"}
                  objectFit="contain"
                />
              </div>
            </div>
            <h5 className="clients__title">Patagonia</h5>
            <p className="clients__body">
              Ongoing partnership providing strategy, branding, experience
              design, and development focused on bringing their mission and
              offerings to consumers through brand-led programs and platforms.
              Read our full case study
              <a href="" className="clients__body__link">
                {" "}
                here
              </a>
              .
              <br />
            </p>
          </SplideSlide>
        </SplideTrack>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>
      </Splide>
    </section>
  );
}
