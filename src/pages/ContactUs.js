import React from 'react';
import ContactUsLogo from '../components/images/ContactUsLogo.jpg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-us-container">
      <div className="image-container">
        <img src={ContactUsLogo} alt="Contact Us" />
      </div>
      <div className="form-container">
        <h1>{t('ContactUsTitle')}</h1>
        <form>
          <div className="form-field">
            <input type="text" placeholder={t('ContactName')} />
          </div>
          <div className="form-field">
            <input type="email" placeholder={t('ContactEmail')} />
          </div>
          <div className="form-field">
            <input type="tel" placeholder={t('ContactPhone')} />
          </div>
          <div className="form-field">
            <textarea placeholder={t('ContactInquiries')} rows="4"></textarea>
          </div>
          <div className="form-field">
            <Link to="/ContactUsThankyou" className='button'>{t('ContactSubmit')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
