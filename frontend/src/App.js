import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import chañaral from './assets/images/chañaral.jpg';
import crunchyroll from './assets/images/crunchyroll_portada.webp';
import edad from './assets/images/edad.png';
import Esports from './assets/images/Esports.jpg';
import gmail from './assets/images/gmail.jpg';
import spotify from './assets/images/SPOTIFY.png';


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

  if (!profileData) {
    return <div className="text-center">Cargando...</div>;
  }

  const renderFrameworks = () => {
    return profileData.frameworks.map((framework, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{framework.name}</td>
        <td>
          <div className="progress">
            <div className="progress-bar" style={{ width: framework.level }}>
              {framework.level}
            </div>
          </div>
        </td>
      </tr>
    ));
  };

  const renderHobbies = () => {
    return profileData.hobbies.map((hobby, index) => (
      <li key={index}>{hobby.name}</li>
    ));
  };



  return (
    <div className="container text-center">
      <div className="row mt-4">
        <div className="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
          <h1 className="nombre">{profileData.name}</h1>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Descripción</h5>
              <p className="card-text">{profileData.summary}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src={edad} className="card-img-top" alt="Edad" style={{ height: "8.5cm" }} />
            <div className="card-body">
              <h5 className="card-title">Edad</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">23</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <img src={chañaral} className="card-img-top" alt="Ciudad" style={{ height: "7cm" }} />
            <div className="card-body">
              <h5 className="card-title">Ciudad de Origen</h5>
              <p className="card-text">{profileData.city}</p>
              <a href="https://www.munichanaral.cl/" target="_blank" className="btn btn-primary">Municipalidad de Chañaral</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <img src={gmail} className="card-img-top" alt="Email" style={{ height: "8.5cm" }} />
            <div className="card-body">
              <h5 className="card-title">Correo Electrónico</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{profileData.email}</h6>
            </div>
          </div>
        </div>
      </div>


      {/* Hobbies */}
      <h2>Hobbies</h2>
      <ul>
        {renderHobbies()}
      </ul>


      {/* Frameworks */}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tecnologias</th>
            <th>Porcentaje de conocimiento</th>
          </tr>
        </thead>
        <tbody>
          {renderFrameworks()}
        </tbody>
      </table>

      <div className="row mt-3">
        <div className="col text-center">
          <h2>Redes Sociales</h2>
          <div className="d-flex justify-content-center">
            <a href={profileData.spotifyLink} target="_blank" className="btn btn-primary me-2"><i className="bi bi-spotify"></i> Spotify</a>
            <a href={profileData.instagramLink} target="_blank" className="btn btn-primary"><i className="bi bi-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
