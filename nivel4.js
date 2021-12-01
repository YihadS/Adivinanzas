var kill = document.getElementById('kill');
var gato = document.getElementById('cat');


kill.onclick=function(e){
	kill.style.position="absolute";
}

var checkDead = setInterval(function(){
/*var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));*/
let rect1 = kill.getBoundingClientRect();
let rect2 = gato.getBoundingClientRect();
if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y +rect1.height > rect2.y ){
gato.src="img/explosion.gif";
kill.style.display="none";

setTimeout(function(){
gato.style.display="none";
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'No te olvides que puedes interactuar con los objetos',
  confirmButtonText: 'Siguiente adivinanza',
  confirmButtonColor: '#F3C622'

}).then((result) => {
   if (result.value) {
     window.location.href = `nivel4.html`
   }
 });

},2000);

}
},1);