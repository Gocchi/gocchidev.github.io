
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

consoleText(['Front-End Developer Jr', 'Diseñadora Web','Geek'], 'text',['#ED9390']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}







   