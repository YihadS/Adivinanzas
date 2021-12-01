var mostrar = document.getElementById("mostrar");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var diez = document.getElementById("diez");
var once = document.getElementById("once");
var doce = document.getElementById("doce");
var trece = document.getElementById("trece");
var eliminar = document.getElementById("eliminar");

uno.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "D";
}

dos.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "E";
}

tres.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "A";
}

cuatro.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "N";
}

cinco.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "I";
}

seis.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "L";
}

siete.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "N";
}

ocho.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "O";
}

nueve.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "C";
}

diez.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "O";
}

once.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "R";
}

doce.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "B";
}

trece.onclick=function(e){
   mostrar.textContent = mostrar.textContent + "A";
}

eliminar.onclick=function(e){
	 mostrar.textContent = mostrar.textContent.slice(0, -1);
}

function ganaste(){
if (mostrar.innerText == 'ABANICO'){
   Swal.fire({
  position: 'center',
  icon: 'success',
  title: '¡Bien Hecho! se nota que estas atento',
  confirmButtonText: 'Siguiente adivinanza',
  confirmButtonColor: '#F3C622'

}).then((result) => {
   if (result.value) {
     window.location.href = `nivel4.html`
   }
 }); 
}

else if (mostrar.innerText != 'ABANICO'){
   Swal.fire({
  position: 'center',
  icon: 'error',
  title: '¡Lo siento, has fallado!',
  confirmButtonText: 'Volver a intentar',
  confirmButtonColor: '#F3C622'

}).then((result) => {
   if (result.value) {
     window.location.href = `index.html`
   }
 });
}
}
