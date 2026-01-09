//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {

  // Modal status for contact page
  const [contactModal, setIsContactModal] = React.useState(false);

  const openContact= () => {setIsContactModal(true);}

  const closeContact = () => {setIsContactModal(false);}

  return (
    <Router>
      <NavBar onContactClick={openContact} />
      <Routes>
        <Route path="/" element={<Home contactModal={contactModal} closeContact={closeContact}/>} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
