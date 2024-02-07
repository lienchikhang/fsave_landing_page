import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { header } from "../constants";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <section className="header__logo">
        <img src={header.logo.urlImg} alt={header.logo.imgAlt} />
        <h1>{header.logo.labelText}</h1>
      </section>
      <nav className="header__nav">
        {header.nav.map((item, index) => {
          return (
            <p className={`navItem ${index}`} key={index}>
              {item}
            </p>
          );
        })}
      </nav>
      <section className="header__author">
        {header.author.map((item, index) => {
          return (
            <a className={`authorItem ${index}`} key={index} href={item.link}>
              {item.icon == "fb" ? <FacebookIcon /> : <GitHubIcon />}
            </a>
          );
        })}
      </section>
    </header>
  );
};

export default Header;
