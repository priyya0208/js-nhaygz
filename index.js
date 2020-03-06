function swap(alpha, index1, index2){
  var temp = alpha[index1];
  alpha[index1] = alpha[index2];
  alpha[index2]= temp;

  return console.log(swap(alpha));
}

var alphabets = ['A','B','C'];
swap(alphabets, 0 ,alphabets.length-1);