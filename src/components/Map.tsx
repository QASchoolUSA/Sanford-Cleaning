const Map = () => {

  return (
    <section id="service-area" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Service Area
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide professional cleaning services throughout Sanford and surrounding areas. Check the map below to see if we service your location.
          </p>
        </div>

        <div className="mx-auto rounded-xl overflow-hidden" style={{ 
            boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25), 0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 30px 50px -12px rgba(0, 0, 0, 0.15), 0 0 20px 0 rgba(0, 0, 0, 0.05)', 
            transform: 'translateY(-5px)', 
            border: '1px solid #e2e8f0',
            margin: '30px auto',
            position: 'relative',
            zIndex: 1
          }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '0.75rem',
            padding: '1px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.05))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
            zIndex: 2
          }}></div>
          <div className="map-container" style={{ position: 'relative', width: '100%', height: '650px', overflow: 'hidden', borderRadius: '0.75rem', backgroundColor: '#fff', border: '2px solid #e2e8f0' }}>
            {/* No overlay needed as we're showing zoom controls */}
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=16wLCkKvWZaGkhh1mwmkszDtIZXl4HCY&ehbc=2E312F&ui=false&hl=en" 
              width="100%" 
              height="700"
              title="Sanford Cleaning Service Area"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              frameBorder="0"
              style={{ 
                position: 'absolute', 
                top: '-60px', 
                left: 0, 
                width: '100%', 
                height: 'calc(100% + 60px)', 
                border: 'none',
                pointerEvents: 'auto'
              }}
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Schedule Your Cleaning?</h3>
            <p className="mb-6">Experience the Sanford Cleaning difference today.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;