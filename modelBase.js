(function(){
    var _ = self.ModelBase = function() {
        this.subscribers = []
    };

    _.prototype = {
        subscribe : function(fn) {
            this.subscribers.push(fn);
        },

        unsubscribe : function(fn) {
            var fnIndex = this.subscribers.indexOf(fn);
            this.subscribers.splice(fnIndex, 1);
        },

        notifySubscribers : function() {
            for(var i = 0; i < this.subscribers.length; i++) {
                this.subscribers[i]();
            }
        }
    }
})();
