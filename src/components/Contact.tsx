import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box, TextField, Button, Typography, Card, CardContent, Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import './Shared.css';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from './useScrollReveal';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const { t } = useTranslation();

  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLElement>();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = t('contact_error_name_required', 'Name is required');
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = t('contact_error_email_required', 'Email is required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t('contact_error_email_invalid', 'Please enter a valid email address');
      isValid = false;
    }
    if (!formData.subject.trim()) {
      errors.subject = t('contact_error_subject_required', 'Subject is required');
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = t('contact_error_message_required', 'Message is required');
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = t('contact_error_message_too_short', 'Message should be at least 10 characters long');
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        EMAILJS_PUBLIC_KEY
      );
      showSnackbar(t('contact_success_message'), 'success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      showSnackbar(t('contact_error_message'), 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>LP Yacht Service | {t('nav.contact')}</title>
        <meta name="description" content={t('contact_hero_subtitle')} />
        <link rel="canonical" href="https://lpyachtservice.gr/contact" />
      </Helmet>
      <Navbar />

      <section className="contact-section">
        <Box
          ref={formRef}
          className={`reveal ${formVisible ? 'is-visible' : ''}`}
          sx={{ maxWidth: 800, margin: '0 auto', padding: { xs: '1.5rem 1rem', md: '2rem 2rem 2rem' } }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: 'center',
              color: '#274688',
              fontWeight: 700,
              marginBottom: { xs: '0.5rem', md: '1rem' },
              fontSize: { xs: '1.5rem', md: '3.5rem' },
              lineHeight: { xs: 1.15, md: 1.2 }
            }}
          >
            {t('contact_hero_title')}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: '#1B263B',
              marginBottom: { xs: '1.5rem', md: '3rem' },
              opacity: 0.8,
              fontSize: { xs: '0.86rem', md: '1.25rem' },
              lineHeight: { xs: 1.45, md: 1.6 }
            }}
          >
            {t('contact_hero_subtitle')}
          </Typography>

          <Card
            sx={{
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(39, 70, 136, 0.1)',
              padding: { xs: '1rem', md: '3rem' }
            }}
          >
            <CardContent>
              <form onSubmit={handleSubmit} noValidate>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>

                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 3 } }}>
                    <TextField
                      fullWidth
                      label={t('contact_name_label')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      disabled={isSubmitting}
                      error={!!fieldErrors.name}
                      helperText={fieldErrors.name}
                      sx={{ '& .MuiFormHelperText-root': { color: '#d32f2f', fontWeight: 500 } }}
                    />
                    <TextField
                      fullWidth
                      label={t('contact_email_label')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      disabled={isSubmitting}
                      error={!!fieldErrors.email}
                      helperText={fieldErrors.email}
                      sx={{ '& .MuiFormHelperText-root': { color: '#d32f2f', fontWeight: 500 } }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 3 } }}>
                    <TextField
                      fullWidth
                      label={t('contact_phone_label')}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      disabled={isSubmitting}
                    />
                    <TextField
                      fullWidth
                      label={t('contact_subject_label')}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      disabled={isSubmitting}
                      error={!!fieldErrors.subject}
                      helperText={fieldErrors.subject}
                      sx={{ '& .MuiFormHelperText-root': { color: '#d32f2f', fontWeight: 500 } }}
                    />
                  </Box>

                  <TextField
                    fullWidth
                    label={t('contact_message_label')}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={6}
                    variant="outlined"
                    sx={{ marginBottom: { xs: 1, md: 2 } }}
                    disabled={isSubmitting}
                    error={!!fieldErrors.message}
                    helperText={fieldErrors.message}
                    FormHelperTextProps={{
                      sx: { color: '#d32f2f', fontWeight: 500 }
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      backgroundColor: isSubmitting ? '#cccccc' : '#274688',
                      color: 'white',
                      padding: { xs: '10px 24px', md: '12px 40px' },
                      fontSize: { xs: '0.88rem', md: '1.1rem' },
                      fontWeight: 600,
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: isSubmitting ? '#cccccc' : '#1B3266',
                        transform: isSubmitting ? 'none' : 'translateY(-2px)',
                        boxShadow: isSubmitting ? 'none' : '0 8px 20px rgba(39, 70, 136, 0.3)'
                      },
                      transition: 'all 0.3s ease',
                      alignSelf: 'center',
                      minWidth: { xs: 160, md: 200 }
                    }}
                  >
                    {isSubmitting ? t('contact_sending') : t('contact_submit_button')}
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </section>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%', fontSize: '1rem', fontWeight: 500 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Footer />
    </div>
  );
}

export default Contact;