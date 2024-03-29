import React from 'react';
import chañaral from '../assets/images/chañaral.jpg';
import crunchyroll from '../assets/images/crunchyroll_portada.webp';
import edad from '../assets/images/edad.png';
import esports from '../assets/images/Esports.jpg';
import gmail from '../assets/images/gmail.jpg';
import spotify from '../assets/images/SPOTIFY.png';

function Portfolio({ profileData }) {
    if (!profileData) {
        return <div>Cargando...</div>;
    }

    const getHobbyImage = (hobbyName) => {
        switch (hobbyName) {
            case "E-Sports": return esports;
            case "Anime": return crunchyroll;
            case "Musica": return spotify;
            default: return '';
        }
    };

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

    const renderCarouselItems = () => {
        return profileData.hobbies.map((hobby, index) => (
            <div className= {`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={getHobbyImage(hobby.name)} className="d-block w-100" alt={hobby.name} />
                <div className="carousel-caption d-none d-md-block">
                    <h5 className='carrusel'>{hobby.name}</h5>
                </div>
            </div>
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

            <h2>INTERESES</h2>
            <div id="hobbiesCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#hobbiesCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#hobbiesCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#hobbiesCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {renderCarouselItems()}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#hobbiesCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#hobbiesCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tecnologías</th>
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
                        <a href="https://open.spotify.com/playlist/1N2fv7s2jGCQmuwQPSblt7?si=925c5a3390324f4b" target="_blank" className="btn btn-primary me-2"><i className="bi bi-spotify"></i> Spotify</a>
                        <a href="https://www.instagram.com/beno.gg/" target="_blank" className="btn btn-primary"><i className="bi bi-instagram"></i> Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
