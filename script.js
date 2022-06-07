
var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = 'images/favicon.png';


var notRobot="I swear I'm not a robot!", human=document.getElementById("human");
function validateNotRobot(){
  if(notRobot.value != human.value) {
    human.setCustomValidity("Texts Don't Match");
  } else {
    human.setCustomValidity('');
  }
}
notRobot.onchange = validatePassword;
human.onkeyup = validatePassword;


    function confirmBox(){
      confirm("Are you sure you want to reset?");
}