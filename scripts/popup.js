$(document).ready(function() {
var a="<div id='myModal' class='popupmodal'>";
  var b="<div class='popupmodal-content' id='myModal-content'>";
    var c="<span class='popupclose' onclick='spanclick()'>&times;</span>";
		var d="<b><p><center><h1>Infocruise2k18 Personal Assistant</h1><hr><br>Bored With Hike Natasha???   <h2>Chat with our <a href='http://infocruise.herokuapp.com/mobile' target='_blank'>InfoBot</a></h2></center></p>";
  var e="</div>"
var f="</div>"
$("body").append(a);
$("#myModal").append(b);
$("#myModal-content").append(c);
$("#myModal-content").append(d);
$("#myModal-content").append(e);
$("#myModal").append(f);
var g="<div id='messenger-img' onclick='openchat()'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/2000px-Facebook_Messenger_logo.svg.png' id='minbtnimg'></div>";
$("body").append(g);
  });

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
function spanclick() {
	var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openchat()
{
	window.open('http://infocruise.herokuapp.com/mobile','mywindow');
}


