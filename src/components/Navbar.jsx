import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import searchimg from '../assets/searchimg2.png';
import camera from '../assets/camera.png';
import mark_white from '../assets/mark-white.png';
import mark_yellow from '../assets/mark-yellow.png';

const Navbar = ({ category, setCategory, darkMode, toggleDarkMode, isLoggedIn, setIsLoggedIn }) => {
  const [inputval, setinputval] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [setIsLoggedIn]);

  const handleInputChange = (event) => {
    setinputval(event.target.value);
  };

  const handleSearch = () => {
    if (inputval.trim()) {
      setCategory(`search?query=${inputval.trim()}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark" style={{ height: "55px" }}>
      <div className="container-fluid">
        <span className="navbar-brand" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <span className="badge text-bg-info fs-5" style={{ height: "40px" }}>
            <img src={camera} style={{ width: '25px', paddingBottom: '6px' }} alt="camera" /> LiveLens
          </span>
        </span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse dropdown-menu-custom" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {[
              { label: 'World', topic: 'WORLD' },
              { label: 'Technology', topic: 'TECHNOLOGY' },
              { label: 'Business', topic: 'BUSINESS' },
              { label: 'Health', topic: 'HEALTH' },
              { label: 'Sports', topic: 'SPORTS' },
              { label: 'Entertainment', topic: 'ENTERTAINMENT' }
            ].map(({ label, topic }) => (
              <li className="nav-item" key={topic}>
                <div
                  className="nav-link"
                  style={{ color: category === `topic-news-by-section?topic=${topic}` ? '#FFDF00' : '' }}
                  onClick={() => {
                    setCategory(`topic-news-by-section?topic=${topic}`);
                    navigate('/');
                  }}
                >
                  {label}
                </div>
              </li>
            ))}

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
            <button
              className="btn btn-outline-primary search-button"
              type="button"
              style={{ height: "40px", marginTop: "5px", padding: "0px 4px" }}
              onClick={handleSearch}
            >
              <img src={searchimg} style={{ width: "30px" }} alt="search" />
            </button>

            <button
              className="btn nav-link"
              onClick={() => {
                setCategory("bookmark");
                navigate('/bookmarks');
              }}
              style={{
                color: category === 'bookmark' ? '#FFDF00' : '',
                marginLeft: "0px",
                marginRight: "0px",
                paddingLeft: "0px",
                paddingRight: "0px",
                width: "40px"
              }}
            >
              <img
                src={category === 'bookmark' ? mark_yellow : darkMode ? mark_white : mark_white}
                alt="Bookmark icon"
                style={{ width: '40px', height: '38px' }}
              />
            </button>

            <button
              className="btn btn-outline-primary"
              onClick={toggleDarkMode}
              style={{ marginLeft: "5px", marginRight: "5px", height: "40px", marginTop: "5px" }}
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>

            {isLoggedIn ? (
              <button
                className="btn btn-outline-danger"
                onClick={handleLogout}
                style={{ marginLeft: "5px", height: "40px", marginTop: "5px" }}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  className="btn btn-outline-success"
                  onClick={() => navigate('/login')}
                  style={{ marginLeft: "5px", height: "40px", marginTop: "5px" }}
                >
                  Login
                </button>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => navigate('/signup')}
                  style={{ marginLeft: "5px", height: "40px", marginTop: "5px" }}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
