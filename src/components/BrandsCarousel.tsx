import { Box } from '@mui/material';
import './Shared.css';

const brands = [
  { name: 'Yanmar', logo: '/brands/yanmar.png' },
  { name: 'Volvo', logo: '/brands/volvo.png' },
  { name: 'Kubota', logo: '/brands/kubota.png' },
  { name: 'Lofrans', logo: '/brands/lofrans.png' },
  { name: 'Perkins', logo: '/brands/perkins.png' }
];

function BrandsCarousel() {


  return (
    <section className="brands-section">
      <Box sx={{ maxWidth: 1600, margin: '0 auto' }}>
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <Box className="brands-scroll-container">
            <Box className="brands-scroll-track">
              {[...brands, ...brands,...brands, ...brands].map((brand, index) => (
                <Box
                  key={`brand-${index}`}
                  className="brand-logo-item"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brand-logo-only"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default BrandsCarousel;
