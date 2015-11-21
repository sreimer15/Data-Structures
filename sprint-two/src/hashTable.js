var HashTable = function(){
  this._limit = 8;

  this._size = 0;
    this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);



  var bucket = this._storage.get(i) || [];
  for( var j = 0; j < bucket.length; j++ ){
    var pair = bucket[j];
    if( pair[0] === k ){
      pair[1] = v;
      return;
    }
  }
  bucket.push([k,v]);
  this._storage.set(i, bucket);
  this._size++;
  if( this._size > this._limit * 0.75 ){
    this.resize(this._limit*2);
  }
  };

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i) || [];
  for ( var j = 0; j < bucket.length; j++ ) {
    var pair = bucket[j];
    if( pair[0] === k ){
      return pair[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for( var j = 0; j < bucket.length; j++ ){
    var pair = bucket[j];
    if( pair[0] === k ){
      bucket.splice(j, 1)
      this._size--;
      if( this._size < this._limit * 0.25 ){
        this.resize(Math.floor(this._limit/2));
      }
      return pair[1];
    }
  }
  return null;
};


HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  var that = this;
  oldStorage.each(function(bucket){
    if( !bucket ){ return; }
    for( var i = 0; i < bucket.length; i++ ){
      var pair = bucket[i];
      that.insert(pair[0], pair[1]);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
