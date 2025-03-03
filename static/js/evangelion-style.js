// Evangelion styling injector
document.addEventListener('DOMContentLoaded', function() {
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
      /* Evangelion-inspired UI styles */
      :root {
        --eva-orange: #FF4800;
        --eva-cyan: #00FFFF;
        --eva-dark: #111111;
        --eva-blue: #0077FF;
      }
      
      /* Basic overlay effects */
      body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          rgba(18, 16, 16, 0) 50%, 
          rgba(0, 0, 0, 0.1) 50%
        );
        background-size: 100% 4px;
        z-index: 9999;
        pointer-events: none;
      }
      
      /* Dark background */
      body {
        background-color: var(--eva-dark);
        color: #FFFFFF;
      }
      
      /* Styling for section headers */
      .section-heading {
        color: var(--eva-cyan) !important;
        font-family: 'Courier New', monospace !important;
        border-bottom: 1px solid var(--eva-orange);
      }
      
      /* Styling for headings */
      h1, h2, h3 {
        font-family: 'Courier New', monospace !important;
      }
      
      h1 {
        color: var(--eva-orange) !important;
      }
      
      /* Navigation bar styling */
      .navbar {
        background-color: rgba(17, 17, 17, 0.9) !important;
        border-bottom: 1px solid var(--eva-orange) !important;
      }
      
      /* Card styling */
      .card {
        background-color: rgba(17, 17, 17, 0.8) !important;
        border: 1px solid var(--eva-orange) !important;
      }
      
      /* NERV logo in header */
      .navbar-brand::before {
        content: 'NERV';
        color: var(--eva-orange);
        margin-right: 10px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
      }
      
      /* Add hexagonal decorative elements */
      .home-section {
        position: relative;
      }
      
      .home-section::before {
        content: '';
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 35px;
        background-color: transparent;
        border: 1px solid var(--eva-orange);
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        z-index: 10;
      }
      
      /* Add subtle grid lines to sections */
      .home-section::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
          linear-gradient(to right, rgba(255, 72, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 72, 0, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
        pointer-events: none;
        z-index: -1;
      }
      
      /* Terminal-like footer */
      .site-footer {
        background-color: rgba(17, 17, 17, 0.9) !important;
        border-top: 1px solid var(--eva-orange) !important;
        font-family: 'Courier New', monospace !important;
      }
      
      /* Publications and talks styling */
      .pub-list-item, .talk-metadata {
        border-left: 3px solid var(--eva-orange) !important;
        padding-left: 15px !important;
        margin-bottom: 20px !important;
      }
    `;
    
    // Add the style to the document head
    document.head.appendChild(style);
    
    // Add NERV text next to brand (if not already added by CSS)
    const navbar = document.querySelector('.navbar-brand');
    if (navbar && !navbar.getAttribute('data-nerv')) {
      navbar.setAttribute('data-nerv', 'true');
    }
    
    // Add hexagons to the page as decorative elements
    const addHexagons = () => {
      const body = document.body;
      for (let i = 0; i < 3; i++) {
        const hexagon = document.createElement('div');
        hexagon.style.position = 'fixed';
        hexagon.style.width = '20px';
        hexagon.style.height = '23px';
        hexagon.style.bottom = `${20 + (i * 30)}px`;
        hexagon.style.right = '20px';
        hexagon.style.backgroundColor = 'transparent';
        hexagon.style.border = '1px solid var(--eva-orange)';
        hexagon.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
        hexagon.style.zIndex = '10000';
        hexagon.style.opacity = i % 2 === 0 ? '0.8' : '0.4';
        body.appendChild(hexagon);
      }
    };
    
    addHexagons();
  });