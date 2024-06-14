import mainVideo from "../../assets/images/main.mp4";
import logoImg from "../../assets/images/title.png";

import VideoAtm from "../atoms/VideoAtm";
import SectionTitle from "../atoms/SectionTitle";
import ImgAtm from "../atoms/ImgAtm";

const MainVideoCp = () => {
  return (
    <section className="mainVideo mx-auto">
      <VideoAtm srcProps={mainVideo} typeProps="video/mp4" />
      <div className="video_dark"></div>
      <div className="wrap">
        <div className="welcome">
          <div className="welcome_img">
            <ImgAtm srcProps={logoImg} altProps="로고 거북이 이미지" />
            <SectionTitle className="welcome_tit" h3Props="Welcome" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainVideoCp;
