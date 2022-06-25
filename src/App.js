
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Contact from './Components/Contact/Contact';
import Details from './Components/Details/Details';
// import Details from './Components/Details/Details';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='' element={<Portfolio></Portfolio>}></Route>
      <Route path='details' element={<Details></Details>}></Route>
    </Routes>
    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
