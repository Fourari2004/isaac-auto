import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, ChevronLeft } from 'lucide-react';
import './VehicleDetail.css';

// Generate vehicle data from image names
const vehicleData = [
  {
    id: "1",
    name: "BMW Serie 4",
    year: 2023,
    price: " MAD 450,000",
    image: "/images/bmw-serie-4.jpg",
    featured: true,
    specs: ["Coupe", "Essence", "Automatique"],
    fuel: "Essence",
    transmission: "Automatique",
    description: "The BMW Serie 4 Coupe combines elegant design with powerful performance. This premium vehicle features a sleek exterior, luxurious interior, and advanced technology for an exceptional driving experience. Perfect for those who appreciate both style and substance.",
    gallery: [
      "/images/bmw-serie-4.jpg",
      "/images/bmw-serie-4.jpg",
      "/images/bmw-serie-4.jpg"
    ],
    specifications: {
      "Engine": "2.0L Turbo 4-cylinder",
      "Power": "248 HP",
      "Torque": "258 lb-ft",
      "Fuel Economy": "7.5L/100km",
      "Acceleration 0-100 km/h": "5.8 seconds",
      "Top Speed": "250 km/h (electronically limited)",
      "Transmission": "8-speed automatic",
      "Drive Type": "Rear-wheel drive",
      "Dimensions": "4768 x 1825 x 1387 mm"
    }
  },
  {
    id: "2",
    name: "Mercedes-Benz Classe E",
    year: 2022,
    price: " MAD 650,000",
    image: "/images/mercedes.jpg",
    featured: true,
    specs: ["Berline", "Hybride", "Automatique"],
    fuel: "Hybride",
    transmission: "Automatique",
    description: "The Mercedes-Benz Classe E represents the pinnacle of luxury and innovation. With its hybrid powertrain, this vehicle delivers exceptional performance while maintaining excellent fuel efficiency. Experience the finest in German engineering with premium materials and cutting-edge technology.",
    gallery: [
      "/images/mercedes.jpg",
      "/images/mercedes.jpg",
      "/images/mercedes.jpg"
    ],
    specifications: {
      "Engine": "2.0L Turbo 4-cylinder + Electric Motor",
      "Power": "316 HP (combined)",
      "Torque": "500 lb-ft (combined)",
      "Fuel Economy": "5.2L/100km (equivalent)",
      "Electric Range": "100 km",
      "Acceleration 0-100 km/h": "5.2 seconds",
      "Top Speed": "250 km/h (electronically limited)",
      "Transmission": "9-speed automatic",
      "Drive Type": "Rear-wheel drive",
      "Dimensions": "5078 x 1860 x 1478 mm"
    }
  },
  {
    id: "3",
    name: "Range Rover Vogue",
    year: 2023,
    price: " MAD 1,200,000",
    image: "/images/RangeRover.jpg",
    featured: true,
    specs: ["SUV", "Diesel", "Automatique"],
    fuel: "Diesel",
    transmission: "Automatique",
    description: "The Range Rover Vogue embodies luxury SUV excellence. With its commanding presence, refined interior, and exceptional off-road capabilities, this vehicle is designed for those who demand the best in both comfort and capability. Experience unparalleled luxury in any terrain.",
    gallery: [
      "/images/RangeRover.jpg",
      "/images/RangeRover.jpg",
      "/images/RangeRover.jpg"
    ],
    specifications: {
      "Engine": "3.0L Turbo Diesel 6-cylinder",
      "Power": "300 HP",
      "Torque": "480 lb-ft",
      "Fuel Economy": "8.5L/100km",
      "Acceleration 0-100 km/h": "6.2 seconds",
      "Top Speed": "220 km/h (electronically limited)",
      "Transmission": "8-speed automatic",
      "Drive Type": "All-wheel drive",
      "Dimensions": "5052 x 2020 x 1869 mm"
    }
  },
  {
    id: "4",
    name: "BMW X5",
    year: 2022,
    price: " MAD 850,000",
    image: "/images/BWM.jpg",
    featured: false,
    specs: ["SUV", "Essence", "Automatique"],
    fuel: "Essence",
    transmission: "Automatique",
    description: "The BMW X5 combines the versatility of an SUV with the performance of a sports car. This premium vehicle offers a spacious interior, advanced technology, and powerful engine options. Whether you're navigating city streets or exploring off-road trails, the X5 delivers exceptional performance and comfort.",
    gallery: [
      "/images/BWM.jpg",
      "/images/BWM.jpg",
      "/images/BWM.jpg"
    ],
    specifications: {
      "Engine": "3.0L Turbo 6-cylinder",
      "Power": "340 HP",
      "Torque": "332 lb-ft",
      "Fuel Economy": "9.2L/100km",
      "Acceleration 0-100 km/h": "5.5 seconds",
      "Top Speed": "250 km/h (electronically limited)",
      "Transmission": "8-speed automatic",
      "Drive Type": "All-wheel drive",
      "Dimensions": "4922 x 2004 x 1745 mm"
    }
  },
  {
    id: "5",
    name: "Volkswagen Golf GTI",
    year: 2023,
    price: " MAD 320,000",
    image: "/images/volkswagen.jpg",
    featured: false,
    specs: ["Hatchback", "Essence", "Manuelle"],
    fuel: "Essence",
    transmission: "Manuelle",
    description: "The Volkswagen Golf GTI is the perfect blend of practicality and performance. This iconic hot hatch delivers thrilling driving dynamics with its turbocharged engine and precise handling. With its compact size and efficient design, the GTI is ideal for both daily commuting and weekend adventures.",
    gallery: [
      "/images/volkswagen.jpg",
      "/images/volkswagen.jpg",
      "/images/volkswagen.jpg"
    ],
    specifications: {
      "Engine": "2.0L Turbo 4-cylinder",
      "Power": "245 HP",
      "Torque": "273 lb-ft",
      "Fuel Economy": "6.8L/100km",
      "Acceleration 0-100 km/h": "6.4 seconds",
      "Top Speed": "250 km/h (electronically limited)",
      "Transmission": "6-speed manual",
      "Drive Type": "Front-wheel drive",
      "Dimensions": "4284 x 1799 x 1456 mm"
    }
  },
  {
    id: "6",
    name: "Porsche 911 Carrera",
    year: 2023,
    price: " MAD 1,800,000",
    image: "/images/Porsch.jpg",
    featured: false,
    specs: ["Coupe", "Essence", "Automatique"],
    fuel: "Essence",
    transmission: "Automatique",
    description: "The Porsche 911 Carrera is the epitome of sports car perfection. With its iconic design, rear-engine layout, and exceptional performance, this vehicle delivers an unmatched driving experience. Experience the thrill of pure driving pleasure with one of the most celebrated sports cars in automotive history.",
    gallery: [
      "/images/Porsch.jpg",
      "/images/Porsch.jpg",
      "/images/Porsch.jpg"
    ],
    specifications: {
      "Engine": "3.0L Turbo 6-cylinder (flat)",
      "Power": "385 HP",
      "Torque": "331 lb-ft",
      "Fuel Economy": "10.2L/100km",
      "Acceleration 0-100 km/h": "4.2 seconds",
      "Top Speed": "293 km/h",
      "Transmission": "8-speed automatic (PDK)",
      "Drive Type": "Rear-wheel drive",
      "Dimensions": "4519 x 1852 x 1300 mm"
    }
  }
];

const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicleData.find(v => v.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!vehicle) {
    return (
      <div className="vehicle-detail">
        <div className="container">
          <div className="not-found">
            <h2>Vehicle Not Found</h2>
            <p>The vehicle you're looking for doesn't exist or has been removed.</p>
            <Link to="/vehicles" className="btn btn-primary">
              <ChevronLeft size={20} />
              Back to Vehicles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vehicle-detail">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/vehicles">Vehicles</Link> / <span>{vehicle.name}</span>
        </div>

        <div className="vehicle-header">
          <h1 className="vehicle-title">{vehicle.name} {vehicle.year}</h1>
          <div className="vehicle-price">{vehicle.price}</div>
        </div>

        <div className="vehicle-content">
          {/* Image Gallery */}
          <div className="gallery-section">
            <div className="main-image">
              <img src={vehicle.gallery[selectedImage]} alt={vehicle.name} />
            </div>
            <div className="thumbnails">
              {vehicle.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${vehicle.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="info-section">
            <div className="vehicle-specs-tags">
              {vehicle.specs.map((spec, index) => (
                <span className="spec-tag" key={index}>{spec}</span>
              ))}
            </div>

            <p className="vehicle-description">
              {vehicle.description}
            </p>

            <div className="contact-actions">
              <a href="tel:+212123456789" className="btn btn-primary contact-btn">
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/212123456789" target="_blank" rel="noopener noreferrer" className="btn btn-outline contact-btn">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="specifications">
              <h3>Specifications</h3>
              <table>
                <tbody>
                  {Object.entries(vehicle.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-key">{key}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="back-link">
          <Link to="/vehicles" className="btn btn-outline">
            <ChevronLeft size={20} />
            Back to Vehicles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;