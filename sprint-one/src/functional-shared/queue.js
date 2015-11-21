var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  _(someInstance).extend(queueMethods);

  someInstance._storage = {};
  someInstance._start = 0;
  someInstance._end = 0;

  return someInstance;
  };

var queueMethods = {};


queueMethods.enqueue = function(value){
  this._storage[this._end++] = value;
};

queueMethods.dequeue = function(){
  this.size() && this._start++;
  var result = this._storage[this._start];

  delete this._storage[this._start];

  return result;
};

queueMethods.size = function(){
  return this._end - this._start;
};
