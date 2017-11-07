class Libro{
    //En ES6 no es necesario declarar las propiedades de un objeto, se crean cuando se necesitan
    constructor(autor, titulo){
        this.autor = autor;
        this.titulo = titulo;
    }
    
    mostrar_autor(){
        console.log(this.autor);
    }
}

class LibroTecnico extends Libro{
    constructor(autor, titulo, tema){
        super(autor,titulo);
        this.tema = tema;
    }

    mostrar(){
        console.log(this);
    }
}

let oLibro = new LibroTecnico("Pepe","Angular","Programacion");
oLibro.editorial = "Anaya";
oLibro.mostrar();
