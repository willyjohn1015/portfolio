import "./Hero.css";
import resume from "../resume.pdf";

function Hero() {
  return (
    <section className="hero-section" id="home" data-aos="slide-down">
      <div>
        <h1 className="display-5 fw-bold" data-aos="fade-down" data-aos-delay="1300">WEBSITE DEVELOPER</h1>
        <h4 data-aos="fade-down" data-aos-delay="1500">
          BS Computer Engineering Major in System and Network Administration
        </h4>
        <p className="lead" data-aos="fade-down" data-aos-delay="1600">
          I build website which corresponds to clients needs using React, Bootstrap, PHP, HTML, CSS.
        </p>
        <a className="btn btn-outline-secondary btn-lg" data-aos="fade-down" data-aos-delay="2000" href={resume} download >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Hero;