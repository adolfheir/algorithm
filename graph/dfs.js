/* 
    dfs求全路径
    可对照graph.png看结果
*/
const graph= require("./graph.js")


let stack = [],
    pathList = [],
    start = "A",
    end = "H";

function dfs(starNodeId) {
    stack.push(starNodeId)
    let linkArr = graph.getNeighLink(starNodeId)
    let nextId = null;
    for (let index = 0; index < linkArr.length; index++) {
        const element = linkArr[index];
        let id = element.from == starNodeId ? element.to : element.from;
        if(id == end){
            pathList.push([id].concat(stack))
            continue;
        }
        if (!stack.includes(id)) {
            nextId = id;
            dfs(nextId);
        }
    }
    stack.pop(starNodeId)
}

dfs(start)
// input: [ [ 'H', 'A', 'B', 'D' ], [ 'H', 'A', 'B', 'E' ] ]
console.log(pathList)