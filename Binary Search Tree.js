function BST(value){
    this.value= value;
    this.right=this.left=null
  }
  
  
  BST.prototype.insert=function(value){
    if(value<this.value){
      if(!this.left) return this.left=new BST(value)
      else this.left.insert(value)
    }
    else{
      if(!this.right) return this.right = new BST(value)
      else this.right.insert(value)
  
    }
  }
  
  
  BST.prototype.contains=function(value){
    if(!value){
      return false 
    }
    if(value===this.value) return true
    else{
      if(value<this.value){
        if(!this.left) return false
        else{
          return this.left.contains(value);
        }
      }
      else if (value>this.value){
        if(!this.right) return false
        else return this.right.contains(value)
      }
    }
    return false
  }
  
  // DFS--> depth first traversal method
  
  BST.prototype.DFS= function(arg,order){
    if(order==='pre-order')arg(this.value)
    if(this.left) this.left.DFS(arg,order)
    if(order==='in-order')arg(this.value)
    if(this.right)this.right.DFS(arg,order)
    if(order==='post-order')arg(this.value)
  }
  
  function log(value){
    console.log(value)
  }
  
  BST.prototype.BFS= function(arg){
  var queue=[];
  while(queue.length){
    var treenode=queue.shift();
    arg(treenode);
    if(treenode.left) queue.push(treenode.left);
    if(treenode.right)queue.push(treenode.right)
  }
  }
  
  var tree= new BST(100)
  tree.insert(50)
  tree.insert(70)
  tree.insert(30)
  tree.insert(27)
  tree.insert(40)
  // console.log(tree)
  // tree.dfs(log,'pre-order')
  // console.log(tree.contains(30))
  // tree.DFS(log,'in-order')
  tree.dfs(log,"in-order")
  // tree.DFS(log,"post-order")
  