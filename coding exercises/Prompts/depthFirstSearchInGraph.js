class Node {
    constructor(name){
        this.name = name;
        this.children = [];
    }

    addChild(name){
        this.children.push(new Node(name));
        return this;
    }

     // TC - O(V+E), SC - O(V)
     depthFirstSearch(array){
        array.push(this.name);

        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }
}