import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './Shared.css';

function PrivacyPolicy() {
  const { t } = useTranslation();

  const sections = [
    { title: t('privacy_s1_title'), content: t('privacy_s1_content') },
    { title: t('privacy_s2_title'), content: t('privacy_s2_content') },
    { title: t('privacy_s3_title'), content: t('privacy_s3_content') },
    { title: t('privacy_s4_title'), content: t('privacy_s4_content') },
    { title: t('privacy_s5_title'), content: t('privacy_s5_content') },
    { title: t('privacy_s6_title'), content: t('privacy_s6_content') },
    { title: t('privacy_s7_title'), content: t('privacy_s7_content') },
    { title: t('privacy_s8_title'), content: t('privacy_s8_content') },
  ];

  return (
    <div>
      <Helmet>
        <title>LP Yacht Service | {t('privacy_page_title')}</title>
        <meta name="description" content={t('privacy_meta_description')} />
        <link rel="canonical" href="https://lpyachtservice.gr/privacy" />
        {/* Privacy pages should not be indexed */}
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />

      <Box
        sx={{
          maxWidth: 820,
          margin: '0 auto',
          padding: { xs: '2.5rem 1.25rem 4rem', md: '4rem 2rem 6rem' },
        }}
      >
        {/* Header */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: '#274688',
            fontWeight: 700,
            fontSize: { xs: '1.6rem', md: '2.6rem' },
            mb: 1,
            position: 'relative',
            display: 'inline-block',
          }}
        >
          {t('privacy_page_title')}
        </Typography>

        {/* Gold accent line */}
        <Box
          sx={{
            width: 48,
            height: 3,
            backgroundColor: '#FCA311',
            borderRadius: 2,
            mb: 1,
          }}
        />

        <Typography
          sx={{
            color: '#888',
            fontSize: '0.85rem',
            mb: { xs: 3, md: 5 },
          }}
        >
          {t('privacy_last_updated')}
        </Typography>

        {/* Intro */}
        <Typography
          sx={{
            color: '#1B263B',
            lineHeight: 1.8,
            fontSize: { xs: '0.9rem', md: '1rem' },
            mb: { xs: 3, md: 5 },
            padding: '1.25rem 1.5rem',
            backgroundColor: '#f4f7fe',
            borderLeft: '3px solid #274688',
            borderRadius: '0 8px 8px 0',
          }}
        >
          {t('privacy_intro')}
        </Typography>

        {/* Sections */}
        {sections.map((section, index) => (
          <Box key={index} sx={{ mb: { xs: 3, md: 4 } }}>
            <Typography
              variant="h5"
              sx={{
                color: '#274688',
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.2rem' },
                mb: 1.5,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              {/* Section number badge */}
              <Box
                component="span"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  backgroundColor: '#274688',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </Box>
              {section.title}
            </Typography>
            <Typography
              sx={{
                color: '#3a4f6e',
                lineHeight: 1.8,
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                whiteSpace: 'pre-line',
                pl: { xs: 0, md: '44px' },
              }}
            >
              {section.content}
            </Typography>

            {/* Divider — not on last item */}
            {index < sections.length - 1 && (
              <Box
                sx={{
                  mt: { xs: 3, md: 4 },
                  borderBottom: '1px solid rgba(39, 70, 136, 0.08)',
                }}
              />
            )}
          </Box>
        ))}

        {/* Contact box */}
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            padding: { xs: '1.25rem', md: '2rem' },
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(39, 70, 136, 0.08)',
            border: '1px solid rgba(39, 70, 136, 0.08)',
          }}
        >
          <Typography
            sx={{
              color: '#274688',
              fontWeight: 700,
              fontSize: { xs: '1rem', md: '1.1rem' },
              mb: 1,
            }}
          >
            {t('privacy_contact_title')}
          </Typography>
          <Typography
            sx={{
              color: '#3a4f6e',
              fontSize: { xs: '0.875rem', md: '0.95rem' },
              lineHeight: 1.7,
            }}
          >
            {t('privacy_contact_body')}{' '}
            <a
              href="mailto:lpyachtservice@gmail.com"
              style={{ color: '#274688', fontWeight: 600 }}
            >
              lpyachtservice@gmail.com
            </a>
          </Typography>
        </Box>
      </Box>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;