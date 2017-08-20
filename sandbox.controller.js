(function(){
    var _ = self.SandboxController = function(model) {
        this.model = model;
        this.model.subscribe(this.onModelChange.bind(this));
    };

    _.prototype = {
        onModelChange : function() {
            renderBadShapes();
            renderGoodShapes();
        },

        onClick_MakeGood : function(shapeId) {
            this.model.makeGoodShape(shapeId);
        },

        onClick_MakeBad : function(shapeId) {
            this.model.makeBadShape(shapeId);
        }
    };

    function renderBadShapes() {
        var container = document.querySelector('#badShapeContainer');

        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }

        for (var i = 0; i < this.model.badShapes.length; i++) {
            container.appendChild(badShapeTemplate.render(this.model.badShapes[i]));
        }
    };

    function renderGoodShapes() {
        var container = document.querySelector('#goodShapeContainer');

        while(container.firstChild){
            container.removeChild(container.firstChild)
        }

        for(var i = 0; i < this.model.goodShapes.length; i++){
            container.appendChild(goodShapeTemplate.render(this.model.goodShapes[i]));
        }
    };
})();








