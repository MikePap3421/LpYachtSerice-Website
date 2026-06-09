import './Shared.css';
import './Home.css';
import Navbar from './Navbar';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import Footer from './Footer';
import { ArrowForward, CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BrandsCarousel from './BrandsCarousel';
import { Helmet } from 'react-helmet-async';
import { useState, useRef } from 'react';
import { useScrollReveal } from './useScrollReveal';

function Home() {
  const { t } = useTranslation();

  const whyScrollRef = useRef<HTMLDivElement>(null);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  // One observer per section — fires once on first scroll into view
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollReveal<HTMLElement>();
  const { ref: whyRef,   isVisible: whyVisible }   = useScrollReveal<HTMLElement>();
  const { ref: ctaRef,   isVisible: ctaVisible }   = useScrollReveal<HTMLElement>();

  const handleWhyScroll = () => {
    if (whyScrollRef.current) {
      const container = whyScrollRef.current;
      const firstCard = container.querySelector('.why-card') as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = parseFloat(window.getComputedStyle(container).columnGap || '0');
        const totalStep = cardWidth + gap;
        const newIndex = Math.round(container.scrollLeft / totalStep);
        setActiveWhyIndex(newIndex);
      }
    }
  };

  return (
    <div>
      <Helmet>
        <title>{t('seo_home_title')}</title>
        <meta name="description" content={t('home_hero_subtitle')} />
        <link rel="canonical" href="https://lpyachtservice.gr/" />
      </Helmet>
      <Navbar />

      {/* --- Video Section (above the fold — no reveal) --- */}
      <section className="home-container">
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/gallery/g22PS.png"
          >
            <source src="/mainBackgroundVideo.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-text">
          <Typography variant="h1" className="hero-title">
            {t('home_hero_title')} <span className="hero-company">{t('home_hero_company')}</span>
          </Typography>
          <Typography variant="h4" className="hero-subtitle">
            {t('home_hero_subtitle')}
          </Typography>

          <Box className="hero-buttons">
            <Button
              component={Link}
              to="/services"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              className="hero-button"
            >
              {t('home_hero_services_button')}
            </Button>
          </Box>
        </div>
      </section>

      {/* --- About us Section --- */}
      <section
        ref={aboutRef}
        className={`about-section reveal ${aboutVisible ? 'is-visible' : ''}`}
      >
        <Typography variant="h2" className="about-title">
          {t('home_about_title')}
        </Typography>

        <Box className="cards-section">
          <Card className={`info-card reveal reveal-delay-1 ${aboutVisible ? 'is-visible' : ''}`}>
            <CardContent>
              <Typography variant="h5" className="info-card-title">
                {t('home_about_our_story_title')}
              </Typography>
              <div className={`about-mobile-collapsible ${isAboutExpanded ? 'is-expanded' : ''}`}>
                <Typography variant="body1" className="info-card-description">
                  {t('home_about_our_story_description')}
                </Typography>

                <Box className="info-card-list">
                  {[
                    t('home_about_bullet1'),
                    t('home_about_bullet2'),
                    t('home_about_bullet3')
                  ].map((item, index) => (
                    <Box key={index} className="list-item">
                      <CheckCircle className="check-icon" />
                      <Typography variant="body2" className="list-text">
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </div>

              <Button
                type="button"
                className="about-read-more-button"
                aria-expanded={isAboutExpanded}
                onClick={() => setIsAboutExpanded((current) => !current)}
              >
                {isAboutExpanded ? t('home_about_read_less') : t('home_about_read_more')}
              </Button>
            </CardContent>
          </Card>

          <Card className={`info-card-img reveal reveal-delay-2 ${aboutVisible ? 'is-visible' : ''}`}>
            <CardContent className="img-card-content">
              <img
                src="/gallery/CarPhoto.jpg"
                alt={t('home_about_image_alt')}
                loading="lazy"
              />
            </CardContent>
          </Card>
        </Box>
      </section>

      <BrandsCarousel />

      {/* --- WHY CHOOSE US SECTION --- */}
      <section
        ref={whyRef}
        className={`why-choose-us-section reveal ${whyVisible ? 'is-visible' : ''}`}
      >
        <Typography variant="h2" className="why-title">
          {t('home_why_choose_us_title')}
        </Typography>

        <div
          className="why-cards"
          ref={whyScrollRef}
          onScroll={handleWhyScroll}
        >
          <div className={`why-card reveal reveal-delay-1 ${whyVisible ? 'is-visible' : ''}`}>
            <h3>{t('home_why_card1_title')}</h3>
            <p>{t('home_why_card1_description')}</p>
          </div>

          <div className={`why-card reveal reveal-delay-2 ${whyVisible ? 'is-visible' : ''}`}>
            <h3>{t('home_why_card2_title')}</h3>
            <p>{t('home_why_card2_description')}</p>
          </div>

          <div className={`why-card reveal reveal-delay-3 ${whyVisible ? 'is-visible' : ''}`}>
            <h3>{t('home_why_card3_title')}</h3>
            <p>{t('home_why_card3_description')}</p>
          </div>
        </div>

        <div className="dot-container">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`dot ${activeWhyIndex === i ? 'active' : ''}`} />
          ))}
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section
        ref={ctaRef}
        className={`home-cta reveal ${ctaVisible ? 'is-visible' : ''}`}
      >
        <Box className="cta-container">
          <Typography variant="h3" className="cta-title">
            {t('home_cta_title')}
          </Typography>
          <Typography variant="h6" className="cta-subtitle">
            {t('home_cta_subtitle')}
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            className="cta-button"
          >
            {t('home_cta_button')}
          </Button>
        </Box>
      </section>

      <Footer />
    </div>
  );
}

export default Home;