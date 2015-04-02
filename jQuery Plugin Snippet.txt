;(function($, window, document) {	
	var pluginName = "myPlugin",
		defaults = {
			/*input parameters*/
			debug: false,
			item: "li"			
	};
	
	function Plugin( element, options ) {		
		this.element = element;	
		this.options = $.extend( {}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}
	
	Plugin.prototype = {
		$o:{},		
		init: function() {		
			this.myFn();		
		},
		myFn: function(){
			//Implementation
			this.$o = $(this.element);
			this.touchEvents();			
			
			//access option
			//this.options.item						
		},	
		log: function(toLog){
			if(this.options.debug){
				console.log(toLog);
			}
		}
	};
	
	$.fn[pluginName] = function ( options ) {
		if(!options) options = {};		
		options.selector = this.selector;	
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName,
				new Plugin( this, options ));
			}
		});
	};
})(jQuery, window, document);
$(function(){			
	$('#selector').myPlugin({
		item: '1'
	});		
});