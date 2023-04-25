/** 
 * @param {String} bobaPic
*/

function unhideBobabox(bobaPic) {
	document.getElementById('bobabox-overlay').classList.remove('hidden');
	document.getElementById(bobaPic).classList.remove('hidden');
}

function unhideBobabox1() {
	unhideBobabox('boba-pic1');
}
function unhideBobabox2() {
	unhideBobabox('boba-pic2');
}
function unhideBobabox3() {
	unhideBobabox('boba-pic3');
}
function unhideBobabox4() {
	unhideBobabox('boba-pic4');
}
function unhideBobabox5() {
	unhideBobabox('boba-pic5');
}
function unhideBobabox6() {
	unhideBobabox('boba-pic6');
}
document.getElementById('boba1').onclick = unhideBobabox1;
document.getElementById('boba2').onclick = unhideBobabox2;
document.getElementById('boba3').onclick = unhideBobabox3;
document.getElementById('boba4').onclick = unhideBobabox4;
document.getElementById('boba5').onclick = unhideBobabox5;
document.getElementById('boba6').onclick = unhideBobabox6;

function closeBobabox(bobaPic) {
	document.getElementById('bobabox-overlay').classList.add('hidden');
	document.getElementById(bobaPic).classList.add('hidden');

}

function closeAllBobaboxes() {
	var bobaboxElements = document.getElementsByClassName('bobabox');
	for (var i = 0; i < bobaboxElements.length; i++) {
		var id = bobaboxElements[i].id;
		closeLightbox(id);
	}
}
document.getElementById('bobabox-overlay').onclick = closeAllBobaboxes;
