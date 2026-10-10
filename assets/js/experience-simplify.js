document.addEventListener('DOMContentLoaded', function() {
  // Direct DOM manipulation 
  const experienceSection = document.querySelector('#experience');
  if (experienceSection) {
    // Remove any existing structure that might be causing issues
    const experienceTimeline = experienceSection.querySelector('.experience-timeline');
    if (experienceTimeline) {
      // Get all experience items
      const items = experienceTimeline.querySelectorAll('.experience-item');
      
      // Clear the timeline and rebuild it
      experienceTimeline.innerHTML = '';
      
      // Add items back with simplified structure
      items.forEach(item => {
        const simplifiedItem = document.createElement('div');
        simplifiedItem.className = 'experience-item';
        
        // Extract title
        const title = item.querySelector('.exp-title-text')?.textContent || '';
        const titleEl = document.createElement('div');
        titleEl.className = 'exp-title-text';
        titleEl.textContent = title;
        simplifiedItem.appendChild(titleEl);
        
        // Extract company
        const company = item.querySelector('.exp-company')?.textContent || '';
        const companyEl = document.createElement('div');
        companyEl.className = 'exp-company';
        companyEl.textContent = company;
        simplifiedItem.appendChild(companyEl);
        
        // Extract date/location
        const dateLocText = item.querySelector('.exp-date-loc')?.textContent || '';
        const dateLocEl = document.createElement('div');
        dateLocEl.className = 'exp-date-loc';
        dateLocEl.textContent = dateLocText;
        simplifiedItem.appendChild(dateLocEl);
        
        // Extract description
        const descriptionHtml = item.querySelector('.exp-description')?.innerHTML || '';
        const descriptionEl = document.createElement('div');
        descriptionEl.className = 'exp-description';
        descriptionEl.innerHTML = descriptionHtml;
        simplifiedItem.appendChild(descriptionEl);
        
        experienceTimeline.appendChild(simplifiedItem);
      });
    }
    
    // Apply additional styling
    experienceSection.style.padding = '10px';
    experienceSection.style.marginBottom = '20px';
  }
  
  // Force compact styling on description lists
  const descriptionLists = document.querySelectorAll('#experience .exp-description ul');
  descriptionLists.forEach(list => {
    list.style.paddingLeft = '15px';
    list.style.marginTop = '5px';
    list.style.marginBottom = '0';
    
    const items = list.querySelectorAll('li');
    items.forEach(item => {
      item.style.marginBottom = '3px';
      item.style.fontSize = '0.8rem';
      item.style.lineHeight = '1.2';
    });
  });
});
