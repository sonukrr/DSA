class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Avg TC - O(log n), SC - O(1)
  // Worst TC - O(n), SC - O(1)
  insert(value) {
    let currNode = this;

    while (true) {
      if (value < currNode.value) {
        if (currNode.left != null) {
          currNode = currNode.left;
        } else {
          currNode.left = new BST(value);
          break;
        }
      } else {
        if (currNode.right != null) {
          currNode = currNode.right;
        } else {
          currNode.right = new BST(value);
          break;
        }
      }
    }

    return this;
  }

  // Avg TC - O(log n), SC - O(1)
  // Worst TC - O(n), SC - O(1)
  contains(value) {
    let currNode = this;
    while (currNode !== null) {
      if (currNode.value == value) {
        return true;
      } else if (value < currNode.value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }

    return false;
  }

  // Avg TC - O(log n), SC - O(1)
  // Worst TC - O(n), SC - O(1)
  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // value == currentNode
        if (currentNode.left != null && currentNode.right != null) {
          // parent node with both childs
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (parentNode === null) {
          // root node
          if (currentNode.left != null) {
            // root node with onle left sub tree
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right != null) {
            //root node with only right sub tree
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // This is a single node tree; do nothing
              // currentNode.value = null;
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode) {
          parentNode.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}
