(function() {

    var _ = self.Sandbox = function(initialState) {
        this.badShapes = initialState.badShapes;
        this.goodShapes = initialState.goodShapes;
    };

    _.prototype = {
        makeGoodShape : function(shapeId) {
            for(var i = 0; i < this.badShapes.length; i++){
                if(this.badShapes[i].id + '' === shapeId){
                    this.goodShapes.push(this.badShapes[i]);
                    this.badShapes.splice(i, 1);
                    break;
                }
            }

            this.notifySubscribers();
        },

        makeBadShape : function(shapeId) {
            for(var i = 0; i < this.goodShapes.length; i++){
                if(this.goodShapes[i].id + '' === shapeId){
                    this.badShapes.push(this.goodShapes[i]);
                    this.goodShapes.splice(i, 1);
                    break;
                }
            }

            this.notifySubscribers();
        }
    };

    _.prototype.__proto__ = new ModelBase();
})();