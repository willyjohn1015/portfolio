import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-4" data-aos="zoom-in">Skills</h1>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-12 col-sm-6 col-lg-4" id={index}>
              <div className="card skill-card h-100 shadow-sm border-0 bg-secondary text-white" data-aos="fade-up" data-aos-delay={skill.delay}>
                <div className="card-body text-center">
                  {/* Optional icon */}
                  {skill.icon && (
                    <div className="skill-icon mb-3">
                      <h1 className={skill.icon}></h1>
                    </div>
                  )}

                  <h5 className="card-title fw-semibold">
                    {skill.name}
                  </h5>

                  <p className="card-text small">
                    {skill.description}
                  </p>
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
