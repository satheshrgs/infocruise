 $(document).ready(function() {
	var a="<div id='agent'>";
		var b="<div id='botheader' class='botheader' onclick='minimizechat()'>";
			var c="<div class='min-button' id='min-button' align='left'>";
				var e="<div class='disp-btn' id='disp-btn'>";
					var f="<span class='min-button' id='min-button' onclick='minimizechat()'><img src='https://cdn3.iconfinder.com/data/icons/line/36/subtract-512.png'></span>";
				var d="</div>";
			var g="</div>";
			var h="<div class='bot-title' id='bot-title'>InfoBot <span class='version_num'>v 2.3</span></div>";
		var i="</div>";
		var j="<iframe src='http://infocruise.herokuapp.com/web' scrolling='no' frameborder='0' width='365' height='450' id='ifr'></iframe>";
	var k="</div>";
	var l="<div id='messenger-img' onclick='maximizechat()'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Facebook_Messenger_logo.svg/2000px-Facebook_Messenger_logo.svg.png'></div>";
	$("body").append(a);
	$("#agent").append(b);
	$("#botheader").append(c);
	$("#min-button").append(e);
	$("#botheader").append(d);
	$("#disp-btn").append(f);
	$("#botheader").append(g);
	$("#botheader").append(h);
	$("#agent").append(i);
	$("#agent").append(j);
	$("#body").append(k);
	$("body").append(l);
	document.getElementById("agent").style.display="none";
document.getElementById("messenger-img").style.display="none";
	setTimeout( function(){ 
    maximizechat()
  }  , 7000 );
});

