// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Book from './pages/Book';
import Booking from './pages/Bookings';
import List from './pages/List';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          {/* ✅ Flex عمودي يضمن بقاء الفوتر أسفل الصفحة */}
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            
            {/* ✅ Navbar في الأعلى */}
            <Navbar />

            {/* ✅ main بياخد المساحة الباقية */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<Book />} />
                <Route path="/bookings" element={<Booking />} />
                 <Route path="/list" element={<List />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/dashboard" element={<UserDashboard />} />

              </Routes>
            </main>

            {/* ✅ Footer دايمًا في الأسفل */}
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
