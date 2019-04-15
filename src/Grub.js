var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function(food) {
  if(food === 'jelly'){
    return (this + ' eats the jelly');
  } else {
    return (this + ' does not eat the ' + food);
  }
}