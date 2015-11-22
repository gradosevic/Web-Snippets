; var G = (function (window, $, undefined) {
    var g = {
        params: {
            p: "",
            ltp: "",
            sortby: "",
        },
        selectors: {
            a: '.b',
            b: '.a',
        },
        init: function () {
            this.registerEvents();
        },
        registerEvents: function () {
            var s = g.selectors;
            g.reBind(s.a, this.handleA);
            g.reBind(s.b, this.handleB);
        },
        reBind: function(selector, handler){
            $(selector).unbind('click').click(handler);
        },

        /*Event handlers */
        handleA: function (e) {
        },
        handleB: function(e){
        },
  
        clearParams: function () {
            g.params.a = "";
            g.params.b = "";
        }
    };
    $(function () {
        g.init();
    });
    return g;
}(window, jQuery));
