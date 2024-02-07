import { footer } from "../constants";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>{footer.copyRight}</p>
      <p>{footer.author}</p>
    </footer>
  );
};

export default Footer;
