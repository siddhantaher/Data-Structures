function LinkedList(){
  this.head=null;
  this.tail=null;
}

function node(value,next,prev){
  this.value=value;
  this.next=next;
  this.prev=prev;
}

//consoling out the linked List

var list = new LinkedList()
console.log(list)

//Initiating node

// var Node1= new node(100,'node2',null)
// console.log(Node1)

//adding head to the node 
LinkedList.prototype.addtohead= function(value){
  var newnode= new node(value,this.head,null);//here this.head points to the the node which we defined while creating LinkedList (line NUmber - 3) .Prev is null because there will be no new new head before it as it  will the first one the list
  
//condition while adding node 
// 1. no nodes Present in the list

// 2. there are already nodes present in the linked list
  if(this.head) this.head.prev= newnode//this over here is refrencing to the constructor function of linked list not the node
  else this.tail=newnode;
  this.head=newnode; 
}

LinkedList.prototype.addtotail= function(value){
 var newnode = new node(value,null,this.tail);

//if linked list not empty
if(this.tail) this.tail.next=newnode;
//if its empty
else this.head=newnode;
this.tail=newnode;
}

LinkedList.prototype.removehead= function(){
  //if its empty
  if(!this.head) return null;
  // saving the head of the node which we are removing
  var val=this.head.value
  this.head=this.head.next;
  if(this.head) this.head.prev=null;
  else this.tail= null;
  return val;
}

LinkedList.prototype.removetail= function(){
  if(!this.tail) return null;
  var val= this.tail.value;
  this.tail=this.tail.prev;
  if(this.tail) this.tail.next=null
  else this.head=null
  return val;
}


LinkedList.prototype.search= function(searchvalue){
  var currentnode= this.head;
  while(currentnode){
    if(currentnode.value=== searchvalue) return currentnode.value
    currentnode= currentnode.next;
    
  }
  return null

}

LinkedList.prototype.indexof= function(value){

 var index=[]
 var currentindex=0;
var currentnode= this.head;
while(currentnode){
  if(currentnode.value===value){
     index.push(currentindex)
  }
  currentnode=currentnode.next;
  currentindex++;
}
return index
}

var newlist= new LinkedList();


newlist.addtotail(800)
newlist.addtohead(100)
newlist.addtohead(100)
newlist.addtohead(1000)
newlist.addtotail(500)
newlist.addtotail(900)
// console.log(newlist.search(8000))
// newlist.search(100)
console.log(newlist.indexof(100))