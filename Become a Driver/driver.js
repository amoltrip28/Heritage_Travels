document.addEventListener('DOMContentLoaded', function() {
    const driverRegistrationForm = document.getElementById('driver-registration-form');
    const availabilitySelect = document.getElementById('availability');
    const customAvailabilityGroup = document.getElementById('custom-availability-group');
    const customAvailabilityTextarea = document.getElementById('custom-availability');
    
    // Show/hide custom availability textarea based on selection
    if (availabilitySelect) {
      availabilitySelect.addEventListener('change', function() {
        if (this.value === 'custom') {
          customAvailabilityGroup.style.display = 'block';
          customAvailabilityTextarea.setAttribute('required', 'required');
        } else {
          customAvailabilityGroup.style.display = 'none';
          customAvailabilityTextarea.removeAttribute('required');
        }
      });
    }
    
    // Form validation and submission
    if (driverRegistrationForm) {
      driverRegistrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Basic form validation
        const requiredFields = driverRegistrationForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            
            // Add error message if it doesn't exist
            const errorMessage = field.parentNode.querySelector('.error-message');
            if (!errorMessage) {
              const message = document.createElement('p');
              message.className = 'error-message';
              message.textContent = 'This field is required';
              message.style.color = 'red';
              message.style.fontSize = '0.75rem';
              message.style.marginTop = '0.25rem';
              field.parentNode.appendChild(message);
            }
          } else {
            field.classList.remove('error');
            const errorMessage = field.parentNode.querySelector('.error-message');
            if (errorMessage) {
              errorMessage.remove();
            }
          }
        });
        
        // Validate email format
        const emailField = document.getElementById('email');
        if (emailField && emailField.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(emailField.value)) {
            isValid = false;
            emailField.classList.add('error');
            
            const errorMessage = emailField.parentNode.querySelector('.error-message');
            if (!errorMessage) {
              const message = document.createElement('p');
              message.className = 'error-message';
              message.textContent = 'Please enter a valid email address';
              message.style.color = 'red';
              message.style.fontSize = '0.75rem';
              message.style.marginTop = '0.25rem';
              emailField.parentNode.appendChild(message);
            }
          }
        }
        
        // Validate phone number format
        const phoneField = document.getElementById('phone');
        if (phoneField && phoneField.value.trim()) {
          const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
          if (!phonePattern.test(phoneField.value)) {
            isValid = false;
            phoneField.classList.add('error');
            
            const errorMessage = phoneField.parentNode.querySelector('.error-message');
            if (!errorMessage) {
              const message = document.createElement('p');
              message.className = 'error-message';
              message.textContent = 'Please enter a valid phone number';
              message.style.color = 'red';
              message.style.fontSize = '0.75rem';
              message.style.marginTop = '0.25rem';
              phoneField.parentNode.appendChild(message);
            }
          }
        }
        
        // If form is valid, submit it
        if (isValid) {
          // In a real implementation, this would submit the form data to a server
          // For this demo, we'll just show a success message
          
          // Create a loading overlay
          const loadingOverlay = document.createElement('div');
          loadingOverlay.className = 'loading-overlay';
          loadingOverlay.style.position = 'fixed';
          loadingOverlay.style.top = '0';
          loadingOverlay.style.left = '0';
          loadingOverlay.style.width = '100%';
          loadingOverlay.style.height = '100%';
          loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          loadingOverlay.style.display = 'flex';
          loadingOverlay.style.alignItems = 'center';
          loadingOverlay.style.justifyContent = 'center';
          loadingOverlay.style.zIndex = '9999';
          
          const loadingSpinner = document.createElement('div');
          loadingSpinner.className = 'loading-spinner';
          loadingSpinner.style.width = '50px';
          loadingSpinner.style.height = '50px';
          loadingSpinner.style.border = '5px solid #f3f3f3';
          loadingSpinner.style.borderTop = '5px solid var(--primary)';
          loadingSpinner.style.borderRadius = '50%';
          loadingSpinner.style.animation = 'spin 1s linear infinite';
          
          const spinnerStyle = document.createElement('style');
          spinnerStyle.textContent = `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `;
          
          document.head.appendChild(spinnerStyle);
          loadingOverlay.appendChild(loadingSpinner);
          document.body.appendChild(loadingOverlay);
          
          // Simulate form submission delay
          setTimeout(function() {
            // Remove loading overlay
            document.body.removeChild(loadingOverlay);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.style.position = 'fixed';
            successMessage.style.top = '50%';
            successMessage.style.left = '50%';
            successMessage.style.transform = 'translate(-50%, -50%)';
            successMessage.style.backgroundColor = 'white';
            successMessage.style.padding = '2rem';
            successMessage.style.borderRadius = 'var(--radius)';
            successMessage.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            successMessage.style.maxWidth = '500px';
            successMessage.style.width = '90%';
            successMessage.style.textAlign = 'center';
            successMessage.style.zIndex = '9999';
            
            successMessage.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem;">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3 style="margin-bottom: 1rem; color: var(--foreground);">Registration Submitted Successfully!</h3>
              <p style="margin-bottom: 1.5rem; color: var(--muted-foreground);">Thank you for registering as a driver. Our team will review your information and contact you within 24-48 hours.</p>
              <button class="btn btn-primary" style="margin: 0 auto;" id="close-success-message">Close</button>
            `;
            
            document.body.appendChild(successMessage);
            
            // Close success message and redirect to home page
            document.getElementById('close-success-message').addEventListener('click', function() {
              document.body.removeChild(successMessage);
              window.location.href = '/';
            });
          }, 2000);
        } else {
          // Scroll to the first error
          const firstError = driverRegistrationForm.querySelector('.error');
          if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
      
      // Clear error messages when input changes
      driverRegistrationForm.addEventListener('input', function(event) {
        if (event.target.hasAttribute('required') || event.target.id === 'email' || event.target.id === 'phone') {
          event.target.classList.remove('error');
          const errorMessage = event.target.parentNode.querySelector('.error-message');
          if (errorMessage) {
            errorMessage.remove();
          }
        }
      });
      
      // Reset form handler
      driverRegistrationForm.addEventListener('reset', function() {
        // Remove all error messages
        const errorMessages = driverRegistrationForm.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());
        
        // Remove error class from all inputs
        const errorInputs = driverRegistrationForm.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));
        
        // Reset custom availability
        if (customAvailabilityGroup) {
          customAvailabilityGroup.style.display = 'none';
        }
        
        // Scroll to top of form
        driverRegistrationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
    
    // File input preview functionality
    const fileInputs = document.querySelectorAll('.file-input');
    fileInputs.forEach(input => {
      input.addEventListener('change', function() {
        const fileCount = this.files.length;
        const fileLabel = this.previousElementSibling;
        
        if (fileCount > 0) {
          fileLabel.textContent = fileLabel.textContent.split(' (')[0] + ` (${fileCount} ${fileCount === 1 ? 'file' : 'files'} selected)`;
        } else {
          fileLabel.textContent = fileLabel.textContent.split(' (')[0];
        }
      });
    });
  });