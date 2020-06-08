// MAP - map()
// Este método crea un nuevo arreglo ejecutando una función 
// en cada uno de sus elementos, sin alterar el arreglo original

let array = [1,2,3,4,5]

let newArray = array.map((item) => {
    return item * 2;
});

alert(newArray);

// EVERY - every()
// Se verifica si TODOS los valores del array pasan un test/filtro

let array = [1,2,3,4,5]

let newArray = array.every((item) => {
    return item < 10;
});

alert(newArray)

// SOME - some()
// Con este método podemos verificar si ALGUNO de los valores 
// del arreglo pasan un filtro establecido

let array = [1,2,3,4,5,10]

let newArray = array.some((item) => {
    return item > 15
})

alert(newArray) 


// FILTER - filter() 
// Al usarlos es posible crear un nuevo arreglo con elementos del original, 
// pero que pasen un filtro o prueba

let array = [5,10,15,20]

let newArray = array.filter((item) => {
    return item > 9
})

alert(newArray) 

// FIND - find()
// Este método retorna el valor del primer elemento del array que pase 
// un test determinado

let array = [1,2,5,10,15]

let newArray = array.find((item) => {
    return item > 5
})

alert(newArray)

// FOR EACH - forEach()
// Ejecuta código para cada elemento del arreglo

let array = [1,2,3]

let newArray = array.forEach((item) => {
    console.log('Número: ' + item)
})

