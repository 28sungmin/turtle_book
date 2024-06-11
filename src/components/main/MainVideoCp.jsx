import mainVideo from "../../assets/images/main.mp4";
// import mainImg from "../../assets/images/main_img4.png";

import ImgAtm from "../atoms/ImgAtm";

import VideoAtm from "../atoms/VideoAtm";

const MainVideoCp = () => {
  return (
    <section className="mainVideo">
      <VideoAtm srcProps={mainVideo} typeProps="video/mp4" />
      {/* <ImgAtm srcProps={mainImg} altProps="메인 소개 이미지" /> */}
    </section>
  );
};

export default MainVideoCp;
