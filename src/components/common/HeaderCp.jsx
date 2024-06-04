import logoImg from "../../assets/images/title.png";

import ImgAtm from "../atoms/ImgAtm";
import ListItemAtm from "../atoms/ListItemAtm";

const HeaderCp = () => {
  const header_menus = [
    { name: "도서 설명", link: "/book" },
    { name: "저자 소개", link: "/author" },
    { name: "목차", link: "/contents" },
    { name: "터틀 함수", link: "/function" },
    { name: "터틀 작품", link: "/work" },
  ];

  return (
    <header className="header-space h-60">
      <div className="wrap px-10 mx-auto d-flex justify-content-between align-items-center h-100-per">
        <div className="logo">
          <a href="/">
            <ImgAtm
              className="h-40"
              srcProps={logoImg}
              altProps="거북이 로고"
            />
          </a>
        </div>
        <nav>
          <ul className="d-flex">
            {header_menus.map((v, i) => (
              <ListItemAtm
                key={i}
                className="mx-10"
                nameProps={v.name}
                linkProps={v.link}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderCp;
