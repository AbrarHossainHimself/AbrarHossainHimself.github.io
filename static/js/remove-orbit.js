// Script to remove the orbital effect around profile picture
(function() {
    function removeOrbitalElements() {
      // Find all elements that might be creating the orbital effect
      var orbitals = document.querySelectorAll(
        '[style*="border-radius: 50%"]:not(.avatar):not(.avatar-circle), ' +
        '[style*="border: 1px dashed"], ' +
        '[style*="animation: rotate"], ' + 
        '[style*="position: absolute"]'
      );
      
      // Check if it's a child of profile or near the avatar
      orbitals.forEach(function(el) {
        var parent = el.parentElement;
        if (parent && (
            parent.id === 'profile' || 
            parent.querySelector('.avatar') || 
            parent.querySelector('.avatar-circle')
        )) {
          el.remove();
        }
      });
      
      // Force correct styling on avatar
      var avatars = document.querySelectorAll('.avatar, .avatar-circle');
      avatars.forEach(function(avatar) {
        avatar.style.border = '2px solid #FF4800';
        avatar.style.borderRadius = '50%';
        avatar.style.boxShadow = '0 0 5px rgba(0, 255, 255, 0.5)';
        
        // Set a high z-index to ensure it stays on top
        avatar.style.zIndex = '100';
        
        // Remove any ::after pseudo-elements with inline style
        var style = document.createElement('style');
        style.innerHTML = `.avatar::after, .avatar-circle::after { display: none !important; }`;
        document.head.appendChild(style);
      });
    }
    
    // Run immediately
    removeOrbitalElements();
    
    // Run periodically to catch dynamically added elements
    setInterval(removeOrbitalElements, 500);
  })();