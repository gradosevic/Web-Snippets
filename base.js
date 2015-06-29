(function(global, $){

  var App = function(par1, par2){
    return new App.init(par1, par2);
  }
  
  var collection = ['col1', 'col2'];
  
  var objects = {
    obj1: 'Object1',
    obj2: 'Object2'
  };
  
  App.prototype = {
    getParams: function(){
      return this.par1 + ":" + this.par1;
    },
    check: function(){
      if(this.objects.obj1 === "Obj1"){
        throw "Not equal";
      }
      return this;
    }
  };
  
  App.init=function(par1, par2){
    var self = this;
    self.par1 = par1 || '';
    self.par2 = par2 || '';
  }
  
  App.init.prototype = App.prototype;
  
  global.App = global.A$ = App;
  
}(window, jQuery));
