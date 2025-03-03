// Advanced Evangelion UI redesign with interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Create complete style override
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
      position: relative;
      overflow: hidden;
    }
    
    /* Add tech corner design to cards */
    .card::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 20px;
      height: 20px;
      border-top: 2px solid var(--eva-cyan);
      border-right: 2px solid var(--eva-cyan);
    }
    
    .card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 20px;
      height: 20px;
      border-bottom: 2px solid var(--eva-cyan);
      border-left: 2px solid var(--eva-cyan);
    }
    
    /* Style headings */
    h1, h2, h3, h4, h5, h6 {
      color: var(--eva-cyan) !important;
      font-family: 'Courier New', monospace !important;
      border-bottom: 1px solid var(--eva-orange);
      padding-bottom: 5px;
      letter-spacing: 1px;
      position: relative;
    }
    
    h1::after, h2::after, h3::after {
      content: '_';
      animation: blink 1s step-end infinite;
      color: var(--eva-orange);
    }
    
    /* Terminal typing effect for section headings */
    .section-heading {
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      animation: typing 2s steps(40, end);
    }
    
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
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
    
    // /* NERV branding */
    // .navbar-brand {
    //   position: relative;
    //   padding-left: 55px !important;
    // }
    
    // .navbar-brand::before {
    //   content: 'NERV';
    //   position: absolute;
    //   left: 0;
    //   color: var(--eva-orange) !important;
    //   font-weight: bold;
    //   font-family: 'Courier New', monospace !important;
    // }
    
    /* Navigation links */
    .navbar-light .navbar-nav .nav-link {
      color: #FFFFFF !important;
      position: relative;
      overflow: hidden;
    }
    
    .navbar-light .navbar-nav .nav-link:hover {
      color: var(--eva-cyan) !important;
    }
    
    .navbar-light .navbar-nav .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--eva-cyan);
      transition: width 0.3s ease;
    }
    
    .navbar-light .navbar-nav .nav-link:hover::after {
      width: 100%;
    }
    
    /* Footer */
    .page-footer, .site-footer {
      background-color: rgba(0, 0, 0, 0.9) !important;
      border-top: 1px solid var(--eva-orange) !important;
      margin-top: 20px;
      position: relative;
    }
    
    /* Command line effect in footer */
    .site-footer::before {
      content: 'NERV>';
      color: var(--eva-orange) !important;
      position: absolute;
      left: 20px;
      top: 10px;
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
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 72, 0, 0.2);
      transition: left 0.3s ease;
      z-index: -1;
    }
    
    .btn:hover::before {
      left: 0;
    }
    
    /* Profile page */
    .portrait-title h2 {
      color: var(--eva-orange) !important;
      border-bottom: none !important;
    }
    
    .network-icon a {
      color: var(--eva-blue) !important;
      position: relative;
    }
    
    .network-icon a:hover {
      color: var(--eva-cyan) !important;
    }
    
    .network-icon a::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background-color: var(--eva-cyan);
      border-radius: 50%;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .network-icon a:hover::after {
      opacity: 1;
    }
    
    /* Publication lists */
    .pub-list-item {
      border-left: 3px solid var(--eva-orange) !important;
      padding-left: 15px !important;
      margin-bottom: 20px !important;
      background-color: rgba(20, 20, 20, 0.5) !important;
      padding: 15px !important;
      position: relative;
    }
    
    .pub-list-item::after {
      content: 'STATUS: NORMAL';
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 0.6rem;
      color: var(--eva-cyan) !important;
      font-family: 'Courier New', monospace !important;
    }
    
    /* Style all links */
    a {
      color: var(--eva-cyan) !important;
      text-decoration: none !important;
      transition: color 0.3s ease;
    }
    
    a:hover {
      color: var(--eva-orange) !important;
      text-decoration: none !important;
    }
    
    /* All avatar images with eva styling */
    .avatar {
      border: 2px solid var(--eva-orange) !important;
      position: relative;
      z-index: 1;
    }
    
    .avatar::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: 1px dashed var(--eva-cyan);
      animation: rotate 10s linear infinite;
      z-index: -1;
    }
    
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    /* Target biography text specifically */
    #about .biography-text p, #about p {
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
    
    /* Terminal window styling */
    .terminal-window {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      height: 150px;
      background-color: rgba(0, 0, 0, 0.7);
      border: 1px solid var(--eva-orange);
      z-index: 1000;
      overflow: hidden;
      font-family: 'Courier New', monospace;
      font-size: 10px;
      padding: 5px;
      color: var(--eva-cyan);
      display: flex;
      flex-direction: column;
    }
    
    .terminal-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--eva-orange);
      padding-bottom: 3px;
      margin-bottom: 5px;
    }
    
    .terminal-title {
      color: var(--eva-orange);
    }
    
    .terminal-close {
      cursor: pointer;
      color: var(--eva-orange);
    }
    
    .terminal-content {
      flex-grow: 1;
      overflow: hidden;
      position: relative;
    }
    
    .terminal-text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      animation: scroll 20s linear infinite;
    }
    
    @keyframes scroll {
      0% { transform: translateY(0); }
      100% { transform: translateY(-300px); }
    }
    
    /* Hebrew characters scattered in background */
    .hebrew-char {
      position: fixed;
      color: rgba(255, 72, 0, 0.2);
      z-index: -1;
      font-size: 14px;
      pointer-events: none;
    }
    
    /* Sine wave animation at bottom */
    .sine-wave {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20px;
      overflow: hidden;
      z-index: 1000;
    }
    
    .sine-wave svg {
      width: 100%;
      height: 100%;
    }
    
    .sine-wave path {
      fill: none;
      stroke: var(--eva-cyan);
      stroke-width: 1;
      opacity: 0.3;
    }
    
    /* 3D sphere container */
    .sphere-container {
      position: fixed;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      width: 150px;
      height: 150px;
      z-index: 999;
      pointer-events: none;
    }
    
    /* Target crosshairs overlay */
    .target-overlay {
      position: fixed;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      width: 150px;
      height: 150px;
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
    
    // Randomly toggle hexagon active state
    setInterval(() => {
      const hexagons = document.querySelectorAll('div[style*="clip-path: polygon"]');
      const randomIndex = Math.floor(Math.random() * hexagons.length);
      if (hexagons[randomIndex]) {
        const hexagon = hexagons[randomIndex];
        hexagon.style.backgroundColor = hexagon.style.backgroundColor === 'transparent' ? 
          'rgba(255, 72, 0, 0.3)' : 'transparent';
      }
    }, 2000);
  };
  
  // Add status indicators to sections
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
  
  // Add Hebrew characters scattered across the page
  const addHebrewChars = () => {
    const hebrewChars = 'אבגדהוזחטיכלמנסעפצקרשת';
    for (let i = 0; i < 20; i++) {
      const hebrewChar = document.createElement('div');
      hebrewChar.classList.add('hebrew-char');
      hebrewChar.textContent = hebrewChars[Math.floor(Math.random() * hebrewChars.length)];
      hebrewChar.style.top = `${Math.random() * 100}%`;
      hebrewChar.style.left = `${Math.random() * 100}%`;
      hebrewChar.style.opacity = 0.1 + Math.random() * 0.2;
      document.body.appendChild(hebrewChar);
      
      // Add subtle movement animation
      hebrewChar.style.animation = `float ${5 + Math.random() * 10}s infinite alternate ease-in-out`;
    }
    
    // Add floating animation
    const floatAnimation = document.createElement('style');
    floatAnimation.textContent = `
      @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); }
        100% { transform: translate(10px, 10px) rotate(10deg); }
      }
    `;
    document.head.appendChild(floatAnimation);
  };
  
  // Add terminal window
  const addTerminalWindow = () => {
    const terminal = document.createElement('div');
    terminal.classList.add('terminal-window');
    
    const terminalHeader = document.createElement('div');
    terminalHeader.classList.add('terminal-header');
    
    const terminalTitle = document.createElement('div');
    terminalTitle.classList.add('terminal-title');
    terminalTitle.textContent = 'MAGI SYSTEM TERMINAL';
    
    const terminalClose = document.createElement('div');
    terminalClose.classList.add('terminal-close');
    terminalClose.textContent = 'X';
    terminalClose.onclick = function() {
      terminal.style.display = 'none';
    };
    
    terminalHeader.appendChild(terminalTitle);
    terminalHeader.appendChild(terminalClose);
    
    const terminalContent = document.createElement('div');
    terminalContent.classList.add('terminal-content');
    
    const terminalText = document.createElement('div');
    terminalText.classList.add('terminal-text');
    terminalText.innerHTML = `
      0xFF872A > INITIALIZING SCAN SEQUENCE<br>
      0xFF872B > CALIBRATING SENSORS<br>
      0xFF872C > ADJUSTING FOR ATMOSPHERIC INTERFERENCE<br>
      0xFF872D > DEPLOYING DETECTION GRID<br>
      0xFF872E > SCANNING... 17%<br>
      0xFF872F > SCANNING... 34%<br>
      0xFF8730 > SCANNING... 52%<br>
      0xFF8731 > SCANNING... 68%<br>
      0xFF8732 > SCANNING... 85%<br>
      0xFF8733 > SCANNING... 99%<br>
      0xFF8734 > SCAN COMPLETE<br>
      0xFF8735 > ANALYZING RESULTS<br>
      0xFF8736 > PATTERN MATCH: BLUE<br>
      0xFF8737 > ALERT LEVEL: YELLOW<br>
      0xFF8738 > INITIATING SECONDARY SCAN<br>
      0xFF8739 > SYNCHRONIZING WITH MAGI<br>
      0xFF873A > MELCHIOR: ONLINE<br>
      0xFF873B > BALTHASAR: ONLINE<br>
      0xFF873C > CASPER: ONLINE<br>
      0xFF873D > MAGI CONSENSUS REACHED<br>
      0xFF873E > AWAITING INSTRUCTIONS<br>
    `;
    
    terminalContent.appendChild(terminalText);
    terminal.appendChild(terminalHeader);
    terminal.appendChild(terminalContent);
    
    document.body.appendChild(terminal);
  };
  
  // Add sine wave animation at the bottom of the page
  const addSineWave = () => {
    const sineWave = document.createElement('div');
    sineWave.classList.add('sine-wave');
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 1200 20');
    
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    
    svg.appendChild(path1);
    svg.appendChild(path2);
    sineWave.appendChild(svg);
    document.body.appendChild(sineWave);
    
    // Animate the sine wave
    let phase1 = 0;
    let phase2 = Math.PI;
    
    function updateSineWave() {
      let d1 = 'M0,10 ';
      let d2 = 'M0,10 ';
      
      for (let x = 0; x <= 1200; x += 5) {
        const y1 = 10 + Math.sin(x * 0.02 + phase1) * 5;
        const y2 = 10 + Math.sin(x * 0.02 + phase2) * 5;
        d1 += `L${x},${y1} `;
        d2 += `L${x},${y2} `;
      }
      
      path1.setAttribute('d', d1);
      path2.setAttribute('d', d2);
      
      phase1 += 0.05;
      phase2 += 0.05;
      
      requestAnimationFrame(updateSineWave);
    }
    
    updateSineWave();
  };
  
  // Add 3D sphere visualization
  const addSphereVisualization = () => {
    // Skip if Three.js is not available
    if (typeof THREE === 'undefined') {
      console.log('Three.js not available, skipping sphere visualization');
      return;
    }
    
    // Create container for the sphere
    const sphereContainer = document.createElement('div');
    sphereContainer.classList.add('sphere-container');
    document.body.appendChild(sphereContainer);
    
    // Create targeting overlay
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
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(150, 150);
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
  
  // MAGI System status updates
  const addMagiSystem = () => {
    const magiContainer = document.createElement('div');
    magiContainer.style.position = 'fixed';
    magiContainer.style.top = '10px';
    magiContainer.style.left = '20px';
    magiContainer.style.display = 'flex';
    magiContainer.style.flexDirection = 'column';
    magiContainer.style.fontSize = '10px';
    magiContainer.style.fontFamily = 'Courier New, monospace';
    magiContainer.style.zIndex = '10001';
    
    const magiSystems = [
      { name: 'MELCHIOR', status: 'ONLINE' },
      { name: 'BALTHASAR', status: 'ONLINE' },
      { name: 'CASPER', status: 'ONLINE' }
    ];
    
    magiSystems.forEach(system => {
      const systemElement = document.createElement('div');
      systemElement.style.color = 'var(--eva-cyan)';
      systemElement.style.marginBottom = '2px';
      systemElement.textContent = `${system.name}: ${system.status}`;
      magiContainer.appendChild(systemElement);
    });
    
    document.body.appendChild(magiContainer);
    
    // Randomly change MAGI system status
    setInterval(() => {
      const systems = magiContainer.querySelectorAll('div');
      const randomIndex = Math.floor(Math.random() * systems.length);
      const system = systems[randomIndex];
      
      const currentStatus = system.textContent.split(': ')[1];
      const newStatus = currentStatus === 'ONLINE' ? 'ANALYZING...' : 'ONLINE';
      
      system.textContent = `${system.textContent.split(': ')[0]}: ${newStatus}`;
      system.style.color = newStatus === 'ONLINE' ? 'var(--eva-cyan)' : 'var(--eva-orange)';
    }, 5000);
  };
  
  // Add warning alerts
  const addWarningAlerts = () => {
    // Create container for random warnings
    const warningContainer = document.createElement('div');
    warningContainer.style.position = 'fixed';
    warningContainer.style.bottom = '50px';
    warningContainer.style.left = '50%';
    warningContainer.style.transform = 'translateX(-50%)';
    warningContainer.style.color = 'var(--eva-orange)';
    warningContainer.style.fontFamily = 'Courier New, monospace';
    warningContainer.style.fontSize = '12px';
    warningContainer.style.zIndex = '10001';
    warningContainer.style.textAlign = 'center';
    warningContainer.style.opacity = '0';
    warningContainer.style.transition = 'opacity 1s ease';
    warningContainer.id = 'warning-alert';
    
    document.body.appendChild(warningContainer);
    
    // List of Evangelion-like warnings
    const warnings = [
      'WARNING: A.T. FIELD DETECTED',
      'WARNING: PATTERN BLUE CONFIRMED',
      'WARNING: SYNCHRONIZATION RATE DROPPING',
      'WARNING: LCL PRESSURE UNSTABLE',
      'WARNING: ANGEL APPROACHING',
      'WARNING: TERMINAL DOGMA BREACH',
      'WARNING: MAGI CONSENSUS DIVERGENCE',
      'WARNING: DUMMY PLUG SYSTEM ACTIVE'
    ];
    
    // Show random warnings
    setInterval(() => {
      if (Math.random() > 0.7) {
        const warning = warnings[Math.floor(Math.random() * warnings.length)];
        const warningAlert = document.getElementById('warning-alert');
        warningAlert.textContent = warning;
        warningAlert.style.opacity = '1';
        
        // Hide warning after 3 seconds
        setTimeout(() => {
          warningAlert.style.opacity = '0';
        }, 3000);
      }
    }, 10000);
  };
  
  // Initialize all our custom elements
  addCountdown();
  addHexagons();
  addStatusIndicators();
  addHebrewChars();
  addTerminalWindow();
  addSineWave();
  addMagiSystem();
  addWarningAlerts();
  
  // Try to add Three.js sphere if available
  if (typeof THREE !== 'undefined') {
    addSphereVisualization();
  } else {
    // Try to load Three.js dynamically
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    threeScript.onload = () => {
      addSphereVisualization();
    };
    document.head.appendChild(threeScript);
  }
  
  // Force text visibility initially
  forceTextVisibility();
  
  // And again after a short delay to ensure it overrides any lazy-loaded styles
  setTimeout(forceTextVisibility, 500);
  setTimeout(forceTextVisibility, 1000);
  setTimeout(forceTextVisibility, 2000);
});