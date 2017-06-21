
var btnSobremi=document.getElementById('btn-sobremi');
var sobreMi=document.getElementById('sobre-ilse');

var btnSkills=document.getElementById('btn-skills');
var skills=document.getElementById('skills');


btnSobremi.addEventListener("click", showO);
btnSobremi.addEventListener("click", noneO);
 
btnSkills.addEventListener("click", showS);
btnSkills.addEventListener("click", noneS);





function showO() {
  sobreMi.style.display = "block";

}
function noneO() {
  skills.style.display="none";
}

function showS() {
  skills.style.display = "block";
 
}

function noneS() {
  sobreMi.style.display = "none";

}






   