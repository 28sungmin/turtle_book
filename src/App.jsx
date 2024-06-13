import "./assets/scss/app.scss";

import HeaderCp from "./components/common/HeaderCp";
import FooterCp from "./components/common/FooterCp";
import MainVideoCp from "./components/main/MainVideoCp";
import Content1Cp from "./components/main/Content1Cp";
import MainSlideCp from "./components/main/MainSlideCp";
import WelcomeCp from "./components/main/WelcomeCp";

function App() {
  return (
    <div className="App">
      <HeaderCp />
      <WelcomeCp />
      <MainVideoCp />
      <Content1Cp />
      <MainSlideCp />
      <FooterCp />
    </div>
  );
}

export default App;
