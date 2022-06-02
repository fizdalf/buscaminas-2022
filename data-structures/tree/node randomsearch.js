import {Tree} from "./tree.js"
const tree = new Tree();


let count = 0
while(count <= 10 **6){
    tree.insert(Math.floor(Math.random() * 10 **10))
    count++;
}
process.stdout.write("Bienvenido al programa de rendimiento de Tree\n");
process.stdout.write("Introduce un numero: ");
process.stdin.on("data", (data) => {
    console.time("Ha tardado")
    if (tree.exists(parseInt(data, 10))){
        process.stdout.write("El numero existe!");
        process.exit();
        console.timeEnd()
    }
    process.stdout.write("El numero no existe!\n");
    console.timeEnd("Ha tardado")
    process.exit()
})