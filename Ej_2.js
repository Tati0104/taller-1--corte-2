function obtenerFechaActual (){
const fechactual = new Date();
const dia = String(fechactual.getDate()).padStart(2,'0');
const mes = String(fechactual.getMonth() + 1).padStart(2, '0');
const año = fechactual.getFullYear()  
return `${dia}/${mes}/${año}`
}
console.log (obtenerFechaActual());