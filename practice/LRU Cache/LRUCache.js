//LRU Cache
//remove recently used object from cache

//design an object, work as LRU cache, 
//all request go through LRU cache

//interface:
//get cache from app side
//update cache from app side


function LinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

function Node(key, value) {
  this.val = { key: value };
  this.next = next;
}

const LRUCache = {
  // limitation: num of nodes (objects) in cache
  num_of_nodes: 100,

  // LinkedList references
  LRUCacheObj: LinkedList,
  headNode: Node,
  tailNode: Node,

  // request cache (key)
  // client application calls downloadAPI(params)
  request(key) {
    // step 1: check if key exits, O(n)
    let node = this.check_LinkedList_with_Key(key);
    if (node !== null) {
      // return the key: value
      return node.val;
    } else {
      // let API pass through to the server, get object
      // check current size of the LRUCache (LinkedList)
      let size = this.LRUCacheObj.size;

      // Step 1: store it in LRUCache
      if (size < this.num_of_nodes) {
        // step 2: update headNode (drop the headNode)
        this.updateHeadNode();
        this.LRUCacheObj.size--;
      } else {
        // Add Node to the list
      }
      // (async) step 3: get Object from API (Promise?) and create new node
      let obj = this.getDataFromServer();
      // .then((obj) => {...})
      currentNode = new Node(key, obj);

      // step 4: update tail node
      this.updateTailNode(currentNode);
      this.LRUCacheObj.size++;

      // Step 5: return the value of tail node
      return this.tailNode[key];
    }

  },

  /**
   * Helper Functions
   */

  // find the node with key
  check_LinkedList_with_Key(key) {
    let node = headNode;
    while(node != null) {
      if (node.val.hasOwnProperty(key)) {
        return node;
      } else {
        node = node.next;
      }
    }
    return null;
  },

  // get data from server (should be a promise)
  getDataFromServer() {
    return {val: '1'};
  },

  /**
   * Linked List Helper Functions
   */
  updateHeadNode() {
    let temp = this.headNode;
    this.headNode = this.headNode.next;
    temp = null;
  },

  updateTailNode(node) {
    this.tailNode.next = node;
    this.tailNode = node;
    return this.tailNode;
  }



}