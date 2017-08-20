(function(){
    var _ = self.SandboxController = function(model) {
        this.model = model;
    };

    _.prototype = {
        renderBadShapes : function() {
            var container = document.querySelector('#badShapeContainer');

            while (container.firstChild) {
                container.removeChild(container.firstChild)
            }

            for (var i = 0; i < this.model.badShapes.length; i++) {
                container.appendChild(badShapeTemplate.render(this.model.badShapes[i]));
            }
        },

        renderGoodShapes : function() {
            var container = document.querySelector('#goodShapeContainer');

            while(container.firstChild){
                container.removeChild(container.firstChild)
            }

            for(var i = 0; i < this.model.goodShapes.length; i++){
                container.appendChild(goodShapeTemplate.render(this.model.goodShapes[i]));
            }
        },

        onClick_MakeGood : function(shapeId) {
            this.model.makeGoodShape(shapeId);
            this.renderBadShapes();
            this.renderGoodShapes();
        },

        onClick_MakeBad : function(shapeId) {
            this.model.makeBadShape(shapeId);
            this.renderBadShapes();
            this.renderGoodShapes();
        }
    };
})();








