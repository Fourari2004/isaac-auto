import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Vehicles.css';

// Generate vehicle data from image names
const allVehicles = [
  {
    id: 1,
    name: "BMW Serie 4",
    year: 2023,
    price: " MAD 450,000",
    image: "/images/bmw-serie-4.jpg",
    featured: true,
    specs: ["Coupe", "Essence", "Automatique"],
    fuel: "Essence",
    transmission: "Automatique"
  },
  {
    id: 2,
    name: "Mercedes-Benz Classe E",
    year: 2022,
    price: " MAD 650,000",
    image: "/images/mercedes.jpg",
    featured: true,
    specs: ["Berline", "Hybride", "Automatique"],
    fuel: "Hybride",
    transmission: "Automatique"
  },
  {
    id: 3,
    name: "Range Rover Vogue",
    year: 2023,
    price: " MAD 1,200,000",
    image: "/images/RangeRover.jpg",
    featured: true,
    specs: ["SUV", "Diesel", "Automatique"],
    fuel: "Diesel",
    transmission: "Automatique"
  },
  {
    id: 4,
    name: "BMW X5",
    year: 2022,
    price: " MAD 850,000",
    image: "/images/BWM.jpg",
    featured: false,
    specs: ["SUV", "Essence", "Automatique"],
    fuel: "Essence",
    transmission: "Automatique"
  },
  {
    id: 5,
    name: "Volkswagen Golf GTI",
    year: 2023,
    price: " MAD 320,000",
    image: "/images/volkswagen.jpg",
    featured: false,
    specs: ["Hatchback", "Essence", "Manuelle"],
    fuel: "Essence",
    transmission: "Manuelle"
  },
  {
    id: 6,
    name: "Porsche 911 Carrera",
    year: 2023,
    price: " MAD 1,800,000",
    image: "/images/Porsch.jpg",
    featured: false,
    specs: ["Coupe", "Essence", "Automatique"],
    fuel: "Essence",
    transmission: "Automatique"
  }
];

const Vehicles: React.FC = () => {
  const [filter, setFilter] = useState({
    fuel: '',
    transmission: ''
  });

  // Get unique fuel types and transmission types for filter options
  const fuelTypes: string[] = [];
  const transmissionTypes: string[] = [];
  
  allVehicles.forEach(vehicle => {
    if (!fuelTypes.includes(vehicle.fuel)) {
      fuelTypes.push(vehicle.fuel);
    }
    if (!transmissionTypes.includes(vehicle.transmission)) {
      transmissionTypes.push(vehicle.transmission);
    }
  });

  // Filter vehicles based on selected filters
  const filteredVehicles = allVehicles.filter(vehicle => {
    return (
      (filter.fuel === '' || vehicle.fuel === filter.fuel) &&
      (filter.transmission === '' || vehicle.transmission === filter.transmission)
    );
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="vehicles-page">
      <section className="section">
        <div className="container">
          <h1 className="page-title">Our Vehicle Collection</h1>
          <p className="page-subtitle">
            Explore our premium selection of luxury vehicles from leading manufacturers
          </p>

          {/* Filters */}
          <div className="filters">
            <div className="filter-group">
              <label htmlFor="fuel">Fuel Type</label>
              <select 
                id="fuel" 
                name="fuel" 
                value={filter.fuel}
                onChange={handleFilterChange}
              >
                <option value="">All Fuel Types</option>
                {fuelTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="transmission">Transmission</label>
              <select 
                id="transmission" 
                name="transmission" 
                value={filter.transmission}
                onChange={handleFilterChange}
              >
                <option value="">All Transmissions</option>
                {transmissionTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Vehicle Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="vehicles-grid">
              {filteredVehicles.map((vehicle) => (
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
          ) : (
            <div className="no-results">
              <p>No vehicles match your selected filters. Try adjusting your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Vehicles;