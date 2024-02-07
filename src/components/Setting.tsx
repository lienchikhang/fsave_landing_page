import settingVideo from "../assets/setting.mp4";
import { setting } from "../constants";
import "../css/Setting.css";

const Setting = () => {
  return (
    <section className="setting">
      <h2>{setting.slogan}</h2>
      <video src={settingVideo} autoPlay muted loop playsInline />
      {setting.decorate.map((item, index) => {
        return (
          <img
            className={`img i${index}`}
            key={index}
            src={item.link}
            alt={item.alt}
          />
        );
      })}
    </section>
  );
};

export default Setting;
