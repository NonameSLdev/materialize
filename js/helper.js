(function($) {
    $(".valign").parent().addClass("valign-wrapper");

    $.fn.extend({
        verticalAlign: function() {
            return this.each(function() {
                this.addClass("valign").parent().addClass("valign-wrapper");
            });
        }
    });
})(jQuery);
