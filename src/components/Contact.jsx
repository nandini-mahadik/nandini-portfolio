import "./Contact.css";

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                <p className="contact-number">04 — CONTACT</p>

                <h2>Let's build something together.</h2>

                <p className="contact-description">
                    I'm always interested in learning, building new projects,
                    collaborating, and exploring opportunities in software
                    development, machine learning, and data.
                </p>

                <a
                    href="mailto:nandinimahadik04@gmail.com"
                    className="contact-email"
                >
                    nandinimahadik04@gmail.com →
                </a>

                <div className="contact-links">
                    <a
                        href="https://github.com/nandini-mahadik"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nandini-mahadik-6b9ab5278"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="mailto:nandinimahadik04@gmail.com">
                        Email
                    </a>
                </div>

                <div className="contact-footer">
                    <span>© 2026 Nandini Mahadik</span>
                    <span>Designed & built with React</span>
                </div>

            </div>
        </section>
    );
}

export default Contact;