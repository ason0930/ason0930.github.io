<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>
<%@ Register Src="GoogleAnalytics.ascx" TagName="GoogleAnalytics" TagPrefix="uc2" %>
<script src="js/jquery-1.9.1.min.js"></script>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>台灣是我家_ 臺灣職場新勢力_免費講座</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!--#include virtual="/includesU/toplink/toplink.htm"-->
<center>
<form id="form1" runat="server">
  <div id="header">
    <div class="mv-people"></div>
  </div>
  <div id="mainContent">
    <div class="txtArea">
      <div class="title-1"></div>
      <div class="actArea">
        <div class="actTitle"></div>
        <div class="actTxt-1">
          <div class="txt-1">2014/11/15(六)，13:30–15:35</div>
          <div class="txt-2">內政部入出國及移民署<br />
            (臺北市廣州街15號10樓簡報室)</div>
          <div class="txt-3">即日起至2014年11月12日</div>
        </div>
        <div class="actTxt-2">完成報名並出席活動者，可於現場獲得精美禮物一份<br />
          +7-11禮券200元，還有機會獲得Asus ZenFone6、<br />
          500元7-11禮券等大禮，中獎機會高！</div>
        <div class="actTitle-2"></div>
        <div class="actPic"></div>
        <a href="" id="btn-mv" onclick="window.open('popup.aspx','windowName',config='height=540px,width=600px,resizable=no,location=no,location=no');"></a> </div>
      <div class="title-2"></div>
      <div class="introArea">
        <div class="picArea">
          <div class="picList">
            <div class="pic"> <img src="images/intro-pic-1.jpg" /></div>
            <div class="picTxt"> 中華外籍配偶暨勞工之聲協會<br />
              潘存蓉　理事長 </div>
          </div>
          <div class="picList marginFix">
            <div class="pic"> <img src="images/intro-pic-2.jpg" /></div>
            <div class="picTxt"> 職場達人管理顧問有限公司<br />
              吳睿穎　執行長 </div>
          </div>
        </div>
        <div class="picNote">現場將邀請新移民朋友分享就業/創業成功故事<br />
          活動詢問電話： (02)8787-1111#2752 謝小姐</div>
      </div>
      <div class="noteArea">
        <div class="noteTitle"><span>＊</span>注意事項</div>
        <ul>
          <li>參與本活動之參與者提供個人資料即同意1111人力銀行（主辦單位）將相關個人資料用於抽獎與聯絡使用，參加者如不同意提供個人資料，1111人力銀行有權拒絕其參加本活動。</li>
          <li>參加者於送出資料參加本活動之同時，即同意受本活動辦法及注意事項之規範，如有違反本活動辦法及注意事項者，主辦單位得取消其參加或兌換資格，並對於任何破壞本活動之行為保留法律追訴權。</li>
          <li>中獎人所提供之資料（姓名、電話、Email等）應正確無誤，如因所提供之資料錯誤、不清楚、不完整、虛偽不實 或無法判讀者，造成無法聯繫及寄送，視同放棄得獎權益，主辦單位將不負相關責任。</li>
          <li>如遇不可抗拒之天災或非人為造成之因素，主辦單位有權暫停或取消本活動。辦法若有不宜之處，1111人力銀行得隨時修訂。</li>
          <li>1111人力銀行將於臺灣地區使用參加者之個人資料，並於執行本活動之必要範圍內(包括但不限於審核評選、抽獎通知及獎品寄送等)提供予協辦單位與合作廠商。參加者之個人資料將使用至本活動結束，惟領取獎品或獎金之參加者，其個人資料將依中華民國稅法規定期限為保存。</li>
          <li>本辦法如有未盡事宜，主辦單位保留修改、取消、終止本活動以及變更本活動截止日期之權利，並將不另作解釋或通知。</li>
        </ul>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
  <div id="footer">
    <div class="logoArea"> <a href="http://www.immigration.gov.tw/welcome.htm" class="logo-1" target="_blank"></a><a href="http://www.tvbs.com.tw" target="_blank" class="logo-2"></a><a href="http://www1.tvbs.com.tw/project/tvbs_n/taiwanmyhome1" target="_blank" class="logo-3"></a><a href="http://www.1111.com.tw/zone/immigration" target="_blank" class="logo-4"></a>
      <div class="note-1"> 內政部入出國及移民署共同製作<br />
        內政部外籍配偶照顧輔導基金補助廣告 </div>
    </div>
    <div class="copyright">
      <div>全球華人股份有限公司版權所有 © 1111 Job Bank All Rights Reserved</div>
    </div>
  </div>
</form>
</center>
<uc2:GoogleAnalytics ID="GoogleAnalytics1" runat="server" />
</body>
</html>
