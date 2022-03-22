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
import Review from './Components/Dashboard/Review/Review';
import Login from './Components/Template/Login/Login';
import initializetionFirebase from './Components/Template/Firebase/firebase.init';

initializetionFirebase()


function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="dashboard" element={<Dhome />} />
          <Route path="dashboard" element={<Review />} />
          <Route path="login" element={<Login />} />


        </Routes>
        <Footer />
      </BrowserRouter>,
    </div >
  );
}

export default App;
