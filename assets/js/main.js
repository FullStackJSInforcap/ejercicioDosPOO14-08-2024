import Categoria from "./categoria.js";
import Producto from "./producto.js";

const productoUno = new Producto(1, 'Leche', 2000, 50);
const productoDos = new Producto(2, 'Yoghurt', 2000, 70);
const productoTres = new Producto(3, 'Queso', 2000, 200);

const arregloProductos = [productoUno, productoDos, productoTres];

const categoriaUno = new Categoria('1', 'Lácteos', arregloProductos);
console.log(categoriaUno.totalStockPorCategoria());
