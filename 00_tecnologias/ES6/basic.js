
let aDatos = [ { precio: 23}, {precio: 45}, {precio: 65}]

//Forma comun
//aDatos.forEach((element) => {return element.precio} );

//Forma compacta
//aDatos.forEach(element => element.precio );

aDatos.forEach(element => {
    let iva = 1.21;
    let precioFinal = element.precio * iva;
    console.log(` El precio es ${precioFinal}`);
});