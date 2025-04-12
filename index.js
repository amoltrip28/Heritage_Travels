document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
        // This would typically toggle a mobile menu
        console.log('Mobile menu toggled');
        // Implementation would depend on the mobile menu structure
      });
    }
  
    // Date picker functionality
    const pickupDateBtn = document.getElementById('pickup-date');
    const returnDateBtn = document.getElementById('return-date');
    
    if (pickupDateBtn) {
      pickupDateBtn.addEventListener('click', function() {
        // In a real implementation, this would open a date picker
        const date = prompt('Enter pickup date (MM/DD/YYYY):');
        if (date) {
          this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            ${date}
          `;
        }
      });
    }
    
    if (returnDateBtn) {
      returnDateBtn.addEventListener('click', function() {
        // In a real implementation, this would open a date picker
        const date = prompt('Enter return date (MM/DD/YYYY):');
        if (date) {
          this.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            ${date}
          `;
        }
      });
    }
  
    // Search cars button
    const searchCarsBtn = document.getElementById('search-cars-btn');
    if (searchCarsBtn) {
      searchCarsBtn.addEventListener('click', function() {
        const location = document.getElementById('location').value;
        const carType = document.getElementById('car-type').value;
        
        // In a real implementation, this would redirect to search results
        console.log('Searching for cars:', {
          location: location,
          pickupDate: pickupDateBtn.textContent.trim(),
          returnDate: returnDateBtn.textContent.trim(),
          carType: carType
        });
        
        alert('Searching for cars... This would redirect to search results in a real implementation.');
      });
    }
  
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form input[type="email"]');
    const subscribeBtn = document.querySelector('.newsletter-form .btn-primary');
    
    if (newsletterForm && subscribeBtn) {
      subscribeBtn.addEventListener('click', function() {
        const email = newsletterForm.value;
        if (email && validateEmail(email)) {
          alert('Thank you for subscribing to our newsletter!');
          newsletterForm.value = '';
        } else {
          alert('Please enter a valid email address.');
        }
      });
    }
  
    // Helper function to validate email
    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  
    // Car cards hover effect
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
      });
    });
  
    // Sticky header effect
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
      }
      
      // Add shadow when scrolled
      if (scrollTop > 10) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);
  });