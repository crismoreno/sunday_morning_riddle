//SOLUCIÓN 1
var array = [1, 2, 3, 4, 5];
var sum = 1;
var result = [];
var qty = array.length;

for (var i = 0; i < qty; i++) {
  var removed = array.splice(i, 1);

  sum = 1;
  for (var index = 0; index < qty - 1; index++) {
    sum = sum * array[index];
  }
  result.push(sum);
  array.splice(i, 0, removed[0]);
}

console.log(result);

//SOLUCIÓN REFACTORIZADA
var arrayRefactor = [1, 2, 3, 4, 5];
var resultRefactor = [];
let op;

for (var iRefactor = 0; iRefactor < arrayRefactor.length; iRefactor++) {
  op = 1;
  for (
    var indexRefactor = 0;
    indexRefactor < arrayRefactor.length;
    indexRefactor++
  ) {
    if (indexRefactor === iRefactor) continue;
    op *= arrayRefactor[indexRefactor];
  }
  resultRefactor.push(op);
}

console.log(resultRefactor);
