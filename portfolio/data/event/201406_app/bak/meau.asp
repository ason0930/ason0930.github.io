<%
url = LCase(Request.ServerVariables("url"))
'response.write url

image2 = "images_02.jpg"
image3 = "images_03.jpg"
image4 = "images_04.jpg"
image5 = "images_05.jpg"
image6 = "images_06.jpg"
image7 = "images_007.jpg"

Select Case url
    case "/11sp/1111app/index.asp"
        image2 = "i2_02.jpg"
    case "/11sp/1111app/01.asp"
        image3 = "i2_03.jpg"
    case "/11sp/1111app/02.asp"        
        image4 = "i2_04.jpg"
    case "/11sp/1111app/03.asp"        
        image5 = "i2_05.jpg"
    case "/11sp/1111app/04.asp"        
        image6 = "i2_06.jpg"
    case "/11sp/1111app/05.asp"        
        image7 = "i2_07.jpg"
End Select
%>
<script language="javascript" src="share.js" type="text/javascript"></script>
<!--#include virtual="/adbanner/banner_counterU.asp"-->
<script type="text/javascript">
<!--
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->
</script><body onLoad="MM_preloadImages('images/i2_03.jpg','images/i2_04.jpg','images/i2_05.jpg','images/i2_06.jpg','images/i2_07.jpg')">

<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td width="200" align="center" valign="middle"><a href="http://www.1111.com.tw/"><img src="images/images_01.jpg" width="200" height="70" border="0"></a></td>
    <td width="112" align="center" valign="middle"><a href="index.asp" target="_parent" onMouseOver="MM_swapImage('Image2','','images/i2_02.jpg',0)" onMouseOut="MM_swapImgRestore()"><img src="images/<%=image2%>" name="Image2" width="112" height="70" border="0"></a></td>
    <td width="110" align="center" valign="middle"><a href="01.asp" target="_parent" onMouseOver="MM_swapImage('Image3','','images/i2_03.jpg',1)" onMouseOut="MM_swapImgRestore()"><img src="images/<%=image3%>" name="Image3" width="110" height="70" border="0"></a></td>
    <td width="110" align="center" valign="middle"><a href="02.asp" target="_parent" onMouseOver="MM_swapImage('Image4','','images/i2_04.jpg',1)" onMouseOut="MM_swapImgRestore()"><img src="images/<%=image4%>" name="Image4" width="110" height="70" border="0"></a></td>
    <td width="110" align="center" valign="middle"><a href="03.asp" target="_parent" onMouseOver="MM_swapImage('Image5','','images/i2_05.jpg',1)" onMouseOut="MM_swapImgRestore()"><img src="images/<%=image5%>" name="Image5" width="110" height="70" border="0"></a></td>
    <td width="110" align="center" valign="middle"><a href="04.asp" target="_parent" onMouseOver="MM_swapImage('Image6','','images/i2_06.jpg',1)" onMouseOut="MM_swapImgRestore()"><img src="images/<%=image6%>" name="Image6" width="110" height="70" border="0"></a></td>
    <td width="110" align="center" valign="middle"><a href="05.asp" target="_parent" onMouseOver="MM_swapImage('Image7','','images/i2_07.jpg',1)" onMouseOut="MM_swapImgRestore()"><img src="images/<%=image7%>" name="Image7" width="110" height="70" border="0"></a></td>
    <td width="138" align="center" valign="middle" bgcolor="#FFFFFF"><table width="110" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="29" align="center" valign="middle"><a href="javascript:" onclick="fb_click(<%=bTalentNo %>);"><img src="images/fb.gif" width="20" height="20" border="0"></a></td>
        <td width="29" align="center" valign="middle"><a href="javascript:" onclick="plurk_click(<%=bTalentNo %>);"><img src="images/pu.gif" width="20" height="20" border="0"></a></td>
        <td width="30" align="center" valign="middle"><a href="javascript:" onclick="twitter_click(<%=bTalentNo %>);"><img src="images/ter.gif" width="21" height="20" border="0"></a></td>
        <td width="32" align="center" valign="middle"><script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script><g:plusone callback="http://www.1111.com.tw/11sp/1111app" count="true" href="http://www.1111.com.tw/11sp/1111app" size="medium" annotation="none"></g:plusone></td>
      </tr>
    </table></td>
  </tr>
</table>
