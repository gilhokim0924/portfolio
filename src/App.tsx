import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {

  // Modal status for contact page
  const [contactModal, setIsContactModal] = React.useState(false);

  const openContact= () => {setIsContactModal(true);}

  const closeContact = () => {setIsContactModal(false);}

  return (
    <BrowserRouter>
      <NavBar onContactClick={openContact} />
      <Routes>
        <Route path="/" element={<Home contactModal={contactModal} closeContact={closeContact}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
