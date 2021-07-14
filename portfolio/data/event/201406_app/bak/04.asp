<%
Response.Buffer = True
Response.CharSet="utf-8"
Session.CodePage = 65001
%>
<!--#include virtual="/talents/includes/defConn.asp"-->
<%
If Len(Request.Form("submitq")) > 0 Then
    kind = filterstr(Request.Form("kind"))
    name = filterstr(Request.Form("name"))
    tel = filterstr(Request.Form("tel"))
    email = filterstr(Request.Form("email"))
    note = filterstr(Request.Form("note"))
    
    If Len(name) = 0 Then
        strErr = strErr & "姓名、"
    End If
    
    If Len(tel) = 0 Then
        strErr = strErr & "電話、"
    End If   
    
    If Len(email) = 0 Then
        strErr = strErr & "信箱、"
    End If
    
    If Len(note) = 0 Then
        strErr = strErr & "描述您的問題或建議!"
    End If    
    
    If Len(strErr) > 0 Then
        strErr = "親愛的1111會員\n\n感謝您利用1111APP，為了提升1111APP的品質，希望藉由您的寶貴意見，作為本公司服務提升的參考。抱歉耽誤您少許的時間，煩請您填寫" & strErr
        Response.Write "<script language=javascript>" & _
        "alert('" & strErr & "');" & _
        "</script>"    
    Else
        Session("msg") = "Insert Into letters(sender, s_email, telephone, towhom, s_subject, s_question, circumstance, ok, ip, mno, ServerName, browser) Values(N'" & name & "', '" & email & "', '" & tel & "', 'app', '1111行動 APP 服務意見反應-請以" & replace(replace(replace(kind,1,"電話回覆"),2,"Email回覆"),3,"不需回覆") & "', N'" & note & "', '1111APP', '2', '" & Request.ServerVariables("remote_addr") & "', '" & btalentNo & "', 'Web" & Right(Request.ServerVariables("local_addr"),3) & "', '" & Left(Request.ServerVariables("HTTP_USER_AGENT"),90) & "')"
        cnnMisc.Execute("Insert Into letters(sender, s_email, telephone, towhom, s_subject, s_question, circumstance, ok, ip, mno, ServerName, browser) Values(N'" & name & "', '" & email & "', '" & tel & "', 'app', '1111行動 APP 服務意見反應-請以" & replace(replace(replace(kind,1,"電話回覆"),2,"Email回覆"),3,"不需回覆") & "', N'" & note & "', '1111APP', '2', '" & Request.ServerVariables("remote_addr") & "', '" & btalentNo & "', 'Web" & Right(Request.ServerVariables("local_addr"),3) & "', '" & LEft(Request.ServerVariables("HTTP_USER_AGENT"),90) & "')")
        cnnT1.Execute("Insert Into tResumeApp(kind,name,tel,email,note) values(" & kind & ",N'" & name & "','" & tel & "','" & email & "',N'" & note & "')")
        strMsg = "您的問題或建議已順利送至客服中心，我們將儘快處理，感謝您！"
        Response.Write "<script language=javascript>" & _
        "alert('" & strMsg & "');" & _
        "location.href='/11sp/1111app/index.asp';" & _
        "</script>"
        Response.End()
    End If
    
End If
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>意見反意-1111人力銀行app手機找工作</title>
<meta name="title" content="app手機找工作-1111人力銀行" />
<meta name="keywords" content="app工作,人力銀行,意見反意" />
<meta name="description" content="1111人力銀行手機找工作，提供1111 app完整的職務類別搜尋及自建條件模組的搜尋功能。創新個人化、多樣式的工作搜尋模式。不斷的推出即時多項資訊，熱門職缺介紹中提供多項的就職情報資訊、也提供各種相關的優惠以及活動訊息。更多APP 功能介紹相關資訊，請上1111人力銀行。" />
<meta name="company" content="1111人力銀行 | 全球華人股份有限公司 | www.1111.com.tw" />
<meta name="copyright" content="1111人力銀行 | 全球華人股份有限公司版權所有© 1111 Job Bank All Rights Reserved." />
<meta name="author" content="1111人力銀行 | 全球華人股份有限公司" />
<meta name="distribution" content="Taiwan" />
<meta name="language" content="zh-tw" />
<meta property="og:title" content="意見反意-1111人力銀行app手機找工作"/>
<meta property="og:url" content="http://www.1111.com.tw/11sp/1111app/04.asp"/>
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
//-->
</script>
<link href="css.css" rel="stylesheet" type="text/css">
</head>

<body>
<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" valign="middle" background="images/q_6.gif"><table width="1000" height="1114" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
    <td align="center" valign="middle"><!--#include virtual="/zones/toplink.asp"--></td>
  </tr>
      <tr>
        <td height="70" align="center" valign="top"><!--#include file="meau.asp"--></td>
      </tr>
      <tr>
        <td height="325" align="center" valign="top" class="qbk">
        <form name="formqa" action="" method="post" style=" margin:0px">
        <input type="hidden" name="submitq" value="送出">
        <table width="1000" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td height="266" colspan="8">&nbsp;</td>
            </tr>
            <tr>
              <td height="49" colspan="8"><table width="1000" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="47">&nbsp;</td>
                    <td width="115" class="w"><strong>◎意見處理方式：</strong></td>
                    <td width="35" align="center" valign="middle"><input type="radio" name="kind" id="radio" value="1"></td>
                    <td width="70" class="w">電話回覆</td>
                    <td width="35" align="center" valign="middle"><input type="radio" name="kind" id="radio2" value="2" checked></td>
                    <td width="70" align="left" valign="middle" class="w">Email回覆</td>
                    <td width="35" align="center" valign="middle"><input type="radio" name="kind" id="radio3" value="3"></td>
                    <td width="593" align="left" valign="middle" class="w">不需回覆</td>
                  </tr>
                </table>
                  <label></label></td>
            </tr>
            <tr>
              <td height="51" colspan="8" align="center" valign="middle"><img src="images/q_2.jpg" width="913" height="36"></td>
            </tr>
            <tr>
              <td width="27" height="44">&nbsp;</td>
              <td colspan="7" align="right" valign="middle" class="style1"><table width="973" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="100" height="58" align="right" valign="middle">姓名：</td>
                    <td width="873" align="left" valign="middle"><label>
                      <input name="name" type="text" class="w" id="name" value="<%=name %>" size="40" maxlength="20">
                    </label></td>
                  </tr>
                </table>
                  <label></label></td>
            </tr>
            <tr>
              <td height="44">&nbsp;</td>
              <td colspan="7" align="right" valign="middle" class="style1"><table width="973" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="100" height="58" align="right" valign="middle">電話：</td>
                    <td width="873" align="left" valign="middle"><label>
                      <input name="tel" type="text" class="w" id="tel" value="<%=tel %>" size="40" maxlength="20">
                    </label></td>
                  </tr>
              </table></td>
            </tr>
            <tr>
              <td height="44">&nbsp;</td>
              <td colspan="7" align="right" valign="middle" class="style1"><table width="973" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="100" height="58" align="right" valign="middle">信箱：</td>
                    <td width="873" align="left" valign="middle"><label>
                      <input name="email" type="text" class="w" id="email" value="<%=email %>" size="40" maxlength="60">
                    </label></td>
                  </tr>
              </table></td>
            </tr>
            <tr>
              <td height="44">&nbsp;</td>
              <td colspan="7" align="center" valign="middle" class="style1"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="6%" height="58">&nbsp;</td>
                    <td width="94%" align="left" valign="middle">請描述您的問題或建議：</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td align="left" valign="middle"><label>
                      <textarea name="note" cols="100" rows="10" class="w" id="note"><%=note %></textarea>
                    </label></td>
                  </tr>
              </table></td>
            </tr>
            <tr>
              <td height="79">&nbsp;</td>
              <td colspan="7" align="center" valign="middle" class="style1"><input type="image" src="images/q_icon.gif" width="138" height="34" /></td>
            </tr>
        </table> </form>
        </td>
      </tr>
      <tr>
        <td height="183" align="center" valign="middle"><table width="913" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td height="150" align="center" valign="top" background="images/q_3.gif"><table width="860" height="149" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td height="100" align="left" valign="middle" class="w">1111人力銀行 提醒您！部份免費的電子郵件系統並不接受1111所發送之郵件或會自動列入廣告收件匣，若您的意見反應急需回覆，請留下詳細聯絡資訊或請於上班時間來電與我們連絡，我們將直接為您服務。<br>
                      服務專線：02-87871111 轉分機8 (週一至週五 AM8:30 ~ PM6:00)</td>
                  </tr>
                  <tr>
                    <td align="right" valign="middle" class="w">1111人力銀行求職會員服務中心　敬上</td>
                  </tr>
              </table></td>
            </tr>
        </table></td>
      </tr>
      <tr>
        <td height="51" align="center" valign="middle"><!--#include virtual = "/includesU/header/footer.asp"--></td>
      </tr>
    </table></td>
  </tr>
</table>
<map name="Map"><area shape="rect" coords="322,303,461,337" href="#"><area shape="rect" coords="505,303,643,337" href="#"></map></body>
</html>
