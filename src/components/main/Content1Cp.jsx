import title from "../../assets/images/title.png";
import book from "../../assets/images/del.jpeg";

import ImgAtm from "../atoms/ImgAtm";
import SectionTitle from "../atoms/SectionTitle";

const Content1Cp = () => {
  return (
    <div className="content1">
      <SectionTitle className="section-title mt-10" h3Props="Fun Python!!" />
      <div className="img-div">
        <SectionTitle
          className="img-title mt-10"
          h3Props="터틀 그래픽으로 떠나는 파이썬 모험!"
        />
        <div>
          <ImgAtm srcProps={title} altProps="메인 거북이 이미지" />
          <ImgAtm srcProps={book} altProps="메인 책 이미지" />
        </div>
      </div>
    </div>
  );
};

export default Content1Cp;
