import experiences from "../data/experience";

function Skills() {
  return (
    <section id="experience" className="py-5">
      <div className="container px-lg-5">
        <h1
          className="text-center fw-bold mb-5 section-title"
          data-aos="zoom-in"
        >
          Work Experience
        </h1>

        <div className="row g-4">
          {experiences.map((experience, index) => (
            <div className="col-12 col-lg-4" key={index} >
              <div
                className="card mono-card h-100"
                data-aos="fade-up"
                data-aos-delay={experience.delay}
              >
                <div className="card-body">
                  <h4 className="fw-semibold mb-1" >
                    {experience.name}
                  </h4>

                  <p className="text-muted mb-0">
                    {experience.company}
                  </p>

                  <small className="text-muted">
                    {experience.year}
                  </small>

                  <hr className="mono-divider my-3" />

                  <ul className="mono-list">
                    <li>{experience.description1}</li>
                    <li>{experience.description2}</li>
                    <li>{experience.description3}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
