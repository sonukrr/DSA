class Node {
    constructor(name){
        this.name = name;
        this.children = [];
    }

    addChild(name){
        this.children.push(new Node(name));
        return this;
    }

    // TC - O(v+e), SC - O(v)
    breadthFirstSearch(array = []){
        if(this == null) return [];
        var queue = [this];
        while (queue.length != 0) {
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                let curr = queue.shift();
                array.push(curr.name);
                for (const child of curr.children) {
                    queue.push(child);
                }

            }
        }
        return array;
    }
}

