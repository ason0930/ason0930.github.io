function closeLogin() {
    document.querySelector(".bgcolor-page-login").style.display = "none";
}

function loadScript(url, callback) {
	// adding the script tag to the head as suggested before
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	if (!callback)
		callback = function() {
		}; // ★★★★★★★★★ JUST ADD THIS LINE!

	// bind the event to the callback function 
	if (script.addEventListener) {
		script.addEventListener("load", callback, false); // IE9+, Chrome, Firefox
	} else if (script.readyState) {
		script.onreadystatechange = callback; // IE8
	}
	// fire the loading
	head.appendChild(script);
}

function initOnLoad() {
	loadScript("./js/tools.js?id=" + new Date().getTime());
}

function loadPage(file) {
	XHR = createXMLHttpRequest();
	if (XHR != null && XHR != undefined) {
		XHR.open("GET", file, false);
		XHR.onreadystatechange = function() {
			if (XHR.readyState == 4) {
				if (XHR.status == 200) {
					document.getElementById("mainContain").innerHTML = 	XHR.responseText;
				}
			}
		}
		XHR.send(null);
	}
}

function loadPageByDiv(sourceDiv) {
	document.getElementById("mainContain").innerHTML = 	document.getElementById(sourceDiv).innerHTML;
}

function onClickOpenModal(content) {
	document.getElementById("myModal").innerHTML = document.getElementById(content).innerHTML;
	document.getElementById("myModal").style.display = "block";
}

function onClickOpenModalV2(content) {
	document.getElementById("myModalV2").innerHTML = document.getElementById(content).innerHTML;
	document.getElementById("myModalV2").style.display = "block";
}

function onClickCloseModal() {
    document.getElementById("myModal").style.display = "none";
}

function onClickCloseModalV2() {
    document.getElementById("myModalV2").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}*/

/*左側選單收合按鈕*/
function leftNavClose() {
    document.getElementById("leftNav").classList.toggle("left-nav-close");
    document.getElementById("navBtn").classList.toggle("left-nav-flip");
    document.getElementById("accountOnline").classList.toggle("hidden");
    document.getElementById("containerSection").classList.toggle("padding-fix-1");
    document.getElementById("breadCrumb").classList.toggle("left-fix-1");
    document.getElementById("searchArea").classList.toggle("left-fix-2");
}

/*月暦*/
function drawCal(inc, cname)
{
  month+=inc;
  if(month == 0 )
  {
    month=12;
    year--;
  }
  else if( month == 13 )
       {
         month=1;
         year++;
       }
  calendar(year, month, cname);
}
function calendar(yr, mth, cname)
{
  var td=new Date();
  var today=new Date( td.getFullYear(), td.getMonth(), td.getDate());
  var s='<table class=cal><col>';
  s+='<tr><th onclick="drawCal(-1,\''+cname+'\')"><<<th colspan=5>'
      +yr +'年'+ mth +'月<th onclick="drawCal(1,\''+cname+'\')">>>';
  mth--;
  s+='<tr><th>日<th>一<th>二<th>三<th>四<th>五<th>六';
  var dt=new Date(yr, mth, 1);
  var wd=dt.getDay(); //week day
  var i;
  s+='<tr>';
  for( ; wd > 0 ; wd--)   s+='<td>';
  for( i=1; i<32; )
  {
    dt=new Date(yr, mth, i);
    if( dt.toString() == today.toString() )
      s+='<td style="background-color: #eee;color:#ff6633; font-weight:bolder;cursor: pointer;cursor: hand;" onclick="clickCalendar(\''+cname+'\', '+yr+', '+mth+', '+i+')">'+i;
    else
      s+='<td style="cursor: pointer;cursor: hand;" onclick="clickCalendar(\''+cname+'\', '+yr+', '+mth+', '+i+')">'+i;
    dt=new Date(yr, mth, ++i);
    if( dt.getMonth() != mth ) break;
    wd=dt.getDay();
    if( wd == 0 )
      s+='<tr>';
  }
  for( ; wd < 6; wd++)  s+='<td>';
  s+='</table>';
  document.getElementById('calendar').innerHTML=s;
}
function clickCalendar(cname, yr, mth, i){
    
    
    var tmpInput = document.getElementById(cname);
    if(tmpInput==null){
        tmpInput = document.getElementsByName(cname)[0];
    }
    if(tmpInput!=null){
        mth = mth+1
        if(mth<10){
            mth = '0' + mth;
        }
        if(i<10){
            i = '0' + i;
        }
        tmpInput.value=yr+'/'+mth+'/'+i;
        tmpInput.focus();
    }
    document.getElementById('calendar').style.display="none";
}
var td=new Date();
var year=td.getFullYear();
var month=td.getMonth()+1;
function newCalendar(ele, cname){
    document.getElementById("wrapperCalendar").style.display = "block";
    document.getElementById('calendar').style.display="none";
    td=new Date();
    year=td.getFullYear();
    month=td.getMonth()+1;
    calendar(year, month, cname);
    document.getElementById('calendar').style.display="";
    var topC = document.getElementById('calendar').scrollHeight;
    var leftC = document.getElementById('calendar').scrollWidth;
    var topB = ele.getBoundingClientRect().top;
    var leftB = ele.getBoundingClientRect().left;
    if(topB>topC){
        document.getElementById('calendar').style.top = topB-topC+'px';
    }else{
        document.getElementById('calendar').style.top = '0px';
    }
    if(leftB>leftC){
        document.getElementById('calendar').style.left = leftB-leftC+'px';
    }else{
        document.getElementById('calendar').style.left = '0px';
    }
}

function closeCalendar(){
    document.getElementById('calendar').style.display ='none';
    document.getElementById('wrapperCalendar').style.display ='none';
}

/* 20180205 Ason */