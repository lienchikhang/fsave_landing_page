import "../css/Delete.css";
import { deleteAll } from "../constants";
import delImg1 from "../assets/del1.png";
import delImg2 from "../assets/del2.png";

const Delete = () => {
  return (
    <section className="delete">
      <div className="delete__left">
        <img className="deleteImg" src={delImg1} alt="delete-1" />
      </div>
      <div className="delete__mid">
        <h2>
          {deleteAll.heading.paraph1}{" "}
          <span className="delete__strong">{deleteAll.heading.paraph2}</span>{" "}
          {deleteAll.heading.paraph3}{" "}
          <span className="delete__strong">{deleteAll.heading.paraph4}</span>{" "}
          {deleteAll.heading.paraph5}
        </h2>
        <p>{deleteAll.desc.paraph1}</p>
        <div className="delete__magic">
          <p>{deleteAll.desc.paraph2}</p>
          <p>{deleteAll.desc.paraph3}</p>
          <p>{deleteAll.desc.paraph4}</p>
        </div>
        <p className="special">{deleteAll.desc.paraph5}</p>
        <button className="button btnDelete">{deleteAll.btn}</button>
      </div>
      <div className="delete__right">
        <img className="deleteImg" src={delImg2} alt="delete-2" />
      </div>
    </section>
  );
};

export default Delete;
