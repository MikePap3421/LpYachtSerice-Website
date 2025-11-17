import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import '/src/components/Home.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service later
    console.log('Form submitted:', formData);
    alert(t('contact_success_message'));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <Navbar />
      
      {/* Contact Form Section */}
      <section className="contact-section">
        <Box sx={{ maxWidth: 800, margin: '0 auto', padding: '2rem 2rem 2rem' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              textAlign: 'center', 
              color: '#274688',
              fontWeight: 700,
              marginBottom: '1rem',
              fontSize: { xs: '2.5rem', md: '3.5rem'  }
            }}
          >
            {t('contact_hero_title')}
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center', 
              color: '#1B263B',
              marginBottom: '3rem',
              opacity: 0.8
            }}
          >
            {t('contact_hero_subtitle')}
          </Typography>

          <Card 
            sx={{ 
              borderRadius: 3, 
              boxShadow: '0 10px 30px rgba(39, 70, 136, 0.1)',
              padding: { xs: '2rem', md: '3rem' }
            }}
          >
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  
                  {/* Name and Email Row */}
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                    <TextField
                      fullWidth
                      label={t('contact_name_label')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label={t('contact_email_label')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Box>

                  {/* Phone and Subject Row */}
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                    <TextField
                      fullWidth
                      label={t('contact_phone_label')}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label={t('contact_subject_label')}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Box>

                  {/* Message */}
                  <TextField
                    fullWidth
                    label={t('contact_message_label')}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
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
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(39, 70, 136, 0.3)'
                      },
                      transition: 'all 0.3s ease',
                      alignSelf: 'center',
                      minWidth: 200
                    }}
                  >
                    {t('contact_submit_button')}
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </section>
      
      <Footer />
    </div>
  );
}

export default Contact;