var isShowConsole = true;
var isCloseWindow = false;
var timeOutMinute = 3;

//Ajax
var createXMLHttpRequest = function() {
	var XHR = null;
	try {
		XHR = new XMLHttpRequest();
	} catch (e1) {
		try {
			if (!XHR) {
				XHR = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} catch (e2) {
			try {
				if (!XHR) {
					XHR = new ActiveXObject("Msxml2.XMLHTTP");
				}
			} catch (e3) {
			}
		}
	}
	if (!XHR) {
		alert("NO AJAX, Please change your browser. ");
		return;
	}
	return XHR;
}

//Full Screen function
var cancelFullScreen = function(el) {
	requestMemAction("zoomOut", "");
	if (checkIEQQ()) {
		if (window['ActiveXObject'] ? true : "ActiveXObject" in window ? true : false) {
			// IEQQ.
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	} else {
		var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;
		if (requestMethod) { // cancel full screen.
			requestMethod.call(el);
		} else if (window['ActiveXObject'] ? true : "ActiveXObject" in window ? true : false) {
			// } else if(typeof window.ActiveXObject !== "undefined"){ // Older
			// IE.
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	}
}

var requestFullScreen = function(el) {
	requestMemAction("zoomIn", "");
	if (checkIEQQ()) {
		if (window['ActiveXObject'] ? true : "ActiveXObject" in window ? true : false) {
			// IEQQ.
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	} else {
		var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
		if (requestMethod) { // Native full screen.
			requestMethod.call(el);
		} else if (window['ActiveXObject'] ? true : "ActiveXObject" in window ? true : false) {
			// } else if (typeof window.ActiveXObject !== "undefined") { //
			// Older
			// IE.
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	}
	return false;
}

var toggleFull = function() {
	var elem = document.body; // Make the body go full screen.
	var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) || (document.mozFullScreen || document.webkitIsFullScreen);
	if ((screen.availHeight <= document.documentElement.clientHeight) || (screen.height - 30 <= document.documentElement.clientHeight)) {
		isInFullScreen = true;
	}
	if (isInFullScreen) {
		document.getElementById("fullScreenId").title = "全螢幕";
		cancelFullScreen(document);
	} else {
		document.getElementById("fullScreenId").title = "縮小視窗，按ESC也可縮小視窗";
		requestFullScreen(elem);
	}
	return false;
}

//Json
var isJSON = function(str) {
	if (typeof str == 'string') {
		try {
			JSON.parse(str);
			return true;
		} catch (e) {
			console_Log(e);
			return false;
		}
	}
	console_Log('It is not a string!')
}

//IE

var isIE = function(ver) {
	var b = document.createElement('b')
	b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
	return b.getElementsByTagName('i').length === 1
}

var checkIEQQ = function() {
	var nAgt = navigator.userAgent;
	var browserName = navigator.appName;
	//console_Log("nAgt : " + nAgt + ", browserName : " + browserName);
	if (browserName.toLowerCase().indexOf("netscape") != -1 && nAgt.toLowerCase().indexOf("qqbrowser") != -1) {
		return true;
	}
	return false;
}

var DetectIsIE = function() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// 回傳版本 <=10 的版本
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// 回傳版本 >=11 的版本
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// 判斷Edge
		return "Edge";
		// return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}

//Log
var console_Log = function(msg) {
	if(isShowConsole == true){
		if (window.console) {
			console.log(msg);
		}
	}
}

//getElement
//getElementById && getElementsByName
var getEle = function(name, row){
	ele = document.getElementById(name);
	if(ele==null || (row!=undefined && row!=null && !isNaN(Number(row)))){
		if(ele!=null && document.getElementsByName(name).length==0){
			return ele;
		}
		ele = document.getElementsByName(name);
		if(row==undefined || row==null || isNaN(Number(row))){
			row = 0;
		}else{
			row = Number(row);
		}
		if(ele.length>0){
			if(row>=ele.length){
				row = ele.length-1;
			}
			if(row<0){
				row = 0;
			}
			return ele[row];
		}else{
			return null;
		}
	}else{
		if(ele==undefined || ele==null){
			return null;
		}
		return ele;
	}
	return null;
}
// getElementsByClassName
var getEleCN = function(name, row, element){
	ele = document.getElementsByClassName(name);
	if(element!=undefined && element!=null){
		try{
			ele = element.getElementsByClassName(name);
		}catch(err){
			return null;
		}
		if(ele==undefined || ele==null){
			return null;
		}
	}
	if(ele.length>0){
		if(row==undefined || row==null || isNaN(Number(row))){
			row = 0;
		}else{
			row = Number(row);
		}
		if(row>=ele.length){
			row = ele.length-1;
		}
		if(row<0){
			row = 0;
		}
		return ele[row];
	}else{
		return null;
	}
	return null;
}
// getElementsByTagName
var getEleTN = function(name, row, xmlDoc){
	ele = document.getElementsByTagName(name);
	if(xmlDoc!=undefined && xmlDoc!=null){
		try{
			ele = xmlDoc.getElementsByTagName(name);
		}catch(err){
			return null;
		}
		if(ele==undefined || ele==null){
			return null;
		}
	}
	if(ele.length>0){
		if(row==undefined || row==null || isNaN(Number(row))){
			row = 0;
		}else{
			row = Number(row);
		}
		if(row>=ele.length){
			row = ele.length-1;
		}
		if(row<0){
			row = 0;
		}
		return ele[row];
	}else{
		return null;
	}
	return null;
}

//close window
function closeSelf(){
	if(isCloseWindow == true){
		window.opener = null;
		window.close();
	}
}

function checkTimeOut(lastActionTime){
	var now = new Date();
	if(now.getTime() - lastActionTime > timeOutMinute*60*1000){
		return true;
	}
	return false;
}