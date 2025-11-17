import '/src/components/Home.css';
import { Facebook, Instagram, Phone, Mail } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Left Section --- */}
        <div className="footer-about">
          <h3>{t('footer_company_name')}</h3>
          <p>
            {t('footer_description')}
          </p>
        </div>

        {/* --- Middle Section (Contact Info) --- */}
        <div className="footer-contact">
          <h4>{t('footer_contact_title')}</h4>
          <ul>
            <li><Phone className="footer-icon" /> {t('footer_phone')}</li>
            <li><Mail className="footer-icon" /> {t('footer_email')}</li>
            <li>{t('footer_location')}</li>
          </ul>
        </div>

        {/* --- Right Section (Socials) --- */}
        <div className="footer-social">
          <h4>{t('footer_follow_us')}</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {t('footer_copyright')}</p>
      </div>
    </footer>
  );
}

export default Footer;