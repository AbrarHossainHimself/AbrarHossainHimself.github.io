// Refined Evangelion UI with improved retro tech layout
document.addEventListener('DOMContentLoaded', function() {
  // Add timer to navbar
  function addTimer() {
    // Check if timer already exists
    if (document.getElementById('eva-timer')) return;
    
    const timerContainer = document.createElement('div');
    timerContainer.id = 'eva-timer';
    timerContainer.style.position = 'absolute';
    timerContainer.style.right = '20px';
    timerContainer.style.top = '50%';
    timerContainer.style.transform = 'translateY(-50%)';
    timerContainer.style.fontSize = '10px';
    timerContainer.style.fontFamily = 'Courier New, monospace';
    timerContainer.style.color = 'var(--eva-cyan)';
    
    // Update time every second
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      timerContainer.textContent = `T:${timeString}`;
    }
    
    updateTime();
    setInterval(updateTime, 1000);
    
    // Append to navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.position = 'relative';
      navbar.appendChild(timerContainer);
    }
  }
  
  // Add tech frames to widgets
  function addTechFrames() {
    const sections = document.querySelectorAll('.home-section');
    
    sections.forEach((section, index) => {
      // Skip sections that already have eva-terminal class
      if (section.querySelector('.eva-terminal')) return;
      
      // Create tech border
      section.style.border = '1px solid var(--eva-orange)';
      section.style.borderRadius = '5px';
      section.style.padding = '20px';
      section.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      section.style.position = 'relative';
      section.style.marginBottom = '30px';
      
      // Add section identifier
      const sectionId = section.id || `section-${index}`;
      const sectionTag = document.createElement('div');
      sectionTag.style.position = 'absolute';
      sectionTag.style.top = '-10px';
      sectionTag.style.left = '20px';
      sectionTag.style.backgroundColor = 'var(--eva-dark)';
      sectionTag.style.padding = '0 10px';
      sectionTag.style.color = 'var(--eva-cyan)';
      sectionTag.style.fontSize = '12px';
      sectionTag.style.textTransform = 'uppercase';
      sectionTag.textContent = sectionId.replace('-', '_');
      
      // Add status indicators
      const statusContainer = document.createElement('div');
      statusContainer.style.position = 'absolute';
      statusContainer.style.top = '-5px';
      statusContainer.style.right = '20px';
      statusContainer.style.backgroundColor = 'var(--eva-dark)';
      statusContainer.style.padding = '0 10px';
      statusContainer.style.display = 'flex';
      statusContainer.style.gap = '5px';
      
      for (let i = 0; i < 3; i++) {
        const status = document.createElement('span');
        status.classList.add('status');
        
        if (i === 0) status.classList.add('status-cyan');
        else if (i === 1) status.classList.add('status-orange');
        else status.classList.add('status-green');
        
        statusContainer.appendChild(status);
      }
      
      section.prepend(sectionTag);
      section.prepend(statusContainer);
    });
  }
  
  // Add circuit pattern to avatar
  function enhanceAvatar() {
    const avatar = document.querySelector('.avatar');
    if (avatar) {
      avatar.style.border = '2px solid var(--eva-orange)';
      avatar.style.boxShadow = '0 0 10px var(--eva-cyan)';
      
      // Create circuit pattern overlay
      const circuitOverlay = document.createElement('div');
      circuitOverlay.style.position = 'absolute';
      circuitOverlay.style.top = '0';
      circuitOverlay.style.left = '0';
      circuitOverlay.style.width = '100%';
      circuitOverlay.style.height = '100%';
      circuitOverlay.style.borderRadius = '50%';
      circuitOverlay.style.border = '2px dashed var(--eva-cyan)';
      circuitOverlay.style.animation = 'rotate 20s linear infinite';
      circuitOverlay.style.pointerEvents = 'none';
      
      // Position relative for absolute positioning of overlay
      const parent = avatar.parentElement;
      parent.style.position = 'relative';
      parent.appendChild(circuitOverlay);
    }
  }
  
  // Add random data points to background
  function addDataPoints() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '-1';
    container.style.pointerEvents = 'none';
    
    for (let i = 0; i < 50; i++) {
      const dataPoint = document.createElement('div');
      dataPoint.style.position = 'absolute';
      dataPoint.style.width = '2px';
      dataPoint.style.height = '2px';
      dataPoint.style.backgroundColor = 'var(--eva-cyan)';
      dataPoint.style.borderRadius = '50%';
      dataPoint.style.opacity = Math.random() * 0.5;
      dataPoint.style.top = `${Math.random() * 100}vh`;
      dataPoint.style.left = `${Math.random() * 100}vw`;
      dataPoint.style.boxShadow = '0 0 5px var(--eva-cyan)';
      
      // Random pulse animation
      dataPoint.style.animation = `pulse ${2 + Math.random() * 3}s infinite`;
      
      container.appendChild(dataPoint);
    }
    
    document.body.appendChild(container);
  }
  
  // Initialize enhancements
  function initEnhancements() {
    addTimer();
    addTechFrames();
    enhanceAvatar();
    addDataPoints();
  }
  
  // Wait a bit to ensure the page is fully loaded
  setTimeout(initEnhancements, 500);
  
  // Create keyframe animation for rotation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
});