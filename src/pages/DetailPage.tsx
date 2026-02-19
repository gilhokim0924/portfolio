import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import '../css/DetailPage.css';

type DetailPageProps = {
  stackTable?: { category: string; tools: string }[];
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
  const { image, title, subtitle, description, returnSection, link, stackTable } = location.state as DetailPageProps;

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
          {stackTable && stackTable.length > 0 && (
            <div className="detail-stack-table-wrapper">
              <h4>Stack</h4>
              <table className="detail-stack-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {stackTable.map((row) => (
                    <tr key={row.category}>
                      <td>{row.category}</td>
                      <td>{row.tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="detail-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
