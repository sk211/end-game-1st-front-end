import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Components/Template/Header/Header';
import Footer from './Components/Template/Footer/Footer';
import Home from './Components/Template/Home/Home';
import About from './Components/Template/Appioment/Appiment';
import Dhome from './Components/Dashboard/DashhboardHome/Dhome';


function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="dashboard" element={<Dhome />} />


        </Routes>
        <Footer />
      </BrowserRouter>,
    </div >
  );
}

export default App;
