import "../css/Delete.css";
import { deleteAll } from "../constants";
import delImg1 from "../assets/del1.png";
import delImg2 from "../assets/del2.png";

const Delete = () => {
  return (
    <section className="using">
      <div className="using__left">
        <h2>
          {deleteAll.heading.paraph1}{" "}
          <span className="using__strong">{deleteAll.heading.paraph2}</span>{" "}
          {deleteAll.heading.paraph3}{" "}
          <span className="using__strong">{deleteAll.heading.paraph4}</span>{" "}
          {deleteAll.heading.paraph5}
        </h2>
        <div className="delete__mid">
          <p>{deleteAll.desc.paraph1} </p>
          <div className="delete__magic">
            <p>
              <span className="using__strong"> {deleteAll.desc.paraph2}</span>
            </p>
            <p>{deleteAll.desc.paraph3}</p>
            <p>
              <span className="using__strong">{deleteAll.desc.paraph4}</span>
            </p>
          </div>
          <p className="special">{deleteAll.desc.paraph5}</p>
        </div>
      </div>
      <div className="using__right">
        <img src={delImg1} alt="using-1" className="usingImg ui1" />
        <img src={delImg2} alt="using-2" className="usingImg ui2" />
        <img
          src="https://fullstack.edu.vn/landing/sass/assets/img/glow-new.png"
          alt="bg"
          className="usingImg ui3"
        />
      </div>
    </section>
  );
};

export default Delete;
