import '/src/components/Home.css';
import Navbar from './Navbar';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import Footer from './Footer';
import { ArrowForward, CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Home() {
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
            Καλώς Ήρθατε στην <Box component="span" sx={{ color: '#ffffff' }}><b>LP Yacht Service</b></Box>
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
            Ποιότητα, εμπιστοσύνη και εμπειρία σε κάθε έργο
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
              Δείτε τις Υπηρεσίες μας
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
          Σχετικά με Εμάς
        </Typography>

        <Box className="cards-section">
          <Card className="info-card">
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 600, color: '#ffffff' }}>
                Η Ιστορία μας
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                Η LP Yacht Service είναι μια οικογενειακή επιχείρηση με βαθιές ρίζες στη ναυπηγική βιομηχανία. 
                Με πάνω από 15 χρόνια εμπειρίας, έχουμε αναπτύξει ένα πάθος για την τέλεια εκτέλεση κάθε έργου 
                και την απόλυτη ικανοποίηση των πελατών μας. Εξειδικευόμαστε σε ολοκληρωμένες λύσεις συντήρησης 
                και επισκευής σκαφών, συνδυάζοντας παραδοσιακή τεχνογνωσία με σύγχρονες τεχνολογίες.
              </Typography>
              
              <Box sx={{ marginTop: 2 }}>
                {[
                  "Εξειδικευμένο τεχνικό προσωπικό",
                  "Ποιότητα υλικών και υπηρεσιών", 
                  "Γρήγορη και αξιόπιστη εξυπηρέτηση",
                  "Διαφανή τιμολόγηση και πολιτική"
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                    <CheckCircle sx={{ color: '#ffffff', marginRight: 1, fontSize: '1.2rem' }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>

          <Card className="info-card-img">
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img 
                src="/src/assets/mainlogo.png" 
                alt="LP Yacht Service Logo" 
                style={{ 
                  width: '100%', 
                  maxWidth: '350px',
                  height: 'auto'
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
          Γιατί να μας Επιλέξετε
        </Typography>

        <div className="why-cards">
          <div className="why-card">
            <h3>⚙️ Εξειδίκευση & Εμπειρία</h3>
            <p>
              Με πολυετή εμπειρία στη συντήρηση και επισκευή μηχανών σκαφών, 
              προσφέρουμε ολοκληρωμένες λύσεις με τεχνική ακρίβεια και υπευθυνότητα. 
              Κάθε έργο εκτελείται με ακρίβεια και προσοχή στη λεπτομέρεια.
            </p>
          </div>

          <div className="why-card">
            <h3>⏱️ Άμεση & Αξιόπιστη Εξυπηρέτηση</h3>
            <p>
              Αντιλαμβανόμαστε τη σημασία του χρόνου σας. Αναλαμβάνουμε κάθε εργασία 
              με συνέπεια και ταχύτητα, διασφαλίζοντας την άμεση παράδοση του σκάφους 
              σας σε άριστη κατάσταση. Διαθέσιμοι 24/7 για επείγουσες ανάγκες.
            </p>
          </div>

          <div className="why-card">
            <h3>⚓ Ποιότητα & Εμπιστοσύνη</h3>
            <p>
              Εργαζόμαστε με γνώμονα την ποιότητα και τη διαφάνεια. Χρησιμοποιούμε 
              μόνο τα καλύτερα υλικά και εξοπλισμό. Οι πελάτες μας γνωρίζουν ότι μπορούν 
              να μας εμπιστευτούν για κάθε τεχνική ανάγκη του σκάφους τους.
            </p>
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
            Έτοιμοι να Αρχίσουμε το Επόμενο Σας Project;
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
            Επικοινωνήστε μαζί μας σήμερα για δωρεάν τεχνική γνώμη και προσφορά
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
            Επικοινωνήστε Τώρα
          </Button>
        </Box>
      </section>

      <Footer />
    </div>
  );
}

export default Home;