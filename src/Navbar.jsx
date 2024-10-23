import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import {gsap} from 'gsap';
import Loader from './Loader';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for the text


    // Intersection Observer for Image Loading
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setImgLoaded(true);
      }
    }, { threshold: 1.0 });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  // Event Handlers for GSAP Animations
  const handleHover = (id) => {
    gsap.to(id, { y: "1vw" });
  };

  const handleLeave = (id) => {
    gsap.to(id, { y: 0 });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-0"  >
        <div className="container-fluid" style={{ backgroundColor: 'aliceblue' }}>
          <a className="navbar-brand" href="#">
            <img
              ref={imgRef}
              id="icon"
              src={imgLoaded ? "./logo2.png" : "https://retchhh.wordpress.com/wp-content/uploads/2015/03/loading1.gif"}
              alt=""
              
            />
          </a>
          <p id="ygfoi"   >Youth Games & Sports Federation of India</p>
          <button className="navbar-toggler" style={{ outline: 'none', margin: '1%' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/*" className="nav-link" id="Aff" href="#" onMouseEnter={() => handleHover("#Aff")} onMouseLeave={() => handleLeave("#Aff")}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link" id="gall" href="#" onMouseEnter={() => handleHover("#gall")} onMouseLeave={() => handleLeave("#gall")}>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to= "/verify" className="nav-link" id="ver" href="#" onMouseEnter={() => handleHover("#ver")} onMouseLeave={() => handleLeave("#ver")}>Verification</Link>
              </li>
              <li className="nav-item">
                <Link to= "/update" className="nav-link" id="upd" href="#" onMouseEnter={() => handleHover("#upd")} onMouseLeave={() => handleLeave("#upd")}>Updating info..</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link" id="cntct" onMouseEnter={() => handleHover("#cntct")} onMouseLeave={() => handleLeave("#cntct")}>
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registration" className="nav-link"  id='regusrc' onMouseEnter={()=>handleHover("#regusrc")} onMouseLeave={()=>handleLeave("#regusrc")}     href="#" role="button">
                  Registration
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" href="#">Player Registration</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Affiliate Registration</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Affiliate Renew</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}