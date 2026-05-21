import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from 'react-helmet-async';
import { Typography, Card, CardContent, Chip, Button } from '@mui/material';
import { Build, ElectricalServices, Handyman, PrecisionManufacturing, Engineering, Support } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import './Shared.css';
import './Services.css';

function Services() {
  const { t } = useTranslation();
  const serviceScrollRef = useRef<HTMLDivElement>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const handleServiceScroll = () => {
    if (serviceScrollRef.current) {
      const container = serviceScrollRef.current;
      const firstCard = container.querySelector('.service-card-enhanced') as HTMLElement;
      if (firstCard) {
        const gap = parseFloat(window.getComputedStyle(container).columnGap || '0');
        const totalStep = firstCard.offsetWidth + gap;
        const newIndex = Math.round(container.scrollLeft / totalStep);
        setActiveServiceIndex(newIndex);
      }
    }
  };

  const services = [
    { icon: <Build />, title: 'mechanical', features: 4 },
    { icon: <Engineering />, title: 'conversions', features: 4 },
    { icon: <ElectricalServices />, title: 'electrical', features: 4 },
    { icon: <Handyman />, title: 'maintenance', features: 4 },
    { icon: <PrecisionManufacturing />, title: 'auxiliary', features: 4 },
    { icon: <Support />, title: 'consulting', features: 4 }
  ];

  return (
    <div className="page-bg">
      <Helmet>
        <title>LP Yacht Service | {t('nav.services')}</title>
      </Helmet>
      <Navbar />
      
      <section className="services-hero-section">
        <Typography variant="h2" className="services-main-title">{t('services_hero_title')}</Typography>
        <Typography variant="h5" className="services-subtitle">{t('services_hero_subtitle')}</Typography>
      </section>

      <section className="services-grid-container">
        <div className="services-slider" ref={serviceScrollRef} onScroll={handleServiceScroll}>
          {services.map((service, index) => (
            <Card key={index} className="service-card-enhanced">
              <CardContent className="service-card-content">
                <div className="service-icon-wrapper">{service.icon}</div>
                <Typography variant="h4" className="service-title-text">{t(`services_${service.title}_title`)}</Typography>
                <Typography variant="body1" className="service-description-text">{t(`services_${service.title}_description`)}</Typography>
                
                <div className="service-features-area">
                  <Typography variant="h6" className="includes-text">{t('services_includes')}</Typography>
                  <div className="chip-group">
                    {[1, 2, 3, 4].map((num) => (
                      <Chip key={num} label={t(`services_${service.title}_feature${num}`)} className="service-chip" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="dot-container">
          {services.map((_, i) => (
            <div key={i} className={`dot ${activeServiceIndex === i ? 'active' : ''}`} />
          ))}
        </div>
      </section>

      <section className="projects-teaser-section">
        <Typography variant="h3" className="teaser-title">{t('projects_teaser_title')}</Typography>
        <Typography variant="h6" className="teaser-subtitle">{t('projects_teaser_subtitle')}</Typography>

        <div className="teaser-grid">
          {[6, 20, 1, 8].map((num) => (
            <Card key={num} className="teaser-card">
              <img src={`/gallery/g${num}.jpg`} alt="Teaser" className="teaser-img" />
            </Card>
          ))}
        </div>

        <Button component={Link} to="/projects" variant="contained" className="primary-button">
          {t('projects_teaser_button')}
        </Button>
      </section>
      
      <Footer />
    </div>
  );
}

export default Services;
