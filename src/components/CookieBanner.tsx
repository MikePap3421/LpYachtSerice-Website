import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'lp_cookie_consent';

function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner only if user hasn't already accepted
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      // Small delay so it doesn't flash on first paint
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      role="dialog"
      aria-label="Cookie consent"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: '#1e3a75',
        color: '#ffffff',
        padding: { xs: '1rem 1.25rem', md: '1rem 2rem' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.2)',
        // Slide up animation
        animation: 'cookieSlideUp 0.4s ease',
        '@keyframes cookieSlideUp': {
          from: { transform: 'translateY(100%)' },
          to:   { transform: 'translateY(0)' },
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '0.8rem', md: '0.9rem' },
          lineHeight: 1.6,
          opacity: 0.92,
          flex: 1,
          minWidth: 200,
        }}
      >
        {t('cookie_banner_text')}{' '}
        <a
          href="/privacy"
          style={{
            color: '#FCA311',
            fontWeight: 600,
            textDecoration: 'underline',
          }}
        >
          {t('cookie_banner_link')}
        </a>
        .
      </Typography>

      <Button
        onClick={handleAccept}
        variant="contained"
        size="small"
        sx={{
          backgroundColor: '#FCA311',
          color: '#1B3266',
          fontWeight: 700,
          fontSize: '0.82rem',
          padding: '7px 22px',
          borderRadius: '6px',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          '&:hover': {
            backgroundColor: '#e8920a',
          },
        }}
      >
        {t('cookie_banner_button')}
      </Button>
    </Box>
  );
}

export default CookieBanner;