/* Saludo

Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada". */

/* let nombre = prompt("ingrese nombre")
let apellido = prompt("ingresu su apellido")

let saludo = `Hola ${nombre} ${apellido}, bienvenido a Ada`;

alert(saludo)  */



/* Heladería

Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada". */

/* let gustoHelado1 = prompt("ingrese el primer gusto de helado")
let gustoHelado2 = prompt("ingrese el segundo gusto de helado")
let gustoHelado3 = prompt("ingrese el tercer gusto de helado")

let mensaje = `Aquí tiene su helado de ${gustoHelado1}, ${gustoHelado2} y ${gustoHelado3}.`
alert (mensaje) */



/* Datos personales

Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos. */


/*     let nombre = prompt("ingrese su nombre")
    let apellido = prompt("ingrese su apellido")
    let edad = prompt("ingrese su edad")
    let nacionalidad = prompt("ingrese su nacionalidad")
    let documento = prompt("ingrese su documento")

    let mensaje = `Nuevo usuario agregado al sistema:
    - Nombre: ${nombre}
    - Apellido: ${apellido}
    - Edad: ${edad}
    - Nacionalidad: ${nacionalidad}
    - Documento: ${documento}.`

alert (mensaje) */

/* Lista de reproducción

Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'". */

/* let nombrePlaylist = prompt("ingrese el nombre de la playlist")
let cancion1 = prompt("ingrese una cancion")
let cancion2 = prompt("ingrese una segunda cancion")
let cancion3 = prompt("ingrese una tercera cancion")


let mensaje = `Se ha creado la playlist ${nombrePlaylist} con las canciones ${cancion1}, ${cancion2}, ${cancion3}.`

alert (mensaje) */

/* Dirección completa

Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina". */

/* let calle = prompt("ingrese su calle")
let numeroCalle = prompt("ingrese el numero")
let departamento = prompt("ingrese el departamento")
let codigoPostal = prompt("ingrese el codigo postal")
let ciudad = prompt("ingrese su ciudad")
let pais = prompt("ingrese su pais")


let mensaje = `La dirección que ha ingresado es: ${calle} ${numeroCalle} ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}.`

alert (mensaje) */

/* Años perro

Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro. */

/* let edad = prompt ("ingrese una edad")
let edadPerro = edad * 7

alert (`La edad ${edad} en años perro es equivalente a ${edadPerro}.`) */

/* Minutos a segundos

Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos. */

/* let ingresoMinutos = prompt ("ingrese una cantidad en minutos")
let conversionASegundos = ingresoMinutos * 60 

alert (`Los ${ingresoMinutos} minutos que ingresó, equivalen a ${conversionASegundos} segundos.`) */

/* Días a segundos

Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.
  */

/* let ingresoDias = prompt ("ingrese una cantidad de dias")
let conversionASegundos = ingresoDias * 86400 

alert (`Teniendo en cuenta que cada dia tienen 86400 segundos.. Los ${ingresoDias} días que usted ingresó, equivalen a ${conversionASegundos} segundos.`) */

/* Kilómetros a millas

Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas. */

/* let kilometro = prompt ("ingrese una cantidad kilometros")
let millas = kilometro / 1.609

alert (`Teniendo en cuenta que cada kilometro equivale a 0.621 millas.. Los ${kilometro} kilometros que usted ingresó, equivalen a ${millas} millas.`)  */

/* Área de un triangulo

Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje. */

/* let baseTriangulo = prompt ("ingrese la base del triangulo")
let alturaTriangulo = prompt ("ingrese la altura del triangulo")
let area = baseTriangulo * alturaTriangulo 

alert (`El Area de su triangulo es de ${area}.`) */

/* Perímetro de un rectángulo

Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje. */

/* let alturaCuadrado = prompt ("ingrese la altura del rectangulo")
let anchoCuadrado = prompt ("ingrese el ancho del rectangulo")
let perimetroCuadrado = alturaCuadrado * 2 + anchoCuadrado * 2

alert (`El Perimetro de su rectangulo es de ${perimetroCuadrado}.`) */

/* Porcentaje

Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número. */

/* let numeroIngresado = prompt ("Ingrese un numero")
let porcentajeIngresado = prompt ("ingrese un porcentaje para aplicarle al numero")
let porcentajeFinal = (numeroIngresado * porcentajeIngresado) / 100 

alert (`El porcentaje ${porcentajeIngresado} % del numero ingresado ${numeroIngresado} es de ${porcentajeFinal} %.`) */


/* Tiempo de viaje

Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.). */

/* let distancia = prompt ("ingrese distancia en kilometros de su recorrido")
let velocidadAPie = distancia / 5
let velocidadABici = distancia / 10 
let velocidadEnAuto = distancia / 100

alert (`De acuerdo a su distancia ingresada de ${distancia} km, se tarda:
-${velocidadAPie} horas, yendo a pie,
-${velocidadABici} horas, yendo en bici,
-${velocidadEnAuto} horas, yendo en auto.`) */

/* Duración vuelo

Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo. */

/* let destino1 = prompt ("Ingrese el destino de la primer escala")
let duracion1Escala = prompt ("Ingrese la duracion del primer vuelo")
let destino2 = prompt ("Ingrese el destino de la segunda escala")
let duracion2Escala = prompt ("Ingrese la duracion del segundo vuelo")
let destino3 = prompt ("Ingrese el destino de la tercer escala")
let duracion3Escala = prompt ("Ingrese la duracion del tercer vuelo")

let duracionTotal = duracion1Escala + duracion2Escala + duracion3Escala

alert (`-La primer escala en ${destino1} tardará: ${duracion1Escala}hs.
-La segunda escala en ${destino2} tardará: ${duracion2Escala}hs.
-La terer escala en ${destino3} tardará: ${duracion3Escala}hs.

La duración TOTAL del vuelo es de ${duracionTotal}. horas.`) */

/* Incremento

Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.). */