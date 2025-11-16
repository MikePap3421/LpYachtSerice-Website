import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box, Typography, Card, CardMedia, Button, Modal, IconButton } from '@mui/material';
import { useState, useRef } from 'react';
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';
import '/src/components/Home.css';

function Projects() {
  // Array of all your gallery images with correct naming
  const galleryImages = Array.from({ length: 21 }, (_, i) => 
    `/src/assets/gallery/g${i + 1}.jpg`
  );

  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const gallerySectionRef = useRef<HTMLDivElement>(null);
  
  // Show first 6 images initially, or all if showAll is true
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  const handleShowLess = () => {
    setShowAll(false);
    if (gallerySectionRef.current) {
      window.scrollTo({
        top: gallerySectionRef.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(prev => prev === galleryImages.length - 1 ? 0 : prev! + 1);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(prev => prev === 0 ? galleryImages.length - 1 : prev! - 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      goToNext();
    } else if (event.key === 'ArrowLeft') {
      goToPrev();
    } else if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <div style={{ backgroundColor: '#f2f2f3ff', minHeight: '100vh' }}>
      <Navbar/>
      
      {/* Projects Hero Section */}
      <section className="projects-section">
        <Box sx={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          padding: '4rem 2rem 2rem',
          textAlign: 'center'
        }}>
          <Typography 
            variant="h2" 
            className="services-title"
            sx={{ 
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              marginBottom: '0.5rem'
            }}
          >
            Εργασίες
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#1B263B',
              opacity: 0.8,
              maxWidth: 600,
              margin: '0 auto',
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
          >
            Απολαύστε μια γκαλερί από επιλεγμένες μας εργασίες και projects
          </Typography>
        </Box>
      </section>

      {/* Gallery Section with ref */}
      <section className="services-section" ref={gallerySectionRef}>
        <Box sx={{ maxWidth: 1500, margin: '0 auto', padding: '0 2rem 4rem' }}>
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(3, 1fr)' 
              },
              gap: 3,
              marginBottom: showAll ? 0 : 4
            }}
          >
            {displayedImages.map((image, index) => (
              <Card 
                key={index}
                sx={{ 
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 6px 20px rgba(39, 70, 136, 0.1)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(39, 70, 136, 0.2)'
                  }
                }}
                onClick={() => handleImageClick(showAll ? index : index)}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Project ${index + 1}`}
                  sx={{ 
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                    flexGrow: 1,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                
                {/* Hover overlay with view icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(0.8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                    pointerEvents: 'none',
                  }}
                  className="view-icon"
                >
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '15px solid #274688',
                      transform: 'translateX(2px)'
                    }}
                  />
                </Box>
              </Card>
            ))}
          </Box>

          {/* See More/Less Button */}
          {!showAll && (
            <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => setShowAll(true)}
                sx={{
                  borderColor: '#274688',
                  color: '#274688',
                  padding: '12px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(39, 70, 136, 0.1)',
                    borderColor: '#1B3266',
                    color: '#1B3266',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Δείτε Περισσότερες Εργασίες
              </Button>
            </Box>
          )}

          {/* Show Less Button when all are displayed */}
          {showAll && (
            <Box sx={{ textAlign: 'center', marginTop: '3rem' }}>
              <Button
                variant="outlined"
                size="large"
                onClick={handleShowLess}
                sx={{
                  borderColor: '#274688',
                  color: '#274688',
                  padding: '12px 40px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(39, 70, 136, 0.1)',
                    borderColor: '#1B3266',
                    color: '#1B3266',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Λιγότερες Εργασίες
              </Button>
            </Box>
          )}
        </Box>
      </section>

      {/* Lightbox Modal */}
      <Modal
        open={selectedImage !== null}
        onClose={handleCloseModal}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none'
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }
            }}
          >
            <Close />
          </IconButton>

          {/* Navigation Buttons */}
          <IconButton
            onClick={goToPrev}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }
            }}
          >
            <NavigateBefore />
          </IconButton>

          <IconButton
            onClick={goToNext}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }
            }}
          >
            <NavigateNext />
          </IconButton>

          {/* Image */}
          {selectedImage !== null && (
            <img
              src={galleryImages[selectedImage]}
              alt={`Project ${selectedImage + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 8,
                display: 'block'
              }}
            />
          )}

          {/* Image Counter */}
          {selectedImage !== null && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: 4,
                fontSize: '0.9rem'
              }}
            >
              {selectedImage + 1} / {galleryImages.length}
            </Box>
          )}
        </Box>
      </Modal>
      
      <Footer />
    </div>
  );
}

export default Projects;