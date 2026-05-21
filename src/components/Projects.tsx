import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box, Typography, Card, CardMedia, Button, Modal, IconButton } from '@mui/material';
import { useState, useRef } from 'react';
import { Close, NavigateBefore, NavigateNext } from '@mui/icons-material';
import './Shared.css';
import './Projects.css';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  
  const galleryImages = Array.from({ length: 21 }, (_, i) => 
    `/gallery/g${i + 1}.jpg`
  );

  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const gallerySectionRef = useRef<HTMLDivElement>(null);
  
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  const handleProjectScroll = () => {
    if (!showAll && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector('.gallery-card-item') as HTMLElement;
      if (firstCard) {
        const totalStep = firstCard.offsetWidth + 24;
        const newIndex = Math.round(container.scrollLeft / totalStep);
        setActiveProjectIndex(newIndex);
      }
    }
  };

  const handleShowLess = () => {
    setShowAll(false);
    setActiveProjectIndex(0); 
    if (gallerySectionRef.current) {
      window.scrollTo({
        top: gallerySectionRef.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleImageClick = (index: number) => setSelectedImage(index);
  const handleCloseModal = () => setSelectedImage(null);

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

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>LP Yacht Service | {t('nav.projects')}</title>
        <meta name="description" content={t('projects_hero_subtitle')} />
      </Helmet>
      <Navbar/>
      
      <section className="projects-hero-section">
        <Typography variant="h2" className="projects-main-title">
          {t('projects_hero_title')}
        </Typography>
        <Typography variant="h6" className="projects-subtitle">
          {t('projects_hero_subtitle')}
        </Typography>
      </section>

      <section className="gallery-section-container" ref={gallerySectionRef}>
        <div className="gallery-wrapper">
          {/* CLEAN LOGIC: Toggles between 'services-slider' (horizontal) 
              and 'projects-grid-vertical' (2-column vertical) 
          */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleProjectScroll}
            className={showAll ? "projects-grid-vertical" : "services-slider"}
          >
            {displayedImages.map((image, index) => (
              <Card 
                key={index}
                className="gallery-card-item"
                onClick={() => handleImageClick(index)}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={t('projects_image_alt', { number: index + 1 })}
                  className="gallery-image"
                />
              </Card>
            ))}
          </div>

          {!showAll && (
            <div className="dot-container">
              {displayedImages.map((_, i) => (
                <div key={i} className={`dot ${activeProjectIndex === i ? 'active' : ''}`} />
              ))}
            </div>
          )}

          <Box className="gallery-actions">
            {!showAll ? (
              <Button variant="contained" className="primary-button" onClick={() => setShowAll(true)}>
                {t('projects_see_more_button')}
              </Button>
            ) : (
              <Button variant="outlined" className="secondary-button" onClick={handleShowLess}>
                {t('projects_see_less_button')}
              </Button>
            )}
          </Box>
        </div>
      </section>

      <Modal open={selectedImage !== null} onClose={handleCloseModal} className="lightbox-modal">
        <Box className="modal-content">
          <IconButton onClick={handleCloseModal} className="modal-close"><Close /></IconButton>
          <IconButton onClick={goToPrev} className="modal-nav modal-prev"><NavigateBefore /></IconButton>
          <IconButton onClick={goToNext} className="modal-nav modal-next"><NavigateNext /></IconButton>
          {selectedImage !== null && (
            <img src={galleryImages[selectedImage]} alt="Project" className="modal-image" />
          )}
        </Box>
      </Modal>
      
      <Footer />
    </div>
  );
}

export default Projects;
