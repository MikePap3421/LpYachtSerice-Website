import * as React from "react";
import { Link, useLocation } from "react-router-dom"; // 1. Import useLocation
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
import mainLogo from '../assets/mainlogo.png';
import greekFlag from '../assets/Greek.png';
import englishFlag from '../assets/English.png';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();
  
  // 2. Get the current URL path
  const location = useLocation();
  const currentPath = location.pathname;

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const scrollToPageStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const getCurrentLanguageIcon = () => {
    return i18n.language === 'el' ? greekFlag : englishFlag;
  };

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
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
            {/* --- Logo --- */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              onClick={scrollToPageStart}
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
                  src={mainLogo}
                  alt="LP Yacht Service"
                  style={{ width: "100%" }}
                />
              </Box>
            </Typography>

            {/* --- Desktop Navigation Links with Active State --- */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {[
                { label: 'home', path: '/' },
                { label: 'services', path: '/services' },
                { label: 'projects', path: '/projects' },
                { label: 'contact', path: '/contact' }
              ].map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={scrollToPageStart}
                  sx={{
                    fontWeight: isActive(item.path) ? 700 : 550, // Bold if active
                    fontSize: i18n.language === 'en' ? '1.4rem' : '1.3rem',
                    color: isActive(item.path) ? "primary.main" : "inherit", // Blue if active
                    textTransform: "none",
                    position: 'relative',
                    "&:after": isActive(item.path) ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '10%',
                      width: '80%',
                      height: '3px',
                      backgroundColor: '#274688',
                      borderRadius: '2px'
                    } : {},
                    "&:hover": { 
                      color: "primary.main", 
                      backgroundColor: "rgba(83, 122, 194, 0.19)"
                    },
                  }}
                >
                  {t(`nav.${item.label}`)}
                </Button>
              ))}
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
              <img 
                src={getCurrentLanguageIcon()} 
                alt="Language Flag"
                style={{ 
                  width: 24, 
                  height: 24,
                  objectFit: 'cover',
                  borderRadius: '2px',
                  transform: i18n.language === 'en' ? 'scale(1.6)' : 'scale(1.2)'
                }}
              />
            </IconButton>

            <Menu
              anchorEl={languageMenuAnchor}
              open={Boolean(languageMenuAnchor)}
              onClose={handleLanguageClose}
            >
              <MenuItem onClick={() => changeLanguage('el')}>
                <img 
                  src={greekFlag} 
                  alt="Greek Flag"
                  style={{ width: 20, height: 20, marginRight: 8, borderRadius: '2px' }} 
                />
                Ελληνικά
              </MenuItem>
              <MenuItem onClick={() => changeLanguage('en')}>
                <img 
                  src={englishFlag} 
                  alt="English Flag"
                  style={{ width: 20, height: 20, marginRight: 8, borderRadius: '2px', transform: 'scale(1.4)' }} 
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
