/* This script handles the Materialize Scrollfire effect:
 * 1. Hero content fades in when the user lands on the page
 * 2. Navbar changes color when the user starts scrolling down
 * 3. Cards and section elements fade in as they first come into view.
 */
var options = [
  {
    selector: ".hero__content",
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
  {
    selector: ".cards-1",
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
  {
    selector: ".cards-2",
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
  {
    selector: ".cards-3",
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
  {
    selector: ".z-depth-5",
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  }
];

Materialize.scrollFire(options);

// Custom navbar fade in effect
$(document).scroll(function() {
  if ($(window).scrollTop() < 200) {
    $("nav").removeClass("nav-fade-in");
    $("nav").addClass("nav-fade-out");
  } else {
    $("nav").removeClass("nav-fade-out");
    $("nav").addClass("nav-fade-in");
  }
});
