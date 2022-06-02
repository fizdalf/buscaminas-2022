import {Tree} from "./tree.js"
const tree = new Tree();


let count = 0
while(count < 10 **6){
    if (tree.insert(Math.floor(Math.random() * 10 **100))){
        count++;
    }
}
process.stdout.write("Bienvenido al programa de rendimiento de Tree\n");
process.stdout.write("La altura del arboles: " + tree.root.height().toString() + " nodos\n");
process.stdout.write("Introduce un numero para averiguar si existe: ");
process.stdin.on("data", (data) => {
    console.time("Ha tardado")
    if (tree.exists(parseInt(data, 10))){
        process.stdout.write("El numero existe!");
        process.exit();
        console.timeEnd("Ha tardado")
    }
    process.stdout.write("El numero no existe!\n");
    console.timeEnd("Ha tardado")
    process.exit()
})