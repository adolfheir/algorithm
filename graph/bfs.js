/* 
bfs求最短路径 
*/
const graph = require("./graph.js")

let iteration = true,
    startNode = "H",
    endNode = "G",
    index = 0,
    record = {},
    lastRound = [];
lastRound.push(startNode)
while (iteration) {
    let _NodeHistory = record[lastRound[index]] || [];
    if (typeof lastRound[index] == "undefined") {
        iteration = false;
    }
    graph.getNeighLink(lastRound[index]).forEach(link => {
        let _nextNodeId =
            link.from == lastRound[index] ? link.to : link.from;
        if (record[_nextNodeId]) {
            return;
        } else {
            record[_nextNodeId] = _NodeHistory.concat([link.id]);
            lastRound.push(_nextNodeId);
        }
        if (_nextNodeId == endNode) {
            iteration = false;
        }
    });
    index++;
}
let _nodes = [];
record[endNode].forEach(id => {
    let link = graph.getLink(id)
    if (!_nodes.includes(link.from)) {
        _nodes.push(link.from)
    }
    if (!_nodes.includes(link.to)) {
        _nodes.push(link.to)
    }
})
console.log(_nodes)
