import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import sortLogo from "../../assets/sorting.png";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              onClick={() => navigate("/")}
              className=" logo"
              src={sortLogo}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  onClick={() => navigate("/")}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sorting Algorithms
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Bubble")}
                    >
                      Bubble Sort
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Merge")}
                    >
                      Merge Sort
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Insertion")}
                    >
                      Insertion Sort
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/Quick")}
                    >
                      Quick Sort
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Feedback
                    </a>
                  </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
