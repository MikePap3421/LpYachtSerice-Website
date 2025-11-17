import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "./Drawer";
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@mui/material';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageMenuAnchor(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleLanguageClose();
  };

  // Get the current language flag icon
  const getCurrentLanguageIcon = () => {
    const currentLanguage = i18n.language;
    if (currentLanguage === 'el') {
      return "/src/assets/Greek.png"; // Greek flag
    } else {
      return "/src/assets/English.png"; // English flag
    }
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 0, md: 6 },
          }}
        >
          {/* --- Mobile Drawer Menu --- */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              left: 16,
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <TemporaryDrawer
              open={drawerOpen}
              onClose={handleDrawerClose}
            />
          </Box>

          {/* --- Centered Logo + Desktop Links --- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, md: 4 },
              flexGrow: 0,
            }}
          >
            {/* --- Logo that links to home --- */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: 80, margin: 2 }}>
                <img
                  src="/src/assets/mainlogo.png"
                  alt="LP Yacht Service"
                  style={{ width: "100%" }}
                />
              </Box>
            </Typography>

            {/* --- Desktop Navigation Links --- */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              <Button
                component={Link}
                to="/"
                onClick={handleDrawerClose}
                sx={{
                  fontWeight: 550,
                  fontSize: i18n.language === 'en' ? '1.4rem' : '1.3rem',
                  color: "inherit",
                  textTransform: "none",
                  "&:hover": { color: "primary.main", backgroundColor: "rgba(83, 122, 194, 0.19)"},
                }}
              >
                {t('nav.home')}
              </Button>
              <Button
                component={Link}
                to="/services"
                onClick={handleDrawerClose}
                sx={{
                  fontWeight: 550,
                  fontSize: i18n.language === 'en' ? '1.4rem' : '1.3rem',
                  color: "inherit",
                  textTransform: "none",
                  "&:hover": { color: "primary.main", backgroundColor: "rgba(83, 122, 194, 0.19)" },
                }}
              >
                {t('nav.services')}
              </Button>
              <Button
                component={Link}
                to="/projects"
                onClick={handleDrawerClose}
                sx={{
                  fontWeight: 550,
                  fontSize: i18n.language === 'en' ? '1.4rem' : '1.3rem',
                  color: "inherit",
                  textTransform: "none",
                  "&:hover": { color: "primary.main", backgroundColor: "rgba(83, 122, 194, 0.19)" },
                }}
              >
                {t('nav.projects')}
              </Button>
              <Button
                component={Link}
                to="/contact"
                onClick={handleDrawerClose}
                sx={{
                  fontWeight: 550,
                  fontSize: i18n.language === 'en' ? '1.4rem' : '1.3rem',
                  color: "inherit",
                  textTransform: "none",
                  "&:hover": { color: "primary.main", backgroundColor: "rgba(83, 122, 194, 0.19)" },
                }}
              >
                {t('nav.contact')}
              </Button>
            </Box>
          </Box>

          {/* --- Language Icon (right side) --- */}
          <Box sx={{ right: 16, display: { xs: "none", md: "flex" } }}>
            <IconButton 
              onClick={handleLanguageClick}
              sx={{
                color: "#1B263B",
                "&:hover": {
                  backgroundColor: "rgba(83, 122, 194, 0.19)",
                  color: "#274688"
                }
              }}
            >
              {/* Replace LanguageIcon with flag images */}
              <img 
                src={getCurrentLanguageIcon()} 
                alt={i18n.language === 'el' ? 'Greek Flag' : 'English Flag'}
                style={{ 
                  width: 24, 
                  height: 24,
                  objectFit: 'cover',
                  borderRadius: '2px',
                  transform: i18n.language === 'en' ? 'scale(1.6)' : 'scale(1.2)'
                }}
              />
            </IconButton>

            {/* Language Dropdown Menu */}
            <Menu
              anchorEl={languageMenuAnchor}
              open={Boolean(languageMenuAnchor)}
              onClose={handleLanguageClose}
            >
              <MenuItem onClick={() => changeLanguage('el')}>
                <img 
                  src="/src/assets/Greek.png" 
                  alt="Greek Flag"
                  style={{ 
                    width: 20, 
                    height: 20, 
                    marginRight: 8,
                    borderRadius: '2px'
                  }} 
                />
                Ελληνικά
              </MenuItem>
              <MenuItem onClick={() => changeLanguage('en')}>
                <img 
                  src="/src/assets/English.png" 
                  alt="English Flag"
                  style={{ 
                    width: 20, 
                    height: 20, 
                    marginRight: 8,
                    borderRadius: '2px',
                    transform: 'scale(1.4)'
                  }} 
                />
                English
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;