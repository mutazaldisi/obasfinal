import React from 'react';
import { useTranslation } from 'react-i18next';


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher-container">
      <label htmlFor="language-select">Select Language:</label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={changeLanguage}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
