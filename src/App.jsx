import "./assets/scss/app.scss";

import HeaderCp from "./components/common/HeaderCp";
import FooterCp from "./components/common/FooterCp";
import MainVideoCp from "./components/main/MainVideoCp";

function App() {
  return (
    <div className="App">
      <HeaderCp />
      <MainVideoCp />
      <FooterCp />
    </div>
  );
}

export default App;
