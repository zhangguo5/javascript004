;
(function(method) {
	method(window, window.document, jQuery);
}(function(win, doc, $) {
	$.fn.SuperPlus = function(length) {
		
		$.each(this, function(index, obj) {
			$("<span/>").html("+").css("cursor", "pointer").click(function() {
				$(obj).width($(obj).width() + length);
			}).insertAfter(obj);
		});

	}
}));