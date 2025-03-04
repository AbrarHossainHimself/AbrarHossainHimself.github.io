// Refined Evangelion UI with improved retro tech layout
document.addEventListener('DOMContentLoaded', function() {
  // Add data status indicators to sections
  function addStatusIndicators() {
    const sections = document.querySelectorAll('.home-section');
    sections.forEach(section => {
      const statusIndicator = document.createElement('span');
      statusIndicator.classList.add('status', 'status-green');
      statusIndicator.style.position = 'absolute';
      statusIndicator.style.top = '5px';
      statusIndicator.style.left = '15px';
      
      // Random blink effect
      setInterval(() => {
        if (Math.random() > 0.7) {
          statusIndicator.style.opacity = '0.5';
          setTimeout(() => {
            statusIndicator.style.opacity = '1';
          }, 300);
        }
      }, 2000);
      
      section.style.position = 'relative';
      section.prepend(statusIndicator);
    });
  }
  
  // Add circuit pattern to background
  function addCircuitPattern() {
    const circuit = document.createElement('div');
    circuit.style.position = 'fixed';
    circuit.style.top = '0';
    circuit.style.left = '0';
    circuit.style.width = '100%';
    circuit.style.height = '100%';
    circuit.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 10 H90 V90 H10 Z\' fill=\'none\' stroke=\'%2300FFFF10\' stroke-width=\'1\'/%3E%3C/svg%3E")';
    circuit.style.pointerEvents = 'none';
    circuit.style.zIndex = '-1';
    document.body.appendChild(circuit);
  }
  
  // Add terminal timestamps to experience items
  function addTimestamps() {
    const timeElements = document.querySelectorAll('.experience .card-subtitle');
    timeElements.forEach(el => {
      el.innerHTML = '[TIMESTAMP: ' + el.innerHTML + '] > ' + el.innerHTML;
      el.style.color = '#00FF00';
      el.style.fontSize = '0.8rem';
    });
  }
  
  // Add tech frame to profile section
  function enhanceProfileSection() {
    const profileSection = document.querySelector('#about');
    if (profileSection) {
      // Add tech border
      profileSection.style.border = '1px solid #FF4800';
      profileSection.style.borderRadius = '5px';
      profileSection.style.padding = '20px';
      profileSection.style.background = 'rgba(0, 0, 0, 0.5)';
      
      // Add section identifier
      const sectionTag = document.createElement('div');
      sectionTag.style.position = 'absolute';
      sectionTag.style.top = '-10px';
      sectionTag.style.left = '20px';
      sectionTag.style.background = '#111111';
      sectionTag.style.padding = '0 10px';
      sectionTag.style.color = '#00FFFF';
      sectionTag.style.fontSize = '12px';
      sectionTag.textContent = 'PROFILE_DATA';
      
      profileSection.style.position = 'relative';
      profileSection.prepend(sectionTag);
    }
  }
  
  // Make publication list more compact
  function compactPublications() {
    const pubs = document.querySelectorAll('.pub-list-item');
    pubs.forEach(pub => {
      pub.style.padding = '10px';
      pub.style.marginBottom = '10px';
      pub.style.fontSize = '0.9rem';
      pub.style.lineHeight = '1.3';
      
      // Add tech decoration
      const pubDate = pub.querySelector('.article-metadata');
      if (pubDate) {
        pubDate.style.fontSize = '0.75rem';
        pubDate.style.color = '#00FFFF';
      }
    });
  }
  
  // Random glitch effect on page
  function randomGlitchEffect() {
    setInterval(() => {
      if (Math.random() > 0.95) {
        const glitchOverlay = document.createElement('div');
        glitchOverlay.style.position = 'fixed';
        glitchOverlay.style.top = '0';
        glitchOverlay.style.left = '0';
        glitchOverlay.style.width = '100%';
        glitchOverlay.style.height = '100%';
        glitchOverlay.style.background = 'rgba(0, 255, 255, 0.03)';
        glitchOverlay.style.zIndex = '9999';
        glitchOverlay.style.pointerEvents = 'none';
        document.body.appendChild(glitchOverlay);
        
        setTimeout(() => {
          document.body.removeChild(glitchOverlay);
        }, 150);
      }
    }, 5000);
  }
  
  // Execute all enhancements
  function enhanceUI() {
    addStatusIndicators();
    addCircuitPattern();
    addTimestamps();
    enhanceProfileSection();
    compactPublications();
    randomGlitchEffect();
  }
  
  // Wait a bit to ensure the page is fully loaded
  setTimeout(enhanceUI, 500);
});