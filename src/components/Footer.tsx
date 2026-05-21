import './Shared.css';
import { Phone, Mail, WhatsApp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import viberIcon from '../assets/viber.png';

function Footer() {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const phoneNumber = '306945663120';
    const message = t(
      'whatsapp_default_message',
      'Hello! I would like to get more information about your services.'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // ✅ Viber opens in blank tab + app detection + download fallback
  const handleViberClick = () => {
    const phoneNumber = '306945663120';
    const viberAppLink = `viber://chat?number=${phoneNumber}`;
    const viberDownloadLink = 'https://www.viber.com/download/';

    const newTab = window.open('', '_blank');

    if (!newTab) return;

    // Try opening Viber app
    newTab.location.href = viberAppLink;

    // If Viber fails, redirect to download page after 1.2s
    setTimeout(() => {
      newTab.location.href = viberDownloadLink;
    }, 900);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Left Section --- */}
        <div className="footer-about">
          <h3>{t('footer_company_name')}</h3>
          <p>{t('footer_description')}</p>
        </div>

        {/* --- Middle Section --- */}
        <div className="footer-contact">
          <h4>{t('footer_contact_title')}</h4>
          <ul>
            <li><Phone className="footer-icon" /> {t('footer_phone')}</li>
            <li><Mail className="footer-icon" /> {t('footer_email')}</li>
            <li>{t('footer_location')}</li>
          </ul>
        </div>

        {/* --- Right Section --- */}
        <div className="footer-social">
          <h4>{t('footer_contact_us')}</h4>
          <div className="social-icons">

            <button 
              onClick={handleWhatsAppClick}
              className="whatsapp-button"
              aria-label="WhatsApp"
            >
              <WhatsApp sx={{ fontSize: 32 }} />
              <span className="button-text">
                {t('footer_whatsapp', 'Chat on WhatsApp')}
              </span>
            </button>

            <button 
              onClick={handleViberClick}
              className="viber-button"
              aria-label="Viber"
            >
              <img 
                src={viberIcon}
                alt="Viber" 
                className="viber-icon"
              />
              <span className="button-text">
                {t('footer_viber', 'Chat on Viber')}
              </span>
            </button>

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
