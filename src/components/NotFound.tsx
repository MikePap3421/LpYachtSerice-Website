import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>LP Yacht Service | 404 Not Found</title>
      </Helmet>
      <Navbar />
      <Box
        sx={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 3,
          py: 10
        }}
      >
        <Typography variant="h1" sx={{ color: '#274688', fontWeight: 700 }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ color: '#1B263B' }}>
          {t('Page not found', 'Η σελίδα δεν βρέθηκε')}
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{ mt: 2, backgroundColor: '#274688' }}
        >
          {t('nav.home')}
        </Button>
      </Box>
      <Footer />
    </>
  );
}

export default NotFound;
