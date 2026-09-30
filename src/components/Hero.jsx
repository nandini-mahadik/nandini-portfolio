import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-glow"></div>

            <div className="hero-container">

                {/* LEFT SIDE */}

                <div className="hero-content">

                    <p className="hello">HELLO, I'M</p>

                    <h1>
                        Nandini
                        <br />
                        <span>Mahadik.</span>
                    </h1>

                    <h2>
                        Computer Engineering Student • Developer • ML Enthusiast
                    </h2>

                    <p className="description">
                        I build web applications, data-driven systems and
                        intelligent solutions using modern technologies,
                        Python and Machine Learning.
                    </p>

                    <div className="buttons">

                        <a href="#projects" className="primary-btn">
                            View My Work →
                        </a>

                        <a
                            href="/resume.pdf"
                            download="Nandini_Mahadik_Resume.pdf"
                            className="secondary-btn"
                        >
                            Download Resume
                        </a>

                    </div>

                    <div className="hero-socials">
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

                    <div className="hero-tags">
                        <span>Python</span>
                        <span>React</span>
                        <span>Machine Learning</span>
                    </div>

                </div>


                {/* RIGHT SIDE */}

                <div className="hero-visual">

                    <div className="circle circle-one"></div>
                    <div className="circle circle-two"></div>

                    <div className="profile-card">

                        <div className="card-header">
                            <span>PORTFOLIO</span>
                            <span>2026</span>
                        </div>

                        <div className="big-letter">
                            N
                        </div>

                        <div className="card-name">
                            NANDINI
                            <br />
                            <span>MAHADIK</span>
                        </div>

                        <div className="card-footer">
                            <span>COMPUTER ENGINEERING</span>
                            <span>01</span>
                        </div>

                    </div>

                </div>

            </div>

            <div className="scroll-text">
                SCROLL TO EXPLORE ↓
            </div>

        </section>
    );
}

export default Hero;