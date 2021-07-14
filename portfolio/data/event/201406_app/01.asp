<%
Response.Buffer = True
Response.Charset="utf-8"
Session.CodePage = 65001
%>
<!--#include virtual="/includesU/function.asp"-->
<!--#include virtual="/includesU/contact.asp"-->
<%
SEOTitle = "1111人力銀行-2014轉app手機找工作- APP介紹"
SEOKeywords = "app,找工作,人力銀行,APP介紹"
SEODescription = "1111人力銀行提供更便利、更人性化的全新功能APP找工作介面！讓您即時掌握工作資訊，面試應徵不漏接、隨時隨地輕鬆編輯您的履歷，首創可同時開啟多種類別履歷，針對不同產業提供獨特履歷，可同時新增6份不相同履歷，方便個別投遞。不論是否為會員皆可使用「1111工作特搜」快立即下載體驗吧！更多APP 功能介紹相關資訊，請上1111人力銀行。"
SEOUrl = "http://www.1111.com.tw/11sp/1111app/index.asp"
SEOImg = "http://www.1111.com.tw/11sp/1111app/1111APP_130X130.jpg"

Response.Cookies("agent") = "14sp_1111app"

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title><%=SEOTitle%></title>
    <meta name="title" content="<%=SEOTitle%>" />
    <meta name="keywords" content="<%=SEOKeywords %>" />
    <meta name="description" content="<%=SEODescription %>" />
    <meta property="og:title" content="<%=SEOTitle%>" />
    <meta property="og:description" content="<%=SEODescription %>" />
    <meta property="og:image" content="<%=SEOImg %>" />
    <meta property="og:url" content="<%=SEOUrl%>" />
    <link rel="canonical" href="<%=SEOUrl%>" />
    <link rel="image_src" href="<%=SEOImg %>" />
    <link rel="shortcut icon" href="/images/1111.ico" />
    <link rel="Bookmark" href="/images/1111.ico" />
    <link href="/css102/reset.css" rel="stylesheet" type="text/css" />
<link href="/css102/footer.css" rel="stylesheet" type="text/css" />
<link href="css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/nav.js"></script>
<script type="text/javascript" src="share.js"></script>
</head>
<body>
<!--#include virtual="/adbanner/banner_counterU.asp"-->
<div class="header-bar-bg"><!--#include virtual="/includesU/toplink/toplinkNew.asp"--></div>
<div id="wrap">
  <div id="header">
    <div id="nav">
    <div id="cw">
      <table width="110" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="29" align="center" valign="middle"><a href="javascript:" onClick="fb_click(<%=bTalentNo %>);"><img src="images/fb.gif" width="20" height="20" border="0"></a></td>
        <td width="29" align="center" valign="middle"><a href="javascript:" onClick="plurk_click(<%=bTalentNo %>);"><img src="images/pu.gif" width="20" height="20" border="0"></a></td>
        <td width="30" align="center" valign="middle"><a href="javascript:" onClick="twitter_click(<%=bTalentNo %>);"><img src="images/ter.gif" width="21" height="20" border="0"></a></td>
        <td width="32" align="center" valign="middle"><script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script><g:plusone callback="http://www.1111.com.tw/11sp/1111app" count="true" href="http://www.1111.com.tw/11sp/1111app" size="medium" annotation="none"></g:plusone></td>
      </tr>
    </table>
      </div>
      <table width="984" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td><img src="images/nav-1.png" width="1" height="71" /></td>
          <td><a href="index.asp" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('nav-01','','images/nav-on-01.png',1)"><img src="images/nav-off-01.png" width="148" height="71" id="nav-01" /></a></td>
          <td><img src="images/nav-2.png" width="2" height="71" /></td>
          <td><a href="01.asp" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('nav-02','','images/nav-on-02.png',1)"><img src="images/nav-off-02.png" width="148" height="71" id="nav-02" /></a></td>
          <td><img src="images/nav-2.png" width="2" height="71" /></td>
          <td><a href="02.asp" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('nav-03','','images/nav-on-03.png',1)"><img src="images/nav-off-03.png" width="148" height="71" id="nav-03" /></a></td>
          <td><img src="images/nav-2.png" width="2" height="71" /></td>
          <td><img src="images/nav-3.png" width="533" height="71" /></td>
        </tr>
      </table>
    </div>
  </div>
  <div id="mainContent">
    <div class="mv-app"><img src="images/mv-app.png" width="984" height="384" usemap="#Map" border="0" />
      <map name="Map" id="Map">
        <area shape="rect" coords="81,308,176,347" href="https://play.google.com/store/apps/details?id=holdingtop.app1111&amp;feature=search_result#?t=W251bGwsMSwxLDEsImhvbGRpbmd0b3AuYXBwMTExMSJd" target="_blank" />
        <area shape="rect" coords="202,307,298,346" href="https://itunes.apple.com/us/app/1111gong-zuo-te-sou/id805959101?ls=1&mt=8" target="_blank" />
      </map>
    </div>
    <div><img src="images/app-01.png" width="984" height="461" /></div>
    <div><img src="images/app-02.png" width="984" height="461" /></div>
    <div><img src="images/app-03.png" width="984" height="461" /></div>
    <div><img src="images/app-04.png" width="984" height="462" /></div>
    <div><img src="images/app-05.png" width="984" height="461" /></div>
    <div><img src="images/app-06.png" width="984" height="492" /></div>
  </div>
</div>
<!--#include virtual="/footer_102.asp"-->
</body>
</html>