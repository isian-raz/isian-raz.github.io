function blinker() {
  $(".scroll-icon").fadeOut(1000);
  $(".scroll-icon").fadeIn(1000);
}

if (innerWidth > 600) {
  setInterval(blinker, 1000);
}
