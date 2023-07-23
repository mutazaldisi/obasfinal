import React from 'react';
import { Link } from 'react-router-dom';
import Service1 from '../components/images/Service1.jpg';
import Service2 from '../components/images/Service2.jpg';
import Service3 from '../components/images/Service3.jpg';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="services-container">
      <div className="service-box">
        <h3>{t('Service1Title')}</h3>
        <img src={Service1} alt="Description 1" />
        <p>{t('Service1Description')}</p>
        <Link to="/register" className="register-button">{t('Register')}</Link>
      </div>
      <div className="service-box">
        <h3>{t('Service2Title')}</h3>
        <img src={Service2} alt="Description 2" />
        <p>{t('Service2Description')}</p>
        <Link to="/register" className="register-button">{t('Register')}</Link>
      </div>
      <div className="service-box">
        <h3>{t('Service3Title')}</h3>
        <img src={Service3} alt="Description 3" />
        <p>{t('Service3Description')}</p>
        <Link to="/register" className="register-button">{t('Register')}</Link>
      </div>
    </div>
  );
}

