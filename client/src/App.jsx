import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './pages/Landing';
import Home from './pages/Home';
import Create from './pages/Create';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  return (
    <BrowserRouter> 
      <Header />
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
