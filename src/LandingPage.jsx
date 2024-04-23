import React, { useState, useEffect } from "react";
import "./LandingPage1.css"; // Import the CSS file
import { Link } from "react-router-dom";
function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    setSidebarOpen(true); // Open the sidebar by default when the component mounts
  }, []);

  return (
    <div className="landing-page">
      <div className={`sidebar ${sidebarOpen ? "" : "closed"}`}>
        <ul>
          <li>
            <a href="#aim">Aim</a>
          </li>
          <li>
            <a href="#objective">Objective</a>
          </li>
          <li>
            <a href="#theory">Theory</a>
          </li>
          <li>
            <a href="#procedure">Procedure</a>
          </li>
          <li>
            <a href="#references">References</a>
          </li>
          <li>
            <a href="#simulation">Simulation</a>
          </li>

          <li>
            <a href="#feedback">Feedback</a>
          </li>
        </ul>
      </div>
      <div className={`main-content ${sidebarOpen ? "" : "aim-open"}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <div className="toggle-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <h1>
          <center>Welcome to Our Web Development Laboratory</center>
        </h1>
        <p>
          <center>A complete guide to your WAD Laboratory!!!</center>
        </p>
        <section id="aim">
          <h2>AIM</h2>
          <p>IDHAR AIM DALO</p>
        </section>
        <section id="objective">
          <h2>Objective</h2>
          <p>
            We are a team of experienced scientists dedicated to advancing
            knowledge and innovation in various fields.
          </p>
        </section>
        <section id="theory">
          <h2>Theory</h2>
          <p>
            Reach out to us to discuss your project needs and how we can assist
            you.
          </p>
        </section>
        <section id="procedure">
          <h2>PROCEDURE</h2>
          <p>Procedure IDHAR DAAALLLLL</p>
        </section>
        <section id="references">
          <h2>REFERENCES</h2>
          <p>REFERENCE IDHAR DAAALLLLL</p>
        </section>
        <section id="simulation">
          <h2>Simulation</h2>
          {/* <Link to="Land"> */}
          <button>
            <b>LET's PRACTICE</b>
          </button>
          {/* </Link> */}
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
