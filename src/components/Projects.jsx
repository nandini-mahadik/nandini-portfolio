import "./Projects.css";

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">

                <p className="section-number">03 — PROJECTS</p>

                <h2>Things I've built.</h2>

                <div className="projects-grid">

                    {/* 01 — Movie Recommendation */}
                    <div className="project-card">
                        <p className="project-number">01</p>

                        <h3>Movie Recommendation System</h3>

                        <p>
                            A content-based movie recommendation system that recommends
                            similar movies using movie metadata, text processing and
                            similarity techniques.
                        </p>

                        <div className="project-tags">
                            <span>Python</span>
                            <span>Pandas</span>
                            <span>Scikit-learn</span>
                            <span>Streamlit</span>
                        </div>

                        <a
                            href="https://github.com/nandini-mahadik/MiniProject_Movie_Recommender_System"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub →
                        </a>
                    </div>


                    {/* 02 — Predictive Customer Analytics */}
                    <div className="project-card">
                        <p className="project-number">02</p>

                        <h3>Predictive Customer Analytics</h3>

                        <p>
                            An e-commerce analytics and sales intelligence system using
                            RFM analysis, machine learning predictions and an interactive
                            Power BI dashboard.
                        </p>

                        <div className="project-tags">
                            <span>Python</span>
                            <span>Flask</span>
                            <span>Scikit-learn</span>
                            <span>Power BI</span>
                        </div>

                        <a
                            href="https://github.com/nandini-mahadik/customer-analytics-ai-system"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub →
                        </a>
                    </div>


                    {/* 03 — Real Estate Chatbot */}
                    <div className="project-card">
                        <p className="project-number">03</p>

                        <h3>Real Estate Chatbot</h3>

                        <p>
                            An AI-integrated real estate chatbot designed to help users
                            explore property information through an interactive web
                            application.
                        </p>

                        <div className="project-tags">
                            <span>React</span>
                            <span>Django</span>
                            <span>Python</span>
                            <span>NLP</span>
                        </div>

                        <a
                            href="https://github.com/nandini-mahadik/Real-Estate-Chatbot-with-integrates-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub →
                        </a>
                    </div>


                    {/* 04 — ASL Recognition */}
                    <div className="project-card">
                        <p className="project-number">04</p>

                        <h3>ASL Recognition System</h3>

                        <p>
                            A computer vision project for recognizing American Sign
                            Language gestures using hand landmark detection and machine
                            learning techniques.
                        </p>

                        <div className="project-tags">
                            <span>Python</span>
                            <span>OpenCV</span>
                            <span>MediaPipe</span>
                            <span>Machine Learning</span>
                        </div>

                        <a
                            href="https://github.com/nandini-mahadik/Hand-Speak"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub →
                        </a>
                    </div>


                    {/* 05 — Trader Behaviour Market Sentiment */}
                    <div className="project-card">
                        <p className="project-number">05</p>

                        <h3>Trader Behaviour Market Sentiment</h3>

                        <p>
                            A data analysis project exploring trader behaviour and market
                            sentiment to identify patterns, relationships and insights
                            from trading data.
                        </p>

                        <div className="project-tags">
                            <span>Python</span>
                            <span>Pandas</span>
                            <span>Data Analysis</span>
                            <span>Visualization</span>
                        </div>

                        <a
                            href="https://github.com/nandini-mahadik/Trader_Behavior_Market_Sentiment2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub →
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Projects;