const About = () => {
    return (
        <div className="about-container">
            <h3 className="about-heading">About Us</h3>
            <svg className="svg-image" xmlns="http://www.w3.org/2000/svg" width="197" height="7" viewBox="0 0 197 7" fill="none">
                <path d="M0.866211 4L194.54 1.5C201.457 2 185.736 2 149.894 5.5" stroke="#DE358F" strokeWidth="1.5"></path>
            </svg>
            <h1 className="about-section-title">Hola! Customer</h1>
            <p className="about-section-subtitle">How to reach out to us?</p>
            <div className="about-card-container">
                <div className="about-card" id="card1">
                    <h2 className="about-card-heading">Our Story</h2>
                    <p className="about-card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                </div>
                <div className="about-card" id="card2">
                    <h2 className="about-card-heading">Our Vision</h2>
                    <p className="about-card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                </div>
                 <div className="about-card" id="card3">
                    <h2 className="about-card-heading">Our Mission</h2>
                    <p className="about-card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                </div>
            </div>
      </div>
    )
}

export default About;