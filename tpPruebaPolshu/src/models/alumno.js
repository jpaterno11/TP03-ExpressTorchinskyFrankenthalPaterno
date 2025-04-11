export default class Alumno{

    constructor(username, DNI, edad) {
        this.username = username;
        this.DNI = DNI;
        this.edad = edad;
        }


    getNombre() {
        return this.username;
    }
    getDNI(){
        return this.DNI
    }
    getEdad() {
       return this.edad;
    }
    toString(){
       return `nombre:${this.username}, DNI:${this.DNI}, edad:${this.edad}`;
    }        
}