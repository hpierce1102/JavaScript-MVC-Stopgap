(function(){
    var _ = self.Template = function(templateString) {
        this.templateString = templateString;
        this.parser = new DOMParser();
    };

    _.prototype = {
        render : function(obj) {
            this.obj = obj;
            domString =  this.templateString.replace(/{{\w+\.(\w.*?)}}/g, function(match, replace) {
                    return eval('this.obj.' + replace);
                }.bind(this));

            var dom = document.createElement('div');
            dom.innerHTML = domString;

            var fragment = document.createDocumentFragment();
            while(dom.firstChild){
                fragment.appendChild(dom.firstChild);
            }

            return fragment;
        }
    }
})();
