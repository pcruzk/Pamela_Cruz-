let personaJSON = `{
  "nombre": "Juan",
  "edad": 21
}`;

let obj = JSON.parse(personaJSON);
obj.edad = 30;

console.log(JSON.stringify(obj));