import React from 'react';
import ContactUsLogo from '../components/images/ContactUsLogo.jpg'
import { useTranslation } from 'react-i18next';

const RegisterThankyou = () => {
  const { t } = useTranslation();
  return (
    <div className="content-wrapper">
    <div className="image-container">
        <img src={ContactUsLogo} alt="Contact Us" />
      </div>
      <div className="thankyou-message">
          <p>{t('RegisterThankyou')}</p>
        </div>
    </div>
  );
};

export default RegisterThankyou;