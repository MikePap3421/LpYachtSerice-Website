import '/src/components/Home.css';
import Navbar from './Navbar';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Footer from './footer';

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
          <h1>Καλώς Ήρθατε στην <b>LP Yacht Service</b></h1>
          <p>Ποιότητα, εμπιστοσύνη και εμπειρία σε κάθε έργο</p>
        </div>
      </section>

      {/* --- About us Section --- */}
      <section className="about-section">
        <h1 className="about-title">Σχετικά με Εμάς</h1>

        <Box className="cards-section">
          <Card className="info-card">
            <CardContent>
              <Typography variant="body1">
                et consectetur adipisicing elit. Voluptates, pariatur cumque numquam ad nulla in tempora temporibus ducimus tempore molestiae, officia amet vitae incidunt impedit esse sed saepe dignissimos. Μια οικογενειακή επιχείρηση με πάθος για συνέπεια και ποιότητα.
              </Typography>
            </CardContent>
          </Card>

          <Card className="info-card-img">
            <CardContent>
              <img src="/src/assets/mainlogo.png" alt="Logo" width={320}></img>
            </CardContent>
          </Card>
        </Box>
      </section>

    {/* --- WHY CHOOSE US SECTION --- */}
    <section className="why-choose-us-section">
      <h2 className="why-title">Γιατί να μας Επιλέξετε</h2>

      <div className="why-cards">
        <div className="why-card">
          <h3>⚙️ Εξειδίκευση & Εμπειρία</h3>
          <p>
            Με πολυετή εμπειρία στη συντήρηση και επισκευή μηχανών σκαφών, 
            προσφέρουμε ολοκληρωμένες λύσεις με τεχνική ακρίβεια και υπευθυνότητα.
          </p>
        </div>

        <div className="why-card">
          <h3>⏱️ Άμεση & Αξιόπιστη Εξυπηρέτηση</h3>
          <p>
            Αντιλαμβανόμαστε τη σημασία του χρόνου σας. 
            Αναλαμβάνουμε κάθε εργασία με συνέπεια και ταχύτητα, 
            διασφαλίζοντας την άμεση παράδοση του σκάφους σας σε άριστη κατάσταση.
          </p>
        </div>

        <div className="why-card">
          <h3>⚓ Ποιότητα & Εμπιστοσύνη</h3>
          <p>
            Εργαζόμαστε με γνώμονα την ποιότητα και τη διαφάνεια. 
            Οι πελάτες μας γνωρίζουν ότι μπορούν να μας εμπιστευτούν για κάθε τεχνική ανάγκη του σκάφους τους.
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}

export default Home;
