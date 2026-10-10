document.addEventListener('DOMContentLoaded', function() {
  // Additional script to ensure NERV is removed
  const navbarBrand = document.querySelector('.navbar-brand');
  if (navbarBrand) {
    navbarBrand.innerHTML = navbarBrand.innerHTML.replace('NERV', '');
  }
  
  // EXTREME MEASURE: Create multiple overlays to catch any stripes
  for (let i = 0; i < 5; i++) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#111111';
    overlay.style.zIndex = (-5 - i).toString();
    overlay.style.pointerEvents = 'none';
    document.body.appendChild(overlay);
  }
  
  // More aggressive approach - reset all backgrounds
  document.querySelectorAll('*').forEach(el => {
    const computedStyle = window.getComputedStyle(el);
    
    // If the background is light or has stripes, force it to be dark
    if (computedStyle.backgroundImage.includes('gradient') || 
        computedStyle.backgroundColor !== 'rgb(17, 17, 17)') {
      el.style.backgroundColor = '#111111';
      el.style.backgroundImage = 'none';
    }
  });
  
  // Add a new HTML element to replace the striped section
  // This is a very direct approach to override the problematic area
  const stripedSections = document.querySelectorAll('body > div:not(.navbar):not(.page-footer)');
  stripedSections.forEach(section => {
    if (section.innerHTML.includes('RECORDED TALKS')) {
      // Create a wrapper to replace the striped section
      const wrapper = document.createElement('div');
      wrapper.style.backgroundColor = '#111111';
      wrapper.style.color = '#FFFFFF';
      wrapper.style.padding = '20px 0';
      wrapper.style.width = '100%';
      
      // Move the content to the new wrapper
      wrapper.innerHTML = section.innerHTML;
      
      // Replace the old section with the new wrapper
      section.parentNode.replaceChild(wrapper, section);
    }
  });
  
  // Last resort - inject style directly into head
  const fixStyle = document.createElement('style');
  fixStyle.innerHTML = `
    body > div:not(.navbar):not(.page-footer) {
      background-color: #111111 !important;
      background-image: none !important;
    }
    
    /* Target specific HTML structure where stripes appear */
    body > div > div {
      background-color: #111111 !important;
      background-image: none !important;
    }
  `;
  document.head.appendChild(fixStyle);
});
