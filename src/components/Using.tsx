import "../css/Using.css";
import img1 from "../assets/multi1.png";
import img2 from "../assets/multi2.png";
import { using } from "../constants";

const Using = () => {
  return (
    <section className="using">
      <div className="using__left">
        <h2>
          {using.heading.paraph1}{" "}
          <span className="using__strong">{using.heading.paraph2}</span>{" "}
          {using.heading.paraph3}
        </h2>
        <p>
          {using.desc.paraph1}{" "}
          <span className="using__strong">{using.desc.paraph2}</span>
        </p>
        <p>{using.desc.paraph3}</p>
        <p>{using.desc.paraph4}</p>
        <p>{using.desc.paraph5}</p>
        <button className="button usingBtn">{using.btn}</button>
      </div>
      <div className="using__right">
        <img src={img1} alt="using-1" className="usingImg ui1" />
        <img src={img2} alt="using-2" className="usingImg ui2" />
        <img
          src="https://fullstack.edu.vn/landing/sass/assets/img/glow-new.png"
          alt="bg"
          className="usingImg ui3"
        />
      </div>
    </section>
  );
};

export default Using;
