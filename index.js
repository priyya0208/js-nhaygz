function stringCompression (str) {
  if (str.length ==0) {
    console.log('Please enter valid string.');
    return;
  }
  var output = '';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    //console.log(str[i+1]);    
    if (str[i] != str[i+1]) {
      if(count == 1){count = '';}
      output += str[i] + count;
      count = 0;
    }
  }
  console.log(output);
}
stringCompression('pphhhhaaacccdrrr'); //a4b2c1
stringCompression('aaabcccdd'); //a4b2c1a2b2

function fizzBuzz (int){
  for(var i=0;i<=int;i++){
    if((i%2 == 0) && (i%3 == 0)){
      console.log("Fizz Buzz");
    }
    else if(i % 2 == 0){
      console.log("Fizz");
    }
    else if(i % 3 == 0){
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}//fizzBuzz (10);

function chunkArray(myArray, size){
  var result = [];
  while(myArray.length){
      result.push(myArray.splice(0, size));
  }
  console.log(result);
}

//chunkArray([1,2,3,4,5,6,7,8], 3);
var Person = function() {};

Person.prototype.initialize = function(name) 
{
  this.name = name;
}
Person.prototype.describe = function(){
  return this.name;
}
var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
  console.log(this.name + " is now teaching "+ this.subject);
}

var me = new Teacher();
me.initialize("Priyanka");
me.teach("Javascript");


const arr = [1,[2],[3,4,[5]], [6,[7,[8],9]]];
const flatArray = arr.flat(Infinity);
//console.log(flatArray);




function displayPyramid(n) {
  for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 1; j < n-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '#';
    }
    console.log(str);
  }
};
//displayPyramid(10);

function layerTopRight (matrix){
  var top = matrix.splice(0,1);
  var right = [];
  for(var i=0;i<matrix.length;i++){
    var e = matrix[i].splice(-1,1);
    console.log(e);
    right.push(e);
    return top.concat(right).toString().split();
  }
}


function layerBottomLeft (matrix){
  var bottom = matrix.splice(matrix.length-1, 1)[0].reverse();
  var left = [];
  for(var i=0;i<matrix.length;i++){
    var e = matrix.splice(0,1);
    left.push(e);
  }
  
  // return the top row and last column elements as a list
  return bottom.concat(left.reverse()).toString().split();
}

function spiral(matrix) {
  var spir = [];
  while(matrix.length> 0 ){
    if(matrix.length == 1){
      spir.push(matrix[0]);
      break;
    }
    var tr = layerTopRight(matrix);
    spir.push(tr);
    var bl = layerBottomLeft(matrix)
    spir.push(bl);
  }
  return console.log(spir.toString().split());
}
var M = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

spiral(M);//["1,2,3,6,9,8,7,4,5"]

