import {
    Code2,
    Database,
    Brain,
    Globe,
    Wrench
} from "lucide-react";

import "./Skills.css";

function Skills() {
    return (
        <section className="skills-section" id="skills">

            <div className="skills-container">

                <div className="skills-heading">

                    <p>02 — SKILLS</p>

                    <h2>
                        Tools I use to
                        <span> build things.</span>
                    </h2>

                    <p className="skills-description">
                        A collection of technologies and tools I've worked
                        with while building projects and solving problems.
                    </p>

                </div>


                <div className="skills-grid">

                    {/* Programming */}

                    <div className="skill-category">

                        <div className="skill-category-header">
                            <Code2 size={22} />
                            <h3>Languages</h3>
                        </div>

                        <div className="skill-list">

                            <span>Java</span>
                            <span>Python</span>
                            <span>JavaScript</span>
                            <span>C++</span>
                            <span>SQL</span>

                        </div>

                    </div>


                    {/* Web Development */}

                    <div className="skill-category">

                        <div className="skill-category-header">
                            <Globe size={22} />
                            <h3>Web Development</h3>
                        </div>

                        <div className="skill-list">

                            <span>HTML</span>
                            <span>CSS</span>
                            <span>React</span>
                            <span>Django</span>
                            <span>Flask</span>
                            <span>REST APIs</span>

                        </div>

                    </div>


                    {/* Machine Learning */}

                    <div className="skill-category">

                        <div className="skill-category-header">
                            <Brain size={22} />
                            <h3>Machine Learning</h3>
                        </div>

                        <div className="skill-list">

                            <span>NumPy</span>
                            <span>Pandas</span>
                            <span>Scikit-learn</span>
                            <span>TensorFlow</span>
                            <span>Keras</span>
                            <span>OpenCV</span>

                        </div>

                    </div>


                    {/* Database & Data */}

                    <div className="skill-category">

                        <div className="skill-category-header">
                            <Database size={22} />
                            <h3>Data & Databases</h3>
                        </div>

                        <div className="skill-list">

                            <span>MySQL</span>
                            <span>PostgreSQL</span>
                            <span>SQLite</span>
                            <span>Power BI</span>
                            <span>Data Analysis</span>

                        </div>

                    </div>


                    {/* Tools */}

                    <div className="skill-category tools-card">

                        <div className="skill-category-header">
                            <Wrench size={22} />
                            <h3>Tools</h3>
                        </div>

                        <div className="skill-list">

                            <span>Git</span>
                            <span>GitHub</span>
                            <span>VS Code</span>
                            <span>Postman</span>
                            <span>Selenium</span>
                            <span>PyTest</span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;