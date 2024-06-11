import React, { useState, useEffect } from "react";
import nextArrow from "../../assets/images/next_arrow.svg";
import prevArrow from "../../assets/images/prev_arrow.svg";

import SectionSlide from "../atoms/SectionSlide";
import ButtonTextAtm from "../atoms/ButtonTextAtm";
import ImgAtm from "../atoms/ImgAtm";

const MainSlideCp = () => {
  const [curSlide, setCurSlide] = useState(0);
  const [hover, setHover] = useState(false);
  const cont_arr = [
    ["Chapter 1", "파이썬 첫 걸음"],
    ["Chapter 2", "변수와 자료형"],
    ["Chapter 3", "데이터 입출력"],
    ["Chapter 4", "연산자"],
    ["Chapter 5", "조건문"],
    ["Chapter 6", "반복문"],
    ["Chapter 7", "리스트"],
    ["Chapter 8", "집합"],
    ["Chapter 9", "딕셔너리"],
    ["Chapter 10", "튜플"],
    ["Chapter 11", "함수"],
    ["Chapter 12", "객체 프로그래밍"],
  ];

  return (
    <>
      <section className="slider_all">
        <div className="slider_box">
          <div className="slider">
            {cont_arr.map((v, i) => (
              <SectionSlide
                key={i}
                className="slide"
                h5Props={v[0]}
                pProps={v[1]}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="arrow">
        <button className="prev_arrow">
          <ImgAtm srcProps={prevArrow} altProps="이전 버튼" />
        </button>
        <button className="next_arrow">
          <ImgAtm srcProps={nextArrow} altProps="다음 버튼" />
        </button>
      </div>
    </>
  );
};

export default MainSlideCp;
