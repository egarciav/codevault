// setTimeout()
// Este suele ocuparse cuándo quieres ejecutar una función después de esperar un lapso de milisegundos. 
// la sintáxis para este método es:    

setTimeout(expresion, tiempo)

// RECORDATORIO: Un segundo tiene 1000 milisegundos
// En donde *expresion* es el código que queremos ejecutar y *tiempo* son los milisegundos que pasan para 
// que se realice ese código.

setTimeout(decirHola, 3000, 'Saludos cordiales ', 'suscriptores')

function decirHola(frase, persona) {
    alert(frase + persona)
} 

// setInterval()
// Con este método podemos realizar una acción y repetirla en intervalos de tiempo definidos. 
// En este caso la sintaxis es prácticamente la misma que setTimeout():
// Aquí el parámetro *tiempo* indica la duración de cada intervalo.

let ciclo = setInterval(decirHola, 3000)

function decirHola() {
    console.log('Hola desde consola')
}    

// Para detener el setInterval se utiliza clearInterval()
// Usamos como parámetro la función que hemos asignado a nuestro bucle.

clearInterval(ciclo)