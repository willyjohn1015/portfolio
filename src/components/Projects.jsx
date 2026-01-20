import { useState } from "react";
import projects from "../data/projects";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openModal = (video) => {
    setActiveVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveVideo(""); // stops video
  };

  return (
    <section className="container py-5" id="projects">
      <h1 className="text-center fw-bold mb-4" data-aos="zoom-in">Projects</h1>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-lg-6" key={project.id}>
            <div className="card h-100 shadow-sm" data-aos="fade-up">
              <img
                src={project.pic}
                className="card-img-top"
                alt={project.title}
                style={{ cursor: "pointer" }}
                onClick={() => openModal(project.video)}
              />

              <div className="px-4 py-3">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <small className="text-muted">{project.tech}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
  <>
    {/* MODAL */}
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ zIndex: 1055 }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Project Demo</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>

          <div className="modal-body">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-100 rounded"
            />
          </div>
        </div>
      </div>
    </div>

    {/* BACKDROP (BEHIND MODAL) */}
    <div
      className="modal-backdrop fade show"
      style={{ zIndex: 1050 }}
      onClick={closeModal}
    ></div>
  </>
)}

    </section>
  );
}

export default Projects;
