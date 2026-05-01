import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>Prestige Institute of Management and Research</h5>
              </div>
              <h3>2023 – 2026</h3>
            </div>
            <p>
              Current CGPA: 7.3
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (12th – CBSE)</h4>
                <h5>Chameli Devi Public School, Indore</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Higher Secondary education.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Various Institutions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              • Oracle AI Foundations Certification<br />
              • Google Cloud Certification<br />
              • MERN Stack Development – Universal Informatics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
