import './Shared.css';
import { Phone, Mail, WhatsApp, Instagram } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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

  const handleViberClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'viber://chat?number=306945663120';
    } else {
      window.open('https://viber.me/+306945663120', '_blank', 'noopener,noreferrer');
    }
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/lp_yacht_service', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Left: About --- */}
        <div className="footer-about">
          <h3>{t('footer_company_name')}</h3>
          <p>{t('footer_description')}</p>
        </div>

        {/* --- Right: Contact with 2-column inner layout --- */}
        <div className="footer-contact">
          <h4>{t('footer_contact_title')}</h4>

          <div className="footer-contact-inner">
            {/* Col 1: details */}
            <ul>
              <li>
                <Phone className="footer-icon" />
                <a href="tel:+306945663120">{t('footer_phone')}</a>
              </li>
              <li>
                <Mail className="footer-icon" />
                <a href="mailto:lpyachtservice@gmail.com">{t('footer_email')}</a>
              </li>
              <li>{t('footer_location')}</li>
            </ul>

            {/* Col 2: buttons */}
            <div className="social-icons">
              <button
                onClick={handleWhatsAppClick}
                className="whatsapp-button"
                aria-label="WhatsApp"
              >
                <WhatsApp sx={{ fontSize: 20 }} />
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
                  className="viber-icon-small"
                />
                <span className="button-text">
                  {t('footer_viber', 'Chat on Viber')}
                </span>
              </button>

              <button
                onClick={handleInstagramClick}
                className="instagram-button"
                aria-label="Instagram"
              >
                <Instagram sx={{ fontSize: 20 }} />
                <span className="button-text">
                  {t('footer_instagram', 'Follow on Instagram')}
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {t('footer_copyright')}
          {' · '}
          <Link
            to="/privacy"
            style={{
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.95)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
          >
            {t('footer_privacy_link')}
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;