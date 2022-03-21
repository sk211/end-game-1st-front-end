import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Template/Header/Header';
import Footer from './Components/Template/Footer/Footer';
import Home from './Components/Template/Home/Home';
import About from './Components/Template/About/About';


function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />


        </Routes>
        <Footer />
      </BrowserRouter>,
    </div >
  );
}

export default App;
