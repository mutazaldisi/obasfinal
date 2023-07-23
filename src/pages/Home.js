import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../components/images/HomeImg.jpg';
import { useTranslation } from 'react-i18next';


export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={HomeImg} alt="Your description" />
      </div>
      <div className="home-content">
        <h1>{t('Welcome')}</h1>
        <p>{t('WelcomeParagraph')}</p>
        <Link to="/register" className="register-button">{t('RegisterHome')}</Link>
      </div>
    </div>
  );
}