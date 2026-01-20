import contacts from "../data/contact";

function ContactMe() {
  return (
    <section
      className="container-fluid d-flex justify-content-center align-items-center"
      id="contact"
      style={{ height: "50vh" }}
    >
      <div className="text-center">
        <h1 className="mb-4 fw-bolder" data-aos="zoom-in">Contact Me</h1>
        <p className="mb-5" data-aos="fade-up" data-aos-delay="500">Reach out via any of the following platforms:</p>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          {contacts.map((contact) => {
            const Icon = contact.contactIcon;
            return (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark d-flex flex-column align-items-center border-0"
                 data-aos="fade-up"
                 data-aos-delay={contact.delay}
              >
                <Icon size={30} />
                <span className="mt-2">{contact.contactName}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
