let p=1;
let q=1;
function dropdown() {
				document.getElementById("myDropdown").classList.toggle("show");
			}
function dropdown2() {
				document.getElementById("myDropdown2").classList.toggle("show");
			}
function dropdown3() {
				document.getElementById("myDropdown3").classList.toggle("show");
			}
function dropdown4() {
				document.getElementById("myDropdown4").classList.toggle("show");
			}
function dropdown5() {
				document.getElementById("myDropdown5").classList.toggle("show");
			}
function dropdown6() {
				document.getElementById("myDropdown6").classList.toggle("show");
			}
function petunjuk(){
	if(p==1){
		document.getElementById("petunjuk").style="display:none";
		document.getElementById("petunjuka").style="border-radius:10px";
		document.getElementById("petunjuka").innerHTML="Klik untuk menampilkan petunjuk";
		console.log("tes");
		p=0;
	}
	else{
		document.getElementById("petunjuk").style="display:block";
		document.getElementById("petunjuka").style="border-radius:10px 10px 0px 0px";
		document.getElementById("petunjuka").innerHTML="Klik untuk menyembunyikan petunjuk";
		console.log("notes");
		p=1;
	}
}
function petunjuk2(){
	if(q==1){
		document.getElementById("petunjuk2").style="display:none";
		document.getElementById("petunjuka2").style="border-radius:10px";
		document.getElementById("petunjuka2").innerHTML="Klik untuk menampilkan petunjuk";
		console.log("tes");
		q=0;
	}
	else{
		document.getElementById("petunjuk2").style="display:block";
		document.getElementById("petunjuka2").style="border-radius:10px 10px 0px 0px";
		document.getElementById("petunjuka2").innerHTML="Klik untuk menyembunyikan petunjuk";
		console.log("notes");
		q=1;
	}
}
