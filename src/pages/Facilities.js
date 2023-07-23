import React from 'react';
import Gym1 from '../components/images/Gym1.jpg';
import Gym2 from '../components/images/Gym2.jpg';
import { useTranslation } from 'react-i18next'; 

const Facilities = () => {
  const { t } = useTranslation();
  return (
    <div className="facilities-container">
      <h1 className="titleLocation">{t('FacilitiesTitle')}</h1>
      <div className="facility">
        <div className="facility-image">
          <img src={Gym1} alt="Facility 1" />
        </div>
        <div className="facility-details">
          <p className="facility-address">4101 Innovation Dr,<br></br> Ottawa, ON K2K 0J3</p>
          <p className="facility-phone">Telephone: 613-737-1111</p>
          <p className="facility-email">Email: OBAS@hotmail.com</p>
        </div>

        <div className='hours'>
        <p className="facility-hours">{t('Facilitieshours')}</p>

        </div>

        <div className="facility-map">
          <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.411971115642!2d-75.9304977!3d45.340495499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1ff863df65725%3A0xd008faa29579070d!2s4101%20Innovation%20Dr%2C%20Kanata%2C%20ON%20K2K%200J3!5e0!3m2!1sen!2sca!4v1688280299589!5m2!1sen!2sca" 
                width="300" 
                height="100" 
                style={{border:0, marginLeft: "100px",marginTop:"25px"}} 
                
                loading="lazy" 
                title="Google Maps Embed">
                

            </iframe>
          </div>
      </div>
      <div className="facility">
        <div className="facility-image">
          <img src={Gym2} alt="Facility 2" />
        </div>
        <div className="facility-details">
          <p className="facility-address">1701 Woodroffe Ave,<br></br> 
          Nepean, ON K2G 1W2</p>
          <p className="facility-phone">Telephone: 613-737-1111</p>
          <p className="facility-email">Email: OBAS@hotmail.com</p>
 
        </div>

        <div className='hours'>
        <p className="facility-hours">{t('Facilitieshours')}</p>

        </div>

        <div className="facility-map">

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.109754860498!2d-75.7467609!3d45.3264061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0776460adb0f%3A0x53c5d6a977a09f38!2s1701%20Woodroffe%20Ave%2C%20Nepean%2C%20ON%20K2G%200C4!5e0!3m2!1sen!2sca!4v1688280906738!5m2!1sen!2sca" 
                width="300" 
                height="100" 
                style={{border:0, marginLeft: "100px",marginTop:"25px"}} 
                
                loading="lazy" 
                title="Google Maps Embed">
            </iframe>

        
        </div>

        
      </div>
    </div>
  );
};

export default Facilities;

