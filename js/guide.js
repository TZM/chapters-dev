function ZmgcGuide() {
  var self = this;

  this.init = function() {
      self.leftNavToggle();
      self.leftMenuToggle();
  };
  // left-navigation block toggle
  this.leftNavToggle = function () {
    var leftNavToggle = $( "#nav-toggle" ).on( "click", function( event ) {
      event.preventDefault();
      if ( leftNavToggle.hasClass( "active" ) ) {
        leftNavToggle.removeClass( "active" );
        leftNavToggle.css( "marginLeft",  230 );
        $( "#nav-container" ).css( "marginLeft", 0 );
        $( ".content" ).removeClass("open");
      } else {
        leftNavToggle.addClass( "active" );
        leftNavToggle.css( "marginLeft", -15 );
        $( "#nav-container" ).css( "marginLeft", -245 );
        $( ".content" ).toggleClass("open");
      }
    });
  }
  // left menu open / close
  this.leftMenuToggle = function () {
    $('#nav-container').on('click', '.section', function(e) {
        e.preventDefault();

        var $shortcut = $(this).next();
        $('#nav-container ul.active').not($shortcut).removeClass('active');
        //$("#nav-container .menu-toggle.open").not($shortcut).removeClass("open");
        $shortcut.andSelf().toggleClass('active').find(".menu-toggle").toggleClass("open");
    });
  }

  // Load pages
  $("#primary-nav .nav-link").live('click', function() {
		var $this = $(this);
		var strContentUrl = $this.attr("data-content");
    $(".content:first").empty().load("../guide/" + strContentUrl);
		return false;
  });

  // Initialise
  this.init();
};

var ZmgcGuide;

jQuery(function() {
  ZmgcGuide = new ZmgcGuide();
});
