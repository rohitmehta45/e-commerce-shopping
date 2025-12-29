import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import About from "./Pages/About/About";
import Contact from "./components/Contact/Contact";
import AuthModal from './components/AuthModal/AuthModal';
import { ToastContainer } from "react-toastify";
import { auth } from "../src/firebase";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) setAuthModalOpen(true); // show login modal if not logged in
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const closeModal = () => setAuthModalOpen(false);

  const ProtectedRoute = ({ children }) => {
    if (!user) return null; // modal is already open if not logged in
    return children;
  };

  return (
    <BrowserRouter>
      <Navbar cartItems={[]} />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {authModalOpen && (
        <AuthModal
          type={authType}
          setType={setAuthType}
          closeModal={closeModal}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
