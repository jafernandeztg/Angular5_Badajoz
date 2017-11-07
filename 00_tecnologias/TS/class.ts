interface Autor{
    autor: string;
    pais: string;
    nacim: Date;
}

interface Editorial{
    nombre:string;
    lugar: string;
}

class Libro implements Autor{
    //Em TypeScript es necesario declarar las propiedades de una clase
    //podemos ademas decidir si serán públicas o privadas
    public autor: string;
    public pais;
    public nacim;
    private titulo: String;
    public editorial: Editorial;

    constructor(autor, titulo){
        this.autor = autor;
        this.titulo = titulo;

        this.editorial = {nombre:"", lugar:""}
    }
    
    mostrar_autor(){
        console.log(this.autor);
    }
}

class LibroTecnico extends Libro{
    public tema: String;

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
