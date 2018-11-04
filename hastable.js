function hastable(size){
    this.buckets= Array(size);
    this.numbuckets=this.buckets.length;
  }
  
  
  
   var myht=new hastable(30)
  // console.log(myht)
  
  function hasnode(key,value,next){
    this.key=key;
    this.value=value;
    this.next=next|| null;
  }
  
  
  // console.log('hello'.charCodeAt(4))
  
  hastable.prototype.hash=function(key){
    var total=0;
    for (var i=0;i<key.length;i++){
      total+= key.charCodeAt(i)
    }
    var bukcets=total%this.numbuckets;
    return bukcets;
  }
  myht.hash('Becca')
  
  
  hastable.prototype.insert= function(key,value){
    var index= this.hash(key);
    console.log(index)
    if(!this.buckets[index]){ this.buckets[index]= new hasnode(key,value)
    }
    else if(this.buckets[index].key===key){
      this.buckets[index].value=value
    }
  
    else{
      currentnode= this.buckets[index]
      while(currentnode.next){
  
  if(currentnode.next.key===key){
    currentnode.next.value= value
    return;
  }
  
        currentnode= currentnode.next;
  
      }
      currentnode.next=new hasnode(key, value);
    }
  }
  
  
  hastable.prototype.get= function(key){
    var index=this.hash(key)
    if(!this.buckets[index])return null
    
    else{
      var currentnode=this.buckets[index]
      while(currentnode){
        if(currentnode.key===key)
          return currentnode.value
          currentnode=currentnode.next
        
      }
          return null
  
    }
  
    
  }
  
  
  hastable.prototype.retrieveall=function(){
    var  allnodes=[];
    for (var i=0;i<this.numbuckets;i++){
      
      var currentnode=this.buckets[i]
      while(currentnode){
        allnodes.push(currentnode)
        currentnode=currentnode.next;
  
      }
    }
    return allnodes
  }
  
  
  myht.insert('Dean','dean@gmail.com');
  myht.insert('Megan','megan@gmail.com')
  myht.insert('Dane','dean@gmail.com');
  myht.insert('Dean','sid@gmail.com')
  // /myht.get('Dane')
  myht.insert('joe','joe@gmail.com')
  // console.log(myht)
  console.log(myht.retrieveall())
  
  
  
  