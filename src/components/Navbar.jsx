import { useState } from 'react';
import './Navbar.css';
import searchimg from '../assets/searchimg2.png';
import camera from '../assets/camera.png';
import mark_white from '../assets/mark-white.png';
import mark_yellow from '../assets/mark-yellow.png';

const Navbar = ({ category, setCategory, darkMode, toggleDarkMode }) => {
  const [inputval, setinputval] = useState('');

  const handleInputChange = (event) => {
    setinputval(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark" style={{ height: "55px" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge text-bg-info fs-5" style={{ height: "40px" }}>
            <img src={camera} style={{ width: '25px', paddingBottom: '6px' }} alt="camera" /> LiveLens
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse dropdown-menu-custom" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("topic-news-by-section?topic=WORLD")}
                style={{ color: category === 'topic-news-by-section?topic=WORLD' ? '#FFDF00' : '' }}
              >
                World
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("topic-news-by-section?topic=TECHNOLOGY")}
                style={{ color: category === 'topic-news-by-section?topic=TECHNOLOGY' ? '#FFDF00' : '' }}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("topic-news-by-section?topic=BUSINESS")}
                style={{ color: category === 'topic-news-by-section?topic=BUSINESS' ? '#FFDF00' : '' }}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("topic-news-by-section?topic=HEALTH")}
                style={{ color: category === 'topic-news-by-section?topic=HEALTH' ? '#FFDF00' : '' }}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("topic-news-by-section?topic=SPORTS")}
                style={{ color: category === 'topic-news-by-section?topic=SPORTS' ? '#FFDF00' : '' }}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("topic-news-by-section?topic=ENTERTAINMENT")}
                style={{ color: category === 'topic-news-by-section?topic=ENTERTAINMENT' ? '#FFDF00' : '' }}
              >
                Entertainment
              </div>
            </li>
          </ul>
          <div className="d-flex align-items-center search-container">
            <input
              className="form-control me-2"
              id="inputval"
              type="text"
              style={{ height: "40px", marginTop: "5px" }}
              placeholder="Search"
              aria-label="Search"
              value={inputval}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary search-button" type="submit" style={{ height: "40px", marginTop: "5px", padding: "0px 4px" }} onClick={() => inputval ? setCategory(`search?query=${inputval}`) : ''}>
              <img src={searchimg} style={{ width: "30px" }} alt="search" />
            </button>
            <button className="btn nav-link" onClick={() => setCategory("bookmark")} style={{ color: category === 'bookmark' ? '#FFDF00' : '', marginLeft: "0px", marginRight: "0px", paddingLeft: "0px", paddingRight: "0px", width: "40px" }}>
              <img
                src={category === 'bookmark' ? mark_yellow : darkMode ? mark_white : mark_white}
                alt="Bookmark icon"
                style={{ width: '40px', height: '38px', marginLeft: "0px", marginRight: "0px" }}
              />
            </button>
            <button className="btn btn-outline-primary" onClick={toggleDarkMode} style={{ marginLeft: "0px", marginRight: "0px", height: "40px", marginTop: "5px" }}>
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
