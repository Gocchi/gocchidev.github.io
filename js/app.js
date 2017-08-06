$( document ).ready(function() {
  $(".nav__item").on("click", function(){
    $(".menu-nav").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
/* ---- EFECTO SMOOTH SCROLL ---- */

// Select all links with hashes
$('a[href*="#"]')

  // Remove links that don't actually link to anything
 /* .not('[href="#"]')
  .not('[href="#0"]')*/
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
//star wars
  var byline = document.getElementById('byline');   // Find the H2
bylineText = byline.innerHTML;                    // Get the content of the H2
bylineArr = bylineText.split('');                 // Split content into array
byline.innerHTML = '';                            // Empty current content

var span;         // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                  // Loop for every letter
  span = document.createElement("span");          // Create a <span> element
  letter = document.createTextNode(bylineArr[i]); // Create the letter
  if(bylineArr[i] == ' ') {                       // If the letter is a space...
    byline.appendChild(letter);         // ...Add the space without a span
  } else {
    span.appendChild(letter);           // Add the letter to the span
    byline.appendChild(span);           // Add the span to the h2
  }
}





   