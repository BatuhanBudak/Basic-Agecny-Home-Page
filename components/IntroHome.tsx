import { useState, useRef, useEffect, useCallback } from "react";
import formatTime from "../helpers/formatTime";

export default function IntroHome() {
  const [showReel, setShowReel] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cursorActive, setCursorActive] = useState(false);
  const posterRef = useRef<HTMLVideoElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrubRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cursorBreakpoint = 1280;

  const styleCursor = useCallback(() => {
    if (cursorActive) {
      return {
        left: `${mouseX}px`,
        top: `${mouseY}px`,
      };
    } else {
      return {
        display: "none",
        left: `-100%`,
        top: `-100%`,
      };
    }
  }, [cursorActive, mouseX, mouseY]);

  useEffect(() => {
    const scrubber = scrubRef.current;
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    const poster = posterRef.current;

    async function playVideo() {
      try {
        if (!showReel) {
          setShowReel(true);
          setVideoDuration(video!.duration);
          setVideoCurrentTime(0);
          await video!.play();
          document.body.classList.add("video-playing");
        } else {
          setShowReel(false);
          video?.load();
          setVideoCurrentTime(0);
          document.body.classList.remove("video-playing");
        }
      } catch (err) {
        setShowReel(false);
      }
    }

    function measure() {
      setWidth(wrapper!.offsetWidth);
      setOffset(wrapper!.getBoundingClientRect().left);
    }
    measure();

    const updateTime = () => {
      setVideoCurrentTime(video!.currentTime);
      setProgress(videoCurrentTime / videoDuration);
    };

    const onDocumentMouseMove = (e: TouchEvent | MouseEvent) => {
      if (seeking) {
        if (e instanceof TouchEvent) {
          video!.currentTime =
            ((e.touches[0].pageX - offset) / width) * videoDuration;
        } else if (e instanceof MouseEvent) {
          video!.currentTime = ((e.clientX - offset) / width) * videoDuration;
        }
      }
      setVideoCurrentTime(video!.currentTime);
      setProgress(videoCurrentTime / videoDuration);
    };

    const onDocumentMouseUp = () => {
      if (seeking) {
        setSeeking(false);
        document.body.classList.remove("is-scrubbing");
      }
    };

    const activateCursor = (e: MouseEvent) => {
      if (window.innerWidth >= cursorBreakpoint) {
        setCursorActive(true);
        setMouseX(e.pageX);
        setMouseY(e.pageY);
      }
    };

    const deactivateCursor = () => {
      setCursorActive(false);
    };

    const onScrubberMouseDown = (e: TouchEvent | MouseEvent) => {
      e.preventDefault();
      setSeeking(true);
      if (e instanceof TouchEvent) {
        video!.currentTime =
          ((e.touches[0].pageX - offset) / width) * videoDuration;
      } else if (e instanceof MouseEvent) {
        video!.currentTime = ((e.clientX - offset) / width) * videoDuration;
      }
      setVideoCurrentTime(video!.currentTime);
      setProgress(videoCurrentTime / videoDuration);
      document.body.classList.add("is-scrubbing");
    };

    poster!.addEventListener("click", playVideo);
    scrubber!.addEventListener("mousedown", onScrubberMouseDown);
    scrubber!.addEventListener("touchstart", onScrubberMouseDown, {
      passive: true,
    });

    video!.addEventListener("ended", playVideo);
    video!.addEventListener("timeupdate", updateTime);
    video!.addEventListener("click", playVideo);

    wrapper!.addEventListener("mousemove", activateCursor);
    wrapper!.addEventListener("mouseleave", deactivateCursor);

    document.addEventListener("mousemove", onDocumentMouseMove);
    document.addEventListener("mouseup", onDocumentMouseUp);
    document.addEventListener("touchmove", onDocumentMouseMove, {
      passive: true,
    });
    document.addEventListener("touchend", onDocumentMouseUp);
    document.addEventListener("resize", measure);

    return () => {
      poster!.removeEventListener("click", playVideo);

      scrubber!.removeEventListener("mousedown", onScrubberMouseDown);
      scrubber!.removeEventListener("touchstart", onScrubberMouseDown);

      wrapper!.removeEventListener("mousemove", activateCursor);
      wrapper!.removeEventListener("mouseleave", deactivateCursor);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("mouseup", onDocumentMouseUp);
      document.removeEventListener("touchmove", onDocumentMouseMove);
      document.removeEventListener("touchend", onDocumentMouseUp);
      document.removeEventListener("resize", measure);

      video!.removeEventListener("ended", playVideo);
      video!.removeEventListener("timeupdate", updateTime);
      video!.removeEventListener("click", playVideo);
    };
  }, [offset, seeking, videoDuration, width, showReel, videoCurrentTime]);

  return (
    <section className={`${showReel ? "is-playing" : ""} intro-home`}>
      <div className="intro-home__wrapper is-cursor-takeover" ref={wrapperRef}>
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
              <video ref={posterRef} playsInline muted loop autoPlay>
                <source src="reelloop.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <div className={`${showReel ? "is-playing" : ""} intro-home__video`}>
          <video ref={videoRef} src="reel-2.mp4" playsInline></video>
        </div>
        <div className="button-circle cursor-takeover" style={styleCursor()}>
          <button className="meta" role="button">
            <span className="button-circle__text__container">
              <span className="button-circle__text">Play Reel</span>
            </span>
            <span className="button-circle__text__container">
              <span className="button-circle__text">Play Reel</span>
            </span>
            <span className="button-circle__bg"></span>
          </button>{" "}
          <span className="meta button-circle__footer">
            BASIC/DEPT® 2010-22
          </span>
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
        <div
          className="intro-home__scrubber"
          style={{
            transform: `translateX(${progress * 100}%)`,
          }}
          ref={scrubRef}
        >
          <div className="intro-home__time">
            <span className="intro-home__current">
              {formatTime(videoCurrentTime)}
            </span>
            /
            <span className="intro-home__duration">
              {formatTime(videoDuration)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
