// CUANDO USAMOS UNA CLASS??


class Botella  {

    private etiqueta: string;

    constructor(etiqueta: string){
        this.etiqueta = etiqueta
    }

    etiquetaColor(){
        console.log(this.etiqueta);
    }
}

const bottle = new Botella("roja");
const bottle2 = new Botella("azul");
// bottle.etiquetaColor()


// INTERFACES

interface Persona {
    name: string,
    lastName: string,
    age: number,
    breath: ()=>void

}

const persona: Persona ={
    name: "santi",
    lastName: "oh",
    age: 29,
    breath() {
        console.log(" respirando");
        
    },
}

const saludar = ( person: Persona) =>{
    console.log(`Hola ${person.name}, como andas?`);   
}
saludar( persona )
persona.breath()




// Supongamos que de uan api nos llega la info de un jugador de fubol
interface FootballPlayerStatistics {
    averageScore: number,
    shootingAccuracy: number
}


interface FootballPlayer extends Persona{
    preferredFoot: string,
    tshirtNumber: number,
    position: string,
    statistics: FootballPlayerStatistics
}

let ronaldo: FootballPlayer




