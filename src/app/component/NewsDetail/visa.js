var bfsGrapgh = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
]

function bfs(graph, root){
    var nodelen = {}

    for(var i=0; i<graph.length; i++){
        nodelen[i] = Infinity;
    }
    nodelen[root] = 0;

    var queue = [root];
    var current;

    while(queue.length!=0){
        current = queue.shift();

        var curConnected = graph[current];
        var idx = curConnected.indexOf(1);
        var neighborIdx = [];
        while(idx!=-1){
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx+1);
        }

        for(var i =0; i<neighborIdx.length; i++){
            if(nodeslen[neighborIdx[i]] ==Infinity){
                nodeslen[neighborIdx[i]] = nodelen[current] + 1;
                queue.push(neighborIdx[i]); 
            }
        }
    }
}