
/* 
图类
点和边和graph.png 一样
*/
let vertex = [
    {
        id: "A"
    },
    {
        id: "B"
    },
    {
        id: "C"
    },
    {
        id: "D"
    },
    {
        id: "E"
    },
    {
        id: "F"
    },
    {
        id: "G"
    },
    {
        id: "H"
    }
];
let links = [
    {
        id: "1",
        from: 'A',
        to: "B"
    },
    {
        id: "2",
        from: 'A',
        to: 'C',
    },
    {
        id: "3",
        from: 'B',
        to: 'D',
    },
    {
        id: "4",
        from: 'B',
        to: 'E',
    },
    {
        id: "5",
        from: 'D',
        to: 'H',
    },
    {
        id: "6",
        from: 'E',
        to: 'H',
    },
    {
        id: "7",
        from: 'C',
        to: 'F',
    },
    {
        id: "8",
        from: 'C',
        to: 'G',
    },
    {
        id: "9",
        from: 'F',
        to: 'G',
    },
];


class graph {
    constructor() {
        this.vertex = vertex;
        this.links = links
    }
    /**
     *  返回点的所有出/入边
     * @param {number} nodeId 点id 
     */
    getNeighLink(nodeId) {
        let _linkArr = [];
        links.forEach(link => {
            if (link.from == nodeId || link.to == nodeId) {
                _linkArr.push(link)
            }
        })
        return _linkArr
    }
    /**
     * 获取点
     * @param {number} id 点id 
     */
    getNode(id) {
        let _node = null;
        for (let index = 0; index < this.vertex.length; index++) {
            const element = this.vertex[index];
            if (element.id == id) {
                _node = element;
                break;
            }
        }
        return _node
    }
    /**
     * 获取边
     * @param {number} id 边id 
     */
    getLink(id) {
        let _link = null;
        for (let index = 0; index < this.links.length; index++) {
            const element = this.links[index];
            if (element.id == id) {
                _link = element;
                break;
            }
        }
        return _link
    }
}

exports = module.exports = new graph();