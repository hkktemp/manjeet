import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="page-title">Welcome to Our Digital Learning Space</h1>
        <div className="content">
          <p>
            Embark on a journey of digital transformation and innovation. We provide 
            cutting-edge solutions and comprehensive learning resources to help you 
            master the skills of tomorrow.
          </p>
          <p>
            Our platform offers a unique blend of theoretical knowledge and practical 
            experience, ensuring you're well-equipped to tackle real-world challenges 
            in the ever-evolving digital landscape.
          </p>
          <div className="cta-buttons">
            <Link to="/gallery" className="cta-button primary">
              Explore Our Work
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          text-align: center;
          padding: 2rem 0;
        }
        
        .cta-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-top: 3rem;
        }
        
        .cta-button {
          padding: 1rem 2.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .primary {
          background: linear-gradient(45deg, #004e92, #000428);
          color: white;
        }
        
        .secondary {
          border: 2px solid #004e92;
          color: white;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 78, 146, 0.4);
        }
        
        @media (max-width: 768px) {
          .cta-buttons {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
