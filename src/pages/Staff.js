import React from 'react';
import person from '../components/images/Person.jpg';
import { useTranslation } from 'react-i18next';


const staffData = [
  {
    image: person,
    title: 'Mark Smith',
    description: 'our league coordinator, combines his basketball expertise and passion for community to oversee our operations.'
  },
  {
    image: person,
    title: 'Adam Silver',
    description: 'our league coordinator, combines his basketball expertise and passion for community to oversee our operations. '
  },
  {
    image: person,
    title: 'Ginny karag',
    description: 'our league coordinator, combines his basketball expertise and passion for community to oversee our operations.'
  },
];

export default function Staff() {
  const { t } = useTranslation();
  
  return (
    <div className="staff-container">
      <h1 className="staffTittle">{t('StaffTitle')}</h1>
      <div className="staff-cards-container">
        {staffData.map((staff, index) => (
          <div className="staff-card" key={index}>
            <img src={staff.image} alt={staff.title}  style={{ width: '200px', height: '75'}}/>
            <h2>{staff.title}</h2>
            <p>{t('StaffDescription')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
