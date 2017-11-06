let oPrueba{
    precio : 32,
    iva: 1.21
};

oPrueba.calculaIvaAsiync = function() {
    setTimeout(function() {
        let precioFinal = this.precio * this.iva;
        console.log(`
        Usando una funcion clásica:
        El precio final es ${precioFinal}
        `);
    },1000)
}
oPrueba.calculaIvaAsiync();