import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import '../css/DetailPage.css';

type DetailPageProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  returnSection: string;
  link?: string;
}

const DetailPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image, title, subtitle, description, returnSection, link } = location.state as DetailPageProps;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleReturn = () => {
    navigate('/', { state: { scrollTo: returnSection } });
  };

  return (
    <div className="detail-page">
      <div className="detail-container">
        <button className="return-button" onClick={handleReturn}>
          <IoArrowBack /> Back
        </button>

        <div className="detail-image">
          <img src={image} alt={title} />
        </div>

        <div className="detail-content">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="detail-title-link">
              <h1>{title}</h1>
            </a>
          ) : (
            <h1>{title}</h1>
          )}
          <h3>{subtitle}</h3>
          <p className="detail-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
