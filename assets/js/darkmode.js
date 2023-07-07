(function($) {
    var $window = $(window),
      $body = $('body'),
      $main = $('#main');
  
    // Dark Mode Toggle
    const checkbox = document.getElementById('checkbox');

    // Function to toggle between light and dark modes
    function toggleDarkMode() {
      const body = document.body;
      body.classList.toggle('dark-mode');
    }

    // Event listener for the checkbox
    checkbox.addEventListener('change', toggleDarkMode);
  
    // Rest of your existing code...
    // ...
  })(jQuery);