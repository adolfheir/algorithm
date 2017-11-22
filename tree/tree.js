const fs = require('fs')
const path = require('path')

let tree = JSON.parse(fs.readFileSync(path.normalize(__dirname + '/tree.json'),'utf8'))

//dfs 递归

// let arr =[]
// function deepTraversal(tree){
//     if(tree != null){
//         arr.push(tree);
//         let child = tree.children;
//         for (let i = 0; i < child.length; i++) {
//             deepTraversal(child[i])        
//         }
//     }
// }
// deepTraversal(tree)
// console.log(arr)

//dfs 非递归

// let arr = []; 
// function deepTraversal(tree) {  
//     if (tree != null) {  
//         let stack = [];  
//         stack.push(tree);  
//         while (stack.length != 0) {
//             let item = stack.pop();  
//             arr.push(item);  
//             let children = item.children;  
//             for (let i = children.length - 1; i >= 0; i--)  
//                 stack.push(children[i]);  
//         }  
//     }    
// }  
// deepTraversal(tree)
// console.log(arr)



// bfs 非递归

// let arr = []; 
// function wideTraversal(tree) {  
//     if (tree != null) {  
//         let queue = [];  
//         queue.unshift(tree);  
//         while (queue.length != 0) {  
//             let item = queue.shift();  
//             arr.push(item);  
//             let children = item.children;  
//             for (let i = 0; i < children.length; i++)  
//                 queue.push(children[i]);  
//         }  
//     }  
// } 

// wideTraversal(tree)

