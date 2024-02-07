import React from "react";
import "../css/Carousel.css";
import { carousel } from "../constants";

const Carousel = () => {
  return (
    <section className="carousel">
      <h1 className="carousel__slogan">
        {carousel.slogan.paraph1} <span>{carousel.slogan.paraph2}</span>{" "}
        {carousel.slogan.paraph3}
      </h1>
      <p className="carousel__desc">
        {carousel.desc.paraph1}{" "}
        <span className="desc__strong">{carousel.desc.paraph2}</span>{" "}
        {carousel.desc.paraph3}{" "}
        <span className="desc__strong">{carousel.desc.paraph4}</span>{" "}
        {carousel.desc.paraph5} {carousel.desc.paraph6}{" "}
        <span className="desc__strong">{carousel.desc.paraph7}</span>{" "}
        {carousel.desc.paraph8}
      </p>
      <section className="carousel__btnSection">
        {carousel.btn.map((item, index) => {
          return (
            <button className={`button`} key={index}>
              {item.label}
            </button>
          );
        })}
      </section>
    </section>
  );
};

export default Carousel;
