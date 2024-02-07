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
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
