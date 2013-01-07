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

	//Make sure the language selector has the correct language selected on initial page load.
	$("select.language").val($("option.lang-" + language).val());

	function setLanguage() {
		// save to use translation function as resources are fetched
		$(".tzm-i18n").i18n();
		$(".page-i18n").i18n();
		$(".menu-i18n").i18n();
		$(".user-i18n").i18n();
		$(".search-i18n").i18n();
		$(".footer-i18n").i18n();
	}

    i18n.init({ lng: language, debug: true }, setLanguage);

    // language selector
    $("select.language").change(function(){
		var booReload = false; // TRUE = reload the page; FALSE = do not reload the page
        var value = $(this).val();
		var arrValueParts = value.split("-");
		var language = arrValueParts[0];

		if (booReload)
		{
			window.location.href = "/index.html?setLng=" + language;
		}
		else
		{
			i18n.init({ lng: language, debug: true }, setLanguage);
		}
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

    $('.projects').live('click', function() {
        console.log('click on projects button');
        $('#page:first').empty().load('blog.html');
    });
    $('.map').live('click', function() {
        console.log('click on map button');
        $('#page:first').empty().load('map.html');
        ZmgcClient();
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
//function loadPage(evt){
//
//}
function ZmgcClient() {
    var personPath = "m 1.4194515,-160.64247 c 33.5874165,0 60.8159465,-25.97005 60.8159465,-58.00952 0,-32.0404 -27.22755,-58.0114 -60.8159465,-58.0114 -33.5883965,0 -60.8159415,25.971 -60.8159415,58.0114 0,32.0404 27.228527,58.00952 60.8159415,58.00952 z m 81.9575765,26.25762 C 70.531608,-146.64352 55.269688,-153.983 0.08110256,-153.983 c -55.19742156,0 -70.08915856,7.96609 -82.28062656,19.59815 -12.197359,11.62926 -8.081167,135.7024419 -8.081167,135.7024419 L -63.292733,-59.848397 -46.325227,122.37766 2.6291765,29.116913 48.308878,122.37766 64.467298,-59.848397 91.457218,1.3175919 c 0,-8e-4 4.76917,-123.4484419 -8.08019,-135.7024419 z";
    if (! (this instanceof arguments.callee)) {
        return new arguments.callee(arguments);
    }
    var self = this;

    this.init = function() {
        console.log('zclient loaded');
    }
};
