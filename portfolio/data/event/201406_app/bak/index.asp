<%
Response.Buffer = True
Response.Charset="utf-8"
Session.CodePage = 65001
%>
<!--#include virtual="/talents/includes/defConn.asp"-->
<%
Call GetXMLArray("sp11_1111app_topBanner","property","item")
If IsArray(arrXML) Then
   	For i = 0 To UBound(arrXML)
        strLink	= Replace(arrXML(i)(0),"＆","&")
  		strTarget	= arrXML(i)(1)
  		strMsg	    = arrXML(i)(2)
  		strFlash	= arrXML(i)(3)
  		strImg	    = arrXML(i)(4)
  		strImgW	    = arrXML(i)(5)
  		strImgH	    = arrXML(i)(6)   	
	    If strFlash = "True" Then
            'strBanner = strBanner & "" & _
	        '"<script type=""text/javascript"">AC_FL_RunContent( 'codebase','http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0','width','" & strImgW & "','height','" & strImgH & "','src','" & Left(strImg,InStr(strImg,".")-1) & "?goURL=" & strLink & "','quality','high','Wmode','Opaque','Wmode','transparent','pluginspage','http://www.macromedia.com/go/getflashplayer','movie','" & Left(strImg,InStr(strImg,".")-1) & "?goURL=" & strLink & "' );</script>" & _
            '"<noscript><object classid=""clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"" codebase=""http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"" width=""" & strImgW & """ height=""" & strImgH & """>" & _
            '"<param name=""movie"" value=""" & strImg & "?goURL=" & strLink & """>" & _
            '"<param name=""quality"" value=""high"">" & _
            '"<param name=""Wmode"" value=""Opaque"">" & _
            '"<param name=""wmode"" value=""transparent"">" & _
            '"<embed src=""" & strImg & "?goURL=" & strLink & """ quality=high pluginspage=""http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"" type=""application/x-shockwave-flash"" width=""" & strImgW & """ height=""" & strImgH & """></embed>" & _
            '"</object></noscript>"
        Else
            'response.Write strLink
            strBanner = strBanner & "<div style=""background-image: url(" & strImg & ")"" class=""page single p1""></div>"
	    End If
	Next
  	Erase arrXML
End If

%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>app手機找工作-1111人力銀行</title>
<meta name="title" content="app手機找工作-1111人力銀行" />
<meta name="keywords" content="app,手機找工作,人力銀行" />
<meta name="description" content="1111人力銀行手機找工作，提供1111 app完整的職務類別搜尋及自建條件模組的搜尋功能。創新個人化、多樣式的工作搜尋模式。不斷的推出即時多項資訊，熱門職缺介紹中提供多項的就職情報資訊、也提供各種相關的優惠以及活動訊息。更多1111 app相關資訊，請上1111人力銀行。" />
<meta name="company" content="1111人力銀行 | 全球華人股份有限公司 | www.1111.com.tw" />
<meta name="copyright" content="1111人力銀行 | 全球華人股份有限公司版權所有© 1111 Job Bank All Rights Reserved." />
<meta name="author" content="1111人力銀行 | 全球華人股份有限公司" />
<meta name="distribution" content="Taiwan" />
<meta name="language" content="zh-tw" />
<meta property="og:title" content="app手機找工作-1111人力銀行"/>
<meta property="og:url" content="http://www.1111.com.tw/11sp/1111app/index.asp"/>
<meta property="og:image" content="http://www.1111.com.tw/11SP/1111app/images/b01.jpg"/>
<meta property="og:description" content="1111人力銀行手機找工作，提供1111 app完整的職務類別搜尋及自建條件模組的搜尋功能。創新個人化、多樣式的工作搜尋模式。不斷的推出即時多項資訊，熱門職缺介紹中提供多項的就職情報資訊、也提供各種相關的優惠以及活動訊息。更多1111 app相關資訊，請上1111人力銀行。"/>
<link rev="made" href="mailto:support@staff.1111.com.tw" />
<link rel="image_src" href="http://www.1111.com.tw/11SP/1111app/images/b01.jpg" />
<link rel="stylesheet" type="text/css" href="/css101/reset.css" />
<style type="text/css">
<!--
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	background-image: url(images/bk.jpg);
	background-repeat: repeat-x;
}
-->
</style>
<script type="text/javascript">
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
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
function MM_popupMsg(msg) { //v1.0
  alert(msg);
}
//-->
</script>
<link href="css.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="iphone/main.css" media="screen" />
<style type="text/css">
<!--
.style2 {color: #FF6600}
.style3 {color: #FF6600; font-size: 13px; }
-->
</style>
</head>

<body>
<!--#include virtual="/includesU/toplink/toplink.asp"-->
<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td colspan="2" align="center" valign="middle"><!--#include file="meau.asp"--></td>
  </tr>
  <tr>
   <td colspan="2" align="center" valign="middle"><!--<div style="position:relative;">
   <div id="apDiv2">
  <table width="105" height="22" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
      <td width="35" align="center" valign="middle"><img id="adpo1" src="images/point.gif" width="12" height="12" border="0"></td>
      <td width="35" align="center" valign="middle"><img id="adpo2" src="images/point.gif" width="12" height="12" border="0"></td>
      <td width="35" align="center" valign="middle"><img id="adpo3" src="images/point.gif" width="12" height="12" border="0"></td>
    </tr>
  </table>
</div>
   </div>-->
   
    <div id="container">
        <div id="album" class="album">
            <div class="paging">
<!--                <div style="background-image: url(images/top1.jpg)"
                    class="page single p1">
                </div>
                <div style="background-image: url(images/top2.jpg)"
                    class="page single p1">
                </div>
                <div style="background-image: url(images/top3.jpg)"
                    class="page single p1">
                </div>-->
                <%=strBanner %>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="iphone/shCore.js"></script>
    <script type="text/javascript" src="iphone/jquery.min.js"></script>
    <script type="text/javascript" src="iphone/jquery.easing.1.3.min.js"></script>
    <script type="text/javascript" src="iphone/jquery.iphone-slide.js"></script>
    <script type="text/javascript">
        //<![CDDA[
        $(document).ready(function() {
            $('#album').iphoneSlide({
                handler: ".paging",
                pageHandler: ".page",
                autoPlay: true,
                onShiftComplete: function(elem, page) {
                }
            });
        });
        //]]>
    </script>
    <input type="hidden" name="iphoneval" id="iphoneval" value="1" />
   </td>
  </tr>
  <tr>
    <td colspan="2" align="center" valign="middle"><table width="1000" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="13">&nbsp;</td>
        <td width="977" height="36" align="left" valign="middle" background="images/images_08.jpg"><table width="977" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="653" align="right" valign="middle" class="style3">&nbsp;</td>
            <td width="53" align="center" valign="middle" class="style3"><img src="images/news.gif" width="41" height="18"></td>
            <td width="78" align="right" valign="middle" class="w"><a href="http://bbs.1111.com.tw/forum.php?mod=viewthread&tid=166567&page=1&extra=#pid192353" target="_blank" class="e">優等服務機構</a></td>
            <td width="13" align="center" valign="middle" class="w">│</td>
            <td width="180" align="left" valign="middle" class="w"><a href="http://bbs.1111.com.tw/forum.php?mod=viewthread&tid=487868&extra=page=1" target="_blank">1111工作特搜，全新進化升級</a></td>
          </tr>
        </table></td>
        <td width="10">&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td width="500" height="450" align="center" valign="top"><table width="485" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td><table width="485" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="485" align="center" valign="middle"><img src="images/index_11.jpg" width="485" height="8"></td>
          </tr>
          <tr>
            <td align="center" valign="middle" background="images/index_13.jpg"><table width="485" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td width="16">&nbsp;</td>
                <td width="456" align="left"><h1 style="font-size:18px; line-height:0px; font-weight:bold;">1111工作特搜 APP - 找工作</h1></td>
                <td width="13">&nbsp;</td>
              </tr>
            </table></td>
          </tr>
          <tr>
            <td align="center" valign="middle"><img src="images/index_14.jpg" width="485" height="11"></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td align="center" valign="middle"><img src="images/index_11.jpg" width="485" height="8"></td>
      </tr>
      <tr>
        <td align="center" valign="middle" background="images/index_13.jpg"><table width="485" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="16">&nbsp;</td>
            <td width="298" align="left" valign="middle"><table width="298" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="58" height="58"><img src="images/1_13_a.jpg" width="58" height="58" alt="Iphone APP" title="Iphone APP"></td>
                <td align="left" valign="middle"><h3 style="font-weight:bold;">Iphone APP</h3></td>
              </tr>
            </table></td>
            <td width="158" rowspan="2" align="center" valign="middle"><img src="images/app_ap.jpg" width="100" height="100"></td>
            <td width="13">&nbsp;</td>
          </tr>
          <tr>
            <td height="66">&nbsp;</td>
            <td height="95" align="left" valign="middle" class="w"><p>有貼心的工作介面及<span class="w style2">「地圖找工作」</span>，即時資訊不漏接，隨意隨地輕鬆快速找到最新工作，讓您一機在手掌握所有求職大小事！</p></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td align="left" valign="middle"><table width="289" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="73" height="48" align="left" valign="middle" class="w"><a href="01.asp" target="_parent">了解更多</a></td>
                <td width="216" align="left" valign="middle"><a href="01.asp"><img src="images/s.gif" width="22" height="22" border="0"></a></td>
              </tr>
            </table></td>
            <td align="center" valign="middle"><a href="http://itunes.apple.com/tw/app/goodjobssearcher/id479492303?mt=8" target="_blank"><img src="images/icon.gif" width="138" height="34" border="0"></a></td>
            <td>&nbsp;</td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td align="center" valign="middle"><img src="images/index_14.jpg" width="485" height="11"></td>
      </tr>
      <tr>
        <td height="10">&nbsp;</td>
      </tr>
      <tr>
        <td><table width="485" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="485" align="center" valign="middle"><img src="images/index_11.jpg" width="485" height="8"></td>
          </tr>
          <tr>
            <td align="center" valign="middle" background="images/index_13.jpg"><table width="485" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="16">&nbsp;</td>
                <td width="298" align="left" valign="middle"><table width="298" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="58" height="58"><img src="images/1_16_a.jpg" width="58" height="58" alt="Android APP" title="Android APP"></td>
                    <td align="left" valign="middle"><h3 style="font-weight:bold;">Android APP</h3></td>
                  </tr>
                </table></td>
                <td width="158" rowspan="2" align="center" valign="middle"><img src="images/app_an.jpg" width="100" height="100"></td>
                <td width="13">&nbsp;</td>
              </tr>
              <tr>
                <td height="66">&nbsp;</td>
                <td height="100" align="left" valign="middle" class="w">任何時候用<span class="w style2">「地圖找工作」</span>，隨時隨地立即搜尋好職缺！查工作後可馬上為立即幫您定位規劃路線，也可切換秀出搜尋後工作列表。讓您用手機也可以輕鬆快速找到最新工作。 </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td align="left" valign="middle"><table width="289" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="73" height="48" align="left" valign="middle" class="w"><a href="01.asp" target="_parent">了解更多</a></td>
                    <td width="216" align="left" valign="middle"><a href="01.asp"><img src="images/s.gif" width="22" height="22" border="0"></a></td>
                  </tr>
                </table></td>
                <td align="center" valign="middle"><a href="http://www.1111.com.tw/count/ad/adredir.asp?aid=1111jobandroid&adno=20006" target="_blank"><img src="images/icon.gif" width="138" height="34" border="0"></a></td>
                <td>&nbsp;</td>
              </tr>
            </table></td>
          </tr>
          <tr>
            <td align="center" valign="middle"><img src="images/index_14.jpg" width="485" height="11"></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
    </table>
    </td>
    <td width="500" align="center" valign="top"><table width="485" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td><table width="485" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="485" align="center" valign="middle"><img src="images/index_11.jpg" width="485" height="8"></td>
          </tr>
          <tr>
            <td align="center" valign="middle" background="images/index_13.jpg"><table width="485" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td width="16">&nbsp;</td>
                <td width="456" align="left"><h2 style="font-size:18px; line-height:0px; font-weight:bold;">1111HR APP - 找人才</h2></td>
                <td width="13">&nbsp;</td>
              </tr>
            </table></td>
          </tr>
          <tr>
            <td align="center" valign="middle"><img src="images/index_14.jpg" width="485" height="11"></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
      
     
      <tr>
        <td><table width="485" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td width="485" align="center" valign="middle"><img src="images/index_11.jpg" width="485" height="8"></td>
          </tr>
          <tr>
            <td align="center" valign="middle" background="images/index_13.jpg"><table width="485" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="16">&nbsp;</td>
                <td width="298" align="left" valign="middle"><table width="298" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="58" height="58"><img src="images/1_16_a.jpg" width="58" height="58" alt="Android APP" title="Android APP"></td>
                    <td align="left" valign="middle"><h3 style="font-weight:bold;">Android APP</h3></td>
                  </tr>
                </table></td>
                <td width="158" rowspan="2" align="center" valign="top"><table width="158" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td height="7" align="center" valign="middle"></td>
                  </tr>
                  <tr>
                      <td height="140" align="center" valign="middle"><img src="images/100x100_hrapp.jpg" width="100" height="100"></td>
                    </tr>
                    <tr>
                      <td height="60" align="center" valign="middle"><a href="https://play.google.com/store/apps/details?id=holdingtop.app1111hr" target="_blank"><img src="images/icon.gif" width="138" height="34" border="0"></a></td>
                    </tr>
                </table></td>
                <td width="13">&nbsp;</td>
              </tr>
              <tr>
                <td height="66">&nbsp;</td>
                <td align="left" valign="top" class="w"><table width="298" border="0" cellpadding="0" cellspacing="0" class="w">
                  <tr>
                    <td height="10" colspan="2" valign="middle"><p><strong class="w">1111HR專為徵才廠商設計<br>
                      可在行動裝置上及時處理求才的項目</strong><strong><br>
                      <br>
                        1111HR</strong><strong>主要功能<br>
                        </strong></p></td>
                  </tr>
                    <tr>
                      <td width="79" valign="top">1.主動應徵：</td>
                      <td width="219">可收到求職者的主動投遞應徵信<br>
，立刻回應是否邀請面試</td>
                    </tr>
                    <tr>
                      <td valign="top">2.加入最愛：</td>
                      <td valign="top">自定資料夾將不同人才儲存在不<br>
                        同的分類</td>
                    </tr>
                    <tr>
                      <td>3.人才搜尋：</td>
                      <td>線上自訂條件搜尋需要的人才</td>
                    </tr>
                    <tr>
                      <td>4.人才配對：</td>
                      <td>同步收到系統配對的建議人才</td>
                    </tr>
                    <tr>
                      <td height="10"></td>
                      <td></td>
                    </tr>
              </table></td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td align="left" valign="middle" class="w"><table width="298" border="0" cellpadding="0" cellspacing="0" class="w">
                  <tr>
                    <td height="30"><strong>i 智慧行動模式 QRcode安裝使用說明 </strong></td>
                  </tr>
                  <tr>
                    <td><strong>STEP 1  </strong></td>
                  </tr>
                  <tr>
                    <td>您必須先下載安裝QRcode掃瞄APP 手機軟體後 </td>
                  </tr>
                  <tr>
                    <td><strong>STEP 2 </strong></td>
                  </tr>
                  <tr>
                    <td>可在使用手機掃瞄QRcode圖型碼</td>
                  </tr>
                  <tr>
                    <td><strong>STEP 3</strong>  </td>
                  </tr>
                  <tr>
                    <td>即可立即進往下載安裝1111HR享用本公司求才服務</td>
                  </tr>
                </table></td>
                <td align="left" valign="top"><strong class="w"><br>
                </strong></td>
                <td>&nbsp;</td>
              </tr>
            </table></td>
          </tr>
          <tr>
            <td align="center" valign="middle"><img src="images/index_14.jpg" width="485" height="11"></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
      </tr>
    </table></td>
  </tr>
  
  <tr>
    <td height="50" colspan="2" align="center" valign="middle"><!--#include virtual = "/includesU/header/footer.asp"--> </td>
  </tr>
</table>
  

</body>
</html>
