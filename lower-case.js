module.exports = function(RED) {
    function LowerCaseNodexx(config) {
        RED.nodes.createNode(this,config);
        this.inPut = config.inP || "";
        var node = this;

        myFunction();
        let i = 0;
        function myFunction() {
            setInterval(function(){
                let msg = {};
                msg.payload = "xc"
                i = i+1;
                node.send(msg);
                }, 1000);
          }
        
        node.on('input', function(msg) {
            //msg.payload = msg.payload.toLowerCase();
            msg.payload = node.inPut;
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNodexx);
}