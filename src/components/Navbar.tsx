import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "./Drawer"; // your custom drawer component

const pages: string[] = ["Αρχική", "Υπηρεσίες", "Εργασίες", "Επικοινωνία"];

// Map Greek labels to route paths
const pageRoutes: Record<string, string> = {
  "Αρχική": "/",
  "Εργασίες": "/projects",
  "Υπηρεσίες": "/services",
  "Επικοινωνία": "/contact",
};

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)", // Added subtle shadow
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
              pages={pages}
              routes={pageRoutes}
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
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={pageRoutes[page]}
                  onClick={handleDrawerClose}
                  sx={{
                    fontWeight: 550,
                    fontSize: "1.2rem",
                    color: "inherit",
                    textTransform: "none",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          {/* --- Language Icon (right side) --- */}
          <Box sx={{ right: 16, display: { xs: "none", md: "flex" } }}>
            <IconButton color="inherit">
              <LanguageIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;