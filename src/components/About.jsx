import { Code2, Brain, Database, Sparkles } from "lucide-react";
import "./About.css";

function About() {
    return (
        <section className="about-section" id="about">

            <div className="section-container">

                <div className="section-heading">
                    <p>01 — ABOUT ME</p>

                    <h2>
                        Turning ideas into
                        <span> digital solutions.</span>
                    </h2>
                </div>

                <div className="about-grid">

                    <div className="about-text">

                        <p className="intro">
                            I'm a Computer Engineering student passionate about
                            software development, Machine Learning and building
                            practical technology solutions.
                        </p>

                        <p>
                            I enjoy working across the development stack — from
                            designing responsive interfaces to building backend
                            APIs, databases and data-driven systems.
                        </p>

                        <p>
                            My current focus is strengthening my problem-solving
                            skills, exploring Machine Learning and building projects
                            that solve real-world problems.
                        </p>

                    </div>

                    <div className="about-cards">

                        <div className="about-card">
                            <Code2 size={25} />

                            <h3>Development</h3>

                            <p>
                                Building responsive web applications and APIs.
                            </p>
                        </div>

                        <div className="about-card">
                            <Brain size={25} />

                            <h3>Machine Learning</h3>

                            <p>
                                Exploring intelligent systems and predictive models.
                            </p>
                        </div>

                        <div className="about-card">
                            <Database size={25} />

                            <h3>Data</h3>

                            <p>
                                Working with databases, analytics and visualization.
                            </p>
                        </div>

                        <div className="about-card">
                            <Sparkles size={25} />

                            <h3>Problem Solving</h3>

                            <p>
                                Practicing DSA and improving logical thinking.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;