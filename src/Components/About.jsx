import React from "react";
import "./about.css";


function About() {
  return (
    <>
    

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <span className="tag">About MediCare</span>

          <h1>
            Healing With Compassion,
            <br />
            Skill, And Modern Care
          </h1>

          <p>
            MediCare Hospital is dedicated to delivering
            trusted healthcare through experienced
            specialists, advanced medical support, and
            a patient-first environment for every family.
          </p>
        </div>

        <div className="choose-box">
          <h3>Why Patients Choose Us</h3>
          <ul>
            <li>Experienced doctors across multiple specialties</li>
            <li>Modern diagnostic and treatment facilities</li>
            <li>Friendly staff and patient-centered care</li>
            <li>Reliable emergency and follow-up care</li>
          </ul>
        </div>
      </section>

      {/* Mission, Vision and Promise */}
      <section className="values">
        <div className="value-card">
          <h3>Our Mission</h3>
          <p>
            To provide accessible, ethical, and high-quality
            medical care that improves the health and
            well-being of our patients and community.
          </p>
        </div>

        <div className="value-card">
          <h3>Our Vision</h3>
          <p>
            To be a trusted healthcare destination known
            for clinical excellence, compassion, and
            innovation in patient care.
          </p>
        </div>

        <div className="value-card">
          <h3>Our Promise</h3>
          <p>
            We listen carefully, treat responsibly, and
            support every patient with respect,
            transparency, and dedication at each step.
          </p>
        </div>
      </section>

      {/* Hospital Statistics */}
      <section className="statistics">
        <div className="stats-content">
          <h2>Built Around People, Not Just Treatment</h2>

          <p>
            Our hospital combines medical expertise with
            a warm and supportive atmosphere. From general
            consultations to specialized treatments, we
            focus on making healthcare safe, understandable,
            and reassuring for patients of all ages.
          </p>

          <p>
            Every department works together to ensure a
            smooth care journey, helping patients feel
            confident from their first visit to recovery
            and follow-up.
          </p>
        </div>

        <div className="stats-boxes">
          <div className="stat-card">
            <h2>25+</h2>
            <p>Qualified Specialists</p>
          </div>

          <div className="stat-card">
            <h2>10+</h2>
            <p>Medical Departments</p>
          </div>

          <div className="stat-card">
            <h2>24/7</h2>
            <p>Emergency Support</p>
          </div>
        </div>
      </section>

    
        
    </>
  );
}

export default About;