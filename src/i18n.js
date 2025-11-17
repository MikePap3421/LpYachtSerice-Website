import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        projects: "Projects", 
        contact: "Contact"
      },
      // Add home page translations here:
      home_hero_title: "Welcome to",
      home_hero_company: "LP Yacht Service",
      home_hero_subtitle: "Quality, trust and experience in every project",
      home_hero_services_button: "View Our Services",
      
      home_about_title: "About Us",
      home_about_our_story_title: "Our Story",
      home_about_our_story_description: "LP Yacht Service is a family business with deep roots in the shipbuilding industry. With over 15 years of experience, we have developed a passion for perfect execution of every project and absolute customer satisfaction. We specialize in comprehensive boat maintenance and repair solutions, combining traditional craftsmanship with modern technologies.",
      home_about_bullet1: "Specialized technical staff",
      home_about_bullet2: "Quality materials and services",
      home_about_bullet3: "Fast and reliable service",
      home_about_bullet4: "Transparent pricing and policy",
      home_about_image_alt: "LP Yacht Service Car",
      
      home_why_choose_us_title: "Why Choose Us",
      home_why_card1_title: "⚙️ Specialization & Experience",
      home_why_card1_description: "With years of experience in boat engine maintenance and repair, we offer comprehensive solutions with technical accuracy and responsibility. Every project is executed with precision and attention to detail.",
      home_why_card2_title: "⏱️ Immediate & Reliable Service",
      home_why_card2_description: "We understand the importance of your time. We undertake every task with consistency and speed, ensuring immediate delivery of your boat in excellent condition. Available 24/7 for emergency needs.",
      home_why_card3_title: "⚓ Quality & Trust",
      home_why_card3_description: "We work with quality and transparency in mind. We use only the best materials and equipment. Our customers know they can trust us for every technical need of their boat.",
      
      home_cta_title: "Ready to Start Your Next Project?",
      home_cta_subtitle: "Contact us today for free technical advice and quote",
      home_cta_button: "Contact Now",

       // Services translations
      services_hero_title: "Services",
      services_hero_subtitle: "Specialized solutions for every need of your vessel. Quality, reliability and professionalism in every project.",
      services_includes: "Includes:",
      
      // Mechanical Services
      services_mechanical_title: "Mechanical Works",
      services_mechanical_description: "Specialized repair and maintenance services for boat engines. Complete maintenance, fault repair and system upgrades with knowledge and experience in all types of engines.",
      services_mechanical_feature1: "Engine maintenance",
      services_mechanical_feature2: "Fault repair",
      services_mechanical_feature3: "Upgrades",
      services_mechanical_feature4: "Diagnostics",
      
      // Conversions & Upgrades
      services_conversions_title: "Conversions & Upgrades",
      services_conversions_description: "Professional boat conversion and upgrade services. We undertake modifications for performance improvement, layout changes and adaptations according to your needs.",
      services_conversions_feature1: "Rebuilds",
      services_conversions_feature2: "Modifications",
      services_conversions_feature3: "Optimizations",
      services_conversions_feature4: "Adaptations",
      
      // Electrical Systems
      services_electrical_title: "Electrical Systems",
      services_electrical_description: "Professional inspection, upgrade and repair of electrical systems for safe and reliable operation of your vessel.",
      services_electrical_feature1: "Installations",
      services_electrical_feature2: "Repairs",
      services_electrical_feature3: "Safety systems",
      services_electrical_feature4: "Automations",
      
      // Boat Maintenance
      services_maintenance_title: "Boat Maintenance",
      services_maintenance_description: "Complete maintenance programs for all types of boats. Preventive maintenance, safety checks and scheduled interventions.",
      services_maintenance_feature1: "Scheduled maintenance",
      services_maintenance_feature2: "Safety checks",
      services_maintenance_feature3: "Replacements",
      services_maintenance_feature4: "Inspections",
      
      // Cleaning & Care
      services_cleaning_title: "Cleaning & Care",
      services_cleaning_description: "Specialized boat cleaning and care services. Complete cleaning of interior and exterior spaces, polishing and protective interventions.",
      services_cleaning_feature1: "Exterior cleaning",
      services_cleaning_feature2: "Interior cleaning",
      services_cleaning_feature3: "Polishing",
      services_cleaning_feature4: "Protection",
      
      // Consulting Services
      services_consulting_title: "Consulting Services",
      services_consulting_description: "Professional advice for the maintenance, optimization and care of your vessel. Technical opinions and solutions tailored to your needs.",
      services_consulting_feature1: "Technical opinions",
      services_consulting_feature2: "Project planning",
      services_consulting_feature3: "Support",
      services_consulting_feature4: "Advice",

      // Projects translations
      projects_hero_title: "Projects",
      projects_hero_subtitle: "Enjoy a gallery of our selected works and projects",
      projects_see_more_button: "View More Projects",
      projects_see_less_button: "Fewer Projects",
      projects_image_alt: "Project {{number}}",

      // Contact translations
      contact_hero_title: "Contact",
      contact_hero_subtitle: "Contact us for any question or need",
      contact_name_label: "Full Name",
      contact_email_label: "Email",
      contact_phone_label: "Phone",
      contact_subject_label: "Subject",
      contact_message_label: "Message",
      contact_submit_button: "Send Message",
      contact_success_message: "Thank you for your message! We will get back to you soon.",
      drawer_language_title: "Language"
    }
  },
  el: {
    translation: {
      nav: {
        home: "Αρχική",
        services: "Υπηρεσίες",
        projects: "Εργασίες",
        contact: "Επικοινωνία"
      },
      // home page translations
      home_hero_title: "Καλώς Ήρθατε στην",
      home_hero_company: "LP Yacht Service", 
      home_hero_subtitle: "Ποιότητα, εμπιστοσύνη και εμπειρία σε κάθε έργο",
      home_hero_services_button: "Δείτε τις Υπηρεσίες μας",
      
      home_about_title: "Σχετικά με Εμάς",
      home_about_our_story_title: "Η Ιστορία μας",
      home_about_our_story_description: "Η LP Yacht Service είναι μια οικογενειακή επιχείρηση με βαθιές ρίζες στη ναυπηγική βιομηχανία. Με πάνω από 15 χρόνια εμπειρίας, έχουμε αναπτύξει ένα πάθος για την τέλεια εκτέλεση κάθε έργου και την απόλυτη ικανοποίηση των πελατών μας. Εξειδικευόμαστε σε ολοκληρωμένες λύσεις συντήρησης και επισκευής σκαφών, συνδυάζοντας παραδοσιακή τεχνογνωσία με σύγχρονες τεχνολογίες.",
      home_about_bullet1: "Εξειδικευμένο τεχνικό προσωπικό",
      home_about_bullet2: "Ποιότητα υλικών και υπηρεσιών",
      home_about_bullet3: "Γρήγορη και αξιόπιστη εξυπηρέτηση",
      home_about_bullet4: "Διαφανή τιμολόγηση και πολιτική",
      home_about_image_alt: "LP Yacht Service Αυτοκίνητο",
      
      home_why_choose_us_title: "Γιατί να μας Επιλέξετε",
      home_why_card1_title: "⚙️ Εξειδίκευση & Εμπειρία",
      home_why_card1_description: "Με πολυετή εμπειρία στη συντήρηση και επισκευή μηχανών σκαφών, προσφέρουμε ολοκληρωμένες λύσεις με τεχνική ακρίβεια και υπευθυνότητα. Κάθε έργο εκτελείται με ακρίβεια και προσοχή στη λεπτομέρεια.",
      home_why_card2_title: "⏱️ Άμεση & Αξιόπιστη Εξυπηρέτηση",
      home_why_card2_description: "Αντιλαμβανόμαστε τη σημασία του χρόνου σας. Αναλαμβάνουμε κάθε εργασία με συνέπεια και ταχύτητα, διασφαλίζοντας την άμεση παράδοση του σκάφους σας σε άριστη κατάσταση. Διαθέσιμοι 24/7 για επείγουσες ανάγκες.",
      home_why_card3_title: "⚓ Ποιότητα & Εμπιστοσύνη",
      home_why_card3_description: "Εργαζόμαστε με γνώμονα την ποιότητα και τη διαφάνεια. Χρησιμοποιούμε μόνο τα καλύτερα υλικά και εξοπλισμό. Οι πελάτες μας γνωρίζουν ότι μπορούν να μας εμπιστευτούν για κάθε τεχνική ανάγκη του σκάφους τους.",
      
      home_cta_title: "Έτοιμοι να Αρχίσουμε το Επόμενο Σας Project;",
      home_cta_subtitle: "Επικοινωνήστε μαζί μας σήμερα για δωρεάν τεχνική γνώμη και προσφορά",
      home_cta_button: "Επικοινωνήστε Τώρα",
      
      // footer translations
       footer_company_name: "LP Yacht Service",
      footer_description: "Specialized boat maintenance and repair services. Trust, quality and professionalism at sea.",
      footer_contact_title: "Contact",
      footer_phone: "+30 6945663120",
      footer_email: "lpyachtservice@gmail.com", 
      footer_location: "Preveza, Greece",
      footer_follow_us: "Follow Us",
      footer_copyright: "LP Yacht Service. All rights reserved.",

      // Services translations
      services_hero_title: "Υπηρεσίες",
      services_hero_subtitle: "Εξειδικευμένες λύσεις για κάθε ανάγκη του σκάφους σας. Ποιότητα, αξιοπιστία και επαγγελματισμός σε κάθε έργο.",
      services_includes: "Περιλαμβάνει:",
      
      // Mechanical Services
      services_mechanical_title: "Μηχανικές Εργασίες",
      services_mechanical_description: "Εξειδικευμένες υπηρεσίες επισκευής και συντήρησης μηχανών σκαφών. Πλήρης συντήρηση, επιδιόρθωση βλαβών και αναβάθμιση συστημάτων με γνώση και εμπειρία σε όλους τους τύπους κινητήρων.",
      services_mechanical_feature1: "Συντήρηση κινητήρων",
      services_mechanical_feature2: "Επιδιόρθωση βλαβών",
      services_mechanical_feature3: "Αναβαθμίσεις",
      services_mechanical_feature4: "Διαγνωστικά",
      
      // Conversions & Upgrades
      services_conversions_title: "Μετατροπές & Αναβαθμίσεις",
      services_conversions_description: "Επαγγελματικές υπηρεσίες μετατροπών και αναβαθμίσεων σκαφών. Αναλαμβάνουμε τροποποιήσεις για βελτίωση απόδοσης, αλλαγές διαμόρφωσης και προσαρμογές σύμφωνα με τις ανάγκες σας.",
      services_conversions_feature1: "Ανακατασκευές",
      services_conversions_feature2: "Τροποποιήσεις",
      services_conversions_feature3: "Βελτιστοποιήσεις",
      services_conversions_feature4: "Προσαρμογές",
      
      // Electrical Systems
      services_electrical_title: "Ηλεκτρικά Συστήματα",
      services_electrical_description: "Επαγγελματικός έλεγχος, αναβάθμιση και επιδιόρθωση ηλεκτρικών συστημάτων για ασφαλή και αξιόπιστη λειτουργία του σκάφους σας.",
      services_electrical_feature1: "Εγκαταστάσεις",
      services_electrical_feature2: "Επιδιορθώσεις",
      services_electrical_feature3: "Συστήματα ασφαλείας",
      services_electrical_feature4: "Αυτοματισμοί",
      
      // Boat Maintenance
      services_maintenance_title: "Συντήρηση Σκαφών",
      services_maintenance_description: "Ολοκληρωμένα προγράμματα συντήρησης για όλα τα είδη σκαφών. Προληπτική συντήρηση, ελέγχους ασφαλείας και προγραμματισμένες επεμβάσεις.",
      services_maintenance_feature1: "Προγραμματισμένη συντήρηση",
      services_maintenance_feature2: "Έλεγχοι ασφαλείας",
      services_maintenance_feature3: "Αντικαταστάσεις",
      services_maintenance_feature4: "Επιθεωρήσεις",
      
      // Cleaning & Care
      services_cleaning_title: "Καθαρισμός & Φροντίδα",
      services_cleaning_description: "Εξειδικευμένες υπηρεσίες καθαρισμού και φροντίδας σκαφών. Πλήρης καθαρισμός εσωτερικών και εξωτερικών χώρων, πολυλόγηση και προστατευτικές επεμβάσεις.",
      services_cleaning_feature1: "Εξωτερικός καθαρισμός",
      services_cleaning_feature2: "Εσωτερικός καθαρισμός",
      services_cleaning_feature3: "Πολυλόγηση",
      services_cleaning_feature4: "Προστασία",
      
      // Consulting Services
      services_consulting_title: "Συμβουλευτικές Υπηρεσίες",
      services_consulting_description: "Επαγγελματικές συμβουλές για τη συντήρηση, βελτιστοποίηση και φροντίδα του σκάφους σας. Τεχνικές γνώμες και λύσεις προσαρμοσμένες στις ανάγκες σας.",
      services_consulting_feature1: "Τεχνικές γνώμες",
      services_consulting_feature2: "Σχεδιασμός projects",
      services_consulting_feature3: "Υποστήριξη",
      services_consulting_feature4: "Συμβουλές",

      // Projects translations
      projects_hero_title: "Εργασίες",
      projects_hero_subtitle: "Απολαύστε μια γκαλερί από επιλεγμένες μας εργασίες και projects",
      projects_see_more_button: "Δείτε Περισσότερες Εργασίες",
      projects_see_less_button: "Λιγότερες Εργασίες",
      projects_image_alt: "Εργασία {{number}}",

      // Contact translations
      contact_hero_title: "Επικοινωνία",
      contact_hero_subtitle: "Επικοινωνήστε μαζί μας για οποιαδήποτε ερώτηση ή ανάγκη",
      contact_name_label: "Ονοματεπώνυμο",
      contact_email_label: "Email",
      contact_phone_label: "Τηλέφωνο",
      contact_subject_label: "Θέμα",
      contact_message_label: "Μήνυμα",
      contact_submit_button: "Αποστολή Μηνύματος",
      contact_success_message: "Σας ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε μαζί σας σύντομα.",
      drawer_language_title: "Γλώσσα"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'el',
    fallbackLng: 'el',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;