import React, { useState, useEffect } from "react";
import nextArrow from "../../assets/images/next_arrow.svg";
import prevArrow from "../../assets/images/prev_arrow.svg";

import SectionSlide from "../atoms/SectionSlide";
import ImgAtm from "../atoms/ImgAtm";
import SectionTitle from "../atoms/SectionTitle";

import contentData from "../../assets/data/contents.json";

const MainSlideCp = () => {
  const contentsJson = contentData;
  const contentLists = contentsJson.data;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide(
          (currentSlide) => (currentSlide + 1) % contentLists.length
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const prevClick = () => {
    setCurrentSlide(
      (currentSlide - 1 + contentLists.length) % contentLists.length
    );
  };
  const nextClick = () => {
    setCurrentSlide((currentSlide + 1) % contentLists.length);
  };

  return (
    <>
      <SectionTitle className="contents" h3Props="Contents" />
      <section
        className="slider_all"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="slider_arrow">
          <div className="slider_box">
            <div
              className="slider"
              style={{ marginLeft: `${currentSlide * -100}%` }}
            >
              {contentLists.map((v, i) => (
                <SectionSlide
                  key={i}
                  className="slide"
                  h5Props={v.chapter}
                  pProps={v.title}
                  bgProps={v.color}
                />
              ))}
            </div>
          </div>
          <div className="arrow">
            <button className="prev_arrow" onClick={prevClick}>
              <ImgAtm srcProps={prevArrow} altProps="이전 버튼" />
            </button>
            <button className="next_arrow" onClick={nextClick}>
              <ImgAtm srcProps={nextArrow} altProps="다음 버튼" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSlideCp;
