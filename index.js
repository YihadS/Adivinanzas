var inicio = document.querySelector('.inicio');


function desvanecer(){
	inicio.style.animation="fadeOut 2s";
	inicio.style.opacity="0";

	setTimeout(function(){
inicio.style.display="none";
},2000);

}

function sucess(){
Swal.fire({
  position: 'center',
  icon: 'success',
  title: '¡Felicidades, has acertado!',
  confirmButtonText: 'Siguiente adivinanza',
  confirmButtonColor: '#F3C622'

}).then((result) => {
   if (result.value) {
     window.location.href = `nivel2.html`
   }
 }); 

}

function fail(){
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