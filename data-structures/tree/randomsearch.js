import {Tree} from "./tree.js"
import {Tree as TreeV1 } from './treev1.js'
const tree = new Tree();
const treev1 = new TreeV1()

let count = 0
while(count < 10 **6){
    if (tree.insert(Math.floor(Math.random() * 10 **100))){
        count++;
    }
}
count = 0
while(count < 10 **6){
    if (treev1.insert(Math.floor(Math.random() * 10 **100))){
        count++;
    }
}
process.stdout.write("Bienvenido al programa de rendimiento de Tree\n");
process.stdout.write("La altura de la primera version del arbol es de: " + treev1.root.height().toString() + " nodos\n");
process.stdout.write("Introduce un numero para averiguar si existe: ");
process.stdin.on("data", (data) => {
    console.time("Ha tardado");
    if (treev1.exists(parseInt(data, 10))){
        process.stdout.write("El numero existe en el primer arbol!");
        process.exit();
        console.timeEnd("Ha tardado")
    }
    process.stdout.write("El numero no existe en el primer arbol!\n");

    console.timeEnd("Ha tardado");
    if (tree.exists(parseInt(data, 10))){
        process.stdout.write("El numero existe en el segundo arbol!");
        process.exit();
        console.timeEnd("Ha tardado")
    }
    process.stdout.write("El numero no existe en el segundo arbol!\n");
    console.timeEnd("Ha tardado");
    process.exit()
})