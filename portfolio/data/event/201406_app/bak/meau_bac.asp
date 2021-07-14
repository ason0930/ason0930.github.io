<%
url = LCase(Request.ServerVariables("url"))
'response.write url

image2 = "images_02.jpg"
image3 = "images_03.jpg"
image4 = "images_04.jpg"
image5 = "images_05.jpg"
image6 = "images_06.jpg"

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
End Select
%>
<script language="javascript" src="share.js" type="text/javascript"></script>
<!--#include virtual="/adbanner/banner_counterU.asp"-->
<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td width="200" align="center" valign="middle"><a href="http://www.1111.com.tw/"><img src="images/images_01.jpg" width="200" height="70" border="0"></a></td>
    <td width="114" align="center" valign="middle"><a href="index.asp" target="_parent" onmouseover="MM_swapImage('Image2','','images/i2_02.jpg',1)" onmouseout="MM_swapImgRestore()"><img src="images/<%=image2%>" name="Image2" width="114" height="70" border="0"></a></td>
    <td width="232" align="center" valign="middle"><a href="01.asp" target="_parent" onmouseover="MM_swapImage('Image3','','images/i2_03.jpg',1)" onmouseout="MM_swapImgRestore()"><img src="images/<%=image3%>" name="Image3" width="232" height="70" border="0"></a></td>
    <td width="102" align="center" valign="middle"><a href="02.asp" target="_parent" onmouseover="MM_swapImage('Image4','','images/i2_04.jpg',1)" onmouseout="MM_swapImgRestore()"><img src="images/<%=image4%>" name="Image4" width="102" height="70" border="0"></a></td>
    <td width="107" align="center" valign="middle"><a href="03.asp" target="_parent" onmouseover="MM_swapImage('Image5','','images/i2_05.jpg',1)" onmouseout="MM_swapImgRestore()"><img src="images/<%=image5%>" name="Image5" width="107" height="70" border="0"></a></td>
    <td width="107" align="center" valign="middle"><a href="04.asp" target="_parent" onmouseover="MM_swapImage('Image6','','images/i2_06.jpg',1)" onmouseout="MM_swapImgRestore()"><img src="images/<%=image6%>" name="Image6" width="107" height="70" border="0"></a></td>
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
