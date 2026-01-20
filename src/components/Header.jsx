import { useEffect, useState } from "react";
import logo from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinkClass = (id) =>
    `nav-link ${activeSection === id ? "active fw-bold text-dark fs-6" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg bg-transparent sticky-top" data-aos="fade-down">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home" data-aos="zoom-in" data-aos-delay="700">
          <img src={logo} alt="Logo" className="rounded-circle shadow-lg p-1" width="70" />
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto pe-5">
            <li className="nav-item" data-aos="fade-down" data-aos-delay="100">
              <a href="#home" className={navLinkClass("home")}>Home</a>
            </li>
            <li className="nav-item" data-aos="fade-down" data-aos-delay="200">
              <a href="#about-me" className={navLinkClass("about-me")}>About Me</a>
            </li>
            <li className="nav-item" data-aos="fade-down" data-aos-delay="300">
              <a href="#skills" className={navLinkClass("skills")}>Skills</a>
            </li>
            <li className="nav-item" data-aos="fade-down" data-aos-delay="500">
              <a href="#experience" className={navLinkClass("experience")}>Experience</a>
            </li>
            <li className="nav-item" data-aos="fade-down" data-aos-delay="400">
              <a href="#projects" className={navLinkClass("projects")}>Projects</a>
            </li>
            <li className="nav-item" data-aos="fade-down" data-aos-delay="500">
              <a href="#contact" className={navLinkClass("contact")}>Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
