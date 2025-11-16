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

function Services() {
  const services = [
    {
      icon: <Build sx={{ fontSize: 50, color: '#274688' }} />,
      title: "Μηχανικές Εργασίες",
      description: "Εξειδικευμένες υπηρεσίες επισκευής και συντήρησης μηχανών σκαφών. Πλήρης συντήρηση, επιδιόρθωση βλαβών και αναβάθμιση συστημάτων με γνώση και εμπειρία σε όλους τους τύπους κινητήρων.",
      features: ["Συντήρηση κινητήρων", "Επιδιόρθωση βλαβών", "Αναβαθμίσεις", "Διαγνωστικά"]
    },
    {
      icon: <Engineering sx={{ fontSize: 50, color: '#274688' }} />,
      title: "Μετατροπές & Αναβαθμίσεις",
      description: "Επαγγελματικές υπηρεσίες μετατροπών και αναβαθμίσεων σκαφών. Αναλαμβάνουμε τροποποιήσεις για βελτίωση απόδοσης, αλλαγές διαμόρφωσης και προσαρμογές σύμφωνα με τις ανάγκες σας.",
      features: ["Ανακατασκευές", "Τροποποιήσεις", "Βελτιστοποιήσεις", "Προσαρμογές"]
    },
    {
      icon: <ElectricalServices sx={{ fontSize: 50, color: '#274688' }} />,
      title: "Ηλεκτρικά Συστήματα",
      description: "Επαγγελματικός έλεγχος, αναβάθμιση και επιδιόρθωση ηλεκτρικών συστημάτων για ασφαλή και αξιόπιστη λειτουργία του σκάφους σας.",
      features: ["Εγκαταστάσεις", "Επιδιορθώσεις", "Συστήματα ασφαλείας", "Αυτοματισμοί"]
    },
    {
      icon: <Handyman sx={{ fontSize: 50, color: '#274688' }} />,
      title: "Συντήρηση Σκαφών",
      description: "Ολοκληρωμένα προγράμματα συντήρησης για όλα τα είδη σκαφών. Προληπτική συντήρηση, ελέγχους ασφαλείας και προγραμματισμένες επεμβάσεις.",
      features: ["Προγραμματισμένη συντήρηση", "Έλεγχοι ασφαλείας", "Αντικαταστάσεις", "Επιθεωρήσεις"]
    },
    {
      icon: <CleaningServices sx={{ fontSize: 50, color: '#274688' }} />,
      title: "Καθαρισμός & Φροντίδα",
      description: "Εξειδικευμένες υπηρεσίες καθαρισμού και φροντίδας σκαφών. Πλήρης καθαρισμός εσωτερικών και εξωτερικών χώρων, πολυλόγηση και προστατευτικές επεμβάσεις.",
      features: ["Εξωτερικός καθαρισμός", "Εσωτερικός καθαρισμός", "Πολυλόγηση", "Προστασία"]
    },
    {
      icon: <Support sx={{ fontSize: 50, color: '#274688' }} />,
      title: "Συμβουλευτικές Υπηρεσίες",
      description: "Επαγγελματικές συμβουλές για τη συντήρηση, βελτιστοποίηση και φροντίδα του σκάφους σας. Τεχνικές γνώμες και λύσεις προσαρμοσμένες στις ανάγκες σας.",
      features: ["Τεχνικές γνώμες", "Σχεδιασμός projects", "Υποστήριξη", "Συμβουλές"]
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
            Υπηρεσίες
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
            Εξειδικευμένες λύσεις για κάθε ανάγκη του σκάφους σας. 
            Ποιότητα, αξιοπιστία και επαγγελματισμός σε κάθε έργο.
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
                      Περιλαμβάνει:
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

      {/* Call to Action Section */}
      <section className="services-cta" style={{ backgroundColor: '#f2f2f3ff' }}>
        <Box sx={{ 
          maxWidth: 800, 
          margin: '4rem auto', 
          padding: '4rem 2rem',
          textAlign: 'center',
          backgroundColor: '#274688',
          borderRadius: 3,
          color: 'white'
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700,
              marginBottom: '1.5rem',
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Έτοιμοι να αναλάβουμε το επόμενο σας Project;
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              marginBottom: '2.5rem',
              opacity: 0.9,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6
            }}
          >
            Επικοινωνήστε μαζί μας για δωρεάν τεχνική γνώμη και προσφορά
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              📞 +30 6945663120
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              ✉️ lpyachtservice@gmail.com
            </Typography>
          </Box>
        </Box>
      </section>
      
      <Footer />
    </div>
  );
}

export default Services;