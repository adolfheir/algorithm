/* 
    社区算法 
    只是引用
*/
const graph = require("./graph.js")
const louvain = require("./utils/louvain")


let nodes = [],
    links = [];
graph.vertex.forEach(node => {
    nodes.push(node.id)
});

graph.links.forEach(link => {
    links.push({
        source :link.from,
        target:link.to,
        weight:1
    })
})
let community = louvain().nodes(nodes).edges(links);
let result = community()

/* 
    input:{ A: 0, B: 1, C: 0, D: 1, E: 1, F: 0, G: 0, H: 1 }
    每个点后面的数字代表社区,相同是同一社区
*/
console.log(result)

