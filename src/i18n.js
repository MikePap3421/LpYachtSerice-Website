import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        services: "Services",
        projects: "Projects",
        contact: "Contact"
      },

      // Home Page
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
      home_about_read_more: "Read more",
      home_about_read_less: "Show less",
      home_about_image_alt: "LP Yacht Service technician working on a boat engine",

      home_why_choose_us_title: "Why Choose Us",
      home_why_card1_title: "Specialization & Experience",
      home_why_card1_description: "With years of experience in boat engine maintenance and repair, we offer comprehensive solutions with technical accuracy and responsibility. Every project is executed with precision and attention to detail.",
      home_why_card2_title: "Immediate & Reliable Service",
      home_why_card2_description: "We understand the importance of your time. We undertake every task with consistency and speed, ensuring immediate delivery of your boat in excellent condition.",
      home_why_card3_title: "Quality & Trust",
      home_why_card3_description: "We work with quality and transparency in mind. We use only the best materials and equipment. Our customers know they can trust us for every technical need of their boat.",

      home_cta_title: "Ready to Start Your Next Project?",
      home_cta_subtitle: "Contact us today for free technical advice and a quote",
      home_cta_button: "Contact Now",

      // Services Page
      services_hero_title: "Services",
      services_hero_subtitle: "Focused marine services for engines, systems and day-to-day care, handled with clear communication and dependable workmanship.",
      services_includes: "Includes:",

      services_mechanical_title: "Engine & Mechanical Work",
      services_mechanical_description: "Engine servicing, fault finding and repairs for inboard and auxiliary systems, with practical diagnostics before any work begins.",
      services_mechanical_feature1: "Engine servicing",
      services_mechanical_feature2: "Fault finding",
      services_mechanical_feature3: "Repairs",
      services_mechanical_feature4: "Diagnostics",

      services_conversions_title: "Refits & Upgrades",
      services_conversions_description: "Targeted improvements for performance, comfort and usability, from equipment changes to layout adjustments and system upgrades.",
      services_conversions_feature1: "Refits",
      services_conversions_feature2: "Equipment upgrades",
      services_conversions_feature3: "Layout changes",
      services_conversions_feature4: "Performance tuning",

      services_electrical_title: "Electrical Systems",
      services_electrical_description: "Inspection, repair and installation of onboard electrical systems, with careful checks for safe and reliable operation.",
      services_electrical_feature1: "System checks",
      services_electrical_feature2: "Installations",
      services_electrical_feature3: "Repairs",
      services_electrical_feature4: "Upgrades",

      services_maintenance_title: "Preventive Maintenance",
      services_maintenance_description: "Routine checks and scheduled work that help keep the boat ready, reduce surprises and catch wear before it becomes a bigger issue.",
      services_maintenance_feature1: "Seasonal checks",
      services_maintenance_feature2: "Scheduled service",
      services_maintenance_feature3: "Parts replacement",
      services_maintenance_feature4: "Inspections",

      services_auxiliary_title: "Auxiliary & Hydraulic Systems",
      services_auxiliary_description: "Service and support for generators, auxiliary equipment, pumps and hydraulic systems that keep essential onboard functions working reliably.",
      services_auxiliary_feature1: "Generator service",
      services_auxiliary_feature2: "Auxiliary systems",
      services_auxiliary_feature3: "Hydraulic checks",
      services_auxiliary_feature4: "Pumps & controls",

      services_consulting_title: "Technical Consulting",
      services_consulting_description: "Clear technical guidance before repairs, upgrades or purchases, helping you choose the right work for the boat and your budget.",
      services_consulting_feature1: "Technical assessment",
      services_consulting_feature2: "Work planning",
      services_consulting_feature3: "Repair guidance",
      services_consulting_feature4: "Upgrade advice",

      // Projects Page
      projects_hero_title: "Projects",
      projects_hero_subtitle: "A gallery of our selected works and completed projects",
      projects_see_more_button: "View More Projects",
      projects_see_less_button: "Fewer Projects",
      projects_image_alt: "Project {{number}}",
      projects_teaser_title: "See Our Work in Action",
      projects_teaser_subtitle: "A taste of the projects we have completed",
      projects_teaser_button: "View More Projects",
      projects_teaser_image_alt: "Project teaser {{number}}",

      // Contact Page
      contact_hero_title: "Contact",
      contact_hero_subtitle: "Get in touch for any question, quote or technical advice",
      contact_name_label: "Full Name",
      contact_email_label: "Email",
      contact_phone_label: "Phone",
      contact_subject_label: "Topic",
      contact_message_label: "Message",
      contact_submit_button: "Send Message",
      contact_sending: "Sending...",
      contact_success_message: "Thank you! We'll be in touch soon. You should also receive a confirmation email — if you don't, please check your address and resubmit.",
      contact_error_message: "Failed to send message. Please try again or contact us directly.",
      contact_error_name_required: "Name is required*",
      contact_error_email_required: "Email is required*",
      contact_error_email_invalid: "Please enter a valid email address",
      contact_error_subject_required: "Topic is required*",
      contact_error_message_required: "Message is required*",
      contact_error_message_too_short: "Message should be at least 10 characters long",

      // Footer
      footer_company_name: "LP Yacht Service",
      footer_description: "Specialized boat maintenance and repair services. Trust, quality and professionalism at sea.",
      footer_contact_title: "Contact",
      footer_phone: "+30 6945663120",
      footer_email: "lpyachtservice@gmail.com",
      footer_location: "Preveza, Greece",
      footer_follow_us: "Follow Us",
      footer_copyright: "LP Yacht Service. All rights reserved.",
      footer_contact_us: "Contact Us",
      footer_whatsapp: "Chat on WhatsApp",
      footer_viber: "Chat on Viber",
      footer_privacy_link: "Privacy Policy",
      whatsapp_default_message: "Hello! I would like to get more information about your services.",
      viber_default_message: "Hello! I would like to get more information about your services.",

      // Cookie Banner
      cookie_banner_text: "This website uses only essential cookies necessary for the contact form to function. No tracking or analytics cookies are used. For more information see our",
      cookie_banner_link: "Privacy Policy",
      cookie_banner_button: "Got it",

      // Privacy Policy Page
      privacy_page_title: "Privacy Policy",
      privacy_meta_description: "Privacy Policy for LP Yacht Service. Learn how we collect and use your personal data in compliance with GDPR.",
      privacy_last_updated: "Last updated: May 2026",
      privacy_intro: "LP Yacht Service is committed to protecting your personal data and respecting your privacy. This policy explains what information we collect when you use our website and contact form, how we use it, and your rights under the General Data Protection Regulation (GDPR).",

      privacy_s1_title: "Who We Are",
      privacy_s1_content: "LP Yacht Service is a family business based in Preveza, Greece, providing yacht maintenance and repair services.\n\nData Controller: LP Yacht Service (Lampros Papageorgiou)\nEmail: lpyachtservice@gmail.com\nLocation: Preveza, Greece",

      privacy_s2_title: "What Data We Collect",
      privacy_s2_content: "When you submit our contact form, we collect the following information:\n\n• Full name (required)\n• Email address (required)\n• Phone number (optional)\n• Message subject (required)\n• Message content (required)\n\nWe do not collect any other personal data. We do not use tracking pixels, advertising cookies, or analytics services.",

      privacy_s3_title: "Why We Collect It",
      privacy_s3_content: "We collect this data solely to respond to your inquiry, provide a quote or technical advice, and conduct any resulting business correspondence.\n\nLegal basis: Legitimate interest under Article 6(1)(f) GDPR — responding to business inquiries you have initiated.",

      privacy_s4_title: "How Your Data Is Processed",
      privacy_s4_content: "Your contact form submission is transmitted via EmailJS, a third-party email delivery service. EmailJS processes the data only to deliver your message to us and does not retain it beyond that delivery.\n\nEmailJS Privacy Policy: https://www.emailjs.com/legal/privacy-policy/\n\nOnce received, your message is stored in our email inbox (Gmail) and handled confidentially.",

      privacy_s5_title: "How Long We Keep Your Data",
      privacy_s5_content: "We retain your message for as long as necessary to respond to your inquiry and any resulting business relationship — typically up to 2 years. After that period, messages are deleted.",

      privacy_s6_title: "Cookies",
      privacy_s6_content: "This website uses only essential technical cookies required for the contact form and basic site functionality. We do not use tracking, analytics, or advertising cookies.\n\nNo cookie consent is required for essential-only cookies under GDPR, however we notify you as a matter of transparency.",

      privacy_s7_title: "Your Rights",
      privacy_s7_content: "Under GDPR you have the following rights regarding your personal data:\n\n• Right of access — request a copy of your data\n• Right to rectification — correct inaccurate data\n• Right to erasure — request deletion of your data\n• Right to restriction — limit how we use your data\n• Right to object — object to processing based on legitimate interest\n• Right to portability — receive your data in a portable format\n\nTo exercise any of these rights, contact us at lpyachtservice@gmail.com. We will respond within 30 days.",

      privacy_s8_title: "Changes to This Policy",
      privacy_s8_content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.",

      privacy_contact_title: "Questions or Requests?",
      privacy_contact_body: "For any privacy-related questions or to exercise your GDPR rights, contact us at:",
    }
  },
  el: {
    translation: {
      // Navigation
      nav: {
        home: "Αρχική",
        services: "Υπηρεσίες",
        projects: "Εργασίες",
        contact: "Επικοινωνία"
      },

      // Home Page
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
      home_about_read_more: "Διαβάστε περισσότερα",
      home_about_read_less: "Λιγότερα",
      home_about_image_alt: "Τεχνικός LP Yacht Service εργάζεται σε μηχανή σκάφους",

      home_why_choose_us_title: "Γιατί να μας Επιλέξετε",
      home_why_card1_title: "Εξειδίκευση & Εμπειρία",
      home_why_card1_description: "Με πολυετή εμπειρία στη συντήρηση και επισκευή μηχανών σκαφών, προσφέρουμε ολοκληρωμένες λύσεις με τεχνική ακρίβεια και υπευθυνότητα. Κάθε έργο εκτελείται με ακρίβεια και προσοχή στη λεπτομέρεια.",
      home_why_card2_title: "Άμεση & Αξιόπιστη Εξυπηρέτηση",
      home_why_card2_description: "Αντιλαμβανόμαστε τη σημασία του χρόνου σας. Αναλαμβάνουμε κάθε εργασία με συνέπεια και ταχύτητα, διασφαλίζοντας την άμεση παράδοση του σκάφους σας σε άριστη κατάσταση.",
      home_why_card3_title: "Ποιότητα & Εμπιστοσύνη",
      home_why_card3_description: "Εργαζόμαστε με γνώμονα την ποιότητα και τη διαφάνεια. Χρησιμοποιούμε μόνο τα καλύτερα υλικά και εξοπλισμό. Οι πελάτες μας γνωρίζουν ότι μπορούν να μας εμπιστευτούν για κάθε τεχνική ανάγκη του σκάφους τους.",

      home_cta_title: "Έτοιμοι να Αρχίσετε το Επόμενο Έργο Σας;",
      home_cta_subtitle: "Επικοινωνήστε μαζί μας σήμερα για δωρεάν τεχνική γνώμη και προσφορά",
      home_cta_button: "Επικοινωνήστε Τώρα",

      // Services Page
      services_hero_title: "Υπηρεσίες",
      services_hero_subtitle: "Στοχευμένες υπηρεσίες για μηχανές, συστήματα και καθημερινή φροντίδα σκαφών, με καθαρή επικοινωνία και αξιόπιστη εργασία.",
      services_includes: "Περιλαμβάνει:",

      services_mechanical_title: "Μηχανές & Μηχανικές Εργασίες",
      services_mechanical_description: "Συντήρηση, διάγνωση βλαβών και επισκευές σε κύρια και βοηθητικά συστήματα, με πρακτικό έλεγχο πριν ξεκινήσει κάθε εργασία.",
      services_mechanical_feature1: "Συντήρηση μηχανών",
      services_mechanical_feature2: "Εντοπισμός βλαβών",
      services_mechanical_feature3: "Επισκευές",
      services_mechanical_feature4: "Διαγνωστικά",

      services_conversions_title: "Refit & Αναβαθμίσεις",
      services_conversions_description: "Στοχευμένες βελτιώσεις για απόδοση, άνεση και λειτουργικότητα, από αλλαγές εξοπλισμού μέχρι διαμόρφωση χώρων και αναβάθμιση συστημάτων.",
      services_conversions_feature1: "Refit",
      services_conversions_feature2: "Νέος εξοπλισμός",
      services_conversions_feature3: "Διαμόρφωση χώρων",
      services_conversions_feature4: "Βελτίωση απόδοσης",

      services_electrical_title: "Ηλεκτρικά Συστήματα",
      services_electrical_description: "Έλεγχος, επισκευή και εγκατάσταση ηλεκτρικών συστημάτων σκάφους, με προσοχή στην ασφαλή και αξιόπιστη λειτουργία.",
      services_electrical_feature1: "Έλεγχοι συστημάτων",
      services_electrical_feature2: "Εγκαταστάσεις",
      services_electrical_feature3: "Επισκευές",
      services_electrical_feature4: "Αναβαθμίσεις",

      services_maintenance_title: "Προληπτική Συντήρηση",
      services_maintenance_description: "Τακτικοί έλεγχοι και προγραμματισμένες εργασίες που κρατούν το σκάφος έτοιμο και βοηθούν να προλάβετε μεγαλύτερες βλάβες.",
      services_maintenance_feature1: "Εποχικοί έλεγχοι",
      services_maintenance_feature2: "Service",
      services_maintenance_feature3: "Ανταλλακτικά",
      services_maintenance_feature4: "Επιθεωρήσεις",

      services_auxiliary_title: "Βοηθητικά & Υδραυλικά Συστήματα",
      services_auxiliary_description: "Service και υποστήριξη για γεννήτριες, βοηθητικό εξοπλισμό, αντλίες και υδραυλικά συστήματα που κρατούν τις βασικές λειτουργίες αξιόπιστες.",
      services_auxiliary_feature1: "Service γεννήτριας",
      services_auxiliary_feature2: "Βοηθητικά συστήματα",
      services_auxiliary_feature3: "Υδραυλικοί έλεγχοι",
      services_auxiliary_feature4: "Αντλίες & χειριστήρια",

      services_consulting_title: "Τεχνική Συμβουλευτική",
      services_consulting_description: "Καθαρή τεχνική καθοδήγηση πριν από επισκευές, αναβαθμίσεις ή αγορές, ώστε να επιλέξετε τη σωστή εργασία για το σκάφος και το budget σας.",
      services_consulting_feature1: "Τεχνική εκτίμηση",
      services_consulting_feature2: "Πλάνο εργασιών",
      services_consulting_feature3: "Οδηγίες επισκευής",
      services_consulting_feature4: "Προτάσεις αναβάθμισης",

      // Projects Page
      projects_hero_title: "Εργασίες",
      projects_hero_subtitle: "Γκαλερί από επιλεγμένες εργασίες και ολοκληρωμένα έργα μας",
      projects_see_more_button: "Δείτε Περισσότερες Εργασίες",
      projects_see_less_button: "Λιγότερες Εργασίες",
      projects_image_alt: "Εργασία {{number}}",
      projects_teaser_title: "Δείτε τις Εργασίες μας σε Δράση",
      projects_teaser_subtitle: "Μια γεύση από τα projects που έχουμε ολοκληρώσει",
      projects_teaser_button: "Δείτε Περισσότερες Εργασίες",
      projects_teaser_image_alt: "Project teaser {{number}}",

      // Contact Page
      contact_hero_title: "Επικοινωνία",
      contact_hero_subtitle: "Επικοινωνήστε μαζί μας για οποιαδήποτε ερώτηση, προσφορά ή τεχνική συμβουλή",
      contact_name_label: "Ονοματεπώνυμο",
      contact_email_label: "Email",
      contact_phone_label: "Τηλέφωνο",
      contact_subject_label: "Θέμα",
      contact_message_label: "Μήνυμα",
      contact_submit_button: "Αποστολή Μηνύματος",
      contact_sending: "Αποστολή...",
      contact_success_message: "Σας ευχαριστούμε! Θα επικοινωνήσουμε σύντομα. Θα λάβετε επίσης ένα email επιβεβαίωσης — αν δεν το λάβετε, ελέγξτε τη διεύθυνσή σας και υποβάλετε ξανά.",
      contact_error_message: "Αποτυχία αποστολής μηνύματος. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας απευθείας.",
      contact_error_name_required: "Το όνομα είναι υποχρεωτικό*",
      contact_error_email_required: "Το email είναι υποχρεωτικό*",
      contact_error_email_invalid: "Παρακαλώ εισάγετε ένα έγκυρο email",
      contact_error_subject_required: "Το θέμα είναι υποχρεωτικό*",
      contact_error_message_required: "Το μήνυμα είναι υποχρεωτικό*",
      contact_error_message_too_short: "Το μήνυμα πρέπει να είναι τουλάχιστον 10 χαρακτήρες",

      // Footer
      footer_company_name: "LP Yacht Service",
      footer_description: "Εξειδικευμένες υπηρεσίες συντήρησης και επισκευής σκαφών. Εμπιστοσύνη, ποιότητα και επαγγελματισμός στη θάλασσα.",
      footer_contact_title: "Επικοινωνία",
      footer_phone: "+30 6945663120",
      footer_email: "lpyachtservice@gmail.com",
      footer_location: "Πρέβεζα, Ελλάδα",
      footer_follow_us: "Ακολουθήστε μας",
      footer_copyright: "LP Yacht Service. Με επιφύλαξη παντός δικαιώματος.",
      footer_contact_us: "Επικοινωνήστε Μαζί Μας",
      footer_whatsapp: "Συνομιλία στο WhatsApp",
      footer_viber: "Συνομιλία στο Viber",
      footer_privacy_link: "Πολιτική Απορρήτου",
      whatsapp_default_message: "Γεια σας! Θα ήθελα να λάβω περισσότερες πληροφορίες για τις υπηρεσίες σας.",
      viber_default_message: "Γεια σας! Θα ήθελα να λάβω περισσότερες πληροφορίες για τις υπηρεσίες σας.",

      // Cookie Banner
      cookie_banner_text: "Αυτός ο ιστότοπος χρησιμοποιεί μόνο απαραίτητα cookies για τη λειτουργία της φόρμας επικοινωνίας. Δεν χρησιμοποιούνται cookies παρακολούθησης ή ανάλυσης. Για περισσότερες πληροφορίες δείτε την",
      cookie_banner_link: "Πολιτική Απορρήτου",
      cookie_banner_button: "Το κατάλαβα",

      // Privacy Policy Page
      privacy_page_title: "Πολιτική Απορρήτου",
      privacy_meta_description: "Πολιτική Απορρήτου της LP Yacht Service. Μάθετε πώς συλλέγουμε και χρησιμοποιούμε τα προσωπικά σας δεδομένα σύμφωνα με τον GDPR.",
      privacy_last_updated: "Τελευταία ενημέρωση: Μάιος 2026",
      privacy_intro: "Η LP Yacht Service δεσμεύεται για την προστασία των προσωπικών σας δεδομένων και τον σεβασμό της ιδιωτικότητάς σας. Η παρούσα πολιτική εξηγεί ποιες πληροφορίες συλλέγουμε όταν χρησιμοποιείτε τον ιστότοπό μας και τη φόρμα επικοινωνίας, πώς τις χρησιμοποιούμε και ποια είναι τα δικαιώματά σας βάσει του Γενικού Κανονισμού Προστασίας Δεδομένων (GDPR).",

      privacy_s1_title: "Ποιοι Είμαστε",
      privacy_s1_content: "Η LP Yacht Service είναι οικογενειακή επιχείρηση με έδρα την Πρέβεζα, παρέχοντας υπηρεσίες συντήρησης και επισκευής σκαφών.\n\nΥπεύθυνος Επεξεργασίας: LP Yacht Service (Λάμπρος Παπαγεωργίου)\nEmail: lpyachtservice@gmail.com\nΤοποθεσία: Πρέβεζα, Ελλάδα",

      privacy_s2_title: "Ποια Δεδομένα Συλλέγουμε",
      privacy_s2_content: "Όταν υποβάλλετε τη φόρμα επικοινωνίας μας, συλλέγουμε τα εξής:\n\n• Ονοματεπώνυμο (υποχρεωτικό)\n• Διεύθυνση email (υποχρεωτικό)\n• Αριθμός τηλεφώνου (προαιρετικό)\n• Θέμα μηνύματος (υποχρεωτικό)\n• Περιεχόμενο μηνύματος (υποχρεωτικό)\n\nΔεν συλλέγουμε κανένα άλλο προσωπικό δεδομένο. Δεν χρησιμοποιούμε pixels παρακολούθησης, cookies διαφήμισης ή υπηρεσίες ανάλυσης.",

      privacy_s3_title: "Γιατί τα Συλλέγουμε",
      privacy_s3_content: "Συλλέγουμε αυτά τα δεδομένα αποκλειστικά για να απαντήσουμε στο αίτημά σας, να σας παρέχουμε προσφορά ή τεχνική συμβουλή και να διεξάγουμε την επακόλουθη επαγγελματική αλληλογραφία.\n\nΝομική βάση: Έννομο συμφέρον βάσει Άρθρου 6(1)(στ) GDPR — ανταπόκριση σε επαγγελματικά αιτήματα που εσείς έχετε ξεκινήσει.",

      privacy_s4_title: "Πώς Επεξεργαζόμαστε τα Δεδομένα σας",
      privacy_s4_content: "Η υποβολή της φόρμας επικοινωνίας μεταδίδεται μέσω του EmailJS, υπηρεσίας αποστολής email τρίτου μέρους. Το EmailJS επεξεργάζεται τα δεδομένα μόνο για την παράδοση του μηνύματός σας σε εμάς και δεν τα διατηρεί πέραν αυτής της παράδοσης.\n\nΠολιτική Απορρήτου EmailJS: https://www.emailjs.com/legal/privacy-policy/\n\nΜόλις παραληφθεί, το μήνυμά σας αποθηκεύεται στα εισερχόμενα email μας (Gmail) και τηρείται εμπιστευτικά.",

      privacy_s5_title: "Πόσο Διατηρούμε τα Δεδομένα σας",
      privacy_s5_content: "Διατηρούμε το μήνυμά σας για όσο χρόνο είναι απαραίτητο για να ανταποκριθούμε στο αίτημά σας και σε οποιαδήποτε επακόλουθη επαγγελματική σχέση — συνήθως έως 2 χρόνια. Μετά από αυτή την περίοδο, τα μηνύματα διαγράφονται.",

      privacy_s6_title: "Cookies",
      privacy_s6_content: "Αυτός ο ιστότοπος χρησιμοποιεί μόνο απαραίτητα τεχνικά cookies που απαιτούνται για τη φόρμα επικοινωνίας και τη βασική λειτουργία του ιστότοπου. Δεν χρησιμοποιούμε cookies παρακολούθησης, ανάλυσης ή διαφήμισης.\n\nΔεν απαιτείται συναίνεση για cookies αποκλειστικά απαραίτητης φύσης βάσει GDPR, ωστόσο σας ενημερώνουμε για λόγους διαφάνειας.",

      privacy_s7_title: "Τα Δικαιώματά σας",
      privacy_s7_content: "Βάσει GDPR έχετε τα εξής δικαιώματα σχετικά με τα προσωπικά σας δεδομένα:\n\n• Δικαίωμα πρόσβασης — αίτηση αντιγράφου των δεδομένων σας\n• Δικαίωμα διόρθωσης — διόρθωση ανακριβών δεδομένων\n• Δικαίωμα διαγραφής — αίτηση διαγραφής των δεδομένων σας\n• Δικαίωμα περιορισμού — περιορισμός της χρήσης των δεδομένων σας\n• Δικαίωμα εναντίωσης — εναντίωση στην επεξεργασία βάσει εννόμου συμφέροντος\n• Δικαίωμα φορητότητας — λήψη των δεδομένων σας σε φορητή μορφή\n\nΓια την άσκηση οποιουδήποτε από αυτά τα δικαιώματα, επικοινωνήστε μαζί μας στο lpyachtservice@gmail.com. Θα απαντήσουμε εντός 30 ημερών.",

      privacy_s8_title: "Αλλαγές στην Παρούσα Πολιτική",
      privacy_s8_content: "Ενδέχεται να ενημερώνουμε περιοδικά την παρούσα Πολιτική Απορρήτου. Οποιεσδήποτε αλλαγές θα δημοσιεύονται σε αυτή τη σελίδα με ενημερωμένη ημερομηνία. Σας ενθαρρύνουμε να ελέγχετε αυτή τη σελίδα περιοδικά.",

      privacy_contact_title: "Ερωτήσεις ή Αιτήματα;",
      privacy_contact_body: "Για οποιαδήποτε ερώτηση σχετική με την ιδιωτικότητα ή για την άσκηση των δικαιωμάτων σας GDPR, επικοινωνήστε μαζί μας στο:",
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