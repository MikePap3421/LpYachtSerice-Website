import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

interface TemporaryDrawerProps {
  open: boolean;
  onClose: () => void;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({
  open,
  onClose,
}) => {
  const { t, i18n } = useTranslation();
  const [languageMenuAnchor, setLanguageMenuAnchor] = React.useState<null | HTMLElement>(null);

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
    const currentLanguage = i18n.language;
    if (currentLanguage === 'el') {
      return "/src/assets/Greek.png";
    } else {
      return "/src/assets/English.png";
    }
  };

  // Translated pages and routes
  const pages = [
    { key: 'home', route: '/' },
    { key: 'services', route: '/services' },
    { key: 'projects', route: '/projects' },
    { key: 'contact', route: '/contact' }
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          backgroundColor: "#14213D",
          color: "#fff",
          p: 2,
        },
      }}
    >
      {/* --- Close Button --- */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton onClick={onClose} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* --- Navigation Links with Separators --- */}
      <List>
        {pages.map((page, index) => (
          <React.Fragment key={page.key}>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to={page.route}
                onClick={onClose}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                  borderRadius: 1,
                  marginBottom: 0.3,
                  marginTop: 0.3,
                }}
              >
                <ListItemText
                  primary={t(`nav.${page.key}`)}
                  primaryTypographyProps={{
                    fontSize: "1.5rem",
                    paddingBottom: 0,
                    fontWeight: 500,
                    textAlign: "center",
                    color: "#fff",
                  }}
                />
              </ListItemButton>
            </ListItem>
            
            {/* Add divider after each item except the last one */}
            {index < pages.length - 1 && (
              <Divider 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  margin: '0.1rem 0' 
                }} 
              />
            )}
          </React.Fragment>
        ))}
      </List>

      {/* --- Language Switcher right under navigation options --- */}
      <Box sx={{ textAlign: 'center' }}>
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }} />
        
        <IconButton 
          onClick={handleLanguageClick}
          sx={{
            color: "#fff",
            padding: '8px',
            border: '1px solid rgba(255,255,255,0.3)',
            transform: 'scale(1.1)',
            borderRadius: 2, 
            '&:hover': {
              backgroundColor: "rgba(255,255,255,0.1)",
            }
          }}
        >
          <img 
            src={getCurrentLanguageIcon()} 
            alt={i18n.language === 'el' ? 'Greek Flag' : 'English Flag'}
            style={{ 
              width: 32, 
              height: 32,
              borderRadius: '2px'
            }}
          />
        </IconButton>

        {/* Language Dropdown Menu */}
        <Menu
          anchorEl={languageMenuAnchor}
          open={Boolean(languageMenuAnchor)}
          onClose={handleLanguageClose}
          PaperProps={{
            sx: {
              backgroundColor: '#14213D',
              color: '#fff',
            }
          }}
        >
          <MenuItem 
            onClick={() => changeLanguage('el')}
            sx={{ 
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              }
            }}
          >
            <img 
              src="/src/assets/Greek.png" 
              alt="Greek Flag"
              style={{ 
                width: 20, 
                height: 20, 
                marginRight: 8,
                borderRadius: '2px',
                transform: 'scale(1.2)',
              }} 
            />
            Ελληνικά
          </MenuItem>
          <MenuItem 
            onClick={() => changeLanguage('en')}
            sx={{ 
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              }
            }}
          >
            <img 
              src="/src/assets/English.png" 
              alt="English Flag"
              style={{ 
                width: 20, 
                height: 20, 
                marginRight: 8,
                borderRadius: '2px',
                transform: 'scale(1.3)',
              }} 
            />
            English
          </MenuItem>
        </Menu>
      </Box>
    </Drawer>
  );
};

export default TemporaryDrawer;