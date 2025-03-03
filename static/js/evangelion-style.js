// Refined Evangelion UI with improved layout and 3D sphere
document.addEventListener('DOMContentLoaded', function() {
  // Create style element
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
      line-height: 1.5 !important;
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
    
    /* LAYOUT TRANSFORMATION - Create retro terminal layout */
    
    /* Main container transformation */
    .container, .container-fluid {
      background-color: var(--eva-dark) !important;
      padding: 10px 30px !important;
      max-width: 100% !important;
    }
    
    /* Grid system overrides for asymmetric layout */
    .row {
      margin-left: -30px !important;
      margin-right: -30px !important;
      display: flex;
      flex-wrap: wrap;
    }
    
    /* About section - terminal display style */
    #about {
      position: relative !important;
      padding: 20px !important;
      margin-bottom: 40px !important;
      border: 1px solid var(--eva-orange) !important;
      background-color: rgba(0, 0, 0, 0.7) !important;
    }
    
    #about::before {
      content: 'UNIT-01';
      position: absolute;
      top: -12px;
      left: 20px;
      background-color: var(--eva-dark);
      padding: 0 10px;
      color: var(--eva-orange) !important;
      font-size: 12px;
      letter-spacing: 2px;
    }
    
    /* Profile image transformation */
    .avatar {
      border: 2px solid var(--eva-orange) !important;
      position: relative;
      z-index: 1;
      transform: scale(0.9);
      filter: contrast(1.1) saturate(0.9) brightness(1.1);
    }
    
    #profile .network-icon {
      margin-top: 20px;
    }
    
    /* Section transformations */
    .home-section {
      padding: 30px 0 30px 0 !important;
      position: relative;
      margin-bottom: 40px !important;
      animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Section headers */
    .section-heading {
      font-size: 1.5rem !important;
      text-transform: uppercase;
      letter-spacing: 3px !important;
      color: var(--eva-cyan) !important;
      border-bottom: 1px solid var(--eva-orange) !important;
      padding-bottom: 10px !important;
      margin-bottom: 30px !important;
      position: relative;
    }
    
    .section-heading::before {
      content: '>';
      position: absolute;
      left: -20px;
      color: var(--eva-orange) !important;
    }
    
    /* Navbar transformation */
    .navbar {
      height: 60px !important;
      background-color: rgba(0, 0, 0, 0.9) !important;
      border-bottom: 1px solid var(--eva-orange) !important;
    }
    
    .navbar-brand {
      font-size: 1.2rem !important;
      letter-spacing: 2px !important;
      color: var(--eva-orange) !important;
    }
    
    .navbar-light .navbar-nav .nav-link {
      font-size: 0.9rem !important;
      letter-spacing: 1px !important;
      text-transform: uppercase;
      margin: 0 15px !important;
    }
    
    /* Override grid layout for asymmetric look */
    .col-12, .col-md-4, .col-md-8, .col-lg-4, .col-lg-8 {
      padding: 15px 20px !important;
    }
    
    /* Experience section */
    #experience .card {
      border: 1px solid var(--eva-cyan) !important;
      background-color: rgba(0, 0, 0, 0.5) !important;
      margin-bottom: 20px !important;
      transform: translateX(15px);
    }
    
    #experience .card:nth-child(even) {
      transform: translateX(-15px);
    }
    
    #experience .card-title {
      color: var(--eva-orange) !important;
      font-size: 1.1rem !important;
      letter-spacing: 1px !important;
    }
    
    /* Publications section */
    #publications {
      position: relative;
      padding-left: 30px !important;
    }
    
    .pub-list-item {
      position: relative;
      border-left: 3px solid var(--eva-orange) !important;
      padding: 15px !important;
      margin-bottom: 25px !important;
      background-color: rgba(0, 0, 0, 0.5) !important;
      transform: translateX(10px);
      transition: transform 0.3s ease;
    }
    
    .pub-list-item:hover {
      transform: translateX(20px);
    }
    
    .pub-list-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      background-color: var(--eva-orange);
    }
    
    /* Talks section */
    #talks .talk-metadata {
      border-left: 3px solid var(--eva-cyan) !important;
      padding: 15px !important;
      margin-bottom: 20px !important;
      background-color: rgba(0, 0, 0, 0.5) !important;
    }
    
    /* Review & Volunteer section */
    #review-volunteer ul {
      list-style-type: none;
      padding-left: 20px;
    }
    
    #review-volunteer ul li {
      position: relative;
      margin-bottom: 15px;
      padding-left: 20px;
    }
    
    #review-volunteer ul li::before {
      content: '>';
      position: absolute;
      left: 0;
      color: var(--eva-orange) !important;
    }
    
    /* Footer transformation */
    .site-footer {
      background-color: rgba(0, 0, 0, 0.9) !important;
      border-top: 1px solid var(--eva-orange) !important;
      padding: 10px 0 !important;
      font-size: 0.8rem !important;
      letter-spacing: 1px !important;
    }
    
    /* Decorative grid */
    .decorative-grid {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(to right, rgba(255, 72, 0, 0.07) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 72, 0, 0.07) 1px, transparent 1px);
      background-size: 20px 20px;
      pointer-events: none;
      z-index: -1;
    }
    
    /* Fonts and text styling */
    p, div, span, li {
      font-family: 'Courier New', monospace !important;
      font-size: 0.95rem !important;
      line-height: 1.6 !important;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Courier New', monospace !important;
      text-transform: uppercase;
      letter-spacing: 2px !important;
    }
    
    /* Subtle MAGI system monitor in navbar */
    .magi-monitor {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 80px;
      height: 60px;
      font-size: 10px;
      z-index: 1000;
      padding: 0 10px;
    }
    
    .magi-status {
      margin-left: 10px;
      display: flex;
      align-items: center;
    }
    
    .magi-label {
      color: var(--eva-orange) !important;
      margin-right: 5px;
      font-size: 9px;
    }
    
    /* Status indicators */
    .status-indicator {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-right: 3px;
    }
    
    .status-normal {
      background-color: var(--eva-cyan);
      box-shadow: 0 0 5px var(--eva-cyan);
      animation: pulse 2s infinite;
    }
    
    .status-warning {
      background-color: var(--eva-orange);
      box-shadow: 0 0 5px var(--eva-orange);
      animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    /* T-minus counter in navbar */
    .countdown {
      position: absolute;
      top: 0;
      right: 20px;
      height: 60px;
      display: flex;
      align-items: center;
      color: var(--eva-cyan) !important;
      font-size: 10px;
      z-index: 1000;
    }
    
    /* Warning alerts */
    .warning-alert {
      position: fixed;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.8);
      border: 1px solid var(--eva-orange);
      padding: 10px 20px;
      color: var(--eva-orange) !important;
      font-size: 14px;
      z-index: 1001;
      display: none;
    }
    
    /* Hebrew characters background */
    .hebrew-char {
      position: fixed;
      color: rgba(255, 72, 0, 0.15);
      z-index: -1;
      font-size: 16px;
      pointer-events: none;
    }
    
    /* 3D sphere visualization area */
    .sphere-container {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 100px;
      height: 100px;
      z-index: 999;
      pointer-events: none;
    }
    
    /* Target crosshair for the sphere */
    .target-overlay {
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 100px;
      height: 100px;
      z-index: 1000;
      pointer-events: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .crosshair-h {
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: rgba(255, 72, 0, 0.7);
    }
    
    .crosshair-v {
      position: absolute;
      height: 100%;
      width: 1px;
      background-color: rgba(255, 72, 0, 0.7);
    }
    
    .target-circle {
      position: absolute;
      border: 1px solid rgba(255, 72, 0, 0.4);
      border-radius: 50%;
    }
    
    .target-circle-outer {
      width: 90%;
      height: 90%;
    }
    
    .target-circle-middle {
      width: 60%;
      height: 60%;
    }
    
    .target-circle-inner {
      width: 30%;
      height: 30%;
    }
  `;
  
  // Add style to document
  document.head.appendChild(style);
  
  // Create decorative grid
  const grid = document.createElement('div');
  grid.classList.add('decorative-grid');
  document.body.appendChild(grid);
  
  // Add Hebrew characters to background
  const addHebrewChars = () => {
    const hebrewChars = 'אבגדהוזחטיכלמנסעפצקרשת';
    for (let i = 0; i < 30; i++) {
      const hebrewChar = document.createElement('div');
      hebrewChar.classList.add('hebrew-char');
      hebrewChar.textContent = hebrewChars[Math.floor(Math.random() * hebrewChars.length)];
      hebrewChar.style.top = `${Math.random() * 100}%`;
      hebrewChar.style.left = `${Math.random() * 100}%`;
      hebrewChar.style.opacity = 0.1 + Math.random() * 0.2;
      document.body.appendChild(hebrewChar);
    }
  };
  
  // Add T-minus countdown to navbar
  const addCountdown = () => {
    const countdown = document.createElement('div');
    countdown.classList.add('countdown');
    countdown.id = 'countdown';
    countdown.textContent = 'T-MINUS 24:00:00';
    document.querySelector('.navbar').appendChild(countdown);
    
    // Update countdown every second
    let time = 24 * 60 * 60; // 24 hours in seconds
    setInterval(() => {
      time--;
      if (time < 0) time = 24 * 60 * 60;
      
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      
      countdown.textContent = `T-MINUS ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
  };
  
  // Add subtle MAGI system monitor to navbar
  const addMagiMonitor = () => {
    const magiMonitor = document.createElement('div');
    magiMonitor.classList.add('magi-monitor');
    
    const systems = [
      { name: 'MELCHIOR', status: 'normal' },
      { name: 'BALTHASAR', status: 'normal' },
      { name: 'CASPER', status: 'normal' }
    ];
    
    systems.forEach(system => {
      const statusEl = document.createElement('div');
      statusEl.classList.add('magi-status');
      
      const label = document.createElement('span');
      label.classList.add('magi-label');
      label.textContent = system.name.charAt(0);
      
      const indicator = document.createElement('span');
      indicator.classList.add('status-indicator', 'status-normal');
      indicator.id = `status-${system.name.toLowerCase()}`;
      
      statusEl.appendChild(label);
      statusEl.appendChild(indicator);
      magiMonitor.appendChild(statusEl);
    });
    
    document.querySelector('.navbar').appendChild(magiMonitor);
    
    // Randomly change MAGI status indicators
    setInterval(() => {
      const indicators = document.querySelectorAll('.status-indicator');
      const randomIndex = Math.floor(Math.random() * indicators.length);
      const indicator = indicators[randomIndex];
      
      if (indicator.classList.contains('status-normal')) {
        indicator.classList.remove('status-normal');
        indicator.classList.add('status-warning');
        
        // Back to normal after a short time
        setTimeout(() => {
          indicator.classList.remove('status-warning');
          indicator.classList.add('status-normal');
        }, 2000);
      }
    }, 10000);
  };
  
  // Add warning alerts
  const addWarningAlerts = () => {
    const warningAlert = document.createElement('div');
    warningAlert.classList.add('warning-alert');
    document.body.appendChild(warningAlert);
    
    const warnings = [
      'WARNING: A.T. FIELD DETECTED',
      'WARNING: PATTERN BLUE DETECTED',
      'WARNING: SYNCHRONIZATION RATE UNSTABLE',
      'WARNING: ENERGY SPIKE DETECTED'
    ];
    
    // Show random warnings occasionally
    setInterval(() => {
      if (Math.random() > 0.8) {
        const randomWarning = warnings[Math.floor(Math.random() * warnings.length)];
        warningAlert.textContent = randomWarning;
        warningAlert.style.display = 'block';
        
        // Hide warning after a few seconds
        setTimeout(() => {
          warningAlert.style.display = 'none';
        }, 3000);
      }
    }, 20000);
  };
  
  // Add 3D sphere visualization
  const add3DSphere = () => {
    // Create sphere container
    const sphereContainer = document.createElement('div');
    sphereContainer.classList.add('sphere-container');
    document.body.appendChild(sphereContainer);
    
    // Create target overlay
    const targetOverlay = document.createElement('div');
    targetOverlay.classList.add('target-overlay');
    
    const crosshairH = document.createElement('div');
    crosshairH.classList.add('crosshair-h');
    
    const crosshairV = document.createElement('div');
    crosshairV.classList.add('crosshair-v');
    
    const targetCircleOuter = document.createElement('div');
    targetCircleOuter.classList.add('target-circle', 'target-circle-outer');
    
    const targetCircleMiddle = document.createElement('div');
    targetCircleMiddle.classList.add('target-circle', 'target-circle-middle');
    
    const targetCircleInner = document.createElement('div');
    targetCircleInner.classList.add('target-circle', 'target-circle-inner');
    
    targetOverlay.appendChild(crosshairH);
    targetOverlay.appendChild(crosshairV);
    targetOverlay.appendChild(targetCircleOuter);
    targetOverlay.appendChild(targetCircleMiddle);
    targetOverlay.appendChild(targetCircleInner);
    
    document.body.appendChild(targetOverlay);
    
    // Try to load Three.js
    const loadThreeJs = () => {
      return new Promise((resolve, reject) => {
        if (typeof THREE !== 'undefined') {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject("Failed to load Three.js");
        document.head.appendChild(script);
      });
    };
    
    loadThreeJs()
      .then(() => {
        // Initialize Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 5;
        
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(100, 100);
        renderer.setClearColor(0x000000, 0);
        sphereContainer.appendChild(renderer.domElement);
        
        // Create sphere geometry
        const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
        const wireframeMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x00FFFF, 
          wireframe: true,
          transparent: true,
          opacity: 0.6
        });
        
        const innerMaterial = new THREE.MeshBasicMaterial({
          color: 0x0077FF,
          transparent: true,
          opacity: 0.2
        });
        
        const wireframeSphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
        const innerSphere = new THREE.Mesh(sphereGeometry, innerMaterial);
        innerSphere.scale.set(0.8, 0.8, 0.8);
        
        scene.add(wireframeSphere);
        scene.add(innerSphere);
        
        // Animation loop
        function animate() {
          requestAnimationFrame(animate);
          
          wireframeSphere.rotation.x += 0.01;
          wireframeSphere.rotation.y += 0.01;
          
          innerSphere.rotation.x -= 0.005;
          innerSphere.rotation.y -= 0.005;
          
          // Pulse inner sphere
          const scale = 0.8 + 0.1 * Math.sin(Date.now() * 0.001);
          innerSphere.scale.set(scale, scale, scale);
          
          // Randomly change wireframe opacity for glitch effect
          if (Math.random() > 0.98) {
            wireframeMaterial.opacity = 0.3 + Math.random() * 0.4;
          }
          
          renderer.render(scene, camera);
        }
        
        animate();
      })
      .catch(error => {
        console.log("Could not initialize 3D sphere:", error);
      });
  };
  
  // Apply forced text visibility
  const forceTextVisibility = () => {
    const allTextElements = document.querySelectorAll('p, span, div, li, h1, h2, h3, h4, h5, h6, a');
    allTextElements.forEach(el => {
      if (el.textContent && el.textContent.trim().length > 0) {
        el.style.opacity = '1';
        if (el.tagName.toLowerCase().startsWith('h')) {
          el.style.color = 'var(--eva-cyan)';
        } else if (el.tagName.toLowerCase() === 'a') {
          el.style.color = 'var(--eva-cyan)';
        } else {
          el.style.color = '#FFFFFF';
        }
      }
    });
  };
  
  // Initialize everything
  addHebrewChars();
  addCountdown();
  addMagiMonitor();
  addWarningAlerts();
  add3DSphere();
  
  // Force text visibility initially and after delay
  forceTextVisibility();
  setTimeout(forceTextVisibility, 500);
  setTimeout(forceTextVisibility, 1000);
});