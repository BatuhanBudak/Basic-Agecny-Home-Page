import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="case-studies">
      <ul className="case-studies__list">
        <li className="case-studies__list__item">
          <a href="" className="case-studies__list__item__link push-hover">
            <div className="asset">
              <div className="asset__wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1160 1450"
                  width="1160"
                  height="1450"
                  preserveAspectRatio=""
                ></svg>
                <Image
                  className="asset__img"
                  alt=""
                  src="/Patagonia-Case-Study-Thumbnail.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="list-item-case-study__info">
              <h5 className="list-item-case-study__info__title">Patagonia</h5>
              <p className="list-item-case-study__body">
                An eCommerce experience driven by Patagonia’s brand mission
              </p>
            </div>
          </a>
        </li>
        <li className="case-studies__list__item">
          <a href="" className="case-studies__list__item__link push-hover">
            <div className="asset">
              <div className="asset__wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1160 1450"
                  width="1160"
                  height="1450"
                  preserveAspectRatio=""
                ></svg>
                <Image
                  className="asset__img"
                  alt=""
                  src="/WIlson-Case-Study-Thumbnail.jpg"
                  layout="fill"
                />
              </div>
            </div>
            <div className="list-item-case-study__info">
              <h5 className="list-item-case-study__info__title">Wilson</h5>
              <p className="list-item-case-study__body">
                A century-old sports brand finding its place in culture
              </p>
            </div>
          </a>
        </li>
        <li className="case-studies__list__item">
          <a href="" className="case-studies__list__item__link push-hover">
            <div className="asset">
              <div className="asset__wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1160 1450"
                  width="1160"
                  height="1450"
                  preserveAspectRatio=""
                ></svg>
                <video
                  playsInline
                  autoPlay
                  loop
                  src="Google-Store-Web-Design-Case-Study-Thumbnail-02.mp4"
                ></video>
              </div>
            </div>
            <div className="list-item-case-study__info">
              <h5 className="list-item-case-study__info__title">
                Google Store
              </h5>
              <p className="list-item-case-study__body">
                An eCommerce experience helping Google bring its hardware to
                people across the globe
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
}
