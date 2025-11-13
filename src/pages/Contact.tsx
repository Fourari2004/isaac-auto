import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <section className="hero-section">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-subtitle">
            Get in touch with our team for any inquiries about our vehicles or services
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-description">
                Our team is ready to assist you with any questions about our vehicles, 
                services, or the purchasing process. Reach out to us through any of 
                the channels below.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} className="contact-icon" />
                  <div>
                    <h3>Our Location</h3>
                    <p>Casablanca, Morocco</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone size={24} className="contact-icon" />
                  <div>
                    <h3>Phone Number</h3>
                    <p>+212 123 456 789</p>
                  </div>
                </div>

                <div className="contact-item">
                  <Mail size={24} className="contact-icon" />
                  <div>
                    <h3>Email Address</h3>
                    <p>info@isaacauto.ma</p>
                  </div>
                </div>

                <div className="contact-item">
                  <MessageCircle size={24} className="contact-icon" />
                  <div>
                    <h3>WhatsApp</h3>
                    <p>+212 123 456 789</p>
                  </div>
                </div>
              </div>

              <div className="business-hours">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="map-section">
              <h2>Our Location</h2>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106364.0554959199!2d-7.66087985!3d33.5668224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d25df1b0f5d%3A0x55e71b741b1b1b1b!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sma!4v1650000000000!5m2!1sen!2sma"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ISAAC AUTO Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;