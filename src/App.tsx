import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Setting from "./components/Setting";
import Using from "./components/Using";
import SaveCurrent from "./components/SaveCurrent";
import Open from "./components/Open";
import Delete from "./components/Delete";
import Footer from "./components/Footer";
import Conclusion from "./components/Conclusion";

function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <Carousel />
        <Setting />
        <Using />
        <SaveCurrent />
        <Open />
        <Delete />
        <Conclusion />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
