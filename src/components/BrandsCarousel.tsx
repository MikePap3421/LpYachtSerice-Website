import './Shared.css';

const brands = [
  { name: 'Yanmar', logo: '/brands/yanmar.png' },
  { name: 'Volvo', logo: '/brands/volvo.png' },
  { name: 'Kubota', logo: '/brands/kubota.png' },
  { name: 'Lofrans', logo: '/brands/lofrans.png' },
  { name: 'Perkins', logo: '/brands/perkins.png' }
];

const loopedBrands = [...brands, ...brands];

function BrandsCarousel() {
  return (
    <section className="brands-section">
      {/* No max-width wrapper — carousel runs edge to edge */}
      <div className="brands-scroll-container">
        <div className="brands-scroll-track">
          {loopedBrands.map((brand, index) => (
            <div key={`brand-${index}`} className="brand-logo-item">
              <img
                src={brand.logo}
                alt={brand.name}
                className="brand-logo-only"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsCarousel;