(function($) {

   $(document).ready(function() {

var check = $("input:not(:checked) + span");

var externalLinks = $(".nav a[href^='http']");

var nota = $(".pagination-item:not(span)");

var grid = $("div.grid, div.grid-12");

var first = $("div[id='text'] p:first");


    first.hl();

    });

})(jQuery);