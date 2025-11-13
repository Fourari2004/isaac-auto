import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Award, Users, Zap } from 'lucide-react';
import './Home.css';

// Generate vehicle data from image names
const featuredVehicles = [
  {
    id: 1,
    name: "BMW Serie 4",
    year: 2023,
    price: " MAD 450,000",
    image: "/images/bmw-serie-4.jpg",
    featured: true,
    specs: ["Coupe", "Essence", "Automatique"]
  },
  {
    id: 2,
    name: "Mercedes-Benz Classe E",
    year: 2022,
    price: " MAD 650,000",
    image: "/images/mercedes.jpg",
    featured: true,
    specs: ["Berline", "Hybride", "Automatique"]
  },
  {
    id: 3,
    name: "Range Rover Vogue",
    year: 2023,
    price: " MAD 1,200,000",
    image: "/images/RangeRover.jpg",
    featured: true,
    specs: ["SUV", "Diesel", "Automatique"]
  }
];

const stats = [
  { id: 1, value: "10+", label: "Years Experience", icon: Award },
  { id: 2, value: "500+", label: "Vehicles Sold", icon: Car },
  { id: 3, value: "98%", label: "Customer Satisfaction", icon: Users },
  { id: 4, value: "24/7", label: "Support", icon: Zap }
];

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Premium Automobiles in Casablanca
            </h1>
            <p className="hero-subtitle">
              Discover the finest selection of luxury vehicles from leading manufacturers. 
              Exceptional service and competitive pricing guaranteed.
            </p>
            <div className="hero-buttons">
              <Link to="/vehicles" className="btn btn-primary">
                Browse Vehicles
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.id}>
                <stat.icon size={32} className="stat-icon" />
                <div className="stat-content">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Vehicles</h2>
          <div className="vehicles-grid">
            {featuredVehicles.map((vehicle) => (
              <div className="vehicle-card card" key={vehicle.id}>
                <div className="vehicle-image">
                  <img src={vehicle.image} alt={vehicle.name} />
                  {vehicle.featured && (
                    <span className="featured-badge">En Vedette</span>
                  )}
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-header">
                    <h3 className="vehicle-name">{vehicle.name}</h3>
                    <p className="vehicle-year">{vehicle.year}</p>
                  </div>
                  <div className="vehicle-specs">
                    {vehicle.specs.map((spec, index) => (
                      <span className="spec-tag" key={index}>{spec}</span>
                    ))}
                  </div>
                  <div className="vehicle-price">{vehicle.price}</div>
                  <Link to={`/vehicles/${vehicle.id}`} className="btn btn-primary btn-small">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose ISAAC AUTO?</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <Car size={40} className="feature-icon" />
              <h3>Premium Selection</h3>
              <p>Handpicked luxury vehicles from top manufacturers with rigorous quality checks.</p>
            </div>
            <div className="feature-card card">
              <Award size={40} className="feature-icon" />
              <h3>Trusted Expertise</h3>
              <p>Over a decade of experience in the luxury automotive market in Morocco.</p>
            </div>
            <div className="feature-card card">
              <Zap size={40} className="feature-icon" />
              <h3>Competitive Pricing</h3>
              <p>Best prices guaranteed with flexible financing options available.</p>
            </div>
            <div className="feature-card card">
              <Users size={40} className="feature-icon" />
              <h3>Exceptional Service</h3>
              <p>Dedicated support team to assist you throughout your ownership journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;