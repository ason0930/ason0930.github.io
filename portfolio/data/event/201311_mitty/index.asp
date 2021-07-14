<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%
if len(request("login")) > 0 then
    response.Write "<script>top.window.location.href='index.asp?qq=kk';</script>"
    response.End()
end if
%>
<head>
<title>【白日夢冒險王】邁向轉職關鍵力-1111人力銀行</title>
<meta name="keywords" content="白日夢冒險王,轉職,職場關鍵力,職涯,夢想,冒險,勇敢,電影,贈票,免費" />
<meta name="description" content="【白日夢冒險王】邁向轉職關鍵力，有夢最大、力搏冒險職涯之旅。職涯中，你曾經做過值得一提的事情嗎？假如有機會轉職，展開你的第二人生，你會採取什麼樣的方式呢？《白日夢冒險王》預告搶先看，發掘你心中渴望的職涯旅程並回答問題，免費送您看「白日夢冒險王」電影，讓我們一起進入單身草食男追逐夢想的異想世界!" />
<meta property="og:title" content="【白日夢冒險王】邁向轉職關鍵力-1111人力銀行"/>
<meta property="og:description" content="【白日夢冒險王】邁向轉職關鍵力，有夢最大、力搏冒險職涯之旅。職涯中，你曾經做過值得一提的事情嗎？假如有機會轉職，展開你的第二人生，你會採取什麼樣的方式呢？《白日夢冒險王》預告搶先看，發掘你心中渴望的職涯旅程並回答問題，免費送您看「白日夢冒險王」電影，讓我們一起進入單身草食男追逐夢想的異想世界!" />
<meta property="og:url" content="http://www.1111.com.tw/13SP/mitty/index.asp"/>
<meta property="og:image" content="http://www.1111.com.tw/13sp/mitty/images/200x200.jpg"/>
<link rel="image_src" href="http://www.1111.com.tw/13sp/mitty/images/200x200.jpg" />
<link href="css/mitty.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/mitty.js"></script>
<script language="javascript" type="text/javascript" src="/includesU/jquery-1.7.1.min.js"></script>
<!-- 燈箱Start -->
<script type="text/javascript" src="/includesU/fancyBox.2.1.5/source/jquery.fancybox.js"></script>
<link rel="stylesheet" type="text/css" href="/includesU/fancyBox.2.1.5/source/jquery.fancybox.css" media="screen" />
<script type="text/javascript">
        $(document).ready(function () {
            $("#login").fancybox({
                fitToView: false,
                preload: true,
                width: 500,
                onUpdate: function () {
                    //$(".fancybox-wrap").css({ 'width': $('.fancybox-iframe').contents().find('body').outerWidth(true) });
                    //$(".fancybox-inner").css({ 'width': $('.fancybox-iframe').contents().find('body').outerWidth(true) });
                    $.fancybox.reposition();
                },
                afterClose: function () { location.href = location.href; },
                padding: 0,
                margin: 0,
                scrolling: 'no'
            });
        });
    </script>
<!-- 燈箱End -->
<link rel="stylesheet" type="text/css" href="/includesU/fancyBox.2.1.5/source/jquery.fancybox.css" media="screen" />
</head>
<body>
<!--#include file="agentCheck.asp"-->
<!--#include virtual="/adbanner/banner_counterU.asp"-->
<!--#include virtual="/talents/includes/defConn.asp"-->
<div style="height:28px">
  <!--#include virtual="/includesU/toplink/toplink.asp"-->
</div>
<div id="mitty-wrap">
  <div id="header">
    <div class="header-mv"></div>
    <div class="header-title-1"></div>
  </div>
  <div id="mainContent">
    <div class="video-1">
      <iframe width="340" height="206" src="//www.youtube.com/embed/b2I5Girj9cQ" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="title-1"></div>
    <div class="txt-1">1111人力銀行會員現在只要於活動頁面下方，回答「<span>看完《白日夢冒險王》預告後，即日起歡迎與我們分享：假如你有機會轉職，你會想做哪類型的工作呢？讓我們一同挺進新人生！並註明想觀看的場次</span>」<br />
      EX：我的轉職新機會，我想從事NGO（非營利組織)工作者!我要看台北特映會。<br />
      就有機會抽中【白日夢冒險王】免費雙人電影票。</div>
    <div class="title-2"></div>
    <div class="txt-1">即日起~2013/12/12 12:00分為止（以留言時間為準）。</div>
    <div class="title-3"></div>
    <div class="txt-1"> 2013/12/12日（台北特映會50名）<br />
      2013/12/12日（台中特映會50名）<br />
      2013/12/12日（高雄特映會50名）<br />
      得獎名單將於抽獎當天15 : 00公佈於活動專頁。 </div>
    <div class="title-4"></div>
    <div class="txt-1">【白日夢冒險王】特映會票券兩張【北中南共150名】。</div>
    <div class="title-5"></div>
    <div class="txt-2"> 台北特映會：台北天母華威影城   12/18（三）20:00。（地址：台北市天母忠誠路2段202號4樓）<br />
      台中特映會：台中老虎城威秀影城 12/18（三）19:00。（地址：台中市河南路3段120-1號）<br />
      高雄特映會：高雄大遠百威秀影城 12/18（三）19:00。（地址：高雄市三多四路21號13樓） </div>
    <div class="note-title-1"><strong>★</strong>注意事項：</div>
    <div class="txt-3">1. 本電影兌換券需親自1111領取 <br />
      a. 領獎地點：<br />
      （台北場）請於台北市南京東路五段89號3樓櫃檯領取，需於12/18(三)18:00前領取。 <br />
      （台中場）請於台中市大雅路237號5樓櫃檯領取，需於12/18(三)18:00前領取。 <br />
      （高雄場）請於高雄市前金區中山二路505號6樓櫃檯領取，需於12/18(三)18:00前領取。<br />
      b. 領獎時需出示相關證明，避免盜領或誤領。 <br />
      2. 本活動僅限1111人力銀行會員及Facebook本人帳號參加，若經查證帳號供第三人使用者，或資料與本人不符者，則視同自動放棄得獎與領獎之權利。<br />
      3. 電影票券為指定場次，免費票券請於當日使用，逾期無效。<br />
      4. 本辦法若有不周之處，1111人力銀行保留一切活動辦法變更之權利，且不再另行通知。 </div>
    <div class="list-area-1">
      <div class="list-title-1">台北場</div>
      <div class="list-fb-1">
        <table width="900" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td><img src="images/list/n/29.png" width="300" height="65" /></td>
            <td><img src="images/list/n/02.png" width="300" height="65" /></td>
            <td><img src="images/list/n/03.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/04.png" width="300" height="65" /></td>
            <td><img src="images/list/n/05.png" width="300" height="65" /></td>
            <td><img src="images/list/n/06.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/07.png" width="300" height="65" /></td>
            <td><img src="images/list/n/08.png" width="300" height="65" /></td>
            <td><img src="images/list/n/09.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/10.png" width="300" height="65" /></td>
            <td><img src="images/list/n/11.png" width="300" height="65" /></td>
            <td><img src="images/list/n/12.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/13.png" width="300" height="65" /></td>
            <td><img src="images/list/n/14.png" width="300" height="65" /></td>
            <td><img src="images/list/n/15.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/16.png" width="300" height="65" /></td>
            <td><img src="images/list/n/17.png" width="300" height="65" /></td>
            <td><img src="images/list/n/18.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/19.png" width="300" height="65" /></td>
            <td><img src="images/list/n/20.png" width="300" height="65" /></td>
            <td><img src="images/list/n/21.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/22.png" width="300" height="65" /></td>
            <td><img src="images/list/n/23.png" width="300" height="65" /></td>
            <td><img src="images/list/n/24.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/25.png" width="300" height="65" /></td>
            <td><img src="images/list/n/26.png" width="300" height="65" /></td>
            <td><img src="images/list/n/27.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/28.png" width="300" height="65" /></td>
            <td><img src="images/list/n/01.png" width="300" height="65" /></td>
            <td><img src="images/list/n/30.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/31.png" width="300" height="65" /></td>
            <td><img src="images/list/n/32.png" width="300" height="65" /></td>
            <td><img src="images/list/n/33.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/34.png" width="300" height="65" /></td>
            <td><img src="images/list/n/35.png" width="300" height="65" /></td>
            <td><img src="images/list/n/36.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/37.png" width="300" height="65" /></td>
            <td><img src="images/list/n/38.png" width="300" height="65" /></td>
            <td><img src="images/list/n/39.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/40.png" width="300" height="65" /></td>
            <td><img src="images/list/n/41.png" width="300" height="65" /></td>
            <td><img src="images/list/n/42.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/43.png" width="300" height="65" /></td>
            <td><img src="images/list/n/44.png" width="300" height="65" /></td>
            <td><img src="images/list/n/45.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/46.png" width="300" height="65" /></td>
            <td><img src="images/list/n/47.png" width="300" height="65" /></td>
            <td><img src="images/list/n/48.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/n/49.png" width="300" height="65" /></td>
            <td><img src="images/list/n/50.png" width="300" height="65" /></td>
            <td><img src="images/list/n/51.png" width="300" height="65" /></td>
          </tr>
        </table>
      </div>
      <div class="list-title-1">台中場</div>
      <div class="list-fb-1">
        <table width="900" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td><img src="images/list/m/01.png" width="300" height="65" /></td>
            <td><img src="images/list/m/02.png" width="300" height="65" /></td>
            <td><img src="images/list/m/03.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/04.png" width="300" height="65" /></td>
            <td><img src="images/list/m/05.png" width="300" height="65" /></td>
            <td><img src="images/list/m/06.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/07.png" width="300" height="65" /></td>
            <td><img src="images/list/m/08.png" width="300" height="65" /></td>
            <td><img src="images/list/m/09.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/10.png" width="300" height="65" /></td>
            <td><img src="images/list/m/11.png" width="300" height="65" /></td>
            <td><img src="images/list/m/12.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/13.png" width="300" height="65" /></td>
            <td><img src="images/list/m/14.png" width="300" height="65" /></td>
            <td><img src="images/list/m/15.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/16.png" width="300" height="65" /></td>
            <td><img src="images/list/m/17.png" width="300" height="65" /></td>
            <td><img src="images/list/m/18.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/19.png" width="300" height="65" /></td>
            <td><img src="images/list/m/20.png" width="300" height="65" /></td>
            <td><img src="images/list/m/21.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/22.png" width="300" height="65" /></td>
            <td><img src="images/list/m/23.png" width="300" height="65" /></td>
            <td><img src="images/list/m/24.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/25.png" width="300" height="65" /></td>
            <td><img src="images/list/m/26.png" width="300" height="65" /></td>
            <td><img src="images/list/m/27.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/28.png" width="300" height="65" /></td>
            <td><img src="images/list/m/29.png" width="300" height="65" /></td>
            <td><img src="images/list/m/30.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/31.png" width="300" height="65" /></td>
            <td><img src="images/list/m/32.png" width="300" height="65" /></td>
            <td><img src="images/list/m/33.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/34.png" width="300" height="65" /></td>
            <td><img src="images/list/m/35.png" width="300" height="65" /></td>
            <td><img src="images/list/m/36.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/37.png" width="300" height="65" /></td>
            <td><img src="images/list/m/38.png" width="300" height="65" /></td>
            <td><img src="images/list/m/39.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/40.png" width="300" height="65" /></td>
            <td><img src="images/list/m/41.png" width="300" height="65" /></td>
            <td><img src="images/list/m/42.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/43.png" width="300" height="65" /></td>
            <td><img src="images/list/m/44.png" width="300" height="65" /></td>
            <td><img src="images/list/m/45.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/m/46.png" width="300" height="65" /></td>
            <td><img src="images/list/m/47.png" width="300" height="65" /></td>
            <td><img src="images/list/m/48.png" width="300" height="65" /></td>
          </tr>
        </table>
      </div>
      <div class="list-title-1">高雄場</div>
      <div class="list-fb-1">
        <table width="900" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td><img src="images/list/s/01.png" width="300" height="65" /></td>
            <td><img src="images/list/s/02.png" width="300" height="65" /></td>
            <td><img src="images/list/s/03.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/04.png" width="300" height="65" /></td>
            <td><img src="images/list/s/05.png" width="300" height="65" /></td>
            <td><img src="images/list/s/06.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/07.png" width="300" height="65" /></td>
            <td><img src="images/list/s/08.png" width="300" height="65" /></td>
            <td><img src="images/list/s/09.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/10.png" width="300" height="65" /></td>
            <td><img src="images/list/s/11.png" width="300" height="65" /></td>
            <td><img src="images/list/s/12.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/13.png" width="300" height="65" /></td>
            <td><img src="images/list/s/14.png" width="300" height="65" /></td>
            <td><img src="images/list/s/15.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/16.png" width="300" height="65" /></td>
            <td><img src="images/list/s/17.png" width="300" height="65" /></td>
            <td><img src="images/list/s/18.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/19.png" width="300" height="65" /></td>
            <td><img src="images/list/s/20.png" width="300" height="65" /></td>
            <td><img src="images/list/s/21.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/22.png" width="300" height="65" /></td>
            <td><img src="images/list/s/23.png" width="300" height="65" /></td>
            <td><img src="images/list/s/24.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/25.png" width="300" height="65" /></td>
            <td><img src="images/list/s/26.png" width="300" height="65" /></td>
            <td><img src="images/list/s/27.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/28.png" width="300" height="65" /></td>
            <td><img src="images/list/s/29.png" width="300" height="65" /></td>
            <td><img src="images/list/s/30.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/31.png" width="300" height="65" /></td>
            <td><img src="images/list/s/32.png" width="300" height="65" /></td>
            <td><img src="images/list/s/33.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/34.png" width="300" height="65" /></td>
            <td><img src="images/list/s/35.png" width="300" height="65" /></td>
            <td><img src="images/list/s/36.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/37.png" width="300" height="65" /></td>
            <td><img src="images/list/s/38.png" width="300" height="65" /></td>
            <td><img src="images/list/s/39.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/40.png" width="300" height="65" /></td>
            <td><img src="images/list/s/41.png" width="300" height="65" /></td>
            <td><img src="images/list/s/42.png" width="300" height="65" /></td>
          </tr>
          <tr>
            <td><img src="images/list/s/43.png" width="300" height="65" /></td>
            <td><img src="images/list/s/44.png" width="300" height="65" /></td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </div>
    </div>
<% 
    Domain_Name = LCase(Request.ServerVariables("Server_Name"))
    Page_Name = LCase(Request.ServerVariables("Script_Name"))
    Cur_Url = "http://"&Domain_Name&Page_Name&"?login=ok"
	If (Len(Request.Cookies("talents")("xRow")) = 38 Or Len(Session("tRow")) = 38) and request("qq") = "kk" Then
    'onclick="alert('您已登入，趕快分享就有機會抽中【白日夢冒險王】電影票乙張!');"
		'if request("qq") = "kk" then 
		Set sRS = cnnMisc.Execute("Select Top 1 talentNo From sp_Sign where agent = '13sp_mitty' and talentNo =" & bTalentNo)
    	If sRS.Eof Then
			cnnmisc.execute("insert into sp_Sign(talentNo,agent) values('"&btalentNo&"','13sp_mitty')")
		end if
	%>
    <div class="facebook-area-1">
      <div id="fb-root"></div>
      <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/zh_TW/all.js#xfbml=1";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
      <div class="fb-comments" data-href="http://www.1111.com.tw/13SP/mitty/" data-width="800" data-numposts="10" data-colorscheme="light"></div>
    </div>
    <% 
	
	Else%>
    <div class="btn-1"> <a href="login.asp?ref=<%=Cur_Url%>" id="login" class="fancybox.iframe" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage('btn01','','images/btn-1-on.png',1)"><img src="images/btn-1-off.png" width="156" height="38" id="btn01" /></a> </div>
    <%End If%>
    <div class="building"></div>
  </div>
  <div id="footer">
    <div>1111人力銀行 版權所有 <span>COPYRIGHT 1111 JOB BANK ALL RIGHTS RESERVED.</span></div>
  </div>
</div>
</body>
</html>
