import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Portfolio from './components/Portfolio'; // Asegúrate de importar correctamente Portfolio

function App() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/profile')
      .then(response => {
        setProfileData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos del perfil', error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
        <Route path="/portfolio" element={<Portfolio profileData={profileData} />} />
      </Routes>
    </Router>
  );
}

export default App;
