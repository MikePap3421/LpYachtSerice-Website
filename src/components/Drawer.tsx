import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

interface TemporaryDrawerProps {
  open: boolean;
  onClose: () => void;
  pages: string[];
  routes?: Record<string, string>; // optional mapping for routes
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({
  open,
  onClose,
  pages,
  routes = {
    "Αρχική": "/",
    "Ποιοι Είμαστε": "/about",
    "Υπηρεσίες": "/services",
    "Επικοινωνία": "/contact",
  },
}) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 240,
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

      {/* --- Navigation Links --- */}
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              component={Link}
              to={routes[page]}
              onClick={onClose}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <ListItemText
                primary={page}
                primaryTypographyProps={{
                  fontSize: "1.2rem",
                  paddingBottom: 2,
                  fontWeight: 500,
                  textAlign: "center",
                  color: "#fff",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default TemporaryDrawer;
