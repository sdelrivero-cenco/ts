"use strict";
// CUANDO USAMOS UNA CLASS??
class Botella {
    constructor(etiqueta) {
        this.etiqueta = etiqueta;
    }
    etiquetaColor() {
        console.log(this.etiqueta);
    }
}
const bottle = new Botella("roja");
const bottle2 = new Botella("azul");
const persona = {
    name: "santi",
    lastName: "oh",
    age: 29,
    breath() {
        console.log(" respirando");
    },
};
const saludar = (person) => {
    console.log(`Hola ${person.name}, como andas?`);
};
saludar(persona);
persona.breath();
//# sourceMappingURL=class.js.map