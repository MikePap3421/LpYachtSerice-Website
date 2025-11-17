import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { 
  Build, 
  ElectricalServices, 
  Handyman, 
  CleaningServices, 
  Engineering, 
  Support 
} from '@mui/icons-material';
import '/src/components/Home.css';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Build sx={{ fontSize: 50, color: '#274688' }} />,
      title: t('services_mechanical_title'),
      description: t('services_mechanical_description'),
      features: [
        t('services_mechanical_feature1'),
        t('services_mechanical_feature2'),
        t('services_mechanical_feature3'),
        t('services_mechanical_feature4')
      ]
    },
    {
      icon: <Engineering sx={{ fontSize: 50, color: '#274688' }} />,
      title: t('services_conversions_title'),
      description: t('services_conversions_description'),
      features: [
        t('services_conversions_feature1'),
        t('services_conversions_feature2'),
        t('services_conversions_feature3'),
        t('services_conversions_feature4')
      ]
    },
    {
      icon: <ElectricalServices sx={{ fontSize: 50, color: '#274688' }} />,
      title: t('services_electrical_title'),
      description: t('services_electrical_description'),
      features: [
        t('services_electrical_feature1'),
        t('services_electrical_feature2'),
        t('services_electrical_feature3'),
        t('services_electrical_feature4')
      ]
    },
    {
      icon: <Handyman sx={{ fontSize: 50, color: '#274688' }} />,
      title: t('services_maintenance_title'),
      description: t('services_maintenance_description'),
      features: [
        t('services_maintenance_feature1'),
        t('services_maintenance_feature2'),
        t('services_maintenance_feature3'),
        t('services_maintenance_feature4')
      ]
    },
    {
      icon: <CleaningServices sx={{ fontSize: 50, color: '#274688' }} />,
      title: t('services_cleaning_title'),
      description: t('services_cleaning_description'),
      features: [
        t('services_cleaning_feature1'),
        t('services_cleaning_feature2'),
        t('services_cleaning_feature3'),
        t('services_cleaning_feature4')
      ]
    },
    {
      icon: <Support sx={{ fontSize: 50, color: '#274688' }} />,
      title: t('services_consulting_title'),
      description: t('services_consulting_description'),
      features: [
        t('services_consulting_feature1'),
        t('services_consulting_feature2'),
        t('services_consulting_feature3'),
        t('services_consulting_feature4')
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#f2f2f3ff', minHeight: '100vh' }}>
      <Navbar/>
      
      {/* Services Hero Section */}
      <section className="services-hero" style={{ backgroundColor: '#f2f2f3ff' }}>
        <Box sx={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          padding: '6rem 2rem 3rem',
          textAlign: 'center'
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: '#274688',
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            {t('services_hero_title')}
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#1B263B',
              opacity: 0.8,
              maxWidth: 800,
              margin: '0 auto',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.6
            }}
          >
            {t('services_hero_subtitle')}
          </Typography>
        </Box>
      </section>

      {/* Main Services Section */}
      <section className="services-section" style={{ backgroundColor: '#f2f2f3ff' }}>
        <Box sx={{ maxWidth: 1500, margin: '0 auto', padding: '2rem' }}>
          <div className="services-grid">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="service-card-enhanced"
                sx={{ 
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(39, 70, 136, 0.1)',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(39, 70, 136, 0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 20px 40px rgba(39, 70, 136, 0.15)',
                    borderColor: 'rgba(39, 70, 136, 0.3)'
                  }
                }}
              >
                <CardContent sx={{ 
                  padding: '2.5rem', 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {/* Service Icon */}
                  <Box sx={{ 
                    textAlign: 'center', 
                    marginBottom: '1.5rem',
                    padding: '1rem'
                  }}>
                    {service.icon}
                  </Box>

                  {/* Service Title */}
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: '#274688',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      textAlign: 'center',
                      fontSize: { xs: '1.5rem', md: '1.8rem' }
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Service Description */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#1B263B',
                      lineHeight: 1.7,
                      marginBottom: '2rem',
                      flexGrow: 1,
                      fontSize: '1.1rem'
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Service Features */}
                  <Box sx={{ marginTop: 'auto' }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#274688',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        fontSize: '1.1rem'
                      }}
                    >
                      {t('services_includes')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Chip
                          key={featureIndex}
                          label={feature}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(39, 70, 136, 0.1)',
                            color: '#274688',
                            fontWeight: 500,
                            '&:hover': {
                              backgroundColor: 'rgba(39, 70, 136, 0.2)'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </div>
        </Box>
      </section>      
      <Footer />
    </div>
  );
}

export default Services;