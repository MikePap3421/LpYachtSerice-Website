import '/src/components/Home.css';
import Navbar from './Navbar';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import Footer from './Footer';
import { ArrowForward, CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  
  return (
    <div>
      <Navbar />
      
      {/* --- Video Section --- */}
      <section className="home-container">
        <div className="video-background">
          <video autoPlay loop muted playsInline>
            <source src="/src/assets/mainBackgroundVideo.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-text">
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              color: 'white'
            }}
          >
            {t('home_hero_title')} <Box component="span" sx={{ color: '#ffffff' }}><b>{t('home_hero_company')}</b></Box>
          </Typography>
          <Typography 
            variant="h4" 
            sx={{ 
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              opacity: 0.9,
              marginBottom: '3rem',
              fontWeight: 400,
              color: 'white'
            }}
          >
            {t('home_hero_subtitle')}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/services"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: '#274688',
                color: 'white',
                padding: '12px 40px',
                fontSize: '1.2rem',
                fontWeight: 600,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#1B3266',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              {t('home_hero_services_button')}
            </Button>
          </Box>
        </div>
      </section>

      {/* --- About us Section --- */}
      <section className="about-section">
        <Typography 
          variant="h2" 
          className="about-title"
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700
          }}
        >
          {t('home_about_title')}
        </Typography>

        <Box className="cards-section">
          <Card className="info-card">
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 600, color: '#ffffff' }}>
                {t('home_about_our_story_title')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                {t('home_about_our_story_description')}
              </Typography>
              
              <Box sx={{ marginTop: 2 }}>
                {[
                  t('home_about_bullet1'),
                  t('home_about_bullet2'),
                  t('home_about_bullet3'),
                  t('home_about_bullet4')
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <CheckCircle sx={{ color: '#ffffff', marginRight: 1, fontSize: '1.5rem' }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>

          <Card className="info-card-img">
            <CardContent sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100%',
              padding: '0 !important', 
              '&:last-child': { paddingBottom: '0 !important' } 
            }}>
              <img 
                src="/src/assets/gallery/CarPhoto.jpg" 
                alt={t('home_about_image_alt')}
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </CardContent>
          </Card>
        </Box>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="why-choose-us-section">
        <Typography 
          variant="h2" 
          className="why-title"
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700
          }}
        >
          {t('home_why_choose_us_title')}
        </Typography>

        <div className="why-cards">
          <div className="why-card">
            <h3>{t('home_why_card1_title')}</h3>
            <p>{t('home_why_card1_description')}</p>
          </div>

          <div className="why-card">
            <h3>{t('home_why_card2_title')}</h3>
            <p>{t('home_why_card2_description')}</p>
          </div>

          <div className="why-card">
            <h3>{t('home_why_card3_title')}</h3>
            <p>{t('home_why_card3_description')}</p>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="home-cta">
        <Box sx={{ 
          maxWidth: 800, 
          margin: '0 auto', 
          padding: '3rem 2rem',
          textAlign: 'center'
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#274688',
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}
          >
            {t('home_cta_title')}
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#1B263B',
              marginBottom: '2rem',
              opacity: 0.8,
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}
          >
            {t('home_cta_subtitle')}
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#274688',
              color: 'white',
              padding: '12px 40px',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#1B3266',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
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