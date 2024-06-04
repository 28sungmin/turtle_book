import logoImg from "../../assets/images/title.png";

const HeaderCp = () => {
  return (
    <header className="header-space h-60">
      <div className="wrap d-flex justify-content-between alignt-items-center h-100-per">
        <div className="logo">
          <a href="/">
            <img src={logoImg} alt="거북이 로고" />
          </a>
        </div>
        <nav>
          <div className="d-flex">
            <li>
              <a href="/">도서 설명</a>
            </li>
            <li>
              <a href="/">저자 소개</a>
            </li>
            <li>
              <a href="/">목차</a>
            </li>
            <li>
              <a href="/">터틀 함수</a>
            </li>
            <li>
              <a href="/">터틀 작품</a>
            </li>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderCp;
