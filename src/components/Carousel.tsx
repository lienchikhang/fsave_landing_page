import "../css/Carousel.css";
import { carousel } from "../constants";
import { useQuery } from "react-query";
import axios from "axios";

const Carousel: React.FC = () => {
  const getFolder = async () => {
    const res = await axios.get(
      "https://rest-api-extension.onrender.com/extension/download",
      { responseType: "blob" }
    );
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "fsave.zip");
    document.body.appendChild(link);
    link.click();
  };

  const { data, refetch } = useQuery("downloadEx", getFolder, {
    retry: 3,
    onSuccess: () => {
      console.log("fetching successfully", data);
    },
    onError: (err) => {
      console.log("fetching failed!", err);
      refetch();
    },
    enabled: false,
  });

  const handleClick = () => {
    refetch();
  };

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
            <button className={`button`} key={index} onClick={handleClick}>
              {item.label}
            </button>
          );
        })}
      </section>
    </section>
  );
};

export default Carousel;
