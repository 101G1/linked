document.addEventListener("DOMContentLoaded", function() {
    // Set the expiration time (in milliseconds)
    var expirationTime = 6000; // 60 seconds
  
    var link = document.getElementById("temporaryLink");
  
    // Add event listener to the link
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Check if the link has already been clicked
      if (!link.getAttribute("data-clicked")) {
        // Open the link
        window.open("https://www.youtube.com/", "index.html");
  
        // Set attribute to mark that the link has been clicked
        link.setAttribute("data-clicked", "true");
  
        // After expirationTime milliseconds, reset the link
        setTimeout(function() {
          link.removeAttribute("data-clicked");
        }, expirationTime);
      } else {
        alert("This link has already been clicked and has expired.");
      }
    });
  });
  