import React, { useState, useEffect } from "react";
import nextArrow from "../../assets/images/next_arrow.svg";
import prevArrow from "../../assets/images/prev_arrow.svg";

import SectionSlide from "../atoms/SectionSlide";
import ImgAtm from "../atoms/ImgAtm";
import SectionTitle from "../atoms/SectionTitle";

const MainSlideCp = () => {
  const cont_arr = [
    ["Chapter 1", "파이썬 첫 걸음", "#FF7E79"],
    ["Chapter 2", "변수와 자료형", "#FFD479"],
    ["Chapter 3", "데이터 입출력", "#FFFC79"],
    ["Chapter 4", "연산자", "#D4FB79"],
    ["Chapter 5", "조건문", "#73FA79"],
    ["Chapter 6", "반복문", "#73FCD6"],
    ["Chapter 7", "리스트", "#73FDFF"],
    ["Chapter 8", "집합", "#76D6FF"],
    ["Chapter 9", "딕셔너리", "#7A81FF"],
    ["Chapter 10", "튜플", "#D783FF"],
    ["Chapter 11", "함수", "#FF85FF"],
  ];
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
        setCurrentSlide((currentSlide) => (currentSlide + 1) % cont_arr.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const prevClick = () => {
    setCurrentSlide((currentSlide - 1 + cont_arr.length) % cont_arr.length);
  };
  const nextClick = () => {
    setCurrentSlide((currentSlide + 1) % cont_arr.length);
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
              {cont_arr.map((v, i) => (
                <SectionSlide
                  key={i}
                  className="slide"
                  h5Props={v[0]}
                  pProps={v[1]}
                  bgProps={v[2]}
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
