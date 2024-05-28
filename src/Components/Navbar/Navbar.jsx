import React, { useEffect, useState } from 'react';
import navlogo from '../assets/navlogo.png';
import bellicon from '../assets/bell.png';
import coin from '../assets/coin.png';
import vector from '../assets/vector.png';
import arrow from '../assets/arrow.svg'; // Import the arrow image
import './Navbar.css';

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsScrollingUp(false);
    } else {
      setIsScrollingUp(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isScrollingUp ? 'show' : 'hide'}`}>
      <div className="navbar-top">
        <div className="navlogo">
          <div className="mainLogo">
            <img src={navlogo} alt="Logo" className="navLogoImg" />
          </div>
        </div>
        <div className="sidelogos">
          <img src={bellicon} alt="Notifications" className="image" />
          <img src={arrow} alt="Dropdown arrow" className="dropdown-arrow" />
          <img src={coin} alt="Coins" className="image" />
          <img src={vector} alt="Vector" className="image" />
        </div>
      </div>
      <div className="nav-items-wrapper">
        <ul className="nav-menu">
          {['LeaderBoard', 'Historical Trading', 'Historical Chart', 'Scanners', 'Alerts', 'Basic Backtest', 'Advanced Backtest', 'Pricing', 'My Earnings'].map((item) => (
            <li className="nav-item" key={item}>
              {item}
              <hr className="nav-hr" />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
