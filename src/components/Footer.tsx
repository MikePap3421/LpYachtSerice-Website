import '/src/components/Home.css';
import { Facebook, Instagram, Phone, Mail } from '@mui/icons-material';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Left Section --- */}
        <div className="footer-about">
          <h3>LP Yacht Service</h3>
          <p>
            Εξειδικευμένες υπηρεσίες συντήρησης και επισκευής σκαφών.  
            Εμπιστοσύνη, ποιότητα και επαγγελματισμός στη θάλασσα.
          </p>
        </div>

        {/* --- Middle Section (Contact Info) --- */}
        <div className="footer-contact">
          <h4>Επικοινωνία</h4>
          <ul>
            <li><Phone className="footer-icon" /> +30 6945663120</li>
            <li><Mail className="footer-icon" /> lpyachtservice@gmail.com</li>
            <li>Πρέβεζα, Ελλάδα</li>
          </ul>
        </div>

        {/* --- Right Section (Socials) --- */}
        <div className="footer-social">
          <h4>Ακολουθήστε μας</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} LP Yacht Service. Όλα τα δικαιώματα διατηρούνται.</p>
      </div>
    </footer>
  );
}

export default Footer;
