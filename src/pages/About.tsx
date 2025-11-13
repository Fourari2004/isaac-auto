import React from 'react';
import { Award, Users, Zap, Globe } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const values = [
    {
      id: 1,
      icon: Award,
      title: "Excellence",
      description: "We are committed to providing the highest quality vehicles and service to our customers."
    },
    {
      id: 2,
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, ensuring their complete satisfaction."
    },
    {
      id: 3,
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of industry trends to offer the latest in automotive technology."
    },
    {
      id: 4,
      icon: Globe,
      title: "Sustainability",
      description: "We promote environmentally responsible practices in our operations and vehicle selection."
    }
  ];

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="container">
          <h1>About ISAAC AUTO</h1>
          <p className="hero-subtitle">
            Your trusted partner for premium automobiles in Casablanca, Morocco
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in Casablanca with a passion for luxury automobiles, ISAAC AUTO has grown to become 
                one of Morocco's most trusted premium car dealerships. For over a decade, we have been 
                dedicated to providing exceptional vehicles and unparalleled customer service.
              </p>
              <p>
                Our journey began with a simple vision: to make premium automotive excellence accessible 
                to discerning customers in Morocco. Today, we represent some of the world's most prestigious 
                automotive brands, offering an extensive selection of luxury vehicles tailored to the unique 
                preferences of our clientele.
              </p>
              <p>
                Located in the heart of Casablanca, our state-of-the-art showroom showcases the finest 
                selection of luxury vehicles from leading manufacturers. Our experienced team of automotive 
                experts is committed to helping you find the perfect vehicle that matches your lifestyle 
                and exceeds your expectations.
              </p>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <span>Showroom Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card card" key={value.id}>
                <value.icon size={40} className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Vehicles Sold</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Brand Partnerships</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;