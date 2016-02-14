/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this._storage = {};
  this.front = 0;
  this.end = 0;
};

Queue.prototype.add = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.remove = function() {
  if (this.size() > 0) {
    var temp = this.storage[this.front];
    this.front++;
    return frontValue;
  }
};

Queue.prototype.size = function(){
  this.end - this.front;
}