import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Logo from './images/Logo.jpg'
import LanguageSwitcher from "../locales/languageSwitcher";
import { useTranslation } from 'react-i18next';


export default function NavBar () {

  const { t } = useTranslation();

    return (
        
        <nav className="nav">
          <img src={Logo} alt="Logo" style={{width: "150px", height: "70px", marginTop: "20px"}} />
           
            <Link to="/" className="title">
                Ottawa Basketball Association
            </Link>
            <LanguageSwitcher />
            <ul>


            <CustomLink to="/home">{t('Home')}</CustomLink>
            <CustomLink to="/services">{t('Services')}</CustomLink>
            <CustomLink to="/league">{t('League')}</CustomLink>
            <CustomLink to="/staff">{t('Staff')}</CustomLink>
            <CustomLink to="/facilities">{t('Facilities')}</CustomLink>
            <CustomLink to="/contactUs">{t('ContactUs')}</CustomLink>         
            <CustomLink to="/register">{t('Register')}</CustomLink>
            
  
            </ul>
        </nav>
    );
                    }

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
      
        return (
          <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
              {children}
            </Link>
          </li>
        )
}


