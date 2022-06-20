import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="nav container">
          <div className="nav_first mx-1">9.41</div>
          <div className="nav_second"></div>
          <div className="nav_third mx-2">
            <img className="mx-1" src="/images/Mobile Signal.svg" alt="" />
            <img className="mx-1" src="/images/Wifi.svg" alt="" />
            <img className="mx-1" src="/images/Battery.svg" alt="" />
          </div>
        </div>
        <div className="search container d-flex justify-content-between">
          <div></div>
          <div className="mx-3">
            <img src="/images/search.svg" alt="" />
          </div>
        </div>
        <div className="container hero_mid">
          <div className="first">
            <img className="img_1" src="/images/pp.png" alt="" />{" "}
            <span className="text-white fw-bold">Jessica Gray</span> <br />
            <img className="mx-2" src="/images/gps.svg" alt="" />{" "}
            <span className="text-white">Eleme</span>
          </div>
          <div className="second">
            <div className="mb-2">
              <img src="/images/like.svg" alt="" /> <br />
              <p className="text-white">12k</p>
            </div>
            <div className="mb-2">
              <img src="/images/comment.svg" alt="" /> <br />
              <p className="text-white">600</p>
            </div>
            <div>
              <img src="/images/share.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="base">
        <div className="base_footer">
          <img src="/images/chat.svg" alt="" />
          <img src="/images/compass.svg" alt="" />
          <img src="/images/add.svg" alt="" />
          <img src="/images/bell.svg" alt="" />
          <img src="/images/menu.svg" alt="" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
