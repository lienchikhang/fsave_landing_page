import "../css/SaveCurrent.css";
import { saveCurrent } from "../constants";
import saveImg from "../assets/save1.png";

const SaveCurrent = () => {
  return (
    <section className="saveCurrent">
      <div className="save__left">
        <h2>
          {saveCurrent.heading.paraph1}{" "}
          <span className="save__strong">{saveCurrent.heading.paraph2}</span>{" "}
          {saveCurrent.heading.paraph3}
        </h2>
        <p>
          {saveCurrent.desc.paraph1}{" "}
          <span className="save__strong">{saveCurrent.desc.paraph2}</span>{" "}
          {saveCurrent.desc.paraph3}{" "}
          <span className="save__strong">{saveCurrent.desc.paraph4}</span>{" "}
          {saveCurrent.desc.paraph5}
        </p>
        <p>
          {saveCurrent.desc.paraph6}{" "}
          <span className="save__strong">{saveCurrent.desc.paraph7}</span>
        </p>
        <button className="button save">{saveCurrent.btn}</button>
      </div>
      <div className="save__right">
        <img className="saveImg" src={saveImg} alt="save-1" />
      </div>
    </section>
  );
};

export default SaveCurrent;
