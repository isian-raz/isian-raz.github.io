const height = $(window).height();
const options = [
  {
    selector: ".hero__content",
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  },
  {
    selector: ".navbar-fixed",
    offset: height,
    callback: function() {
      $("nav").removeClass("transparent");
      $("nav").addClass("blue-grey");
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
    selector: ".card-panel",
    offset: 0,
    callback: function(el) {
      Materialize.fadeInImage($(el));
    }
  }
];

Materialize.scrollFire(options);
