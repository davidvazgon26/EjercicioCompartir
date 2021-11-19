const {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var arr = [];
var countArray = function (array) {
  // Tu código aca:

  array.forEach(element => {
    if (element.length >= 2) {
      //console.log(element.length)
      countArray(element)
    } else {
      arr.push(element)
    }
  });
  // return arr
  return arr.reduce((a, b) => a + b);
}

// console.log(countArray([1,2,3,4,5]));
// console.log(countArray([1, [2, [3, 4]],[5, 6], 7]));
// console.log(countArray([1, [2, [3, [4, 4, 4]]],  [5, 6], 7]));

// console.log('countArray: ', countArray([1,2,3,4,5]));
// console.log('countArray: ', countArray([1, [2, [3,4]], [5,6], 7]));
// console.log('countArray: ', countArray([1, [2, [3,[4,4,4]]], [5,6], 7]));

// --------------------------------------------------------------------------------------------------------------------

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: { a1: 10,
//       a2: 'Franco',
//       a3: { f: 'r', a: 'n', c: { o: true}
//     }
//   },
//   b: 2,
//   c: [1, { a: 1 }, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total



var contador = 0;
var countProps = function (object) {
  // Tu código aca:
  contador = contador + Object.keys(object).length
  console.log('Contador va en: ' + contador)
  for (const key in object) {
    //console.log(object[key])
    //console.log(typeof(object[key]))
    if (typeof (object[key]) === 'object' && !Array.isArray(object[key])) {
      return countProps(object[key])
    }

  }

}

//countProps(obj);

// console.log('countProps: ', countProps(obj1));
// console.log('countProps: ', countProps(obj2));

// --------------------------------------------------------------------------------------------------------------------

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

var contador = 0;
LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  var curr = this.head

  if (curr === null) return null; // valida que exista algo en la lista
  //Recorrer la lista
  while (curr.next != null) {
    curr = curr.next
    if (parseInt(curr.value * 1) != false) {
      curr.value = 'Kirikocho'
      contador = contador + 1
    }
  }


}

// var listOne = new LinkedList();
// listOne.add(1);
// listOne.add('2');
// listOne.add(false);
// listOne.add('Franco');

// console.log(listOne)
// listOne.changeNotNumbers();
// console.log(listOne)

// console.log('listOne: ', listOne.head.value + ' ' + listOne.head.next.value + ' ' + listOne.head.next.next.value + ' ' + listOne.head.next.next.next.value);
// console.log('changeNotNumbers: ', listOne.changeNotNumbers());
// console.log('listOne: ', listOne.head.value + ' ' + listOne.head.next.value + ' ' + listOne.head.next.next.value + ' ' + listOne.head.next.next.next.value);

// var listTwo = new LinkedList();
// listTwo.add('Franco');
// listTwo.add('2a');
// listTwo.add(null);
// listTwo.add({a: 1});
// console.log('listTwo: ', listTwo.head.value + ' ' + listTwo.head.next.value + ' ' + listTwo.head.next.next.value + ' ' + listTwo.head.next.next.next.value);
// console.log('changeNotNumbers: ', listTwo.changeNotNumbers());
// console.log('listTwo: ', listTwo.head.value + ' ' + listTwo.head.next.value + ' ' + listTwo.head.next.next.value + ' ' + listTwo.head.next.next.next.value);

// --------------------------------------------------------------------------------------------------------------------

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  var newQueue = new Queue();

  while (queueOne.size() >= 1 && queueTwo.size() >= 1) {

    newQueue.enqueue(queueOne.dequeue())
    newQueue.enqueue(queueTwo.dequeue())
  }

  return newQueue
}

// var queueOne = new Queue();
// queueOne.enqueue(1);
// queueOne.enqueue(3);
// queueOne.enqueue(5);
// queueOne.enqueue(7);
// queueOne.enqueue(9);
// var queueTwo = new Queue();
// queueTwo.enqueue(2);
// queueTwo.enqueue(4);
// queueTwo.enqueue(6);
// console.log('mergeQueues: ', mergeQueues(queueOne, queueTwo));

// --------------------------------------------------------------------------------------------------------------------

// Implementar la funcion closureSum que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  // Tu código aca:
  return function (n) {
    return n * multiplier;
  }

}

// var multByFour = closureMult(4);
// console.log('multByFour: ', multByFour(2));
// console.log('multByFour: ', multByFour(5));
// var multBySix = closureMult(6);
// console.log('multBySix: ', multBySix(4));

// --------------------------------------------------------------------------------------------------------------------

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
var suma = 0;
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:

  if (this.value === null) return 0
  else if (this.right === null && this.left === null) return this.value;
  else if (this.right !== null && this.left !== null) return this.value + this.right.sum() + this.left.sum();
  else if (this.left !== null && this.right === null) return this.value + this.left.sum();
  else if (this.right !== null && this.left === null) return this.value + this.right.sum();


  return suma


}


var bst = new BinarySearchTree(15);
bst.insert(10);
bst.insert(17);
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(25);
// console.log('sum: ', bst.sum())

console.log(bst.sum());

// functionTwo() [suma = 2]
// functionOne() [suma = 9]