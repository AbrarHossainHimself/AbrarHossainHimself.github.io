// Complete Evangelion UI redesign with layout modifications
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
    
    /* Monitoring elements - like the original Evangelion UI */
    .monitoring-element {
      position: fixed;
      font-family: 'Courier New', monospace;
      color: var(--eva-cyan);
      z-index: 1000;
      font-size: 10px;
      pointer-events: none;
    }
    
    /* Page status indicator */
    .page-status {
      top: 10px;
      right: 20px;
    }
    
    /* Technical data readout */
    .tech-readout {
      bottom: 20px;
      left: 20px;
      font-size: 10px;
      width: 150px;
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
    
    /* MAGI system monitor */
    .magi-monitor {
      position: fixed;
      top: 70px;
      left: 20px;
      border: 1px solid var(--eva-orange);
      background-color: rgba(0, 0, 0, 0.7);
      padding: 10px;
      font-size: 10px;
      z-index: 1000;
      width: 150px;
    }
    
    .magi-monitor-header {
      color: var(--eva-orange) !important;
      border-bottom: 1px solid var(--eva-cyan);
      padding-bottom: 5px;
      margin-bottom: 5px;
      font-size: 10px;
      text-align: center;
    }
    
    .magi-status {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    
    /* Target scanner effect for the avatar */
    .avatar-container {
      position: relative;
    }
    
    .target-scanner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }
    
    .scanner-line-h {
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: rgba(0, 255, 255, 0.5);
      top: 50%;
      animation: scanVertical 3s infinite linear;
    }
    
    .scanner-line-v {
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: rgba(0, 255, 255, 0.5);
      left: 50%;
      animation: scanHorizontal 3s infinite linear;
    }
    
    @keyframes scanVertical {
      0% { top: 0; }
      100% { top: 100%; }
    }
    
    @keyframes scanHorizontal {
      0% { left: 0; }
      100% { left: 100%; }
    }
    
    /* Technical readout data */
    .tech-data {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3px;
      font-size: 9px;
    }
    
    .tech-label {
      color: var(--eva-orange) !important;
    }
    
    .tech-value {
      color: var(--eva-cyan) !important;
    }
    
    /* Animation for tech values */
    .tech-value {
      position: relative;
      overflow: hidden;
    }
    
    .tech-value::after {
      content: '';
      position: absolute;
      top: 0;
      right: -10px;
      width: 10px;
      height: 100%;
      background: linear-gradient(to right, transparent, var(--eva-cyan), transparent);
      animation: techScan 2s infinite;
    }
    
    @keyframes techScan {
      0% { right: 100%; }
      100% { right: -10px; }
    }
    
    /* Status indicators */
    .status-indicator {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 5px;
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
  
  // Add T-minus countdown
  const addCountdown = () => {
    const countdown = document.createElement('div');
    countdown.classList.add('monitoring-element', 'page-status');
    countdown.id = 'countdown';
    countdown.textContent = 'T-MINUS 24:00:00';
    document.body.appendChild(countdown);
    
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
  
  // Add MAGI system monitor
  const addMagiMonitor = () => {
    const magiMonitor = document.createElement('div');
    magiMonitor.classList.add('magi-monitor');
    
    const header = document.createElement('div');
    header.classList.add('magi-monitor-header');
    header.textContent = 'MAGI SYSTEM';
    
    const melchior = createMagiStatus('MELCHIOR', 'NORMAL');
    const balthasar = createMagiStatus('BALTHASAR', 'NORMAL');
    const casper = createMagiStatus('CASPER', 'NORMAL');
    
    magiMonitor.appendChild(header);
    magiMonitor.appendChild(melchior);
    magiMonitor.appendChild(balthasar);
    magiMonitor.appendChild(casper);
    
    document.body.appendChild(magiMonitor);
    
    // Randomly change MAGI status
    setInterval(() => {
      const statuses = document.querySelectorAll('.magi-status');
      const randomIndex = Math.floor(Math.random() * statuses.length);
      const status = statuses[randomIndex].querySelector('.tech-value');
      const indicator = statuses[randomIndex].querySelector('.status-indicator');
      
      if (status.textContent === 'NORMAL') {
        status.textContent = 'ANALYZING';
        indicator.classList.remove('status-normal');
        indicator.classList.add('status-warning');
        
        // Return to normal after a few seconds
        setTimeout(() => {
          status.textContent = 'NORMAL';
          indicator.classList.remove('status-warning');
          indicator.classList.add('status-normal');
        }, 3000);
      }
    }, 10000);
  };
  
  // Create MAGI status element
  function createMagiStatus(name, status) {
    const container = document.createElement('div');
    container.classList.add('magi-status');
    
    const label = document.createElement('div');
    label.classList.add('tech-label');
    label.textContent = name;
    
    const statusContainer = document.createElement('div');
    statusContainer.style.display = 'flex';
    statusContainer.style.alignItems = 'center';
    
    const indicator = document.createElement('span');
    indicator.classList.add('status-indicator', 'status-normal');
    
    const value = document.createElement('span');
    value.classList.add('tech-value');
    value.textContent = status;
    
    statusContainer.appendChild(indicator);
    statusContainer.appendChild(value);
    
    container.appendChild(label);
    container.appendChild(statusContainer);
    
    return container;
  }
  
  // Add technical readout
  const addTechReadout = () => {
    const techReadout = document.createElement('div');
    techReadout.classList.add('monitoring-element', 'tech-readout');
    
    const techData = [
      { label: 'SYS TEMP', value: '37.2°C' },
      { label: 'CPU LOAD', value: '42.7%' },
      { label: 'MEM USAGE', value: '3.8GB' },
      { label: 'NETWORK', value: 'ACTIVE' },
      { label: 'SECURITY', value: 'ENABLED' }
    ];
    
    techData.forEach(data => {
      const dataElement = document.createElement('div');
      dataElement.classList.add('tech-data');
      
      const label = document.createElement('span');
      label.classList.add('tech-label');
      label.textContent = data.label;
      
      const value = document.createElement('span');
      value.classList.add('tech-value');
      value.textContent = data.value;
      
      dataElement.appendChild(label);
      dataElement.appendChild(value);
      techReadout.appendChild(dataElement);
    });
    
    document.body.appendChild(techReadout);
    
    // Randomly update values
    setInterval(() => {
      const values = document.querySelectorAll('.tech-value');
      const randomIndex = Math.floor(Math.random() * techData.length);
      
      if (randomIndex < values.length) {
        const value = values[randomIndex];
        if (value.textContent.includes('%')) {
          value.textContent = `${(Math.random() * 50 + 30).toFixed(1)}%`;
        } else if (value.textContent.includes('°C')) {
          value.textContent = `${(Math.random() * 5 + 35).toFixed(1)}°C`;
        } else if (value.textContent.includes('GB')) {
          value.textContent = `${(Math.random() * 5 + 2).toFixed(1)}GB`;
        }
      }
    }, 5000);
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
      'WARNING: ENERGY SPIKE DETECTED',
      'WARNING: SECURITY PERIMETER BREACH',
      'WARNING: UNIDENTIFIED ACCESS ATTEMPT'
    ];
    
    // Show random warnings occasionally
    setInterval(() => {
      if (Math.random() > 0.7) {
        const randomWarning = warnings[Math.floor(Math.random() * warnings.length)];
        warningAlert.textContent = randomWarning;
        warningAlert.style.display = 'block';
        
        // Hide warning after a few seconds
        setTimeout(() => {
          warningAlert.style.display = 'none';
        }, 4000);
      }
    }, 15000);
  };
  
  // Add target scanner to avatar
  const addTargetScanner = () => {
    // Find avatar container
    setTimeout(() => {
      const avatar = document.querySelector('.avatar img');
      if (avatar) {
        const parent = avatar.parentElement;
        parent.style.position = 'relative';
        
        const scanner = document.createElement('div');
        scanner.classList.add('target-scanner');
        
        const lineH = document.createElement('div');
        lineH.classList.add('scanner-line-h');
        
        const lineV = document.createElement('div');
        lineV.classList.add('scanner-line-v');
        
        scanner.appendChild(lineH);
        scanner.appendChild(lineV);
        parent.appendChild(scanner);
      }
    }, 1000);
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
  addTechReadout();
  addWarningAlerts();
  addTargetScanner();
  
  // Force text visibility initially and after delay
  forceTextVisibility();
  setTimeout(forceTextVisibility, 500);
  setTimeout(forceTextVisibility, 1000);
});