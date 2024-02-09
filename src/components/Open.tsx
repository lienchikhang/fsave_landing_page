import "../css/Open.css";
import { openAll } from "../constants";
import openImg from "../assets/open1.png";

const Open = () => {
  return (
    <section className="open">
      <div className="open__right">
        <img className="openImg" src={openImg} alt="open-1" />
        <img
          src="https://fullstack.edu.vn/landing/sass/assets/img/flashcard-light.png"
          className="openImg"
          alt="bg"
        />
      </div>
      <div className="open__left">
        <h2>
          {openAll.heading.paraph1}{" "}
          <span className="open__strong">{openAll.heading.paraph2}</span>{" "}
          {openAll.heading.paraph3}{" "}
          <span className="open__strong">{openAll.heading.paraph4}</span>{" "}
          {openAll.heading.paraph5}
        </h2>
        <p>{openAll.desc.paraph1}</p>
        <div className="open__magic">
          <p>{openAll.desc.paraph2}</p>
          <p>{openAll.desc.paraph3}</p>
          <p>{openAll.desc.paraph4}</p>
        </div>
        <p>{openAll.desc.paraph5}</p>
        <button className="button btnOpen">{openAll.btn}</button>
      </div>
    </section>
  );
};

export default Open;
