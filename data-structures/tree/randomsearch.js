import {Tree} from "./tree.js"
import {Tree as TreeV1 } from './treev1.js'
const tree = new Tree();
const treev1 = new TreeV1()

let count = 0
const numbers = Array.from(Array(10**6).keys());
const randomOrderedNumbers = numbers.sort((a, b) => Math.random() >= 0.5 ? 1 : -1)
randomOrderedNumbers.forEach((number,index) => {
    treev1.insert(number);
    tree.insert(number);
});
process.stdout.write("Bienvenido al programa de rendimiento de Tree\n");
process.stdout.write("La altura de la primera version del arbol es de: " + treev1.root.height().toString() + " nodos\n");
process.stdout.write("La altura de la segunda version del arbol es de: " + tree.root.calculateHeight().toString() + " nodos\n");
process.stdout.write("Introduce un numero para averiguar si existe: ");
process.stdin.on("data", (data) => {
    console.time("el primer arbol ha tardado: ");
    if (treev1.exists(parseInt(data, 10))){
        process.stdout.write("El numero existe en el primer arbol!");
        console.timeEnd("el primer arbol ha tardado: ")
    }
    process.stdout.write("El numero no existe en el primer arbol!\n");
    console.timeEnd("el primer arbol ha tardado: ");

    console.time("el segundo arbol ha tardado: ");
    if (tree.exists(parseInt(data, 10))){
        process.stdout.write("El numero existe en el segundo arbol!");
        console.timeEnd("el segundo arbol ha tardado: ");
        process.exit();
    }
    process.stdout.write("El numero no existe en el segundo arbol!\n");
    console.timeEnd("el segundo arbol ha tardado: ");
    process.exit();
})