  document.addEventListener('DOMContentLoaded', function() {
    // Find all elements related to the avatar and remove any after pseudo-elements
    var avatarElements = document.querySelectorAll('.avatar, .avatar-circle');
    avatarElements.forEach(function(avatar) {
      // If there are any child elements after the avatar, remove them
      var parent = avatar.parentElement;
      if (parent) {
        // Check for any elements that might be creating orbital effects
        var siblings = parent.querySelectorAll('*');
        siblings.forEach(function(el) {
          if (el !== avatar && 
              (el.className.includes('orbit') || 
               el.style.animation || 
               el.style.borderRadius === '50%')) {
            el.remove();
          }
        });
      }
      
      // Apply inline styles to ensure no pseudo-elements
      avatar.style.setProperty('border-radius', '50%', 'important');
      avatar.style.setProperty('border', '2px solid var(--eva-orange)', 'important');
      avatar.style.setProperty('box-shadow', 'none', 'important');
      
      // This adds an inline style to try to override any ::after pseudo-element
      var styleTag = document.createElement('style');
      styleTag.innerHTML = `
        #${avatar.id}::after, 
        .${avatar.className.replace(/ /g, '.')}::after {
          display: none !important;
          content: none !important;
        }
      `;
      document.head.appendChild(styleTag);
    });
    
    // Also try to remove any animation defined in JS
    var animations = document.querySelectorAll('style');
    animations.forEach(function(style) {
      if (style.innerHTML.includes('@keyframes rotate') || 
          style.innerHTML.includes('animation') || 
          style.innerHTML.includes('avatar')) {
        // Either remove the entire style tag or replace problematic animations
        style.innerHTML = style.innerHTML.replace(/@keyframes\s+rotate[^}]+}\s*}/g, '');
        style.innerHTML = style.innerHTML.replace(/\.avatar[^}]+animation[^;]+;/g, '.avatar { animation: none !important; }');
      }
    });
  });
