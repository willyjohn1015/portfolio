function AboutMe() {
  return (
    <section id="about-me">
      <div className="container-fluid py-5">
          <div className="border-1 rounded-5 shadow mx-5 bg-light" data-aos="zoom-out">
        <div className="row p-md-5 mx-md-5 mx-sm-3 mx-2 p-3 align-items-center">
          <div className="col-xl-5">
            <h1 className="text-center fw-bolder" id="aboutMe_header" data-aos="zoom-in" data-aos-delay="700">
              ABOUT ME
            </h1>
          </div>
          <div className="col-xl-7">
            <p className="fs-4" id="aboutMe_text" data-aos="zoom-in" data-aos-delay="800">
              I am a <strong>Computer Engineering</strong> graduate with a
              specialization in
              <strong> System and Network Administration</strong> and hands-on
              experience as a<strong> Software Developer</strong> in both
              corporate and freelance environments. I have worked on real-world
              projects involving the development, maintenance, and improvement
              of web-based systems, always with a focus on reliability,
              performance, and usability.
            </p>
            <p className="fs-4 " id="aboutMe_text" data-aos="zoom-in" data-aos-delay="900">
              In a professional setting, I have collaborated with teams using
              structured development processes, participated in code reviews and
              debugging, and contributed to delivering solutions that meet
              business and user requirements. As a freelancer, I have worked
              directly with clients, translating their needs into functional
              systems while maintaining clear communication and accountability.
            </p>
            <p className="fs-4" id="aboutMe_text" data-aos="zoom-in" data-aos-delay="1000">
              I am highly motivated, adaptable, and committed to continuous
              improvement. I value practical experience, take ownership of my
              work, and approach every project with a results-driven mindset. My
              goal is to contribute to an organization where I can add value,
              grow as a developer, and help build solutions that support both
              technical and business objectives. project.
            </p>
          </div>
        </div>
          </div>
      </div>
    </section>
  );
}

export default AboutMe;
