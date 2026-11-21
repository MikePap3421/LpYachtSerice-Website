import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from 'react-helmet-async';
import { Typography, Card, CardContent, Chip, Button } from '@mui/material';
import { Build, ElectricalServices, Handyman, PrecisionManufacturing, Anchor, Support, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import './Shared.css';
import './Services.css';
import { useScrollReveal } from './useScrollReveal';

function Services() {
  const { t, i18n } = useTranslation();
  const isGreek = i18n.language?.startsWith('el');
  const serviceScrollRef = useRef<HTMLDivElement>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Scroll reveal
  const { ref: heroRef,     isVisible: heroVisible }     = useScrollReveal<HTMLElement>();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollReveal<HTMLElement>();
  const { ref: teaserRef,   isVisible: teaserVisible }   = useScrollReveal<HTMLElement>();

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
    { icon: <Anchor />, title: 'conversions', features: 4 },
    { icon: <ElectricalServices />, title: 'electrical', features: 4 },
    { icon: <Handyman />, title: 'maintenance', features: 4 },
    { icon: <PrecisionManufacturing />, title: 'auxiliary', features: 4 },
    { icon: <Support />, title: 'consulting', features: 4 }
  ];

  const pageTitle = isGreek
    ? `${t('nav.services')} Σκαφών Πρέβεζα | LP Yacht Service`
    : `Yacht & Marine ${t('nav.services')} in Preveza | LP Yacht Service`;

  const metaDescription = isGreek
    ? `${t('services_engine_replacement_title')} (Volvo, Yanmar), μηχανολογικές & ηλεκτρολογικές εργασίες, βίντσι & εργάτης, υδραυλικά και προληπτική συντήρηση σκαφών στην Πρέβεζα.`
    : `${t('services_engine_replacement_title')} (Volvo, Yanmar), marine mechanics, winch & windlass repair, electrical & hydraulic systems, and preventive yacht maintenance in Preveza, Greece.`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isGreek ? 'Αρχική' : 'Home', item: 'https://lpyachtservice.gr/' },
          { '@type': 'ListItem', position: 2, name: t('nav.services'), item: 'https://lpyachtservice.gr/services' }
        ]
      },
      {
        '@type': 'ItemList',
        name: t('services_hero_title'),
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Service',
              name: t('services_engine_replacement_title'),
              description: t('services_engine_replacement_description'),
              provider: { '@type': 'LocalBusiness', name: 'LP Yacht Service', url: 'https://lpyachtservice.gr' },
              areaServed: ['Preveza', 'Aktio', 'Lefkada', 'Ionian Islands'],
              serviceType: ['Marine engine replacement', 'Marine engine installation', 'Engine alignment', 'Volvo & Yanmar commissioning']
            }
          },
          ...services.map((service, idx) => ({
            '@type': 'ListItem',
            position: idx + 2,
            item: {
              '@type': 'Service',
              name: t(`services_${service.title}_title`),
              description: t(`services_${service.title}_description`),
              provider: { '@type': 'LocalBusiness', name: 'LP Yacht Service', url: 'https://lpyachtservice.gr' },
              areaServed: ['Preveza', 'Aktio', 'Lefkada', 'Ionian Islands']
            }
          }))
        ]
      }
    ]
  };

  return (
    <div className="page-bg">
      <Helmet htmlAttributes={{ lang: isGreek ? 'el' : 'en' }}>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="yacht engine replacement Preveza, marine engine installation Greece, Volvo Penta service Preveza, Yanmar engine installation, boat engine alignment, marine electrician Preveza, winch windlass repair, αντικατάσταση κινητήρα σκάφους Πρέβεζα, μηχανικός σκαφών Πρέβεζα"
        />
        <link rel="canonical" href="https://lpyachtservice.gr/services" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lpyachtservice.gr/services" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://lpyachtservice.gr/social-share.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://lpyachtservice.gr/social-share.png" />

        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <section
        ref={heroRef}
        className={`services-hero-section reveal ${heroVisible ? 'is-visible' : ''}`}
      >
        <Typography component="h1" variant="h2" className="services-main-title">
          {t('services_hero_title')}
        </Typography>
        <Typography component="p" variant="h5" className="services-subtitle">
          {t('services_hero_subtitle')}
        </Typography>
      </section>

      <section
        ref={servicesRef}
        className={`services-section-container reveal ${servicesVisible ? 'is-visible' : ''}`}
      >
        <div className="services-slider" ref={serviceScrollRef} onScroll={handleServiceScroll}>
          <Card className="service-card-enhanced featured-engine-card">
            <CardContent className="featured-engine-content">
              <div className="featured-engine-main">
                <div className="service-icon-wrapper featured-engine-icon" aria-hidden="true">
                  <Settings />
                </div>
                <div className="featured-engine-copy">
                  <Typography component="h2" variant="h4" className="service-title-text">
                    {t('services_engine_replacement_title')}
                  </Typography>
                  <Typography variant="body1" className="service-description-text">
                    {t('services_engine_replacement_description')}
                  </Typography>
                </div>
              </div>
              <div className="featured-engine-features">
                <Typography component="h3" variant="h6" className="includes-text">
                  {t('services_includes')}
                </Typography>
                <div className="chip-group">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Chip
                      key={num}
                      label={t(`services_engine_replacement_feature${num}`)}
                      className="service-chip"
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {services.map((service, index) => (
            <Card key={index} className="service-card-enhanced">
              <CardContent className="service-card-content">
                <div className="service-icon-wrapper" aria-hidden="true">
                  {service.icon}
                </div>
                <Typography component="h2" variant="h4" className="service-title-text">
                  {t(`services_${service.title}_title`)}
                </Typography>
                <Typography variant="body1" className="service-description-text">
                  {t(`services_${service.title}_description`)}
                </Typography>

                <div className="service-features-area">
                  <Typography component="h3" variant="h6" className="includes-text">
                    {t('services_includes')}
                  </Typography>
                  <div className="chip-group">
                    {[1, 2, 3, 4].map((num) => (
                      <Chip
                        key={num}
                        label={t(`services_${service.title}_feature${num}`)}
                        className="service-chip"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="dot-container" aria-hidden="true">
          {Array.from({ length: services.length + 1 }, (_, i) => (
            <div key={i} className={`dot ${activeServiceIndex === i ? 'active' : ''}`} />
          ))}
        </div>
      </section>

      <section
        ref={teaserRef}
        className={`projects-teaser-section reveal ${teaserVisible ? 'is-visible' : ''}`}
      >
        <Typography component="h2" variant="h3" className="teaser-title">
          {t('projects_teaser_title')}
        </Typography>
        <Typography component="p" variant="h6" className="teaser-subtitle">
          {t('projects_teaser_subtitle')}
        </Typography>

        <div className="teaser-grid">
          {[6, 20, 1, 8].map((num) => (
            <Card key={num} className="teaser-card">
              <img
                src={`/gallery/g${num}.jpg`}
                alt={t('projects_teaser_image_alt', { number: num })}
                className="teaser-img"
                loading="lazy"
                decoding="async"
              />
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