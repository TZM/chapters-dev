jQuery(function($) {
    var setLng = $.url().param('setLng');
    if (setLng)
    {
      language_complete = setLng.split("-");
    }
    else
    {
      language_complete = navigator.language.split("-");
    }
    language = (language_complete[0]);
    console.log("I speak (root): %s", language);

	console.log("YO YO YO");

    i18n.init({ lng: language, debug: true }, function() {
        // save to use translation function as resources are fetched
        $(".tzm-i18n").i18n();
        $(".page-i18n").i18n();
        $(".menu-i18n").i18n();
        $(".user-i18n").i18n();
        $(".search-i18n").i18n();
        $(".footer-i18n").i18n();
    });
    // language selector
    $("#language").change(function(){
        var value = $(this).val();
        console.log(value);
    });
    // footer navigation
    var slide = false;
    var height = $('#footer').height();
    $('#footer_trigger').click(function() {
        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var scrollPos = docHeight - windowHeight + height;
        $('#footer').animate({ height: "toggle"}, 300);
        $("#footer_trigger").toggleClass("trigger_active");
        if(slide == false) {
            if($.browser.opera) {
                $('html').animate({scrollTop: scrollPos+'px'}, 300);
            } else {
                $('html, body').animate({scrollTop: scrollPos+'px'}, 300);
            }
            slide = true;
        } else {
            slide = false;
        }
    });

});
function createDropDown(){
    var source = $("#source");
    var selected = source.find("option[selected]");
    var options = $("option", source);

    $("body").append('<dl id="target" class="dropdown"></dl>')
    $("#target").append('<dt><a href="#">' + selected.text() +
    '<span class="value">' + selected.val() +
    '</span></a></dt>')
    $("#target").append('<dd><ul></ul></dd>')

    options.each(function(){
        $("#target dd ul").append('<li><a href="#">' +
        $(this).text() + '<span class="value">' +
        $(this).val() + '</span></a></li>');
    });
}