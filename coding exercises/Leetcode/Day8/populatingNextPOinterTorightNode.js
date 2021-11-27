// Definition for a Node.
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

//TC- O(n), SC - O(n)
var connect = function (root) {
  if (!root) return null;
  const queue = [root];

  while (queue.length) {
    const size = queue.length;
    let dummyNode = new Node(null);

    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      dummyNode.next = currentNode;
      dummyNode = dummyNode.next;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return root;
};

// TC - O(n), SC - O(1)
var connect = function (root){
    if(!root) return null;
    let head = root;

    while(head != null){
        let dummy = new Node(null);
        let temp = dummy;

        while(head != null){
            if(head.left != null){
                temp.next = head.left;
                temp = temp.next;
            }

            if(head.right!= null){
                temp.next = head.right;
                temp = temp.next;
            }
            head = head.next;
        }

        head = dummy.next;
    }
    return root;
}

var bt = new Node(1);
bt.left = new Node(2);
bt.right = new Node(3);
bt.left.left = new Node(4);
bt.left.right = new Node(5);
bt.right.left = new Node(4);
bt.right.right = new Node(5);
