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
      
      /* Dark background with visible text */
      body {
        background-color: var(--eva-dark);
        color: #FFFFFF !important;
      }
      
      /* Ensure all text is visible */
      p, span, div, li, a {
        color: #FFFFFF !important;
      }
      
      /* Links should be cyan for Evangelion look */
      a:hover {
        color: var(--eva-cyan) !important;
        text-decoration: none;
      }
      
      /* Make sure biography text is visible */
      .biography-title {
        color: var(--eva-orange) !important;
      }
      
      /* Styling for section headers */
      .section-heading {
        color: var(--eva-cyan) !important;
        font-family: 'Courier New', monospace !important;
        border-bottom: 1px solid var(--eva-orange);
        font-size: 1.5rem;
        letter-spacing: 1px;
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
      
      /* Make nav links more visible */
      .navbar .nav-link {
        color: #FFFFFF !important;
      }
      
      .navbar .nav-link:hover {
        color: var(--eva-cyan) !important;
      }
      
      /* Card styling */
      .card {
        background-color: rgba(17, 17, 17, 0.8) !important;
        border: 1px solid var(--eva-orange) !important;
      }
      
      /* Education and experience sections */
      .course, .experience .card-text, .experience .card-title, .institution, .experience-metadata {
        color: #FFFFFF !important;
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
      
      /* Author name styling */
      .portrait-title h2 {
        color: var(--eva-orange) !important;
        font-family: 'Courier New', monospace !important;
      }
      
      .portrait-title h3 {
        color: #FFFFFF !important;
      }
      
      /* Fix social icons */
      .network-icon a {
        color: var(--eva-blue) !important;
      }
      
      .network-icon a:hover {
        color: var(--eva-cyan) !important;
      }
      
      /* Buttons styling */
      .btn {
        background-color: transparent !important;
        border: 1px solid var(--eva-orange) !important;
        color: var(--eva-cyan) !important;
        font-family: 'Courier New', monospace !important;
      }
      
      .btn:hover {
        background-color: rgba(255, 72, 0, 0.2) !important;
      }
      
      /* Search box */
      .search-modal {
        background-color: rgba(17, 17, 17, 0.95) !important;
      }
      
      #search-box #search-query {
        background-color: var(--eva-dark) !important;
        color: #FFFFFF !important;
        border: 1px solid var(--eva-orange) !important;
      }
      
      /* Add a terminal cursor blink effect to headings */
      h1::after {
        content: '_';
        animation: blink 1s step-end infinite;
        color: var(--eva-cyan);
      }
      
      @keyframes blink {
        from, to { opacity: 1; }
        50% { opacity: 0; }
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
        
        // Add pulsing animation to hexagons
        hexagon.style.animation = `pulse ${2 + i}s infinite alternate`;
        body.appendChild(hexagon);
      }
      
      // Add keyframe animation for pulsing
      const pulseAnimation = document.createElement('style');
      pulseAnimation.textContent = `
        @keyframes pulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `;
      document.head.appendChild(pulseAnimation);
    };
    
    // Add T-minus countdown to the page
    const addCountdown = () => {
      // Create a container for the countdown
      const countdownContainer = document.createElement('div');
      countdownContainer.style.position = 'fixed';
      countdownContainer.style.top = '10px';
      countdownContainer.style.right = '20px';
      countdownContainer.style.color = 'var(--eva-cyan)';
      countdownContainer.style.fontFamily = 'Courier New, monospace';
      countdownContainer.style.fontSize = '12px';
      countdownContainer.style.zIndex = '10001';
      countdownContainer.id = 'nerv-countdown';
      
      // Set initial countdown value
      const tMinus = 24 * 60 * 60; // 24 hours in seconds
      countdownContainer.textContent = `T-MINUS ${formatTime(tMinus)}`;
      
      document.body.appendChild(countdownContainer);
      
      // Update countdown every second
      let currentTime = tMinus;
      setInterval(() => {
        currentTime--;
        if (currentTime < 0) currentTime = tMinus;
        document.getElementById('nerv-countdown').textContent = `T-MINUS ${formatTime(currentTime)}`;
      }, 1000);
    };
    
    // Helper function to format time as HH:MM:SS
    const formatTime = (seconds) => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };
    
    // Call our functions to add elements
    addHexagons();
    addCountdown();
  });