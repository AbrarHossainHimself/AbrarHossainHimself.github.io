// Complete Evangelion UI redesign
document.addEventListener('DOMContentLoaded', function() {
  // Create a complete style override
  const style = document.createElement('style');
  style.textContent = `
    /* Evangelion UI color scheme */
    :root {
      --eva-orange: #FF4800;
      --eva-cyan: #00FFFF;
      --eva-dark: #000000;
      --eva-blue: #0077FF;
      --eva-grey: #333333;
      --eva-light-grey: #AAAAAA;
    }
    
    /* Reset the entire site to dark mode */
    html, body {
      background-color: var(--eva-dark) !important;
      color: #FFFFFF !important;
      font-family: 'Courier New', monospace !important;
    }
    
    /* CRT scanline effect */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(18, 16, 16, 0) 50%, 
        rgba(0, 0, 0, 0.15) 50%
      );
      background-size: 100% 4px;
      z-index: 9999;
      pointer-events: none;
    }
    
    /* Subtle CRT flicker */
    body::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0);
      z-index: 9998;
      pointer-events: none;
      animation: flicker 5s infinite;
    }
    
    @keyframes flicker {
      0% { background-color: rgba(0,0,0,0); }
      5% { background-color: rgba(0,0,0,0.02); }
      10% { background-color: rgba(0,0,0,0); }
      15% { background-color: rgba(0,0,0,0.04); }
      30% { background-color: rgba(0,0,0,0); }
      50% { background-color: rgba(0,0,0,0.03); }
      80% { background-color: rgba(0,0,0,0); }
      95% { background-color: rgba(0,0,0,0.05); }
      100% { background-color: rgba(0,0,0,0); }
    }
    
    /* Force all text elements to have proper contrast */
    *, *::before, *::after {
      color: #FFFFFF !important;
    }
    
    /* Main content styling */
    .container, .container-fluid {
      background-color: var(--eva-dark) !important;
    }
    
    /* Override any white cards or backgrounds */
    .card, .article-container, section, div, footer {
      background-color: transparent !important;
    }
    
    /* Style all cards with eva-themed borders */
    .card {
      border: 1px solid var(--eva-orange) !important;
      background-color: rgba(20, 20, 20, 0.7) !important;
      border-radius: 0 !important;
    }
    
    /* Style headings */
    h1, h2, h3, h4, h5, h6 {
      color: var(--eva-cyan) !important;
      font-family: 'Courier New', monospace !important;
      border-bottom: 1px solid var(--eva-orange);
      padding-bottom: 5px;
      letter-spacing: 1px;
    }
    
    h1::after, h2::after, h3::after {
      content: '_';
      animation: blink 1s step-end infinite;
      color: var(--eva-orange);
    }
    
    @keyframes blink {
      from, to { opacity: 1; }
      50% { opacity: 0; }
    }
    
    /* Style the navbar */
    .navbar {
      background-color: rgba(0, 0, 0, 0.9) !important;
      border-bottom: 1px solid var(--eva-orange) !important;
      font-family: 'Courier New', monospace !important;
    }
    
    /* NERV branding */
    .navbar-brand {
      position: relative;
      padding-left: 55px !important;
    }
    
    .navbar-brand::before {
      content: 'NERV';
      position: absolute;
      left: 0;
      color: var(--eva-orange) !important;
      font-weight: bold;
      font-family: 'Courier New', monospace !important;
    }
    
    /* Navigation links */
    .navbar-light .navbar-nav .nav-link {
      color: #FFFFFF !important;
    }
    
    .navbar-light .navbar-nav .nav-link:hover {
      color: var(--eva-cyan) !important;
    }
    
    /* Footer */
    .page-footer, .site-footer {
      background-color: rgba(0, 0, 0, 0.9) !important;
      border-top: 1px solid var(--eva-orange) !important;
      margin-top: 20px;
    }
    
    /* Add grid lines to all sections */
    .home-section, section {
      position: relative;
      margin-bottom: 20px;
      border: none !important;
    }
    
    .home-section::after, section::after {
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
    
    /* Style buttons */
    .btn {
      background-color: transparent !important;
      border: 1px solid var(--eva-orange) !important;
      color: var(--eva-cyan) !important;
      border-radius: 0 !important;
      font-family: 'Courier New', monospace !important;
    }
    
    .btn:hover {
      background-color: rgba(255, 72, 0, 0.2) !important;
    }
    
    /* Profile page */
    .portrait-title h2 {
      color: var(--eva-orange) !important;
      border-bottom: none !important;
    }
    
    .network-icon a {
      color: var(--eva-blue) !important;
    }
    
    .network-icon a:hover {
      color: var(--eva-cyan) !important;
    }
    
    /* Publication lists */
    .pub-list-item {
      border-left: 3px solid var(--eva-orange) !important;
      padding-left: 15px !important;
      margin-bottom: 20px !important;
      background-color: rgba(20, 20, 20, 0.5) !important;
      padding: 15px !important;
    }
    
    /* Style all links */
    a {
      color: var(--eva-cyan) !important;
      text-decoration: none !important;
    }
    
    a:hover {
      color: var(--eva-orange) !important;
      text-decoration: none !important;
    }
    
    /* All avatar images with eva styling */
    .avatar {
      border: 2px solid var(--eva-orange) !important;
    }
    
    /* Target biography text specifically */
    #about .biography-text p {
      color: #FFFFFF !important;
      font-size: 1rem !important;
      line-height: 1.5 !important;
    }
    
    /* Force any spans or divs containing text to be white */
    span, div, p, li, td, th {
      color: #FFFFFF !important;
    }
    
    /* Add status indicator styling */
    .article-metadata::after {
      content: 'STATUS: NORMAL';
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 0.6rem;
      color: var(--eva-cyan) !important;
      font-family: 'Courier New', monospace !important;
    }
    
    /* Style section headings */
    .section-heading {
      color: var(--eva-cyan) !important;
      position: relative;
      padding-left: 15px;
    }
    
    .section-heading::before {
      content: '>';
      position: absolute;
      left: 0;
      color: var(--eva-orange) !important;
    }
  `;
  
  // Add the style to the document head
  document.head.appendChild(style);
  
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
  
  // Add hexagons to the page as decorative elements
  const addHexagons = () => {
    const body = document.body;
    for (let i = 0; i < 5; i++) {
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
  
  // Add status indicator to sections
  const addStatusIndicators = () => {
    document.querySelectorAll('.home-section').forEach((section, index) => {
      const statusIndicator = document.createElement('div');
      statusIndicator.style.position = 'absolute';
      statusIndicator.style.top = '10px';
      statusIndicator.style.right = '60px';
      statusIndicator.style.color = 'var(--eva-cyan)';
      statusIndicator.style.fontFamily = 'Courier New, monospace';
      statusIndicator.style.fontSize = '12px';
      statusIndicator.textContent = 'SYSTEM READY';
      statusIndicator.style.opacity = '0.8';
      statusIndicator.style.animation = 'blink 2s infinite';
      section.style.position = 'relative'; // Ensure positioning context
      section.appendChild(statusIndicator);
    });
  };
  
  // Force text visibility after a delay to ensure it overrides any theme styling
  const forceTextVisibility = () => {
    // Direct DOM manipulations to ensure text is visible
    const allTextElements = document.querySelectorAll('p, span, div, li, h1, h2, h3, h4, h5, h6, a');
    allTextElements.forEach(el => {
      if (el.textContent && el.textContent.trim().length > 0) {
        if (el.tagName.toLowerCase().startsWith('h')) {
          el.style.color = 'var(--eva-cyan)';
        } else if (el.tagName.toLowerCase() === 'a') {
          el.style.color = 'var(--eva-cyan)';
        } else {
          el.style.color = '#FFFFFF';
        }
        el.style.opacity = '1';
      }
    });
    
    // Target biographical text specifically
    const bioText = document.querySelectorAll('#about p');
    bioText.forEach(p => {
      p.style.color = '#FFFFFF';
      p.style.opacity = '1';
      // Increase specificity by adding !important inline
      p.setAttribute('style', 'color: #FFFFFF !important; opacity: 1 !important;');
    });
  };
  
  // Initialize all our custom elements
  addCountdown();
  addHexagons();
  addStatusIndicators();
  
  // Force text visibility initially
  forceTextVisibility();
  
  // And again after a short delay to ensure it overrides any lazy-loaded styles
  setTimeout(forceTextVisibility, 500);
  setTimeout(forceTextVisibility, 1000);
  setTimeout(forceTextVisibility, 2000);
});