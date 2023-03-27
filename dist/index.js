"use strict";
// let palabra = 5
// palabra = "5"
// console.log(typeof(palabra));
////
// const multiplicador = (a:number, b:number, text:string) => {
//     console.log(text, a*b);
// }
// const variable1 = 2;
// const variable2 = 2;
// multiplicador(variable1,variable2,"2 x 2 es: ")
// TYPES 
// unknown
// type User = {name: string}
// const jsonParseUnkown = (jsonString: string): unknown => JSON.parse(jsonString)
// const myOtherAcc = jsonParseUnkown(`{"name": "Santi"}`) as User
// myOtherAcc.name;
//2/
// solo asignable a variables de tipo unknown
// let value: any
// let value1: unknown
// const value2: string = value1
// value.trim()
// enum
// enums numericos
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction.Left);
// tuplas
let response = ["Not Found", 404];
// response = [200, "found"]
let responseTuple = ["Not Found", 404];
// responseTuple = ["hola", 5, 4]
// error si queremos acceder a una propiedad inexistente
// response[5]
// responseTuple[5]
//# sourceMappingURL=index.js.map