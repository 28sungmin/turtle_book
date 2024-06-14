import "./assets/scss/app.scss";

import HeaderCp from "./components/common/HeaderCp";
import FooterCp from "./components/common/FooterCp";
import MainVideoCp from "./components/main/MainVideoCp";
import Content1Cp from "./components/main/Content1Cp";
import MainSlideCp from "./components/main/MainSlideCp";

function App() {
  return (
    <div className="App">
      <HeaderCp />
      <MainVideoCp />
      <Content1Cp />
      <MainSlideCp />
      <FooterCp />
    </div>
  );
}

export default App;
