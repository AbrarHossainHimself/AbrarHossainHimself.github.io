// Retro Tech Effects for Evangelion Theme
document.addEventListener('DOMContentLoaded', function() {
    // Add HUD corners to main sections
    function addHUDCorners() {
      const sections = document.querySelectorAll('.home-section, #about, .card');
      
      sections.forEach(section => {
        // Make sure the section has position relative for absolute positioning
        if (getComputedStyle(section).position === 'static') {
          section.style.position = 'relative';
        }
        
        // Create corner elements
        const cornerPositions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
        
        cornerPositions.forEach(position => {
          const corner = document.createElement('div');
          corner.classList.add('hud-corner', `hud-${position}`);
          section.appendChild(corner);
        });
      });
    }
    
    // Add terminal prefix to section titles
    function addTerminalPrefix() {
      const sectionTitles = document.querySelectorAll('.section-heading');
      
      sectionTitles.forEach(title => {
        // Check if it already has a prefix
        if (!title.textContent.startsWith('>')) {
          title.innerHTML = '> ' + title.innerHTML;
        }
      });
    }
    
    // Add scan lines overlay
    function addScanLines() {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.pointerEvents = 'none';
      overlay.style.zIndex = '9998';
      overlay.style.backgroundImage = 'linear-gradient(to bottom, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0) 50%)';
      overlay.style.backgroundSize = '100% 4px';
      
      document.body.appendChild(overlay);
    }
    
    // Add timestamp to each section
    function addTimestamps() {
      const sections = document.querySelectorAll('.home-section');
      
      sections.forEach((section, index) => {
        const timestamp = document.createElement('div');
        timestamp.style.position = 'absolute';
        timestamp.style.top = '5px';
        timestamp.style.right = '10px';
        timestamp.style.fontSize = '0.7rem';
        timestamp.style.color = 'var(--eva-cyan)';
        timestamp.style.opacity = '0.7';
        
        // Create a random timestamp
        const now = new Date();
        const timeOffset = index * 1000 * 60 * 5; // 5 minutes between sections
        const sectionTime = new Date(now.getTime() - timeOffset);
        const timeString = sectionTime.toISOString().replace('T', ' ').substr(0, 19);
        
        timestamp.textContent = timeString;
        
        // Make sure section has position relative
        if (getComputedStyle(section).position === 'static') {
          section.style.position = 'relative';
        }
        
        section.appendChild(timestamp);
      });
    }
    
    // Add blinking cursor to section headings
    function addBlinkingCursors() {
      const headings = document.querySelectorAll('.section-heading');
      
      headings.forEach(heading => {
        const cursor = document.createElement('span');
        cursor.textContent = '█';
        cursor.style.color = 'var(--eva-cyan)';
        cursor.style.marginLeft = '5px';
        cursor.style.animation = 'blink 1s infinite';
        
        const style = document.createElement('style');
        style.textContent = `
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `;
        
        document.head.appendChild(style);
        heading.appendChild(cursor);
      });
    }
    
    // Add subtle noise texture
    function addNoiseTexture() {
      const noise = document.createElement('div');
      noise.style.position = 'fixed';
      noise.style.top = '0';
      noise.style.left = '0';
      noise.style.width = '100%';
      noise.style.height = '100%';
      noise.style.pointerEvents = 'none';
      noise.style.zIndex = '9997';
      noise.style.opacity = '0.05';
      noise.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AoFEQcB2q6V2wAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAMc0lEQVRo3u2aeXRV1b3HP/ucO+fePMskhIQhhCEQkEEUKoqAgBAoWrWLWrXYVltbq1a0tXZptXa94qKrVWvvRUHU9nmftYOgLCAGkQRlSECGQIAQyHyTO+ee8/vjnntzkwCJbdcf797vs9Y55+y9f3vv3/6N+/cTLgRCCDE/P19MmTJFZGdnix+6gDH38Xy3zbFs2TKKi4tp6+l/33U+w/4+HuJE80Kce/ej/dQI06dPx+/3s3jxYoQQCCGQUiKEwDAMhBDYNnHy5EmEEDidTsYWF6MJMAxjQLePHj3KwoULOXHixN9kyOzZs/nd737Hiy++yIoVKxBCIKXkvffeY+XKlezevZuzzQ2Wz0e+x33F4f37hwE4HQ6EZoExOYnx+/fz2GOPMXnKFI4cPsw111zDLbfcQiAQiAHT4caHHnoI