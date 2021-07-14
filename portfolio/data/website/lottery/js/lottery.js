/* 20180629 Ason */
//Rangebar
var r = document.querySelectorAll('input[type=range]'), 
prefs = ['webkit-slider-runnable', 'moz-range'], 
styles = [], 
l = prefs.length,
n = r.length;

var getTrackStyleStr = function(el, j) {
  var str = '', 
      min = el.min || 0, 
      perc = (el.max) ? ~~(100*(el.value - min)/(el.max - min)) : el.value, 
      val = perc + '% 100%';

  el.previousElementSibling.textContent = el.value;
  
  for(var i = 0; i < l; i++) {
    str += "input[type=range][data-rangeId='" + j + "']::-" + prefs[i] + '-track{background-size:' + val + '} ';
  }
  return str;
};

var setDragStyleStr = function(evt) {
  var trackStyle = getTrackStyleStr(evt.target, this); 
  styles[this].textContent = trackStyle;
};

for(var i = 0; i < n; i++) {
  var s = document.createElement('style');
  document.body.appendChild(s);
  styles.push(s);
  r[i].setAttribute('data-rangeId', i);
  r[i].addEventListener('input', setDragStyleStr.bind(i));
}

// 倍數下拉選單
function multipleDropMenu() {
	document.getElementById("multipleDropMenuContent").classList.toggle("show");
}

// 縮合選單
var Dropdown = function(el) {
	function init() {
		var elem = document.getElementsByClassName("submenuItems");
		for(var i=0; i < elem.length; i++){
			if(elem[i]!=el){
				if(!elem[i].classList.contains("hide")){
					elem[i].classList.toggle("hide");
				}
				elem[i].style.height = "0px";
			}else{
				elem[i].classList.toggle("hide");
				elem[i].style.height = 32*elem[i].children.length + "px";
				if(elem[i].classList.contains("hide")){
					elem[i].style.height = "0px";
				}else{
					elem[i].style.height = 32*elem[i].children.length + "px";
				}
				
			}
			if(elem[i].style.height == "0px"){
				if(elem[i].parentNode.classList.contains("open")){
					elem[i].parentNode.classList.remove("open");
				}
			}else{
				if(!elem[i].parentNode.classList.contains("open")){
					elem[i].parentNode.classList.toggle("open");
				}
			}
		}
		
	}
	return {
		init : init
	}
};

function initDropdownlink(){
	var elem = document.getElementsByClassName("dropdownlink");
	var elem1 = document.getElementsByClassName("submenuItems");
	for(var i=0; i < elem.length; i++){
		var myDropdown = Dropdown(elem1[i]);
		elem[i].addEventListener('click',  myDropdown.init);
	}
}

initDropdownlink();

//設定區域顯示或是隱藏
function setIdDisplay(id, val){
    var tmpID = document.getElementById(id);
    if(!tmpID || tmpID==null || typeof tmpID === "undefined"){
        tmpID = document.getElementsByName(id);
        if(tmpID && tmpID != null && typeof(tmpID) != "undefined"){
            tmpID = tmpID[tmpID.length-1];
        }
    }
    if(tmpID && tmpID != null && typeof(tmpID) != "undefined"){
        tmpID.style.display = val;
        tmpID = null;
        return true;
    }else{
        tmpID = null;
        return false;
    }
}
function setIdVisibility(id, val){
    var tmpID = document.getElementById(id);
    if(!tmpID || tmpID==null || typeof tmpID === "undefined"){
        tmpID = document.getElementsByName(id);
        if(tmpID && tmpID != null && typeof(tmpID) != "undefined"){
            tmpID = tmpID[tmpID.length-1];
        }
    }
    if(tmpID && tmpID != null && typeof(tmpID) != "undefined"){
        tmpID.style.visibility = val;
        tmpID = null;
        return true;
    }else{
        tmpID = null;
        return false;
    }
}

// 彈窗

// 彈窗關閉
function btnClose() {
	setIdDisplay("modalWrapper", "none");
}

// 我的投注
function openＭyBet() {
    setIdDisplay("modalWrapper", "block");
    setIdDisplay("MyBetDiv", "block");
    setIdDisplay("MyBetDetailDiv", "none");
    setIdDisplay("MyAddDiv", "none");
    setIdDisplay("MyaddDetailDiv", "none");
    setIdDisplay("MyaddDetailDetailDiv", "none");
    setIdDisplay("BetAddDiv", "none");
    setIdDisplay("BetNowDiv", "none");
    setIdDisplay("ConfirmBetDiv", "none");
    setIdDisplay("RemindBetDiv", "none");
    setIdDisplay("MybetRemoveDiv", "none");
    setIdDisplay("MyAddRemoveDiv", "none");
    setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 我的投注-詳情
function openＭyBetDetail() {
    setIdDisplay("modalWrapper", "block");
    setIdDisplay("MyBetDiv", "none");
    setIdDisplay("MyBetDetailDiv", "block");
    setIdDisplay("MyAddDiv", "none");
    setIdDisplay("MyaddDetailDiv", "none");
    setIdDisplay("MyaddDetailDetailDiv", "none");
    setIdDisplay("BetAddDiv", "none");
    setIdDisplay("BetNowDiv", "none");
    setIdDisplay("ConfirmBetDiv", "none");
    setIdDisplay("RemindBetDiv", "none");
    setIdDisplay("MybetRemoveDiv", "none");
    setIdDisplay("MyAddRemoveDiv", "none");
    setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 我的追號
function openMyAdd() {
    setIdDisplay("modalWrapper", "block");
    setIdDisplay("MyBetDiv", "none");
    setIdDisplay("MyBetDetailDiv", "none");
    setIdDisplay("MyAddDiv", "block");
    setIdDisplay("MyaddDetailDiv", "none");
    setIdDisplay("MyaddDetailDetailDiv", "none");
    setIdDisplay("BetAddDiv", "none");
    setIdDisplay("ConfirmBetDiv", "none");
    setIdDisplay("RemindBetDiv", "none");
    setIdDisplay("BetNowDiv", "none");
    setIdDisplay("MybetRemoveDiv", "none"); 
    setIdDisplay("MyAddRemoveDiv", "none");
    setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 我的追號-詳情
function openMyAddDetail() {
    setIdDisplay("modalWrapper", "block");
    setIdDisplay("MyBetDiv", "none");
    setIdDisplay("MyBetDetailDiv", "none");
    setIdDisplay("MyAddDiv", "none");
    setIdDisplay("MyaddDetailDiv", "block");
    setIdDisplay("MyaddDetailDetailDiv", "none");
    setIdDisplay("BetAddDiv", "none");
    setIdDisplay("MybetRemoveDiv", "none");
    setIdDisplay("MyAddRemoveDiv", "none");
    setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 我的追號-詳情-詳情
function openMyAddDetailDetail() {
    setIdDisplay("modalWrapper", "block");
    setIdDisplay("MyBetDiv", "none");
    setIdDisplay("MyBetDetailDiv", "none");
    setIdDisplay("MyAddDiv", "none");
    setIdDisplay("MyaddDetailDiv", "none");
    setIdDisplay("MyaddDetailDetailDiv", "block");
    setIdDisplay("BetAddDiv", "none");
    setIdDisplay("MybetRemoveDiv", "none");
    setIdDisplay("MyAddRemoveDiv", "none");
    setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 追號投注
function openBetAdd() {
    setIdDisplay("modalWrapper", "block");
    setIdDisplay("MyBetDiv", "none");
    setIdDisplay("MyBetDetailDiv", "none");
    setIdDisplay("MyAddDiv", "none");
    setIdDisplay("MyaddDetailDiv", "none");
    setIdDisplay("MyaddDetailDetailDiv", "none");
    setIdDisplay("BetAddDiv", "block");
    setIdDisplay("NormalAreaDiv", "block");
    setIdDisplay("AdvancedAreaDiv", "none");
    setIdDisplay("ConfirmBetDiv", "none");
    setIdDisplay("RemindBetDiv", "none");
    setIdDisplay("BetNowDiv", "none");
    setIdDisplay("MybetRemoveDiv", "none");
    setIdDisplay("MyAddRemoveDiv", "none");
    setIdDisplay("MyaddDetailRemoveDiv", "none");
    document.getElementById("changeNormalBtn").classList.add("active");
    document.getElementById("changeAdvancedBtn").classList.remove("active");    
}

// 追號投注-普通高級切換
function openTabNormalArea(){
    setIdDisplay("NormalAreaDiv", "block");
    setIdDisplay("AdvancedAreaDiv", "none");
    document.getElementById("changeNormalBtn").classList.add("active");
    document.getElementById("changeAdvancedBtn").classList.remove("active");
}
function openTabAdvancedArea(){
    setIdDisplay("NormalAreaDiv", "none");
    setIdDisplay("AdvancedAreaDiv", "block");
    document.getElementById("changeAdvancedBtn").classList.add("active");
    document.getElementById("changeNormalBtn").classList.remove("active");
}

// 立即投注
function openBetNow() {
    setIdDisplay("modalWrapper", "block");
    setIdDisplay("MyBetDiv", "none");
    setIdDisplay("MyBetDetailDiv", "none");
    setIdDisplay("MyAddDiv", "none");
    setIdDisplay("MyaddDetailDiv", "none");
    setIdDisplay("MyaddDetailDetailDiv", "none");
    setIdDisplay("BetAddDiv", "none");
    setIdDisplay("ConfirmBetDiv", "none");
    setIdDisplay("RemindBetDiv", "none");
    setIdDisplay("BetNowDiv", "block");
    setIdDisplay("MybetRemoveDiv", "none");
    setIdDisplay("MyAddRemoveDiv", "none");
    setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 確認投注
function openConfirmBet() {
    setIdDisplay("modalWrapper", "block");
    setIdDisplay("MyBetDiv", "none");
    setIdDisplay("MyBetDetailDiv", "none");
    setIdDisplay("MyAddDiv", "none");
    setIdDisplay("MyaddDetailDiv", "none");
    setIdDisplay("MyaddDetailDetailDiv", "none");
    setIdDisplay("BetAddDiv", "none");
    setIdDisplay("ConfirmBetDiv", "block");
    setIdDisplay("RemindBetDiv", "none");
    setIdDisplay("BetNowDiv", "none");
    setIdDisplay("MybetRemoveDiv", "none");
    setIdDisplay("MyAddRemoveDiv", "none");
    setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 溫馨提示
function openRemindBet() {
    setIdDisplay("modalWrapper", "block");
    setIdDisplay("MyBetDiv", "none");
    setIdDisplay("MyBetDetailDiv", "none");
    setIdDisplay("MyAddDiv", "none");
    setIdDisplay("MyaddDetailDiv", "none");
    setIdDisplay("MyaddDetailDetailDiv", "none");
    setIdDisplay("BetAddDiv", "none");
    setIdDisplay("ConfirmBetDiv", "none");
    setIdDisplay("RemindBetDiv", "block");
    setIdDisplay("BetNowDiv", "none");
    setIdDisplay("MybetRemoveDiv", "none");
    setIdDisplay("MyAddRemoveDiv", "none");
    setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 全螢幕
function openFullScreen(){
	document.getElementById("LeftSideDiv").classList.toggle("invisible");
    document.getElementById("RightSideDiv").classList.toggle("big");
}

// 顏色切換
function opendarkbtn(){
    document.getElementById("RightSideDiv").classList.remove("light");
    document.getElementById("RightSideDiv").classList.remove("lightgray");
    document.getElementById("RightSideDiv").classList.remove("red");
    document.getElementById("RightSideDiv").classList.remove("blue");
    document.getElementById("RightSideDiv").classList.remove("green");
    document.getElementById("ContainerLotteryDiv").classList.remove("light");
    document.getElementById("ContainerLotteryDiv").classList.remove("lightgray");
    document.getElementById("ContainerLotteryDiv").classList.remove("red");
    document.getElementById("ContainerLotteryDiv").classList.remove("blue");
    document.getElementById("ContainerLotteryDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.remove("light");
    document.getElementById("ModalContentDiv").classList.remove("lightgray");
    document.getElementById("ModalContentDiv").classList.remove("red");
    document.getElementById("ModalContentDiv").classList.remove("blue");
    document.getElementById("ModalContentDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.add("dark");
}
function openlightbtn(){
    document.getElementById("RightSideDiv").classList.add("light");
    document.getElementById("RightSideDiv").classList.remove("lightgray");
    document.getElementById("RightSideDiv").classList.remove("red");
    document.getElementById("RightSideDiv").classList.remove("blue");
    document.getElementById("RightSideDiv").classList.remove("green");
    document.getElementById("ContainerLotteryDiv").classList.add("light");
    document.getElementById("ContainerLotteryDiv").classList.remove("lightgray");
    document.getElementById("ContainerLotteryDiv").classList.remove("red");
    document.getElementById("ContainerLotteryDiv").classList.remove("blue");
    document.getElementById("ContainerLotteryDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.add("light");
    document.getElementById("ModalContentDiv").classList.remove("lightgray");
    document.getElementById("ModalContentDiv").classList.remove("red");
    document.getElementById("ModalContentDiv").classList.remove("blue");
    document.getElementById("ModalContentDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.remove("dark");
}
function openlightgraybtn(){
    document.getElementById("RightSideDiv").classList.add("light");
    document.getElementById("RightSideDiv").classList.add("lightgray");
    document.getElementById("RightSideDiv").classList.remove("red");
    document.getElementById("RightSideDiv").classList.remove("blue");
    document.getElementById("RightSideDiv").classList.remove("green");
    document.getElementById("ContainerLotteryDiv").classList.add("light");
    document.getElementById("ContainerLotteryDiv").classList.add("lightgray");
    document.getElementById("ContainerLotteryDiv").classList.remove("red");
    document.getElementById("ContainerLotteryDiv").classList.remove("blue");
    document.getElementById("ContainerLotteryDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.add("light");
    document.getElementById("ModalContentDiv").classList.add("lightgray");
    document.getElementById("ModalContentDiv").classList.remove("red");
    document.getElementById("ModalContentDiv").classList.remove("blue");
    document.getElementById("ModalContentDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.remove("dark");
}
function openredbtn(){
    document.getElementById("RightSideDiv").classList.remove("light");
    document.getElementById("RightSideDiv").classList.remove("lightgray");
    document.getElementById("RightSideDiv").classList.add("red");
    document.getElementById("RightSideDiv").classList.remove("blue");
    document.getElementById("RightSideDiv").classList.remove("green");
    document.getElementById("ContainerLotteryDiv").classList.remove("light");
    document.getElementById("ContainerLotteryDiv").classList.remove("lightgray");
    document.getElementById("ContainerLotteryDiv").classList.add("red");
    document.getElementById("ContainerLotteryDiv").classList.remove("blue");
    document.getElementById("ContainerLotteryDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.remove("light");
    document.getElementById("ModalContentDiv").classList.remove("lightgray");
    document.getElementById("ModalContentDiv").classList.add("red");
    document.getElementById("ModalContentDiv").classList.remove("blue");
    document.getElementById("ModalContentDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.add("dark");
}
function opengreenbtn(){
    document.getElementById("RightSideDiv").classList.remove("light");
    document.getElementById("RightSideDiv").classList.remove("lightgray");
    document.getElementById("RightSideDiv").classList.remove("red");
    document.getElementById("RightSideDiv").classList.remove("blue");
    document.getElementById("RightSideDiv").classList.add("green");
    document.getElementById("ContainerLotteryDiv").classList.remove("light");
    document.getElementById("ContainerLotteryDiv").classList.remove("lightgray");
    document.getElementById("ContainerLotteryDiv").classList.remove("red");
    document.getElementById("ContainerLotteryDiv").classList.remove("blue");
    document.getElementById("ContainerLotteryDiv").classList.add("green");
    document.getElementById("ModalContentDiv").classList.remove("light");
    document.getElementById("ModalContentDiv").classList.remove("lightgray");
    document.getElementById("ModalContentDiv").classList.remove("red");
    document.getElementById("ModalContentDiv").classList.remove("blue");
    document.getElementById("ModalContentDiv").classList.add("green");
    document.getElementById("ModalContentDiv").classList.add("dark");
}
function openbluebtn(){
    document.getElementById("RightSideDiv").classList.remove("light");
    document.getElementById("RightSideDiv").classList.remove("lightgray");
    document.getElementById("RightSideDiv").classList.remove("red");
    document.getElementById("RightSideDiv").classList.add("blue");
    document.getElementById("RightSideDiv").classList.remove("green");
    document.getElementById("ContainerLotteryDiv").classList.remove("light");
    document.getElementById("ContainerLotteryDiv").classList.remove("lightgray");
    document.getElementById("ContainerLotteryDiv").classList.remove("red");
    document.getElementById("ContainerLotteryDiv").classList.add("blue");
    document.getElementById("ContainerLotteryDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.remove("light");
    document.getElementById("ModalContentDiv").classList.remove("lightgray");
    document.getElementById("ModalContentDiv").classList.remove("red");
    document.getElementById("ModalContentDiv").classList.add("blue");
    document.getElementById("ModalContentDiv").classList.remove("green");
    document.getElementById("ModalContentDiv").classList.add("dark");
}

// 我的投注撤除著單
function openremove() {
	setIdDisplay("modalWrapper", "block");
	setIdDisplay("MyBetDiv", "none");
	setIdDisplay("MyBetDetailDiv", "none");
	setIdDisplay("MyAddDiv", "none");
	setIdDisplay("MyaddDetailDiv", "none");
	setIdDisplay("BetAddDiv", "none");
	setIdDisplay("BetNowDiv", "none");
	setIdDisplay("ConfirmBetDiv", "none");
	setIdDisplay("MybetRemoveDiv", "block");
	setIdDisplay("MyAddRemoveDiv", "none");
	setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 我的追好撤除著單
function openMyAddRemove() {
	setIdDisplay("modalWrapper", "block");
	setIdDisplay("MyBetDiv", "none");
	setIdDisplay("MyBetDetailDiv", "none");
	setIdDisplay("MyAddDiv", "none");
	setIdDisplay("MyaddDetailDiv", "none");
	setIdDisplay("BetAddDiv", "none");
	setIdDisplay("BetNowDiv", "none");
	setIdDisplay("ConfirmBetDiv", "none");
	setIdDisplay("MybetRemoveDiv", "none");
	setIdDisplay("MyAddRemoveDiv", "block");
	setIdDisplay("MyaddDetailRemoveDiv", "none");
}

// 我的追好詳情撤除著單
function openmyadddetailremove() {
	setIdDisplay("modalWrapper", "block");
	setIdDisplay("MyBetDiv", "none");
	setIdDisplay("MyBetDetailDiv", "none");
	setIdDisplay("MyAddDiv", "none");
	setIdDisplay("MyaddDetailDiv", "none");
	setIdDisplay("BetAddDiv", "none");
	setIdDisplay("BetNowDiv", "none");
	setIdDisplay("ConfirmBetDiv", "none");
	setIdDisplay("MybetRemoveDiv", "none");
	setIdDisplay("MyAddRemoveDiv", "none");
	setIdDisplay("MyaddDetailRemoveDiv", "block");
}
// 普通追號生成計畫
function opennormallistarea() {
	setIdDisplay("NormalListArea", "inline-table");
}
// 高級追號生成計畫
function openadvancelistarea() {
	setIdDisplay("AdvancedListArea", "inline-table");
}
// checkbox
function chk(input) {
/*for(var i=0;i<document.form1.c1.length;i++)
{
  document.form1.c1[i].checked = false;
}

input.checked = true;
return true;*/
}

//button disabled
function btnDisabled() {
	var xxx = document.querySelectorAll("#MyBetDiv div table tr td label input").checked;
	if (xxx = true) {
	    document.getElementById("myBetBtn").style.opacity = "1";
	} else {
	    document.getElementById("myBetBtn").style.opacity = "0.1";
	}
}

//时时彩(SSC)
function tabSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["three-balls","five-balls","ten-balls","three-dices"];
	var showName = ["right-side","tab-lottery-ssc","pick-lottery-ssc","five-balls","kind-star5-ssc","kind-star4f-ssc","kind-star4b-ssc","kind-star3f-ssc","kind-star3m-ssc","kind-star3b-ssc","kind-star2f-ssc","kind-star2b-ssc","kind-star1-ssc","kind-bs-ssc","kind-noassign-ssc","kind-funny-ssc","kind-any-ssc","kind-dtt-ssc"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-direct-multi-ssc")[0], "pick-act");
	starFiveDirectMultiSSC();
}

//分分彩(FFC)
function tabFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["three-balls","five-balls","ten-balls","three-dices","kind-star5-ssc","kind-star4f-ssc","kind-star4b-ssc","kind-star3f-ssc","kind-star3m-ssc","kind-star3b-ssc","kind-star2f-ssc","kind-star2b-ssc","kind-star1-ssc","kind-bs-ssc","kind-noassign-ssc","kind-funny-ssc","kind-any-ssc","kind-dtt-ssc"];
	var showName = ["tab-lottery-ffc","pick-lottery-ffc","five-balls"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-direct-multi-ffc")[0], "pick-act");
	starFiveDirectMultiFFC();
}

//11选5(115)
function tab115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [
	"three-balls","five-balls","ten-balls","three-dices",
	"kind-star5-ssc","kind-star4f-ssc","kind-star4b-ssc","kind-star3f-ssc","kind-star3m-ssc","kind-star3b-ssc","kind-star2f-ssc","kind-star2b-ssc","kind-star1-ssc","kind-bs-ssc","kind-noassign-ssc","kind-funny-ssc","kind-any-ssc","kind-dtt-ssc",
	"pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","kind-star3-115","kind-star2-115","kind-noassign-115","kind-sd-115","kind-qm-115","kind-assign-115","kind-any-multi-115","kind-any-single-115","kind-any-promise-115"
	];
	var showName = ["tab-lottery-115","pick-lottery-115","five-balls"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star3-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-dir-f3-multi-115")[0], "pick-act");
	starThreeDirectFront3Multi115();
}

//快三(Q3)
function tabQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [
	"three-balls","five-balls","ten-balls","three-dices",
	"kind-star5-ssc","kind-star4f-ssc","kind-star4b-ssc","kind-star3f-ssc","kind-star3m-ssc","kind-star3b-ssc","kind-star2f-ssc","kind-star2b-ssc","kind-star1-ssc","kind-bs-ssc","kind-noassign-ssc","kind-funny-ssc","kind-any-ssc","kind-dtt-ssc",
	"kind-total-q3","kind-same3-q3","kind-same2-q3","kind-no3-q3","kind-no2-q3","kind-link3-q3","kind-bs-q3","kind-sd-q3","kind-gr-q3","kind-color-q3"
	];
	var showName = ["tab-lottery-q3","pick-lottery-q3","three-dices","pick-total-q3","ball-total-q3","kind-total-q3","kind-same3-q3","kind-same2-q3","kind-no3-q3","kind-no2-q3","kind-link3-q3","kind-bs-q3","kind-sd-q3","kind-gr-q3","kind-color-q3","win-number-star3-direct-total-3d"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-total-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-total-q3-btn")[0], "pick-act");
	ballTotalQuick3();
}

//北京PK拾
function tabPK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [
	"three-balls","five-balls","ten-balls","three-dices",
	"kind-star5-ssc","kind-star4f-ssc","kind-star4b-ssc","kind-star3f-ssc","kind-star3m-ssc","kind-star3b-ssc","kind-star2f-ssc","kind-star2b-ssc","kind-star1-ssc","kind-bs-ssc","kind-noassign-ssc","kind-funny-ssc","kind-any-ssc","kind-dtt-ssc",
	"kind-win-pk10","kind-gr-pk10","kind-dt-pk10","kind-star3fb-pk10","kind-star2fb-pk10"
	];
	var showName = ["tab-lottery-pk10","pick-lottery-pk10","ten-balls","pick-win-pk10","ball-win-total-pk10","kind-win-pk10","kind-gr-pk10","kind-dt-pk10","kind-star3fb-pk10","kind-star2fb-pk10","win-number-winsecond-total-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-win-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-grall-pk10")[0], "pick-act");
	winTotal();
}

//排列三/五(35)
function tab35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [
	"three-balls","five-balls","ten-balls","three-dices",
	"kind-star5-ssc","kind-star4f-ssc","kind-star4b-ssc","kind-star3f-ssc","kind-star3m-ssc","kind-star3b-ssc","kind-star2f-ssc","kind-star2b-ssc","kind-star1-ssc","kind-bs-ssc","kind-noassign-ssc","kind-funny-ssc","kind-any-ssc","kind-dtt-ssc",
	"kind-star5-35","kind-star4f-35","kind-star4b-35","kind-star3f-35","kind-star3m-35","kind-star3b-35","kind-star2f-35","kind-star2b-35","kind-star1-35","kind-noassign-35","kind-bs-35","kind-funny-35","kind-any-35","kind-dtt-35"
	];
	var showName = ["tab-lottery-35","pick-lottery-35","five-balls","pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","kind-star5-35","kind-star4f-35","kind-star4b-35","kind-star3f-35","kind-star3m-35","kind-star3b-35","kind-star2f-35","kind-star2b-35","kind-star1-35","kind-bs-35","kind-noassign-35","kind-funny-35","kind-any-35","kind-dtt-35","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-direct-multi-35")[0], "pick-act");
	starFiveDirectMulti35();
}

//福彩3D(3d)
function tab3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [
	"three-balls","five-balls","ten-balls","three-dices",
	"kind-star5-ssc","kind-star4f-ssc","kind-star4b-ssc","kind-star3f-ssc","kind-star3m-ssc","kind-star3b-ssc","kind-star2f-ssc","kind-star2b-ssc","kind-star1-ssc","kind-bs-ssc","kind-noassign-ssc","kind-funny-ssc","kind-any-ssc","kind-dtt-ssc",
	,"kind-star3-3d","kind-star2f-3d","kind-star2b-3d","kind-star1-3d","kind-noassign-3d","kind-dtt-3d"
	];
	var showName = ["tab-lottery-3d","pick-lottery-3d","three-balls","pick-star3-direct-3d","pick-star3-group-3d","ball-hundred","ball-ten","ball-one","kind-star3-3d","kind-star2f-3d","kind-star2b-3d","kind-star1-3d","kind-noassign-3d","kind-dtt-3d","win-number-star3"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-direct-multi-3d")[0], "pick-act");
	starThreeDirectMulti3D();
}

//时时彩 五星 直选复式
function starFiveDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-direct-multi-ssc")[0], "pick-act");
}

//时时彩 五星 直选单式
function starFiveDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-direct-single-ssc")[0], "pick-act");
}

//时时彩 五星 组选120
function starFiveGroup120SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","ball-star5-group120","win-number-star5-group-120"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-120-ssc")[0], "pick-act");
}

//时时彩 五星 组选60
function starFiveGroup60SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","ball-star-group-single","ball-star-group-double","win-number-star5-group-60"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-60-ssc")[0], "pick-act");
}

//时时彩 五星 组选30
function starFiveGroup30SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","ball-star-group-single","ball-star-group-double","win-number-star5-group-30"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-30-ssc")[0], "pick-act");
}

//时时彩 五星 组选20
function starFiveGroup20SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","ball-star-group-single","ball-star-group-triple","win-number-star5-group-20"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-20-ssc")[0], "pick-act");
}

//时时彩 五星 组选10
function starFiveGroup10SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","ball-star-group-triple","ball-star-group-double","win-number-star5-group-10"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-10-ssc")[0], "pick-act");
}

//时时彩 五星 组选5
function starFiveGroup05SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","ball-star-group-single","ball-star-group-quadruple","win-number-star5-group-05"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-05-ssc")[0], "pick-act");
}

//时时彩 五星 其他 总和大小单双
function starFiveOtherTotalBSSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","ball-star5-other-total-bs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-other-total-bs-ssc")[0], "pick-act");
}

//时时彩 五星 其他 总和组合大小单双
function starFiveOtherTotalBSGroupSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","ball-star5-other-total-bsgroup","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star5-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-other-total-bsgroup-ssc")[0], "pick-act");
}

//时时彩 前四 直选复式
function starFourFrontDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star4f-direct-ssc","pick-star4f-group-ssc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","win-number-star4f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-direct-multi-ssc")[0], "pick-act");
}

//时时彩 前四 直选单式
function starFourFrontDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star4f-direct-ssc","pick-star4f-group-ssc","import-area","win-number-star4f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-direct-single-ssc")[0], "pick-act");
}

//时时彩 前四 组24
function starFourFrontGroup24SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
    var showName = ["pick-star4f-direct-ssc","pick-star4f-group-ssc","ball-star-10playballs","win-number-star4f-group-24"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-24-ssc")[0], "pick-act");
}

//时时彩 前四 组12
function starFourFrontGroup12SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star4f-direct-ssc","pick-star4f-group-ssc","ball-star-group-double","ball-star-group-single","win-number-star4f-group-12"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-12-ssc")[0], "pick-act");
}

//时时彩 前四 组06
function starFourFrontGroup06SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star4f-direct-ssc","pick-star4f-group-ssc","ball-star-group-double","win-number-star4f-group-06"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-06-ssc")[0], "pick-act");
}

//时时彩 前四 组04
function starFourFrontGroup04SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star4f-direct-ssc","pick-star4f-group-ssc","ball-star-group-triple","ball-star-group-single","win-number-star4f-group-04"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-04-ssc")[0], "pick-act");
}

//时时彩 后四 直选复式
function starFourBackDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star4b-direct-ssc","pick-star4b-group-ssc","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star4b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-direct-multi-ssc")[0], "pick-act");
}

//时时彩 后四 直选单式
function starFourBackDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star4b-direct-ssc","pick-star4b-group-ssc","import-area","win-number-star4b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-direct-single-ssc")[0], "pick-act");
}

//时时彩 后四 组24
function starFourBackGroup24SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star4b-direct-ssc","pick-star4b-group-ssc","ball-star-10playballs","win-number-star4b-group-24"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-24-ssc")[0], "pick-act");
}

//时时彩 后四 组12
function starFourBackGroup12SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star4b-direct-ssc","pick-star4b-group-ssc","ball-star-group-double","ball-star-group-single","win-number-star4b-group-12"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-12-ssc")[0], "pick-act");
}

//时时彩 后四 组06
function starFourBackGroup06SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star4b-direct-ssc","pick-star4b-group-ssc","ball-star-group-double","win-number-star4b-group-06"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-06-ssc")[0], "pick-act");
}

//时时彩 后四 组04
function starFourBackGroup04SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star4b-direct-ssc","pick-star4b-group-ssc","ball-star-group-triple","ball-star-group-single","win-number-star4b-group-04"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star4b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-04-ssc")[0], "pick-act");
}

//时时彩 前三 直选复式
function starThreeFrontDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-ten-thousand","ball-thousand","ball-hundred","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-multi-ssc")[0], "pick-act");
}

//时时彩 前三 直选单式
function starThreeFrontDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","import-area","help-select","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-single-ssc")[0], "pick-act");
}

//时时彩 前三 直选和值
function starThreeFrontDirectTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-star-dt","win-number-star3f-direct-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-total-ssc")[0], "pick-act");
}

//时时彩 前三 直选跨度
function starThreeFrontDirectCrossSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-star-dc","win-number-star3f-direct-cross"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-cross-ssc")[0], "pick-act");
}

//时时彩 前三 组三
function starThreeFrontGroup03v2SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-star-group-03","win-number-star3f-group-03"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-03v2-ssc")[0], "pick-act");
}

//时时彩 前三 组六
function starThreeFrontGroup06v2SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-star-group-06","win-number-star3f-group-06"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-06v2-ssc")[0], "pick-act");
}

//时时彩 前三 组三单式
function starThreeFrontGroup03v2singleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","import-area","help-select","win-number-star3f-group-03"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-03v2-single-ssc")[0], "pick-act");
}

//时时彩 前三 组六单式
function starThreeFrontGroup06v2singleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","import-area","help-select","win-number-star3f-group-06"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-06v2-single-ssc")[0], "pick-act");
}

//时时彩 前三 混合组选
function starThreeFrontGroupMixSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","import-area","help-select","win-number-star3f-group-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-mix-ssc")[0], "pick-act");
}

//时时彩 前三 组选和值
function starThreeFrontGroupTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","pick-star3f-group-total-ssc","ball-star-gt","win-number-star3f-direct-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-total-ssc")[0], "pick-act");
}

//时时彩 前三 包胆
function starThreeFrontPromiseSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-star-10balls","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-promise-ssc")[0], "pick-act");
}

//时时彩 前三 其他 和值尾数
function starThreeFrontTotalNumSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-notitle","win-number-star3f-other-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-total-num-ssc")[0], "pick-act");
}

//时时彩 前三 其他 豹子
function starThreeFrontJaquarSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-jaguar","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-jaguar-ssc")[0], "pick-act");
}

//时时彩 前三 其他 顺子
function starThreeFrontSmoothSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-smooth","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-smooth-ssc")[0], "pick-act");
}

//时时彩 前三 其他 对子
function starThreeFrontPairSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-pair","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-pair-ssc")[0], "pick-act");
}

//时时彩 前三 其他 半顺
function starThreeFrontHalfSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-half","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-half-ssc")[0], "pick-act");
}

//时时彩 前三 其他 杂六
function starThreeFrontMix6SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3f-direct-ssc","pick-star3f-group-ssc","pick-star3f-other-ssc","ball-mix6","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-mix6-ssc")[0], "pick-act");
}

//时时彩 中三 直选复式
function starThreeMiddleDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-thousand","ball-hundred","ball-ten","win-number-star3m"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-multi-ssc")[0], "pick-act");
}

//时时彩 中三 直选单式
function starThreeMiddleDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","import-area","help-select","win-number-star3m"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-single-ssc")[0], "pick-act");
}

//时时彩 中三 直选和值
function starThreeMiddleDirectTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-star-dt","win-number-star3m-direct-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-total-ssc")[0], "pick-act");
}

//时时彩 中三 直选跨度
function starThreeMiddleDirectCrossSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-star-dc","win-number-star3m-direct-cross"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-cross-ssc")[0], "pick-act");
}

//时时彩 中三 组三
function starThreeMiddleGroup03v2SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-star-group-03","win-number-star3m-group-03"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-03v2-ssc")[0], "pick-act");
}

//时时彩 中三 组六
function starThreeMiddleGroup06v2SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-star-group-06","win-number-star3m-group-06"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-06v2-ssc")[0], "pick-act");
}

//时时彩 中三 组三单式
function starThreeMiddleGroup03v2singleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","import-area","help-select","win-number-star3m-group-03"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-03v2-single-ssc")[0], "pick-act");
}

//时时彩 中三 组六单式
function starThreeMiddleGroup06v2singleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","import-area","help-select","win-number-star3m-group-06"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-06v2-single-ssc")[0], "pick-act");
}

//时时彩 中三 混合组选
function starThreeMiddleGroupMixSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","import-area","help-select","win-number-star3m-group-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-mix-ssc")[0], "pick-act");
}

//时时彩 中三 组选和值
function starThreeMiddleGroupTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-star-gt","win-number-star3m-direct-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-total-ssc")[0], "pick-act");
}

//时时彩 中三 包胆
function starThreeMiddlePromiseSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-star-10balls","win-number-star3m"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-promise-ssc")[0], "pick-act");
}

//时时彩 中三 其他 和值尾数
function starThreeMiddleTotalNumSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-notitle","win-number-star3m-other-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-total-num-ssc")[0], "pick-act");
}

//时时彩 中三 其他 豹子
function starThreeMiddleJaquarSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-jaguar","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-jaguar-ssc")[0], "pick-act");
}

//时时彩 中三 其他 顺子
function starThreeMiddleSmoothSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-smooth","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-smooth-ssc")[0], "pick-act");
}

//时时彩 中三 其他 对子
function starThreeMiddlePairSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-pair","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-pair-ssc")[0], "pick-act");
}

//时时彩 中三 其他 半顺
function starThreeMiddleHalfSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-half","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-half-ssc")[0], "pick-act");
}

//时时彩 中三 其他 杂六
function starThreeMiddleMix6SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3m-direct-ssc","pick-star3m-group-ssc","pick-star3m-other-ssc","ball-mix6","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3m-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-mix6-ssc")[0], "pick-act");
}

//时时彩 后三 直选复式
function starThreeBackDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-hundred","ball-ten","ball-one","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-multi-ssc")[0], "pick-act");
}

//时时彩 后三 直选单式
function starThreeBackDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","import-area","help-select","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-single-ssc")[0], "pick-act");
}

//时时彩 后三 直选和值
function starThreeBackDirectTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-star-dt","win-number-star3b-direct-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-total-ssc")[0], "pick-act");
}

//时时彩 后三 直选跨度
function starThreeBackDirectCrossSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-star-dc","win-number-star3b-direct-cross"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-cross-ssc")[0], "pick-act");
}

//时时彩 后三 组三
function starThreeBackGroup03v2SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-star-group-03","win-number-star3b-group-03"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-03v2-ssc")[0], "pick-act");
}

//时时彩 后三 组六
function starThreeBackGroup06v2SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-star-group-06","win-number-star3b-group-06"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-06v2-ssc")[0], "pick-act");
}

//时时彩 后三 组三单式
function starThreeBackGroup03v2singleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","import-area","help-select","win-number-star3b-group-03"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-03v2-single-ssc")[0], "pick-act");
}

//时时彩 后三 组六单式
function starThreeBackGroup06v2singleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","import-area","help-select","win-number-star3b-group-06"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-06v2-single-ssc")[0], "pick-act");
}

//时时彩 后三 混合组选
function starThreeBackGroupMixSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","import-area","help-select","win-number-star3b-group-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-mix-ssc")[0], "pick-act");
}

//时时彩 后三 组选和值
function starThreeBackGroupTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-star-gt","win-number-star3b-group-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-total-ssc")[0], "pick-act");
}


//时时彩 后三 包胆
function starThreeBackPromiseSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-star-10balls","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-promise-ssc")[0], "pick-act");
}

//时时彩 后三 其他 和值尾数
function starThreeBackTotalNumSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-notitle","win-number-star3b-other-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-total-num-ssc")[0], "pick-act");
}

//时时彩 后三 其他 豹子
function starThreeBackJaquarSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-jaguar","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-jaguar-ssc")[0], "pick-act");
}

//时时彩 后三 其他 顺子
function starThreeBackSmoothSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-smooth","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-smooth-ssc")[0], "pick-act");
}

//时时彩 后三 其他 对子
function starThreeBackPairSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-pair","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-pair-ssc")[0], "pick-act");
}

//时时彩 后三 其他 半顺
function starThreeBackHalfSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-half","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-half-ssc")[0], "pick-act");
}

//时时彩 后三 其他 杂六
function starThreeBackMix6SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3b-direct-ssc","pick-star3b-group-ssc","pick-star3b-other-ssc","ball-mix6","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star3b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-mix6-ssc")[0], "pick-act");
}

//时时彩 前二 直选复式
function starTwoFrontDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2f-direct-ssc","pick-star2f-group-ssc","ball-ten-thousand","ball-thousand","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-multi-ssc")[0], "pick-act");
}

//时时彩 前二 直选单式
function starTwoFrontDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star2f-direct-ssc","pick-star2f-group-ssc","import-area","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-single-ssc")[0], "pick-act");
}

//时时彩 前二 直选和值
function starTwoFrontDirectTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2f-direct-ssc","pick-star2f-group-ssc","ball-star-19balls","win-number-star2f-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-total-ssc")[0], "pick-act");
}

//时时彩 前二 直选跨度
function starTwoFrontDirectCrossSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2f-direct-ssc","pick-star2f-group-ssc","ball-star-10balls","win-number-star2f-cross"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-cross-ssc")[0], "pick-act");
}

//时时彩 前二 组选复式
function starTwoFrontGroupMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2f-direct-ssc","pick-star2f-group-ssc","ball-star-group","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-multi-ssc")[0], "pick-act");
}

//时时彩 前二 组选单式
function starTwoFrontGroupSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star2f-direct-ssc","pick-star2f-group-ssc","import-area","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-single-ssc")[0], "pick-act");
}

//时时彩 前二 组选和值
function starTwoFrontGroupTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2f-direct-ssc","pick-star2f-group-ssc","ball-star-17balls","win-number-star2f-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-total-ssc")[0], "pick-act");
}

//时时彩 前二 组选包胆
function starTwoFrontGroupPromiseSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2f-direct-ssc","pick-star2f-group-ssc","ball-star-10balls","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2f-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-promise-ssc")[0], "pick-act");
}

//时时彩 后二 直选复式
function starTwoBackDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2b-direct-ssc","pick-star2b-group-ssc","ball-ten","ball-one","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-multi-ssc")[0], "pick-act");
}

//时时彩 后二 直选单式
function starTwoBackDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star2b-direct-ssc","pick-star2b-group-ssc","import-area","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-single-ssc")[0], "pick-act");
}

//时时彩 后二 直选和值
function starTwoBackDirectTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2b-direct-ssc","pick-star2b-group-ssc","ball-star-19balls","win-number-star2b-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-total-ssc")[0], "pick-act");
}

//时时彩 后二 直选跨度
function starTwoBackDirectCrossSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2b-direct-ssc","pick-star2b-group-ssc","ball-star-10balls","win-number-star2b-cross"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-cross-ssc")[0], "pick-act");
}

//时时彩 后二 组选复式
function starTwoBackGroupMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2b-direct-ssc","pick-star2b-group-ssc","ball-star-group","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-multi-ssc")[0], "pick-act");
}

//时时彩 后二 组选单式
function starTwoBackGroupSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star2b-direct-ssc","pick-star2b-group-ssc","import-area","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-single-ssc")[0], "pick-act");
}

//时时彩 后二 组选和值
function starTwoBackGroupTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2b-direct-ssc","pick-star2b-group-ssc","ball-star-17balls","win-number-star2b-total"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-total-ssc")[0], "pick-act");
}

//时时彩 后二 组选包胆
function starTwoBackGroupPromiseSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star2b-direct-ssc","pick-star2b-group-ssc","ball-star-10balls","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star2b-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-promise-ssc")[0], "pick-act");
}

//时时彩 一星
function starOneSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star1-ssc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-star1-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star1-ssc-btn")[0], "pick-act");
}

//时时彩 大小单双 前二大小单双
function bigSmallFrontTwoSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-bs-ssc","ball-star-bs-ten-thousand","ball-star-bs-thousand","win-number-bssd-front02"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-bs-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-f2-ssc")[0], "pick-act");
}

//时时彩 大小单双 后二大小单双
function bigSmallBackTwoSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-bs-ssc","ball-star-bs-ten","ball-star-bs-one","win-number-bs-back02"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-bs-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-b2-ssc")[0], "pick-act");
}

//时时彩 大小单双 任选二大小单双
function bigSmallAnyTwoSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-bs-ssc","ball-star-bs-ten-thousand","ball-star-bs-thousand",,"ball-star-bs-hundred","ball-star-bs-ten","ball-star-bs-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-bs-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-any2-ssc")[0], "pick-act");
}

//时时彩 大小单双 前三大小单双
function bigSmallFrontThreeSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-bs-ssc","ball-star-bs-ten-thousand","ball-star-bs-thousand","ball-star-bs-hundred","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-bs-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-f3-ssc")[0], "pick-act");
}

//时时彩 大小单双 后三大小单双
function bigSmallBackThreeSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-bs-ssc","ball-star-bs-hundred","ball-star-bs-ten","ball-star-bs-one","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-bs-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-b3-ssc")[0], "pick-act");
}

//时时彩 不定位 三星 前三一码不定位
function star3NoAssignFront3Num01SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-any3n1-ssc","pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-f3n1-ssc")[0], "pick-act");
}

//时时彩 不定位 三星 后三一码不定位
function star3NoAssignBack3Num01SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-b3n1-ssc")[0], "pick-act");
}

//时时彩 不定位 三星 前三二码不定位
function star3NoAssignFront3Num02SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-f3n2-ssc")[0], "pick-act");
}

//时时彩 不定位 三星 后三二码不定位
function star3NoAssignBack3Num02SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-b3n2-ssc")[0], "pick-act");
}

//时时彩 不定位 三星 任三一码不定位
function star3NoAssignAny3Num01SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-any3n1-ssc")[0], "pick-act");
}

//时时彩 不定位 四星 四星一码不定位
function star4NoAssignNum01SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-s4n1-ssc")[0], "pick-act");
}

//时时彩 不定位 四星 四星二码不定位
function star4NoAssignNum02SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-s4n2-ssc")[0], "pick-act");
}

//时时彩 不定位 五星 五星一码不定位
function star5NoAssignNum01SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-noassign-s5n1-ssc")[0], "pick-act");
}

//时时彩 不定位 五星 五星二码不定位
function star5NoAssignNum02SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-noassign-s5n2-ssc")[0], "pick-act");
}

//时时彩 不定位 五星 五星三码不定位
function star5NoAssignNum03SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-noassign-ssc","pick-star4-noassign-ssc","pick-star5-noassign-ssc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-noassign-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-noassign-s5n3-ssc")[0], "pick-act");
}

//时时彩 趣味 五码趣味三星
function Fun05star3SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-fun-ten-thousand","ball-fun-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-5star3-ssc")[0], "pick-act");
}

//时时彩 趣味 四码趣味三星
function Fun04star3SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-fun-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-4star3-ssc")[0], "pick-act");
}

//时时彩 趣味 后三码趣味二星
function FunBack03star2SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-fun-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-b3star2-ssc")[0], "pick-act");
}

//时时彩 趣味 前三趣味二星
function FunFront03star2SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-fun-ten-thousand","ball-thousand","ball-hundred","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-f3star2-ssc")[0], "pick-act");
}

//时时彩 趣味 区间 五码区间三星
function star3SectionNum05SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-section-ten-thousand","ball-section-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-5star3-ssc")[0], "pick-act");
}

//时时彩 趣味 区间 四码区间三星
function star3SectionNum04SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-section-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-4star3-ssc")[0], "pick-act");
}

//时时彩 趣味 区间 后三区间二星
function star2SectionBackNum03SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-section-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-b3star2-ssc")[0], "pick-act");
}

//时时彩 趣味 区间 前三区间二星
function star2SectionFrontNum03SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-section-ten-thousand","ball-thousand","ball-hundred","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-f3star2-ssc")[0], "pick-act");
}

//时时彩 趣味 特殊 一帆风顺
function specialOneSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-one-ssc")[0], "pick-act");
}

//时时彩 趣味 特殊 好事成双
function specialTwoSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-two-ssc")[0], "pick-act");
}

//时时彩 趣味 特殊 三星报喜
function specialThreeSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-three-ssc")[0], "pick-act");
}

//时时彩 趣味 特殊 四季发财
function specialFourSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-fun-ssc","pick-section-ssc","pick-special-ssc","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-funny-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-four-ssc")[0], "pick-act");
}

//时时彩 任选二星 直选复式
function anyTwoDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-multi-ssc")[0], "pick-act");
}

//时时彩 任选二星 直选单式
function anyTwoDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-single-ssc")[0], "pick-act");
}

//时时彩 任选二星 直选和值
function anyTwoDirectTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-19balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-total-ssc")[0], "pick-act");
}

//时时彩 任选二星 直选跨度
function anyTwoDirectCrossSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-10playballs","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-cross-ssc")[0], "pick-act");
}

//时时彩 任选二星 组选复式
function anyTwoGrouptMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-group","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-multi-ssc")[0], "pick-act");
}

//时时彩 任选二星 组选单式
function anyTwoGrouptSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-single-ssc")[0], "pick-act");
}

//时时彩 任选二星 组选和值
function anyTwoGrouptTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-19balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-total-ssc")[0], "pick-act");
}

//时时彩 任选二星 组选包胆
function anyTwoGrouptPromiseSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-10balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-promise-ssc")[0], "pick-act");
}

//时时彩 任选三星 直选复式
function anyThreeDirectMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-multi-ssc")[0], "pick-act");
}

//时时彩 任选三星 直选单式
function anyThreeDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-single-ssc")[0], "pick-act");
}

//时时彩 任选三星 直选和值
function anyThreeDirectTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-dt","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-total-ssc")[0], "pick-act");
}

//时时彩 任选三星 直选跨度
function anyThreeDirectCrossSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-10playballs","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-cross-ssc")[0], "pick-act");
}

//时时彩 任选三星 组三复式
function anyThreeGroup03MultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-group","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-3-multi-ssc")[0], "pick-act");
}

//时时彩 任选三星 组三单式
function anyThreeGroup03ingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-3-single-ssc")[0], "pick-act");
}

//时时彩 任选三星 组六复式
function anyThreeGroup06MultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-group-06","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-6-multi-ssc")[0], "pick-act");
}

//时时彩 任选三星 组六单式
function anyThreeGroup06SingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-6-single-ssc")[0], "pick-act");
}

//时时彩 任选三星 混合组选
function anyThreeGroupMixSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-mix-ssc")[0], "pick-act");
}

//时时彩 任选三星 组选和值
function anyThreeGroupTotalSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-group-total","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-total-ssc")[0], "pick-act");
}

//时时彩 任选三星 组选包胆
function anyThreeGroupPromiseSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-10balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-promise-ssc")[0], "pick-act");
}

//时时彩 任选四星 直选复式
function anyFourDirecttMultiSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-dir-multi-ssc")[0], "pick-act");
}

//时时彩 任选四星 直选单式
function anyFourDirectSingleSSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-dir-single-ssc")[0], "pick-act");
}

//时时彩 任选四星 组24
function anyFourGroup24SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-notitle","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-24-ssc")[0], "pick-act");
}

//时时彩 任选四星 组12
function anyFourGroup12SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-group-double","ball-star-group-single","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-12-ssc")[0], "pick-act");
}

//时时彩 任选四星 组06
function anyFourGroup06SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-group-double","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-06-ssc")[0], "pick-act");
}

//时时彩 任选四星 组04
function anyFourGroup04SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-any2-ssc","pick-any3-ssc","pick-any4-ssc","ball-star-group-triple","ball-star-group-single","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-any-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-04-ssc")[0], "pick-act");
}

//时时彩 龙虎和 万千
function dttTenThousand1000SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-tenthousand1000","win-number-dtt-ten-thousand1000"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand1000-ssc")[0], "pick-act");
}

//时时彩 龙虎和 万百
function dttTenThousand100SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-tenthousand100","win-number-dtt-ten-thousand100"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand100-ssc")[0], "pick-act");
}

//时时彩 龙虎和 万十
function dttTenThousand10SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-tenthousand10","win-number-dtt-ten-thousand10"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand10-ssc")[0], "pick-act");
}

//时时彩 龙虎和 万个
function dttTenThousand01SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-tenthousand01","win-number-dtt-ten-thousand01"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand01-ssc")[0], "pick-act");
}

//时时彩 龙虎和 千百
function dttThousand100SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-thousand100","win-number-dtt-thousand100"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-thousand100-ssc")[0], "pick-act");
}

//时时彩 龙虎和 千十
function dttThousand10SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-thousand10","win-number-dtt-thousand10"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-thousand10-ssc")[0], "pick-act");
}

//时时彩 龙虎和 千个
function dttThousand01SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-thousand01","win-number-dtt-thousand01"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-thousand01-ssc")[0], "pick-act");
}

//时时彩 龙虎和 百十
function dttHundred10SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-hundred10","win-number-dtt-hundred10"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-hundred10-ssc")[0], "pick-act");
}

//时时彩 龙虎和 百个
function dttHundred01SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-hundred01","win-number-dtt-hundred01"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-hundred01-ssc")[0], "pick-act");
}

//时时彩 龙虎和 百个
function dttTen01SSC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-dtt-ssc","ball-dtt-ten01","win-number-dtt-ten01"];
	initBall(clearName, hiddenName, showName, 0);
	addClass(document.getElementsByClassName("kind-dtt-ssc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-ten01-ssc")[0], "pick-act");
}

//分分彩 五星 直选复式
function starFiveDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-direct-multi-ffc")[0], "pick-act");
}

//分分彩 五星 直选单式
function starFiveDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-direct-single-ffc")[0], "pick-act");
}

//分分彩 五星 组选120
function starFiveGroup120FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","ball-star5-group120","win-number-star5-group-120"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-120-ffc")[0], "pick-act");
}

//分分彩 五星 组选60
function starFiveGroup60FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","ball-star-group-single","ball-star-group-double","win-number-star5-group-60"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-60-ffc")[0], "pick-act");
}

//分分彩 五星 组选30
function starFiveGroup30FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","ball-star-group-single","ball-star-group-double","win-number-star5-group-30"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-30-ffc")[0], "pick-act");
}

//分分彩 五星 组选20
function starFiveGroup20FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","ball-star-group-single","ball-star-group-triple","win-number-star5-group-20"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-20-ffc")[0], "pick-act");
}

//分分彩 五星 组选10
function starFiveGroup10FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","ball-star-group-triple","ball-star-group-double","win-number-star5-group-10"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-10-ffc")[0], "pick-act");
}

//分分彩 五星 组选5
function starFiveGroup05FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","ball-star-group-single","ball-star-group-quadruple","win-number-star5-group-05"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-05-ffc")[0], "pick-act");
}

//分分彩 五星 其他 总和大小单双
function starFiveOtherTotalBSFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","ball-star5-other-total-bs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-other-total-bs-ffc")[0], "pick-act");
}

//分分彩 五星 其他 总和组合大小单双
function starFiveOtherTotalBSGroupFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-group-ffc","pick-star5-other-ffc","ball-star5-other-total-bsgroup","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star5-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-other-total-bsgroup-ffc")[0], "pick-act");
}

//分分彩 前四 直选复式
function starFourFrontDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4f-direct-ffc","pick-star4f-group-ffc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","win-number-star4f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-direct-multi-ffc")[0], "pick-act");
}

//分分彩 前四 直选单式
function starFourFrontDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star4f-direct-ffc","pick-star4f-group-ffc","import-area","win-number-star4f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-direct-single-ffc")[0], "pick-act");
}

//分分彩 前四 组24
function starFourFrontGroup24FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4f-direct-ffc","pick-star4f-group-ffc","ball-star-10playballs","win-number-star4f-group-24"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-24-ffc")[0], "pick-act");
}

//分分彩 前四 组12
function starFourFrontGroup12FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4f-direct-ffc","pick-star4f-group-ffc","ball-star-group-double","ball-star-group-single","win-number-star4f-group-12"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-12-ffc")[0], "pick-act");
}

//分分彩 前四 组06
function starFourFrontGroup06FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4f-direct-ffc","pick-star4f-group-ffc","ball-star-group-double","win-number-star4f-group-06"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-06-ffc")[0], "pick-act");
}

//分分彩 前四 组04
function starFourFrontGroup04FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4f-direct-ffc","pick-star4f-group-ffc","ball-star-group-triple","ball-star-group-single","win-number-star4f-group-04"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-04-ffc")[0], "pick-act");
}

//分分彩 后四 直选复式
function starFourBackDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4b-direct-ffc","pick-star4b-group-ffc","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star4b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-direct-multi-ffc")[0], "pick-act");
}

//分分彩 后四 直选单式
function starFourBackDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star4b-direct-ffc","pick-star4b-group-ffc","import-area","win-number-star4b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-direct-single-ffc")[0], "pick-act");
}

//分分彩 后四 组24
function starFourBackGroup24FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4b-direct-ffc","pick-star4b-group-ffc","ball-star-10playballs","win-number-star4b-group-24"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-24-ffc")[0], "pick-act");
}

//分分彩 后四 组12
function starFourBackGroup12FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4b-direct-ffc","pick-star4b-group-ffc","ball-star-group-double","ball-star-group-single","win-number-star4b-group-12"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-12-ffc")[0], "pick-act");
}

//分分彩 后四 组06
function starFourBackGroup06FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4b-direct-ffc","pick-star4b-group-ffc","ball-star-group-double","win-number-star4b-group-06"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-06-ffc")[0], "pick-act");
}

//分分彩 后四 组04
function starFourBackGroup04FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star4b-direct-ffc","pick-star4b-group-ffc","ball-star-group-triple","ball-star-group-single","win-number-star4b-group-04"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star4b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-04-ffc")[0], "pick-act");
}

//分分彩 前三 直选复式
function starThreeFrontDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-ten-thousand","ball-thousand","ball-hundred","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-multi-ffc")[0], "pick-act");
}

//分分彩 前三 直选单式
function starThreeFrontDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","import-area","help-select","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-single-ffc")[0], "pick-act");
}

//分分彩 前三 直选和值
function starThreeFrontDirectTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-star-dt","win-number-star3f-direct-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-total-ffc")[0], "pick-act");
}

//分分彩 前三 直选跨度
function starThreeFrontDirectCrossFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-star-dc","win-number-star3f-direct-cross"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-cross-ffc")[0], "pick-act");
}

//分分彩 前三 组三
function starThreeFrontGroup03v2FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-star-group-03","win-number-star3f-group-03"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-03v2-ffc")[0], "pick-act");
}

//分分彩 前三 组六
function starThreeFrontGroup06v2FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-star-group-06","win-number-star3f-group-06"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-06v2-ffc")[0], "pick-act");
}

//分分彩 前三 组三单式
function starThreeFrontGroup03v2singleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","import-area","help-select","win-number-star3f-group-03"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-03v2-single-ffc")[0], "pick-act");
}

//分分彩 前三 组六单式
function starThreeFrontGroup06v2singleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","import-area","help-select","win-number-star3f-group-06"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-06v2-single-ffc")[0], "pick-act");
}

//分分彩 前三 混合组选
function starThreeFrontGroupMixFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","import-area","help-select","win-number-star3f-group-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-mix-ffc")[0], "pick-act");
}

//分分彩 前三 组选和值
function starThreeFrontGroupTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","pick-star3f-group-total-ffc","ball-star-gt","win-number-star3f-direct-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-total-ffc")[0], "pick-act");
}

//分分彩 前三 包胆
function starThreeFrontPromiseFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-star-10balls","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-promise-ffc")[0], "pick-act");
}

//分分彩 前三 其他 和值尾数
function starThreeFrontTotalNumFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-notitle","win-number-star3f-other-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-total-num-ffc")[0], "pick-act");
}

//分分彩 前三 其他 豹子
function starThreeFrontJaquarFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-jaguar","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-jaguar-ffc")[0], "pick-act");
}

//分分彩 前三 其他 顺子
function starThreeFrontSmoothFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-smooth","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-smooth-ssc")[0], "pick-act");
}

//分分彩 前三 其他 对子
function starThreeFrontPairFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-pair","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-pair-ffc")[0], "pick-act");
}

//分分彩 前三 其他 半顺
function starThreeFrontHalfFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-half","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-half-ffc")[0], "pick-act");
}

//分分彩 前三 其他 杂六
function starThreeFrontMix6FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3f-direct-ffc","pick-star3f-group-ffc","pick-star3f-other-ffc","ball-mix6","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-mix6-ffc")[0], "pick-act");
}

//分分彩 中三 直选复式
function starThreeMiddleDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-thousand","ball-hundred","ball-ten","win-number-star3m"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-multi-ffc")[0], "pick-act");
}

//分分彩 中三 直选单式
function starThreeMiddleDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","import-area","help-select","win-number-star3m"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-single-ffc")[0], "pick-act");
}

//分分彩 中三 直选和值
function starThreeMiddleDirectTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-star-dt","win-number-star3m-direct-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-total-ffc")[0], "pick-act");
}

//分分彩 中三 直选跨度
function starThreeMiddleDirectCrossFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-star-dc","win-number-star3m-direct-cross"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-cross-ffc")[0], "pick-act");
}

//分分彩 中三 组三
function starThreeMiddleGroup03v2FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-star-group-03","win-number-star3m-group-03"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-03v2-ffc")[0], "pick-act");
}

//分分彩 中三 组六
function starThreeMiddleGroup06v2FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-star-group-06","win-number-star3m-group-06"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-06v2-ffc")[0], "pick-act");
}

//分分彩 中三 组三单式
function starThreeMiddleGroup03v2singleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","import-area","help-select","win-number-star3m-group-03"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-03v2-single-ffc")[0], "pick-act");
}

//分分彩 中三 组六单式
function starThreeMiddleGroup06v2singleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","import-area","help-select","win-number-star3m-group-06"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-06v2-single-ffc")[0], "pick-act");
}

//分分彩 中三 混合组选
function starThreeMiddleGroupMixFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","import-area","help-select","win-number-star3m-group-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-mix-ffc")[0], "pick-act");
}

//分分彩 中三 组选和值
function starThreeMiddleGroupTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-star-gt","win-number-star3m-direct-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-total-ffc")[0], "pick-act");
}

//分分彩 中三 包胆
function starThreeMiddlePromiseFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-star-10balls","win-number-star3m"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-promise-ffc")[0], "pick-act");
}

//分分彩 中三 其他 和值尾数
function starThreeMiddleTotalNumFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-notitle","win-number-star3m-other-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-total-num-ffc")[0], "pick-act");
}

//分分彩 中三 其他 豹子
function starThreeMiddleJaquarFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-jaguar","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-jaguar-ffc")[0], "pick-act");
}

//分分彩 中三 其他 顺子
function starThreeMiddleSmoothFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-smooth","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-smooth-ffc")[0], "pick-act");
}

//分分彩 中三 其他 对子
function starThreeMiddlePairFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-pair","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-pair-ffc")[0], "pick-act");
}

//分分彩 中三 其他 半顺
function starThreeMiddleHalfFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-half","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-half-ffc")[0], "pick-act");
}

//分分彩 中三 其他 杂六
function starThreeMiddleMix6FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3m-direct-ffc","pick-star3m-group-ffc","pick-star3m-other-ffc","ball-mix6","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3m-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-mix6-ffc")[0], "pick-act");
}

//分分彩 后三 直选复式
function starThreeBackDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-hundred","ball-ten","ball-one","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-multi-ffc")[0], "pick-act");
}

//分分彩 后三 直选单式
function starThreeBackDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","import-area","help-select","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-single-ffc")[0], "pick-act");
}

//分分彩 后三 直选和值
function starThreeBackDirectTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-star-dt","win-number-star3b-direct-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-total-ffc")[0], "pick-act");
}

//分分彩 后三 直选跨度
function starThreeBackDirectCrossFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-star-dc","win-number-star3b-direct-cross"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-cross-ffc")[0], "pick-act");
}

//分分彩 后三 组三
function starThreeBackGroup03v2FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-star-group-03","win-number-star3b-group-03"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-03v2-ffc")[0], "pick-act");
}

//分分彩 后三 组六
function starThreeBackGroup06v2FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-star-group-06","win-number-star3b-group-06"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-06v2-ffc")[0], "pick-act");
}

//分分彩 后三 组三单式
function starThreeBackGroup03v2singleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","import-area","help-select","win-number-star3b-group-03"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-03v2-single-ffc")[0], "pick-act");
}

//分分彩 后三 组六单式
function starThreeBackGroup06v2singleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","import-area","help-select","win-number-star3b-group-06"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-06v2-single-ffc")[0], "pick-act");
}

//分分彩 后三 混合组选
function starThreeBackGroupMixFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","import-area","help-select","win-number-star3b-group-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-mix-ffc")[0], "pick-act");
}

//分分彩 后三 组选和值
function starThreeBackGroupTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-star-gt","win-number-star3b-direct-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-total-ffc")[0], "pick-act");
}

//分分彩 后三 包胆
function starThreeBackPromiseFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-star-10balls","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-promise-ffc")[0], "pick-act");
}

//分分彩 后三 其他 和值尾数
function starThreeBackTotalNumFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-notitle","win-number-star3b-other-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-total-num-ffc")[0], "pick-act");
}

//分分彩 后三 其他 豹子
function starThreeBackJaquarFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-jaguar","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-jaguar-ffc")[0], "pick-act");
}

//分分彩 后三 其他 顺子
function starThreeBackSmoothFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-smooth","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-smooth-ffc")[0], "pick-act");
}

//分分彩 后三 其他 对子
function starThreeBackPairFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-pair","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-pair-ffc")[0], "pick-act");
}

//分分彩 后三 其他 半顺
function starThreeBackHalfFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-half","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-half-ffc")[0], "pick-act");
}

//分分彩 后三 其他 杂六
function starThreeBackMix6FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3b-direct-ffc","pick-star3b-group-ffc","pick-star3b-other-ffc","ball-mix6","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star3b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-mix6-ffc")[0], "pick-act");
}

//分分彩 前二 直选复式
function starTwoFrontDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2f-direct-ffc","pick-star2f-group-ffc","ball-ten-thousand","ball-thousand","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-multi-ffc")[0], "pick-act");
}

//分分彩 前二 直选单式
function starTwoFrontDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star2f-direct-ffc","pick-star2f-group-ffc","import-area","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-single-ffc")[0], "pick-act");
}

//分分彩 前二 直选和值
function starTwoFrontDirectTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2f-direct-ffc","pick-star2f-group-ffc","ball-star-19balls","win-number-star2f-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-total-ffc")[0], "pick-act");
}

//分分彩 前二 直选跨度
function starTwoFrontDirectCrossFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2f-direct-ffc","pick-star2f-group-ffc","ball-star-10balls","win-number-star2f-cross"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-cross-ffc")[0], "pick-act");
}

//分分彩 前二 组选复式
function starTwoFrontGroupMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2f-direct-ffc","pick-star2f-group-ffc","ball-star-group","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-multi-ffc")[0], "pick-act");
}

//分分彩 前二 组选单式
function starTwoFrontGroupSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star2f-direct-ffc","pick-star2f-group-ffc","import-area","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-single-ffc")[0], "pick-act");
}

//分分彩 前二 组选和值
function starTwoFrontGroupTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2f-direct-ffc","pick-star2f-group-ffc","ball-star-17balls","win-number-star2f-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-total-ffc")[0], "pick-act");
}

//分分彩 前二 组选包胆
function starTwoFrontGroupPromiseFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2f-direct-ffc","pick-star2f-group-ffc","ball-star-10balls","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2f-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-promise-ffc")[0], "pick-act");
}

//分分彩 后二 直选复式
function starTwoBackDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2b-direct-ffc","pick-star2b-group-ffc","ball-ten","ball-one","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-multi-ffc")[0], "pick-act");
}

//分分彩 后二 直选单式
function starTwoBackDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star2b-direct-ffc","pick-star2b-group-ffc","import-area","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-single-ffc")[0], "pick-act");
}

//分分彩 后二 直选和值
function starTwoBackDirectTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2b-direct-ffc","pick-star2b-group-ffc","ball-star-19balls","win-number-star2b-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-total-ffc")[0], "pick-act");
}

//分分彩 后二 直选跨度
function starTwoBackDirectCrossFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2b-direct-ffc","pick-star2b-group-ffc","ball-star-10balls","win-number-star2b-cross"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-cross-ffc")[0], "pick-act");
}

//分分彩 后二 组选复式
function starTwoBackGroupMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2b-direct-ffc","pick-star2b-group-ffc","ball-star-group","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-multi-ffc")[0], "pick-act");
}

//分分彩 后二 组选单式
function starTwoBackGroupSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","import-checkbox-area"];
	var showName = ["pick-star2b-direct-ffc","pick-star2b-group-ffc","import-area","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-single-ffc")[0], "pick-act");
}

//分分彩 后二 组选和值
function starTwoBackGroupTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2b-direct-ffc","pick-star2b-group-ffc","ball-star-17balls","win-number-star2b-total"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-total-ffc")[0], "pick-act");
}

//分分彩 后二 组选包胆
function starTwoBackGroupPromiseFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star2b-direct-ffc","pick-star2b-group-ffc","ball-star-10balls","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star2b-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-promise-ffc")[0], "pick-act");
}

//分分彩 一星
function starOneFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star1-ffc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-star1-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star1-ffc-btn-ffc")[0], "pick-act");
}

//分分彩 大小单双 前二大小单双
function bigSmallFrontTwoFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-bs-ffc","ball-star-bs-ten-thousand","ball-star-bs-thousand","win-number-bssd-front02"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-bs-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-f2-ffc")[0], "pick-act");
}

//分分彩 大小单双 后二大小单双
function bigSmallBackTwoFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-bs-ffc","ball-star-bs-ten","ball-star-bs-one","win-number-bs-back02"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-bs-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-b2-ffc")[0], "pick-act");
}

//分分彩 大小单双 任选二大小单双
function bigSmallAnyTwoFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-bs-ffc","ball-star-bs-ten-thousand","ball-star-bs-thousand",,"ball-star-bs-hundred","ball-star-bs-ten","ball-star-bs-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-bs-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-any2-ffc")[0], "pick-act");
}

//分分彩 大小单双 前三大小单双
function bigSmallFrontThreeFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-bs-ffc","ball-star-bs-ten-thousand","ball-star-bs-thousand","ball-star-bs-hundred","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-bs-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-f3-ffc")[0], "pick-act");
}

//分分彩 大小单双 后三大小单双
function bigSmallBackThreeFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-bs-ffc","ball-star-bs-hundred","ball-star-bs-ten","ball-star-bs-one","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-bs-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-b3-ffc")[0], "pick-act");
}

//分分彩 不定位 三星 前三一码不定位
function star3NoAssignFront3Num01FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-f3n1-ffc")[0], "pick-act");
}

//分分彩 不定位 三星 后三一码不定位
function star3NoAssignBack3Num01FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-b3n1-ffc")[0], "pick-act");
}

//分分彩 不定位 三星 前三二码不定位
function star3NoAssignFront3Num02FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-f3n2-ffc")[0], "pick-act");
}

//分分彩 不定位 三星 后三二码不定位
function star3NoAssignBack3Num02FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-b3n2-ffc")[0], "pick-act");
}

//分分彩 不定位 三星 任三一码不定位
function star3NoAssignAny3Num01FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-any3n1-ffc")[0], "pick-act");
}

//分分彩 不定位 四星 四星一码不定位
function star4NoAssignNum01FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-s4n1-ffc")[0], "pick-act");
}

//分分彩 不定位 四星 四星二码不定位
function star4NoAssignNum02FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-s4n2-ffc")[0], "pick-act");
}

//分分彩 不定位 五星 五星一码不定位
function star5NoAssignNum01FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-noassign-s5n1-ffc")[0], "pick-act");
}

//分分彩 不定位 五星 五星二码不定位
function star5NoAssignNum02FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-noassign-s5n2-ffc")[0], "pick-act");
}

//分分彩 不定位 五星 五星三码不定位
function star5NoAssignNum03FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-star3-noassign-ffc","pick-star4-noassign-ffc","pick-star5-noassign-ffc","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-noassign-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-noassign-s5n3-ffc")[0], "pick-act");
}

//分分彩 趣味 五码趣味三星
function Fun05star3FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-fun-ten-thousand","ball-fun-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-5star3-ffc")[0], "pick-act");
}

//分分彩 趣味 四码趣味三星
function Fun04star3FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-fun-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-4star3-ffc")[0], "pick-act");
}

//分分彩 趣味 后三码趣味二星
function FunBack03star2FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-fun-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-b3star2-ffc")[0], "pick-act");
}

//分分彩 趣味 前三趣味二星
function FunFront03star2FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-fun-ten-thousand","ball-thousand","ball-hundred","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-f3star2-ffc")[0], "pick-act");
}

//分分彩 趣味 区间 五码区间三星
function star3SectionNum05FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-section-ten-thousand","ball-section-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-5star3-ffc")[0], "pick-act");
}

//分分彩 趣味 区间 四码区间三星
function star3SectionNum04FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-section-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-4star3-ffc")[0], "pick-act");
}

//分分彩 趣味 区间 后三区间二星
function star2SectionBackNum03FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-section-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-b3star2-ffc")[0], "pick-act");
}

//分分彩 趣味 区间 前三区间二星
function star2SectionFrontNum03FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-section-ten-thousand","ball-thousand","ball-hundred","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-f3star2-ffc")[0], "pick-act");
}

//分分彩 趣味 特殊 一帆风顺
function specialOneFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-one-ffc")[0], "pick-act");
}

//分分彩 趣味 特殊 好事成双
function specialTwoFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-two-ffc")[0], "pick-act");
}

//分分彩 趣味 特殊 三星报喜
function specialThreeFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-three-ffc")[0], "pick-act");
}

//分分彩 趣味 特殊 四季发财
function specialFourFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-fun-ffc","pick-section-ffc","pick-special-ffc","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-funny-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-four-ffc")[0], "pick-act");
}

//分分彩 任选二星 直选复式
function anyTwoDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-multi-ffc")[0], "pick-act");
}

//分分彩 任选二星 直选单式
function anyTwoDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-single-ffc")[0], "pick-act");
}

//分分彩 任选二星 直选和值
function anyTwoDirectTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-19balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-total-ffc")[0], "pick-act");
}

//分分彩 任选二星 直选跨度
function anyTwoDirectCrossFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-10playballs","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-cross-ffc")[0], "pick-act");
}

//分分彩 任选二星 组选复式
function anyTwoGrouptMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-group","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-multi-ffc")[0], "pick-act");
}

//分分彩 任选二星 组选单式
function anyTwoGrouptSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-single-ffc")[0], "pick-act");
}

//分分彩 任选二星 组选和值
function anyTwoGrouptTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-19balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-total-ffc")[0], "pick-act");
}

//分分彩 任选二星 组选包胆
function anyTwoGrouptPromiseFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-10balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-promise-ffc")[0], "pick-act");
}

//分分彩 任选三星 直选复式
function anyThreeDirectMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-multi-ffc")[0], "pick-act");
}

//分分彩 任选三星 直选单式
function anyThreeDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-single-ffc")[0], "pick-act");
}

//分分彩 任选三星 直选和值
function anyThreeDirectTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-dt","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-total-ffc")[0], "pick-act");
}

//分分彩 任选三星 直选跨度
function anyThreeDirectCrossFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-10playballs","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-cross-ffc")[0], "pick-act");
}

//分分彩 任选三星 组三复式
function anyThreeGroup03MultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-group","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-3-multi-ffc")[0], "pick-act");
}

//分分彩 任选三星 组三单式
function anyThreeGroup03ingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-3-single-ffc")[0], "pick-act");
}

//分分彩 任选三星 组六复式
function anyThreeGroup06MultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-group-06","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-6-multi-ffc")[0], "pick-act");
}

//分分彩 任选三星 组六单式
function anyThreeGroup06SingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-6-single-ffc")[0], "pick-act");
}

//分分彩 任选三星 混合组选
function anyThreeGroupMixFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-mix-ffc")[0], "pick-act");
}

//分分彩 任选三星 组选和值
function anyThreeGroupTotalFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-group-total","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-total-ffc")[0], "pick-act");
}

//分分彩 任选三星 组选包胆
function anyThreeGroupPromiseFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-10balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-promise-ffc")[0], "pick-act");
}

//分分彩 任选四星 直选复式
function anyFourDirecttMultiFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-dir-multi-ffc")[0], "pick-act");
}

//分分彩 任选四星 直选单式
function anyFourDirectSingleFFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-dir-single-ffc")[0], "pick-act");
}

//分分彩 任选四星 组24
function anyFourGroup24FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-notitle","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-24-ffc")[0], "pick-act");
}

//分分彩 任选四星 组12
function anyFourGroup12FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-group-double","ball-star-group-single","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-12-ffc")[0], "pick-act");
}

//分分彩 任选四星 组06
function anyFourGroup06FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-group-double","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-06-ffc")[0], "pick-act");
}

//分分彩 任选四星 组04
function anyFourGroup04FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-any2-ffc","pick-any3-ffc","pick-any4-ffc","ball-star-group-triple","ball-star-group-single","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-any-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-04-ffc")[0], "pick-act");
}

//分分彩 龙虎和 万千
function dttTenThousand1000FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-tenthousand1000","win-number-dtt-ten-thousand1000"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand1000-ffc")[0], "pick-act");
}

//分分彩 龙虎和 万百
function dttTenThousand100FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-tenthousand100","win-number-dtt-ten-thousand100"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand100-ffc")[0], "pick-act");
}

//分分彩 龙虎和 万十
function dttTenThousand10FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-tenthousand10","win-number-dtt-ten-thousand10"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand10-ffc")[0], "pick-act");
}

//分分彩 龙虎和 万个
function dttTenThousand01FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-tenthousand01","win-number-dtt-ten-thousand01"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand01-ffc")[0], "pick-act");
}

//分分彩 龙虎和 千百
function dttThousand100FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-thousand100","win-number-dtt-thousand100"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-thousand100-ffc")[0], "pick-act");
}

//分分彩 龙虎和 千十
function dttThousand10FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-thousand10","win-number-dtt-thousand10"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-thousand10-ffc")[0], "pick-act");
}

//分分彩 龙虎和 千个
function dttThousand01FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-thousand01","win-number-dtt-thousand01"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-thousand01-ffc")[0], "pick-act");
}

//分分彩 龙虎和 百十
function dttHundred10FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-hundred10","win-number-dtt-hundred10"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-hundred10-ffc")[0], "pick-act");
}

//分分彩 龙虎和 百个
function dttHundred01FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-hundred01","win-number-dtt-hundred01"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-hundred01-ffc")[0], "pick-act");
}

//分分彩 龙虎和 百个
function dttTen01FFC() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc"];
	var showName = ["pick-dtt-ffc","ball-dtt-ten01","win-number-dtt-ten01"];
	initBall(clearName, hiddenName, showName, 1);
	addClass(document.getElementsByClassName("kind-dtt-ffc")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-ten01-ffc")[0], "pick-act");
}

//11选5 三星 前三直选复式
function starThreeDirectFront3Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-star3-direct-115","pick-star3-group-115","ball-digit-01","ball-digit-02","ball-digit-03","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star3-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-dir-f3-multi-115")[0], "pick-act");
}

//11选5 三星 前三直选单式
function starThreeDirectFront3Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-star3-direct-115","pick-star3-group-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star3-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-dir-f3-single-115")[0], "pick-act");
}

//11选5 三星 前三组选复式
function starThreeGroupFront3Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-star3-direct-115","pick-star3-group-115","ball-front-03","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star3-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-group-f3-multi-115")[0], "pick-act");
}

//11选5 三星 前三组选单式
function starThreeGroupFront3Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-star3-direct-115","pick-star3-group-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star3-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-group-f3-single-115")[0], "pick-act");
}

//11选5 三星 前三组选胆托
function starThreeGroupFront3Pull115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-star3-direct-115","pick-star3-group-115","ball-promise","ball-pull","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star3-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-group-f3-pull-115")[0], "pick-act");
}

//11选5 二星 前二直选复式
function starTwoDirectFront3Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-star2-direct-115","pick-star2-group-115","ball-digit-01","ball-digit-02","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star2-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2-dir-f3-multi-115")[0], "pick-act");
}

//11选5 二星 前二直选单式
function starTwoDirectFront3Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-star2-direct-115","pick-star2-group-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star2-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2-dir-f3-single-115")[0], "pick-act");
}

//11选5 二星 前二组选复式
function starTwoGroupFront3Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-star2-direct-115","pick-star2-group-115","ball-front-02","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star2-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2-group-f3-multi-115")[0], "pick-act");
}

//11选5 二星 前二组选单式
function starTwoGroupFront3Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-star2-direct-115","pick-star2-group-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star2-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2-group-f3-single-115")[0], "pick-act");
}

//11选5 二星 前二组选胆托
function starTwoGroupFront3Pull115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-star2-direct-115","pick-star2-group-115","ball-promise","ball-pull","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-star2-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2-group-f3-pull-115")[0], "pick-act");
}

//11选5 不定位
function starThreeFrontNoAssign115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-star3f-noassign-115","ball-front-03","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-noassign-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-noassign-115-btn")[0], "pick-act");
}

//11选5 定单双
function singleDouble115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-sd-115","ball-sd","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-sd-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-sd-115-btn")[0], "pick-act");
}

//11选5 猜中位
function guessMiddle115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-guess-middle-115","ball-guess-middle","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-qm-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-guess-middle-115-btn")[0], "pick-act");
}

//11选5 定位胆
function Assign115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-assign-115","ball-digit-01","ball-digit-02","ball-digit-03","ball-digit-04","ball-digit-05","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-assign-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-assign-115-btn")[0], "pick-act");
}

//11选5 任选复式 任选一中一
function any11Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-multi-115","ball-any-11","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-multi-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-11-multi-115")[0], "pick-act");
}

//11选5 任选复式 任选二中二
function any22Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-multi-115","ball-any-22","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-multi-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-22-multi-115")[0], "pick-act");
}

//11选5 任选复式任选三中三
function any33Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-multi-115","ball-any-33","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-multi-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-33-multi-115")[0], "pick-act");
}

//11选5 任选复式 任选四中四
function any44Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-multi-115","ball-any-44","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-multi-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-44-multi-115")[0], "pick-act");
}

//11选5 任选复式 任选五中五
function any55Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-multi-115","ball-any-55","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-multi-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-55-multi-115")[0], "pick-act");
}

//11选5 任选复式 任选六中五
function any65Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-multi-115","ball-any-65","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-multi-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-65-multi-115")[0], "pick-act");
}

//11选5 任选复式 任选七中五
function any75Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-multi-115","ball-any-75","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-multi-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-75-multi-115")[0], "pick-act");
}

//11选5 任选复式 任选八中五
function any85Multi115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-multi-115","ball-any-85","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-multi-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-85-multi-115")[0], "pick-act");
}

//11选5 任选单式 任选一中一
function any11Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-any-single-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-single-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-11-single-115")[0], "pick-act");
}

//11选5 任选单式 任选二中二
function any22Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-any-single-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-single-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-22-single-115")[0], "pick-act");
}

//11选5 任选单式 任选三中三
function any33Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-any-single-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-single-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-33-single-115")[0], "pick-act");
}

//11选5 任选单式 任选四中四
function any44Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-any-single-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-single-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-44-single-115")[0], "pick-act");
}

//11选5 任选单式 任选五中五
function any55Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-any-single-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-single-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-55-single-115")[0], "pick-act");
}

//11选5 任选单式 任选六中五
function any65Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-any-single-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-single-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-65-single-115")[0], "pick-act");
}

//11选5 任选单式 任选七中五
function any75Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-any-single-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-single-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-75-single-115")[0], "pick-act");
}

//11选5 任选单式 任选八中五
function any85Single115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","import-checkbox-area"];
	var showName = ["pick-any-single-115","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-single-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-85-single-115")[0], "pick-act");
}

//11选5 任选胆托 任选二中二
function any22Promise115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-promise-115","ball-promise","ball-pull","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-promise-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-22-promise-115")[0], "pick-act");
}

//11选5 任选胆托 任选三中三
function any33Promise115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-promise-115","ball-promise","ball-pull","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-promise-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-33-promise-115")[0], "pick-act");
}

//11选5 任选胆托 任选四中四
function any44Promise115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-promise-115","ball-promise","ball-pull","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-promise-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-44-promise-115")[0], "pick-act");
}

//11选5 任选胆托 任选五中五
function any55Promise115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-promise-115","ball-promise","ball-pull","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-promise-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-55-promise-115")[0], "pick-act");
}

//11选5 任选胆托 任选六中五
function any65Promise115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-promise-115","ball-promise","ball-pull","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-promise-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-65-promise-115")[0], "pick-act");
}

//11选5 任选胆托 任选七中五
function any75Promise115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-promise-115","ball-promise","ball-pull","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-promise-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-75-promise-115")[0], "pick-act");
}

//11选5 任选胆托 任选八中五
function any85Promise115() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03"];
	var showName = ["pick-any-promise-115","ball-promise","ball-pull","win-number-star5"];
	initBall(clearName, hiddenName, showName, 3);
	addClass(document.getElementsByClassName("kind-any-promise-115")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any-85-promise-115")[0], "pick-act");
}

//排列三/五 五星 直选复式
function starFiveDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-direct-multi-35")[0], "pick-act");
}

//排列三/五 五星 直选单式
function starFiveDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-direct-single-35")[0], "pick-act");
}

//排列三/五 五星 组选120
function starFiveGroup12035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-star5-group120","win-number-star5-group-120"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-120-35")[0], "pick-act");
}

//排列三/五 五星 组选60
function starFiveGroup6035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-star-group-single","ball-star-group-double","win-number-star5-group-60"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-60-35")[0], "pick-act");
}

//排列三/五 五星 组选30
function starFiveGroup3035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-star-group-single","ball-star-group-double","win-number-star5-group-30"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-30-35")[0], "pick-act");
}

//排列三/五 五星 组选20
function starFiveGroup2035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-star-group-single","ball-star-group-triple","win-number-star5-group-20"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-20-35")[0], "pick-act");
}

//排列三/五 五星 组选10
function starFiveGroup1035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-star-group-triple","ball-star-group-double","win-number-star5-group-10"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-10-35")[0], "pick-act");
}

//排列三/五 五星 组选5
function starFiveGroup0535() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-star-group-single","ball-star-group-quadruple","win-number-star5-group-05"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-group-05-35")[0], "pick-act");
}

//排列三/五 五星 其他 总和大小单双
function starFiveOtherTotalBS35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-star5-other-total-bs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-other-total-bs-35")[0], "pick-act");
}

//排列三/五 五星 其他 总和组合大小单双
function starFiveOtherTotalBSGroup35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","ball-star5-other-total-bsgroup","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star5-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-other-total-bsgroup-35")[0], "pick-act");
}

//排列三/五 前四 直选复式
function starFourFrontDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4f-direct-35","pick-star4f-group-35","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","win-number-star4f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-direct-multi-35")[0], "pick-act");
}

//排列三/五 前四 直选单式
function starFourFrontDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star4f-direct-35","pick-star4f-group-35","import-area","win-number-star4f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-direct-single-35")[0], "pick-act");
}

//排列三/五 前四 组24
function starFourFrontGroup2435() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4f-direct-35","pick-star4f-group-35","ball-star-10playballs","win-number-star4f-group-24"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-24-35")[0], "pick-act");
}

//排列三/五 前四 组12
function starFourFrontGroup1235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4f-direct-35","pick-star4f-group-35","ball-star-group-double","ball-star-group-single","win-number-star4f-group-12"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-12-35")[0], "pick-act");
}

//排列三/五 前四 组06
function starFourFrontGroup0635() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4f-direct-35","pick-star4f-group-35","ball-star-group-double","win-number-star4f-group-06"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-06-35")[0], "pick-act");
}

//排列三/五 前四 组04
function starFourFrontGroup0435() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4f-direct-35","pick-star4f-group-35","ball-star-group-triple","ball-star-group-single","win-number-star4f-group-04"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4f-group-04-35")[0], "pick-act");
}

//排列三/五 后四 直选复式
function starFourBackDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4b-direct-35","pick-star4b-group-35","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star4b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-direct-multi-35")[0], "pick-act");
}

//排列三/五 后四 直选单式
function starFourBackDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star4b-direct-35","pick-star4b-group-35","import-area","win-number-star4b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-direct-single-35")[0], "pick-act");
}

//排列三/五 后四 组24
function starFourBackGroup2435() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4b-direct-35","pick-star4b-group-35","ball-star-10playballs","win-number-star4b-group-24"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-24-35")[0], "pick-act");
}

//排列三/五 后四 组12
function starFourBackGroup1235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4b-direct-35","pick-star4b-group-35","ball-star-group-double","ball-star-group-single","win-number-star4b-group-12"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-12-35")[0], "pick-act");
}

//排列三/五 后四 组06
function starFourBackGroup0635() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4b-direct-35","pick-star4b-group-35","ball-star-group-double","win-number-star4b-group-06"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-06-35")[0], "pick-act");
}

//排列三/五 后四 组04
function starFourBackGroup0435() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star4b-direct-35","pick-star4b-group-35","ball-star-group-triple","ball-star-group-single","win-number-star4b-group-04"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star4b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star4b-group-04-35")[0], "pick-act");
}

//排列三/五 前三 直选复式
function starThreeFrontDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-ten-thousand","ball-thousand","ball-hundred","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-multi-35")[0], "pick-act");
}

//排列三/五 前三 直选单式
function starThreeFrontDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","import-area","help-select","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-single-35")[0], "pick-act");
}

//排列三/五 前三 直选和值
function starThreeFrontDirectTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-star-dt","win-number-star3f-direct-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-total-35")[0], "pick-act");
}

//排列三/五 前三 直选跨度
function starThreeFrontDirectCross35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-star-dc","win-number-star3f-direct-cross"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-direct-cross-35")[0], "pick-act");
}

//排列三/五 前三 组三
function starThreeFrontGroup03v235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-star-group-03","win-number-star3f-group-03"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-03v2-35")[0], "pick-act");
}

//排列三/五 前三 组六
function starThreeFrontGroup06v235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-star-group-06","win-number-star3f-group-06"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-06v2-35")[0], "pick-act");
}

//排列三/五 前三 组三单式
function starThreeFrontGroup03v2single35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","import-area","help-select","win-number-star3f-group-03"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-03v2-single-35")[0], "pick-act");
}

//排列三/五 前三 组六单式
function starThreeFrontGroup06v2single35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","import-area","help-select","win-number-star3f-group-06"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-06v2-single-35")[0], "pick-act");
}

//排列三/五 前三 混合组选
function starThreeFrontGroupMix35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","import-area","help-select","win-number-star3f-group-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-mix-35")[0], "pick-act");
}

//排列三/五 前三 组选和值
function starThreeFrontGroupTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-star-gt","win-number-star3f-direct-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-group-total-35")[0], "pick-act");
}

//排列三/五 前三 包胆
function starThreeFrontPromise35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-star-10balls","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-promise-35")[0], "pick-act");
}

//排列三/五 前三 其他 和值尾数
function starThreeFrontTotalNum35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-notitle","win-number-star3f-other-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-total-num-35")[0], "pick-act");
}

//排列三/五 前三 其他 豹子
function starThreeFrontJaquar35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-jaguar","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-jaguar-35")[0], "pick-act");
}

//排列三/五 前三 其他 顺子
function starThreeFrontSmooth35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-smooth","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-smooth-35")[0], "pick-act");
}

//排列三/五 前三 其他 对子
function starThreeFrontPair35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-pair","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-pair-35")[0], "pick-act");
}

//排列三/五 前三 其他 半顺
function starThreeFrontHalf35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-half","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-half-35")[0], "pick-act");
}

//排列三/五 前三 其他 杂六
function starThreeFrontMix635() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3f-direct-35","pick-star3f-group-35","pick-star3f-other-35","ball-mix6","win-number-star3f-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-other-mix6-35")[0], "pick-act");
}

//排列三/五 中三 直选复式
function starThreeMiddleDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-thousand","ball-hundred","ball-ten","win-number-star3m"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-multi-35")[0], "pick-act");
}

//排列三/五 中三 直选单式
function starThreeMiddleDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","import-area","help-select","win-number-star3m"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-single-35")[0], "pick-act");
}

//排列三/五 中三 直选和值
function starThreeMiddleDirectTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-star-dt","win-number-star3m-direct-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-total-35")[0], "pick-act");
}

//排列三/五 中三 直选跨度
function starThreeMiddleDirectCross35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-star-dc","win-number-star3m-direct-cross"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-direct-cross-35")[0], "pick-act");
}

//排列三/五 中三 组三
function starThreeMiddleGroup03v235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-star-group-03","win-number-star3m-group-03"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-03v2-35")[0], "pick-act");
}

//排列三/五 中三 组六
function starThreeMiddleGroup06v235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-star-group-06","win-number-star3m-group-06"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-06v2-35")[0], "pick-act");
}

//排列三/五 中三 组三单式
function starThreeMiddleGroup03v2single35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","import-area","help-select","win-number-star3m-group-03"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-03v2-single-35")[0], "pick-act");
}

//排列三/五 中三 组六单式
function starThreeMiddleGroup06v2single35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","import-area","help-select","win-number-star3m-group-06"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-06v2-single-35")[0], "pick-act");
}

//排列三/五 中三 混合组选
function starThreeMiddleGroupMix35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","import-area","help-select","win-number-star3m-group-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-mix-35")[0], "pick-act");
}

//排列三/五 中三 组选和值
function starThreeMiddleGroupTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-star-gt","win-number-star3m-direct-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-group-total-35")[0], "pick-act");
}

//排列三/五 中三 包胆
function starThreeMiddlePromise35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-star-10balls","win-number-star3m"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-promise-35")[0], "pick-act");
}

//排列三/五 中三 其他 和值尾数
function starThreeMiddleTotalNum35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-notitle","win-number-star3m-other-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-total-num-35")[0], "pick-act");
}

//排列三/五 中三 其他 豹子
function starThreeMiddleJaquar35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-jaguar","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-jaguar-35")[0], "pick-act");
}

//排列三/五 中三 其他 顺子
function starThreeMiddleSmooth35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-smooth","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-smooth-35")[0], "pick-act");
}

//排列三/五 中三 其他 对子
function starThreeMiddlePair35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-pair","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-pair-35")[0], "pick-act");
}

//排列三/五 中三 其他 半顺
function starThreeMiddleHalf35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-half","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-half-35")[0], "pick-act");
}

//排列三/五 中三 其他 杂六
function starThreeMiddleMix635() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3m-direct-35","pick-star3m-group-35","pick-star3m-other-35","ball-mix6","win-number-star3m-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3m-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3m-other-mix6-35")[0], "pick-act");
}

//排列三/五 后三 直选复式
function starThreeBackDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-hundred","ball-ten","ball-one","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-multi-35")[0], "pick-act");
}

//排列三/五 后三 直选单式
function starThreeBackDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","import-area","help-select","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-single-35")[0], "pick-act");
}

//排列三/五 后三 直选和值
function starThreeBackDirectTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-star-dt","win-number-star3b-direct-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-total-35")[0], "pick-act");
}

//排列三/五 后三 直选跨度
function starThreeBackDirectCross35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-star-dc","win-number-star3b-direct-cross"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-direct-cross-35")[0], "pick-act");
}

//排列三/五 后三 组三
function starThreeBackGroup03v235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-star-group-03","win-number-star3b-group-03"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-03v2-35")[0], "pick-act");
}

//排列三/五 后三 组六
function starThreeBackGroup06v235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-star-group-06","win-number-star3b-group-06"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-06v2-35")[0], "pick-act");
}

//排列三/五 后三 组三单式
function starThreeBackGroup03v2single35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","import-area","help-select","win-number-star3b-group-03"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-03v2-single-35")[0], "pick-act");
}

//排列三/五 后三 组六单式
function starThreeBackGroup06v2single35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","import-area","help-select","win-number-star3b-group-06"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-06v2-single-35")[0], "pick-act");
}

//排列三/五 后三 混合组选
function starThreeBackGroupMix35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","import-area","help-select","win-number-star3b-group-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-mix-35")[0], "pick-act");
}

//排列三/五 后三 组选和值
function starThreeBackGroupTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-star-gt","win-number-star3b-direct-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-group-total-35")[0], "pick-act");
}

//排列三/五 后三 包胆
function starThreeBackPromise35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-star-10balls","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-promise-35")[0], "pick-act");
}

//排列三/五 后三 其他 和值尾数
function starThreeBackTotalNum35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-notitle","win-number-star3b-other-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-total-num-35")[0], "pick-act");
}

//排列三/五 后三 其他 豹子
function starThreeBackJaquar35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-jaguar","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-jaguar-35")[0], "pick-act");
}

//排列三/五 后三 其他 顺子
function starThreeBackSmooth35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-smooth","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-smooth-35")[0], "pick-act");
}

//排列三/五 后三 其他 对子
function starThreeBackPair35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-pair","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-pair-35")[0], "pick-act");
}

//排列三/五 后三 其他 半顺
function starThreeBackHalf35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-half","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-half-35")[0], "pick-act");
}

//排列三/五 后三 其他 杂六
function starThreeBackMix635() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3b-direct-35","pick-star3b-group-35","pick-star3b-other-35","ball-mix6","win-number-star3b-other-mix"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star3b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-other-mix6-35")[0], "pick-act");
}

//排列三/五 前二 直选复式
function starTwoFrontDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2f-direct-35","pick-star2f-group-35","ball-ten-thousand","ball-thousand","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-multi-35")[0], "pick-act");
}

//排列三/五 前二 直选单式
function starTwoFrontDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star2f-direct-35","pick-star2f-group-35","import-area","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-single-35")[0], "pick-act");
}

//排列三/五 前二 直选和值
function starTwoFrontDirectTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2f-direct-35","pick-star2f-group-35","ball-star-19balls","win-number-star2f-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-total-35")[0], "pick-act");
}

//排列三/五 前二 直选跨度
function starTwoFrontDirectCross35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2f-direct-35","pick-star2f-group-35","ball-star-10balls","win-number-star2f-cross"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-cross-35")[0], "pick-act");
}

//排列三/五 前二 组选复式
function starTwoFrontGroupMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2f-direct-35","pick-star2f-group-35","ball-star-group","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-multi-35")[0], "pick-act");
}

//排列三/五 前二 组选单式
function starTwoFrontGroupSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star2f-direct-35","pick-star2f-group-35","import-area","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-single-35")[0], "pick-act");
}

//排列三/五 前二 组选和值
function starTwoFrontGroupTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2f-direct-35","pick-star2f-group-35","ball-star-17balls","win-number-star2f-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-total-35")[0], "pick-act");
}

//排列三/五 前二 组选包胆
function starTwoFrontGroupPromise35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2f-direct-35","pick-star2f-group-35","ball-star-10balls","win-number-star2f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2f-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-promise-35")[0], "pick-act");
}

//排列三/五 后二 直选复式
function starTwoBackDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2b-direct-35","pick-star2b-group-35","ball-ten","ball-one","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-multi-35")[0], "pick-act");
}

//排列三/五 后二 直选单式
function starTwoBackDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star2b-direct-35","pick-star2b-group-35","import-area","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-single-35")[0], "pick-act");
}

//排列三/五 后二 直选和值
function starTwoBackDirectTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2b-direct-35","pick-star2b-group-35","ball-star-19balls","win-number-star2b-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-total-35")[0], "pick-act");
}

//排列三/五 后二 直选跨度
function starTwoBackDirectCross35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2b-direct-35","pick-star2b-group-35","ball-star-10balls","win-number-star2b-cross"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-cross-35")[0], "pick-act");
}

//排列三/五 后二 组选复式
function starTwoBackGroupMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2b-direct-35","pick-star2b-group-35","ball-star-group","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-multi-35")[0], "pick-act");
}

//排列三/五 后二 组选单式
function starTwoBackGroupSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","import-checkbox-area"];
	var showName = ["pick-star2b-direct-35","pick-star2b-group-35","import-area","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-single-35")[0], "pick-act");
}

//排列三/五 后二 组选和值
function starTwoBackGroupTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2b-direct-35","pick-star2b-group-35","ball-star-17balls","win-number-star2b-total"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-total-35")[0], "pick-act");
}

//排列三/五 后二 组选包胆
function starTwoBackGroupPromise35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star2b-direct-35","pick-star2b-group-35","ball-star-10balls","win-number-star2b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star2b-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-promise-35")[0], "pick-act");
}

//排列三/五 一星
function starOne35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star1-35","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-star1-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star1-35-btn")[0], "pick-act");
}

//排列三/五 大小单双 前二大小单双
function bigSmallFrontTwo35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-bs-35","ball-star-bs-ten-thousand","ball-star-bs-thousand","win-number-bssd-front02"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-bs-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-f2-35")[0], "pick-act");
}

//排列三/五 大小单双 后二大小单双
function bigSmallBackTwo35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-bs-35","ball-star-bs-ten","ball-star-bs-one","win-number-bs-back02"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-bs-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-b2-35")[0], "pick-act");
}

//排列三/五 大小单双 任选二大小单双
function bigSmallAnyTwo35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-bs-35","ball-star-bs-ten-thousand","ball-star-bs-thousand",,"ball-star-bs-hundred","ball-star-bs-ten","ball-star-bs-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-bs-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-any2-35")[0], "pick-act");
}

//排列三/五 大小单双 前三大小单双
function bigSmallFrontThree35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-bs-35","ball-star-bs-ten-thousand","ball-star-bs-thousand","ball-star-bs-hundred","win-number-star3f"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-bs-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-f3-35")[0], "pick-act");
}

//排列三/五 大小单双 后三大小单双
function bigSmallBackThree35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-bs-35","ball-star-bs-hundred","ball-star-bs-ten","ball-star-bs-one","win-number-star3b"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-bs-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bigsmall-b3-35")[0], "pick-act");
}

//排列三/五 不定位 三星 前三一码不定位
function star3NoAssignFront3Num0135() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-f3n1-35")[0], "pick-act");
}

//排列三/五 不定位 三星 后三一码不定位
function star3NoAssignBack3Num0135() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-b3n1-35")[0], "pick-act");
}

//排列三/五 不定位 三星 前三二码不定位
function star3NoAssignFront3Num0235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-f3n2-35")[0], "pick-act");
}

//排列三/五 不定位 三星 后三二码不定位
function star3NoAssignBack3Num0235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-b3n2-35")[0], "pick-act");
}

//排列三/五 不定位 三星 任三一码不定位
function star3NoAssignAny3Num0135() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-any3n1-35")[0], "pick-act");
}

//排列三/五 不定位 四星 四星一码不定位
function star4NoAssignNum0135() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-s4n1-35")[0], "pick-act");
}

//排列三/五 不定位 四星 四星二码不定位
function star4NoAssignNum0235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-noassign-s4n2-35")[0], "pick-act");
}

//排列三/五 不定位 五星 五星一码不定位
function star5NoAssignNum0135() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-noassign-s5n1-35")[0], "pick-act");
}

//排列三/五 不定位 五星 五星二码不定位
function star5NoAssignNum0235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-noassign-s5n2-35")[0], "pick-act");
}

//排列三/五 不定位 五星 五星三码不定位
function star5NoAssignNum0335() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-star3-noassign-35","pick-star4-noassign-35","pick-star5-noassign-35","ball-noassign","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-noassign-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star5-noassign-s5n3-35")[0], "pick-act");
}

//排列三/五 趣味 五码趣味三星
function Fun05star335() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-fun-ten-thousand","ball-fun-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-5star3-35")[0], "pick-act");
}

//排列三/五 趣味 四码趣味三星
function Fun04star335() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-fun-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-4star3-35")[0], "pick-act");
}

//排列三/五 趣味 后三码趣味二星
function FunBack03star235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-fun-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-b3star2-35")[0], "pick-act");
}

//排列三/五 趣味 前三趣味二星
function FunFront03star235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-fun-ten-thousand","ball-thousand","ball-hundred","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-fun-f3star2-35")[0], "pick-act");
}

//排列三/五 趣味 区间 五码区间三星
function star3SectionNum0535() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-section-ten-thousand","ball-section-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-5star3-35")[0], "pick-act");
}

//排列三/五 趣味 区间 四码区间三星
function star3SectionNum0435() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-section-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-4star3-35")[0], "pick-act");
}

//排列三/五 趣味 区间 后三区间二星
function star2SectionBackNum0335() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-section-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-b3star2-35")[0], "pick-act");
}

//排列三/五 趣味 区间 前三区间二星
function star2SectionFrontNum0335() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-section-ten-thousand","ball-thousand","ball-hundred","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-section-f3star2-35")[0], "pick-act");
}

//排列三/五 趣味 特殊 一帆风顺
function specialOne35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-one-35")[0], "pick-act");
}

//排列三/五 趣味 特殊 好事成双
function specialTwo35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-two-35")[0], "pick-act");
}

//排列三/五 趣味 特殊 三星报喜
function specialThree35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-three-35")[0], "pick-act");
}

//排列三/五 趣味 特殊 四季发财
function specialFour35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-fun-35","pick-section-35","pick-special-35","ball-star-10playballs","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-funny-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-special-four-35")[0], "pick-act");
}

//排列三/五 任选二星 直选复式
function anyTwoDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-multi-35")[0], "pick-act");
}

//排列三/五 任选二星 直选单式
function anyTwoDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-single-35")[0], "pick-act");
}

//排列三/五 任选二星 直选和值
function anyTwoDirectTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-19balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-total-35")[0], "pick-act");
}

//排列三/五 任选二星 直选跨度
function anyTwoDirectCross35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-10playballs","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-dir-cross-35")[0], "pick-act");
}

//排列三/五 任选二星 组选复式
function anyTwoGrouptMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-group","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-multi-35")[0], "pick-act");
}

//排列三/五 任选二星 组选单式
function anyTwoGrouptSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-single-35")[0], "pick-act");
}

//排列三/五 任选二星 组选和值
function anyTwoGrouptTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-19balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-total-35")[0], "pick-act");
}

//排列三/五 任选二星 组选包胆
function anyTwoGrouptPromise35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-10balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any2-group-promise-35")[0], "pick-act");
}

//排列三/五 任选三星 直选复式
function anyThreeDirectMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-multi-35")[0], "pick-act");
}

//排列三/五 任选三星 直选单式
function anyThreeDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-single-35")[0], "pick-act");
}

//排列三/五 任选三星 直选和值
function anyThreeDirectTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-dt","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-total-35")[0], "pick-act");
}

//排列三/五 任选三星 直选跨度
function anyThreeDirectCross35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-10playballs","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-dir-cross-35")[0], "pick-act");
}

//排列三/五 任选三星 组三复式
function anyThreeGroup03Multi35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-group","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-3-multi-35")[0], "pick-act");
}

//排列三/五 任选三星 组三单式
function anyThreeGroup03ingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-3-single-35")[0], "pick-act");
}

//排列三/五 任选三星 组六复式
function anyThreeGroup06Multi35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-group-06","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-6-multi-35")[0], "pick-act");
}

//排列三/五 任选三星 组六单式
function anyThreeGroup06Single35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-6-single-35")[0], "pick-act");
}

//排列三/五 任选三星 混合组选
function anyThreeGroupMix35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-group-mix-35")[0], "pick-act");
}

//排列三/五 任选三星 组选和值
function anyThreeGroupTotal35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-group-total","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-total-35")[0], "pick-act");
}

//排列三/五 任选三星 组选包胆
function anyThreeGroupPromise35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-10balls","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any3-promise-35")[0], "pick-act");
}

//排列三/五 任选四星 直选复式
function anyFourDirecttMulti35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-ten-thousand","ball-thousand","ball-hundred","ball-ten","ball-one","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-dir-multi-35")[0], "pick-act");
}

//排列三/五 任选四星 直选单式
function anyFourDirectSingle35() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","import-area","import-checkbox-area","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-dir-single-35")[0], "pick-act");
}

//排列三/五 任选四星 组24
function anyFourGroup2435() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-notitle","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-24-35")[0], "pick-act");
}

//排列三/五 任选四星 组12
function anyFourGroup1235() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-group-double","ball-star-group-single","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-12-35")[0], "pick-act");
}

//排列三/五 任选四星 组06
function anyFourGroup0635() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-group-double","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-06-35")[0], "pick-act");
}

//排列三/五 任选四星 组04
function anyFourGroup0435() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-any2-35","pick-any3-35","pick-any4-35","ball-star-group-triple","ball-star-group-single","ball-checkbox","win-number-star5"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-any-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-any4-group-04-35")[0], "pick-act");
}

//排列三/五 龙虎和 万千
function dttTenThousand100035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-tenthousand1000","win-number-dtt-ten-thousand1000"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand1000-35")[0], "pick-act");
}

//排列三/五 龙虎和 万百
function dttTenThousand10035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-tenthousand100","win-number-dtt-ten-thousand100"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand100-35")[0], "pick-act");
}

//排列三/五 龙虎和 万十
function dttTenThousand1035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-tenthousand10","win-number-dtt-ten-thousand10"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand10-35")[0], "pick-act");
}

//排列三/五 龙虎和 万个
function dttTenThousand0135() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-tenthousand01","win-number-dtt-ten-thousand01"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-tenthousand01-35")[0], "pick-act");
}

//排列三/五 龙虎和 千百
function dttThousand10035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-thousand100","win-number-dtt-thousand100"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-thousand100-35")[0], "pick-act");
}

//排列三/五 龙虎和 千十
function dttThousand1035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-thousand10","win-number-dtt-thousand10"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-thousand10-35")[0], "pick-act");
}

//排列三/五 龙虎和 千个
function dttThousand0135() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-thousand01","win-number-dtt-thousand01"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-thousand01-35")[0], "pick-act");
}

//排列三/五 龙虎和 百十
function dttHundred1035() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-hundred10","win-number-dtt-hundred10"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-hundred10-35")[0], "pick-act");
}

//排列三/五 龙虎和 百个
function dttHundred0135() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-hundred01","win-number-dtt-hundred01"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-hundred01-35")[0], "pick-act");
}

//排列三/五 龙虎和 百个
function dttTen0135() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35"];
	var showName = ["pick-dtt-35","ball-dtt-ten01","win-number-dtt-ten01"];
	initBall(clearName, hiddenName, showName, 2);
	addClass(document.getElementsByClassName("kind-dtt-35")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-ten01-35")[0], "pick-act");
}

//3D 三星 直选复式
function starThreeDirectMulti3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","ball-hundred","ball-ten","ball-one","win-number-star3"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-direct-multi-3d")[0], "pick-act");
}

//3D 三星 直选单式
function starThreeDirectSingle3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","import-area","help-select","win-number-star3"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-direct-single-3d")[0], "pick-act");
}

//3D 三星 直选和值
function starThreeDirectTotal3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","ball-star-dt","win-number-star3-direct-total-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-direct-total-3d")[0], "pick-act");
}

//3D 三星 组三
function starThreeGroup03v23D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","ball-star-group-03","win-number-star3-group-03-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-group-03v2-3d")[0], "pick-act");
}

//3D 三星 组六
function starThreeGroup06v23D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","ball-star-group-06","win-number-star3-group-06-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-group-06v2-3d")[0], "pick-act");
}

//3D 三星 组三单式
function starThreeGroup03v2single3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","import-area","help-select","win-number-star3-group-03-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-group-03v2-single-3d")[0], "pick-act");
}

//3D 三星 组六单式
function starThreeGroup06v2single3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","import-area","help-select","win-number-star3-group-06-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-group-06v2-single-3d")[0], "pick-act");
}

//3D 三星 混合组选
function starThreeGroupMix3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["import-checkbox-area"];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","import-area","help-select","win-number-star3-group-mix-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-group-mix-3d")[0], "pick-act");
}

//3D 三星 组选和值
function starThreeGroupTotal3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","ball-star-gt","win-number-star3-direct-total-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-group-total-3d")[0], "pick-act");
}

//3D 三星 包胆
function starThreePromise3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-star3-direct-3d","pick-star3-group-3d","ball-star-10balls","win-number-star3"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star3-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3-promise-3d")[0], "pick-act");
}

//3D 前二 直选复式
function starTwoFrontDirectMulti3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-star2f-direct-3d","pick-star2f-group-3d","ball-hundred","ball-ten","win-number-star3f-02-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2f-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-multi-3d")[0], "pick-act");
}

//3D 前二 直选单式
function starTwoFrontDirectSingle3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d","import-checkbox-area"];
	var showName = ["pick-star2f-direct-3d","pick-star2f-group-3d","import-area","win-number-star3f-02-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2f-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-direct-single-3d")[0], "pick-act");
}

//3D 前二 组选复式
function starTwoFrontGroupMulti3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-star2f-direct-3d","pick-star2f-group-3d","ball-star-group","win-number-star3f-02-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2f-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-multi-3d")[0], "pick-act");
}

//3D 前二 组选单式
function starTwoFrontGroupSingle3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d","import-checkbox-area"];
	var showName = ["pick-star2f-direct-3d","pick-star2f-group-3d","import-area","win-number-star3f-02-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2f-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-single-3d")[0], "pick-act");
}

//3D 前二 组选和值
function starTwoFrontGroupTotal3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-star2f-direct-3d","pick-star2f-group-3d","ball-star-17balls"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2f-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-total-3d")[0], "pick-act");
}

//3D 前二 组选包胆
function starTwoFrontGroupPromise3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-star2f-direct-3d","pick-star2f-group-3d","ball-star-10balls"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2f-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-group-promise-3d")[0], "pick-act");
}

//3D 后二 直选复式
function starTwoBackDirectMulti3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-star2b-direct-3d","pick-star2b-group-3d","ball-ten","ball-one","win-number-star3b-02-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2b-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-multi-3d")[0], "pick-act");
}

//3D 后二 直选单式
function starTwoBackDirectSingle3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d","import-checkbox-area"];
	var showName = ["pick-star2b-direct-3d","pick-star2b-group-3d","import-area","win-number-star3b-02-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2b-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-direct-single-3d")[0], "pick-act");
}

//3D 后二 组选复式
function starTwoBackGroupMulti3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-star2b-direct-3d","pick-star2b-group-3d","ball-star-group","win-number-star3b-02-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2b-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-multi-3d")[0], "pick-act");
}

//3D 后二 组选单式
function starTwoBackGroupSingle3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d","import-checkbox-area"];
	var showName = ["pick-star2b-direct-3d","pick-star2b-group-3d","import-area","win-number-star3b-02-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star2b-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-group-single-3d")[0], "pick-act");
}

//3D 一星 定位胆
function starOne3D() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-star1-3d","ball-hundred","ball-ten","ball-one","win-number-star3"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-star1-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star1-3d-btn")[0], "pick-act");
}

//3D 不定位 前后三一码不定位
function noAssign3dFb3n1() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-noassign-3d","ball-noassign-3d","win-number-star3"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-noassign-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-noassign-fb3n1-3d")[0], "pick-act");
}
//3D 不定位 前后三二码不定位
function noAssign3dFb3n2() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-noassign-3d","ball-noassign-3d","win-number-star3"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-noassign-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-noassign-fb3n2-3d")[0], "pick-act");
}

//3D 龙虎和 百十
function dttHundred103D() {	
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-dtt-3d","ball-dtt-hundred10","win-number-dtt-hundred10-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-dtt-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-hundred10-3d")[0], "pick-act");
}

//3D 龙虎和 百个
function dttHundred013D() {	
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-dtt-3d","ball-dtt-hundred01","win-number-dtt-hundred01-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-dtt-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-hundred01-3d")[0], "pick-act");
}

//3D 龙虎和 十个
function dttTen01S3D() {	
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-star3-direct-3d","pick-star3-group-3d"];
	var showName = ["pick-dtt-3d","ball-dtt-ten01","win-number-dtt-ten01-3d"];
	initBall(clearName, hiddenName, showName, 6);
	addClass(document.getElementsByClassName("kind-dtt-3d")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dtt-ten01-3d")[0], "pick-act");
}

//PK10 冠亚 和值
function winTotal() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-win-pk10","ball-win-total-pk10","win-number-winsecond-total-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-win-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-win-total-pk10")[0], "pick-act");
}

//PK10 冠亚 大小单双
function winBigSmall() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10"];
	var showName = ["pick-win-pk10","ball-win-bs-pk10","win-number-winsecond-total-bsds-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-win-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-win-bs-pk10")[0], "pick-act");
}

//PK10 猜名次 前五名
function guessRankF5() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10"];
	var showName = ["pick-gr-pk10","ball-gr01-pk10","ball-gr02-pk10","ball-gr03-pk10","ball-gr04-pk10","ball-gr05-pk10","win-number-guess-rank-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-gr-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-grf5-pk10")[0], "pick-act");
}

//PK10 猜名次 后五名
function guessRankB5() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10"];
	var showName = ["pick-gr-pk10","ball-gr06-pk10","ball-gr07-pk10","ball-gr08-pk10","ball-gr09-pk10","ball-gr10-pk10","win-number-guess-rank-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-gr-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-grb5-pk10")[0], "pick-act");
}

//PK10 猜名次 全部名次
function guessRankAll() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10"];
	var showName = ["pick-gr-pk10","ball-gr01-pk10","ball-gr02-pk10","ball-gr03-pk10","ball-gr04-pk10","ball-gr05-pk10","ball-gr06-pk10","ball-gr07-pk10","ball-gr08-pk10","ball-gr09-pk10","ball-gr10-pk10","win-number-guess-rank-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-gr-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-grall-pk10")[0], "pick-act");
}

//PK10 龙虎
function dragonTigerPK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10"];
	var showName = ["pick-dt-pk10","ball-dt1v10-pk10","ball-dt2v9-pk10","ball-dt3v8-pk10","ball-dt4v7-pk10","ball-dt5v6-pk10","win-number-dragon-tiger-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-dt-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-dt-pk10-btn")[0], "pick-act");
}

//PK10 前后三星 精确前三 单式
function starThreeFrontSinglePK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10","import-checkbox-area"];
	var showName = ["pick-star3f-pk10","pick-star3b-pk10","import-area","win-number-star3f-03-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-star3fb-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-pk10-single")[0], "pick-act");
}

//PK10 前后三星 精确前三 复式
function starThreeFrontMultiPK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10"];
	var showName = ["pick-star3f-pk10","pick-star3b-pk10","ball-champion-pk10","ball-second-pk10","ball-third-pk10","win-number-star3f-03-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-star3fb-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3f-pk10-multi")[0], "pick-act");
}

//PK10 前后三星 精确后三 单式
function starThreeBackSinglePK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10","import-checkbox-area"];
	var showName = ["pick-star3f-pk10","pick-star3b-pk10","import-area","win-number-star3b-03-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-star3fb-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-pk10-single")[0], "pick-act");
}

//PK10 前后三星 精确后三 复式
function starThreeBackMultiPK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10"];
	var showName = ["pick-star3f-pk10","pick-star3b-pk10","ball-eight-pk10","ball-nine-pk10","ball-ten-pk10","win-number-star3b-03-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-star3fb-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star3b-pk10-multi")[0], "pick-act");
}

//PK10 前后二星 精确前二 单式
function starTwoFrontSinglePK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10","import-checkbox-area"];
	var showName = ["pick-star2f-pk10","pick-star2b-pk10","import-area","win-number-star2f-02-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-star2fb-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-pk10-single")[0], "pick-act");
}

//PK10 前后二星 精确前二 复式
function starTwoFrontMultiPK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10"];
	var showName = ["pick-star2f-pk10","pick-star2b-pk10","ball-champion-pk10","ball-second-pk10","win-number-star2f-02-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-star2fb-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2f-pk10-multi")[0], "pick-act");
}

//PK10 前后二星 精确后二 单式
function starTwoBackSinglePK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10","import-checkbox-area"];
	var showName = ["pick-star2f-pk10","pick-star2b-pk10","import-area","win-number-star2b-02-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-star2fb-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-pk10-single")[0], "pick-act");
}

//PK10 前后二星 精确后二 复式
function starTwoBackMultiPK10() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-win-pk10","ball-win-total-pk10"];
	var showName = ["pick-star2f-pk10","pick-star2b-pk10","ball-nine-pk10","ball-ten-pk10","win-number-star2b-02-pk10"];
	initBall(clearName, hiddenName, showName, 5);
	addClass(document.getElementsByClassName("kind-star2fb-pk10")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-star2b-pk10-multi")[0], "pick-act");
}

//快三 和值
function ballTotalQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = [];
	var showName = ["pick-total-q3","ball-total-q3","ball-number-total-q3","win-number-star3-direct-total-3d"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-total-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-total-q3-btn")[0], "pick-act");
}

//快三 三同号 单选
function sameThreeSingleQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3","import-checkbox-area"];
	var showName = ["pick-same3-q3","ball-same3-single-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-same3-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-same3-single-q3")[0], "pick-act");
}

//快三 三同号 通选
function sameThreeAllQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-same3-q3","ball-same3-all-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-same3-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-same3-all-q3")[0], "pick-act");
}

//快三 二同号 单选
function sameTwoSingleQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3","import-checkbox-area"];
	var showName = ["pick-same2-q3","ball-same2-single-similar-q3","ball-same2-single-dissimilar-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-same2-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-same2-single-q3")[0], "pick-act");
}

//快三 二同号 复选
function sameTwoMultiQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-same2-q3","ball-same2-multi-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-same2-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-same2-multi-q3")[0], "pick-act");
}

//快三 二同号 单式
function sameTwoManualQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3","import-checkbox-area"];
	var showName = ["pick-same2-q3","import-area","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-same2-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-same2-manual-q3")[0], "pick-act");
}

//快三 三不同号
function noThreeQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-no3-q3","ball-no3-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-no3-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-no3-q3-btn")[0], "pick-act");
}

//快三 三不同号 单式
function noThreeManualQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3","import-checkbox-area"];
	var showName = ["pick-no3-q3","import-area","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-no3-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-no3-q3-manual")[0], "pick-act");
}

//快三 二不同号
function noTwoQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-no2-q3","ball-no2-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-no2-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-no2-q3-btn")[0], "pick-act");
}

//快三 二不同号 单式
function noTwoManualQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3","import-checkbox-area"];
	var showName = ["pick-no2-q3","import-area","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-no2-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-no2-q3-manual")[0], "pick-act");
}

//快三 三连号
function linkThreeQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-link3-q3","ball-link3-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-link3-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-link3-q3-btn")[0], "pick-act");
}

//快三 大小
function bigSmallQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-bs-q3","ball-bs-q3","win-number-bs-q3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-bs-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-bs-q3-btn")[0], "pick-act");
}

//快三 单双
function singleDoubleQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-sd-q3","ball-sd-q3","win-number-sd-q3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-sd-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-sd-q3-btn")[0], "pick-act");
}

//快三 猜必出
function guessRightQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-gr-q3","ball-gr-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-gr-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-gr-q3-btn")[0], "pick-act");
}

//快三 颜色_全紅
function ballColorRedQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-color-q3","ball-color-red-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-color-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-color-red-btn")[0], "pick-act");

}

//快三 颜色_全黑
function ballColorBlackQuick3() {
	var clearName = ["kind-act","pick-act","ball-act"];
	var hiddenName = ["pick-total-q3","ball-number-total-q3"];
	var showName = ["pick-color-q3","ball-color-black-q3","win-number-star3"];
	initBall(clearName, hiddenName, showName, 4);
	addClass(document.getElementsByClassName("kind-color-q3")[0], "kind-act");
	addClass(document.getElementsByClassName("pick-color-black-btn")[0], "pick-act");
}

//no show
function addClass(ele=null, className=null){
    if(typeof(ele)==='undefined' || ele==null || typeof(className)==='undefined' || className==null || className=='' || typeof(ele.classList)==='undefined'){
        return false;
    } else {
        if(ele.classList.contains(className)){
            return false;
        } else {
            ele.classList.add(className);
            return true;
        }
    }
}

//show
function removeClass(ele=null, className=null){
    if(typeof(ele)==='undefined' || ele==null || typeof(className)==='undefined' || className==null || className=='' || typeof(ele.classList)==='undefined'){
        return false;
    } else {
        if(!ele.classList.contains(className)){
            return false;
        } else {
            ele.classList.remove(className);
            return true;
        }
    }
}

//刪除 act
function removeAllClass(className=null){
    if(typeof(className)==='undefined' || className==null || className==''){
        return false;
    } else {
        var eles = document.getElementsByClassName(className);
        if(typeof(eles)==='undefined' || eles==null || eles.length==0){
            delete eles;
            eles = undefined;
            return false;
        } else {
            var i = eles.length-1;
            for( ; i>-1; i-- ){
                eles[i].classList.remove(className);
            }
            delete eles;
            delete i;
            eles = undefined;
            i = undefined;
            return true;
        }
    }
}

function setLevel(v1=0, v2=0, v3=0, v4=0){
    var l1 = document.getElementsByName("l1");
    if(typeof(l1)!='undefined' ? l1.length==1 : false){
        l1[0].value = v1;
    }
    l1 = document.getElementsByName("l2");
    if(typeof(l1)!='undefined' ? l1.length==1 : false){
        l1[0].value = v2;
    }
    l1 = document.getElementsByName("l3");
    if(typeof(l1)!='undefined' ? l1.length==1 : false){
        l1[0].value = v3;
    }
    l1 = document.getElementsByName("l4");
    if(typeof(l1)!='undefined' ? l1.length==1 : false){
        l1[0].value = v4;
    }
    delete l1;
    l1=undefined;
}

function setLevel2(v3=0, v4=0){
    var l1 = document.getElementsByName("l3");
    if(typeof(l1)!='undefined' ? l1.length==1 : false){
        l1[0].value = v3;
    }
    l1 = document.getElementsByName("l4");
    if(typeof(l1)!='undefined' ? l1.length==1 : false){
        l1[0].value = v4;
    }
}

function setLevel3(v4=0){
    var l1 = document.getElementsByName("l4");
    if(typeof(l1)!='undefined' ? l1.length==1 : false){
        l1[0].value = v4;
    }
}

function initBall(clearName={}, hiddenName={}, showName={}, type=0){
    removeAllClass("kind-act");
    removeAllClass("pick-act");
    removeAllClass("ball-act");
    removeAllInputChecked();

  //var hidden1 = ["three-balls","five-balls","ten-balls","three-dices"];
    var hidden1 = [];
  //var hidden2 = ["pick-star5-direct-ssc","pick-star5-group-ssc","pick-star5-other-ssc","kind-star5-ssc","kind-star4f-ssc","kind-star4b-ssc","kind-star3f-ssc","kind-star3m-ssc","kind-star3b-ssc","kind-star2f-ssc","kind-star2b-ssc","kind-star1-ssc","kind-noassign-ssc","kind-bs-ssc","kind-funny-ssc","kind-any-ssc","kind-dtt-ssc","pick-star3-noassign-any3n1-ssc","pick-star3-noassign-ssc"];
    var hidden2 = [];
    var hidden3 = ["pick-star5-direct-ffc","pick-star5-group-ffc","pick-star5-other-ffc","kind-star5-ffc","kind-star4f-ffc","kind-star4b-ffc","kind-star3f-ffc","kind-star3m-ffc","kind-star3b-ffc","kind-star2f-ffc","kind-star2b-ffc","kind-star1-ffc","kind-noassign-ffc","kind-bs-ffc","kind-funny-ffc","kind-any-ffc","kind-dtt-ffc"];
    var hidden4 = ["pick-star5-direct-35","pick-star5-group-35","pick-star5-other-35","kind-star5-35","kind-star4f-35","kind-star4b-35","kind-star3f-35","kind-star3m-35","kind-star3b-35","kind-star2f-35","kind-star2b-35","kind-star1-35","kind-noassign-35","kind-bs-35","kind-funny-35","kind-any-35","kind-dtt-35"];
    var hidden5 = ["pick-star3-direct-115","pick-star3-group-115","pick-star2-direct-115","pick-star2-group-115","pick-star3f-noassign-115","pick-sd-115","pick-guess-middle-115","pick-assign-115","pick-tab pick-any-multi-115","pick-any-single-115","pick-any-promise-115","ball-digit-01","ball-digit-02","ball-digit-03","kind-star3-115","kind-star2-115","kind-noassign-115","kind-sd-115","kind-qm-115","kind-assign-115","kind-any-multi-115","kind-any-single-115","kind-any-promise-115"];
    var hidden6 = ["pick-total-q3","ball-total-q3","kind-total-q3","kind-same3-q3","kind-same2-q3","kind-no3-q3","kind-no2-q3","kind-link3-q3","kind-bs-q3","kind-sd-q3","kind-gr-q3","kind-color-q3"];
    var hidden7 = ["pick-win-pk10","ball-win-total-pk10","kind-win-pk10","kind-gr-pk10","kind-dt-pk10","kind-star3fb-pk10","kind-star2fb-pk10"];
    var hidden8 = ["pick-star3-direct-3d","pick-star3-group-3d","kind-star3-3d","kind-star2f-3d","kind-star2b-3d","kind-star1-3d","kind-noassign-3d","kind-dtt-3d"];
    var hidden9 = [
    "win-number-star5","win-number-star5-group-120","win-number-star5-group-60","win-number-star5-group-30","win-number-star5-group-20","win-number-star5-group-10","win-number-star5-group-05",
    "win-number-star4f","win-number-star4f-group-24","win-number-star4f-group-12","win-number-star4f-group-06","win-number-star4f-group-04","win-number-star4b","win-number-star4b-group-24","win-number-star4b-group-12","win-number-star4b-group-06","win-number-star4b-group-04",
    "win-number-star3f","win-number-star3f-direct-total","win-number-star3f-direct-cross","win-number-star3f-group-03","win-number-star3f-group-06","win-number-star3f-group-mix","win-number-star3f-group-total","win-number-star3f-other-total","win-number-star3f-other-mix",
    "win-number-star3m","win-number-star3m-direct-total","win-number-star3m-direct-cross","win-number-star3m-group-03","win-number-star3m-group-06","win-number-star3m-group-mix","win-number-star3m-group-total","win-number-star3m-other-total","win-number-star3m-other-mix",
    "win-number-star3b","win-number-star3b-direct-total","win-number-star3b-direct-cross","win-number-star3b-group-03","win-number-star3b-group-06","win-number-star3b-group-mix","win-number-star3b-group-total","win-number-star3b-other-total","win-number-star3b-other-mix",
    "win-number-star2f","win-number-star2f-total","win-number-star2f-cross","win-number-star2b","win-number-star2b-total","win-number-star2b-cross",
    "win-number-bssd-front02","win-number-bs-back02","win-number-dtt-ten-thousand1000","win-number-dtt-ten-thousand100","win-number-dtt-ten-thousand10","win-number-dtt-ten-thousand01","win-number-dtt-thousand100","win-number-dtt-thousand10","win-number-dtt-thousand01","win-number-dtt-hundred10","win-number-dtt-hundred01","win-number-dtt-ten01",
    "win-number-star3","win-number-star3-direct-total-3d","win-number-star3-group-03-3d","win-number-star3-group-06-3d","win-number-star3-group-mix-3d","win-number-star3f-02-3d","win-number-star3b-02-3d","win-number-dtt-hundred10-3d","win-number-dtt-hundred01-3d","win-number-dtt-ten01-3d",
    "win-number-winsecond-total-pk10","win-number-winsecond-total-bsds-pk10","win-number-guess-rank-pk10","win-number-dragon-tiger-pk10","win-number-star2f-02-pk10","win-number-star2b-02-pk10","win-number-star3f-03-pk10","win-number-star3b-03-pk10","win-number-bs-q3","win-number-sd-q3"
    ];

    //ssc 0
    //0:hidden2;
    //ffc 1
    //1:hidden3;
    //35 3
    //2:hidden4;
    //115 2
    //3:hidden5
    //q3 6
    //4:hidden6;
    //pk10 5
    //5:hidden7;
    //3d 4
    //6:hidden8;
// 第一層 隱藏 class加入kind-tab
    var l1 = document.getElementsByClassName("kind-tab");
    if(typeof(l1)!='undefined' ? l1.length>0 : false){
        for(var i=0; i<l1.length; i++ ){
            if(!l1[i].classList.contains("invisible")){
                l1[i].classList.add("invisible");
            }
        }
    }

// 第二層 隱藏 class加入pick-tab
    var l2 = document.getElementsByClassName("pick-tab");
    if(typeof(l2)!='undefined' ? l2.length>0 : false){
        for(var i=0; i<l2.length; i++ ){
            if(!l2[i].classList.contains("invisible")){
                l2[i].classList.add("invisible");
            }
        }
    }

// 第三層 隱藏 class加入ball-tab
    var l3 = document.getElementsByClassName("ball-tab");
    if(typeof(l3)!='undefined' ? l3.length>0 : false){
        for(var i=0; i<l3.length; i++ ){
            if(!l3[i].classList.contains("invisible")){
                l3[i].classList.add("invisible");
            }
        }
    }

    delete l1;
    delete l2;
    delete l3;
    l1 = undefined;
    l2 = undefined;
    l3 = undefined;
    if(type!=undefined ? type!=null : false){
        var tmpA = document.getElementsByClassName("pick-lottery");
        if(type>=0 && type<=6){
            for(var i=0; i<tmpA.length; i++){
                if(!tmpA[i].classList.contains("invisible")){
                    tmpA[i].classList.add("invisible");
                }
            }
            var tmpLen = hidden1.length;
            for(var i=0; i < tmpLen; i++){
                addClass(document.getElementsByClassName(hidden1[i])[0], "invisible");
            }
            tmpLen = hidden2.length;
            for(var i=0; i < tmpLen; i++){
                addClass(document.getElementsByClassName(hidden2[i])[0], "invisible");
            }
            tmpLen = hidden3.length;
            for(var i=0; i < tmpLen; i++){
                addClass(document.getElementsByClassName(hidden3[i])[0], "invisible");
            }
            tmpLen = hidden4.length;
            for(var i=0; i < tmpLen; i++){
                addClass(document.getElementsByClassName(hidden4[i])[0], "invisible");
            }
            tmpLen = hidden5.length;
            for(var i=0; i < tmpLen; i++){
                addClass(document.getElementsByClassName(hidden5[i])[0], "invisible");
            }
            tmpLen = hidden6.length;
            for(var i=0; i < tmpLen; i++){
                addClass(document.getElementsByClassName(hidden6[i])[0], "invisible");
            }
            tmpLen = hidden7.length;
            for(var i=0; i < tmpLen; i++){
                addClass(document.getElementsByClassName(hidden7[i])[0], "invisible");
            }
            tmpLen = hidden8.length;
            for(var i=0; i < tmpLen; i++){
                addClass(document.getElementsByClassName(hidden8[i])[0], "invisible");
            }
            tmpLen = hidden9.length;
            for(var i=0; i < tmpLen; i++){
                addClass(document.getElementsByClassName(hidden9[i])[0], "invisible");
            }
            delete tmpLen;
            tmpLen = undefined;
        }
        if(type==0){
            var tmpLen = hidden2.length;
            for(var i=0; i < tmpLen; i++){
                removeClass(document.getElementsByClassName(hidden2[i])[0], "invisible");
            }
            if(tmpA[0].classList.contains("invisible")){
                tmpA[0].classList.remove("invisible");
            }
            delete tmpLen;
            tmpLen = undefined;
        } else if(type==1){
            var tmpLen = hidden3.length;
            for(var i=0; i < tmpLen; i++){
                removeClass(document.getElementsByClassName(hidden3[i])[0], "invisible");
            }
            if(tmpA[1].classList.contains("invisible")){
                tmpA[1].classList.remove("invisible");
            }
            delete tmpLen;
            tmpLen = undefined;
        } else if(type==2){
            var tmpLen = hidden4.length;
            for(var i=0; i < tmpLen; i++){
                removeClass(document.getElementsByClassName(hidden4[i])[0], "invisible");
            }
            if(tmpA[3].classList.contains("invisible")){
                tmpA[3].classList.remove("invisible");
            }
            delete tmpLen;
            tmpLen = undefined;
        } else if(type==3){
            var tmpLen = hidden5.length;
            for(var i=0; i < tmpLen; i++){
                removeClass(document.getElementsByClassName(hidden5[i])[0], "invisible");
            }
            if(tmpA[2].classList.contains("invisible")){
                tmpA[2].classList.remove("invisible");
            }
            delete tmpLen;
            tmpLen = undefined;
        } else if(type==4){
            var tmpLen = hidden6.length;
            for(var i=0; i < tmpLen; i++){
                removeClass(document.getElementsByClassName(hidden6[i])[0], "invisible");
            }
            if(tmpA[6].classList.contains("invisible")){
                tmpA[6].classList.remove("invisible");
            }
            delete tmpLen;
            tmpLen = undefined;
        } else if(type==5){
            var tmpLen = hidden7.length;
            for(var i=0; i < tmpLen; i++){
                removeClass(document.getElementsByClassName(hidden7[i])[0], "invisible");
            }
            if(tmpA[5].classList.contains("invisible")){
                tmpA[5].classList.remove("invisible");
            }
            delete tmpLen;
            tmpLen = undefined;
        } else if(type==6){
            var tmpLen = hidden8.length;
            for(var i=0; i < tmpLen; i++){
                removeClass(document.getElementsByClassName(hidden8[i])[0], "invisible");
            }
            if(tmpA[4].classList.contains("invisible")){
                tmpA[4].classList.remove("invisible");
            }
            delete tmpLen;
            tmpLen = undefined;
        }
    }
    delete hidden1;
    delete hidden2;
    hidden1 = undefined;
    hidden2 = undefined;
    if(typeof clearName != "undefined" ? clearName.length>0 : false){
        var tmpLen = clearName.length;
        for(var i=0; i < tmpLen; i++){
            removeAllClass(clearName[i]);
        }
        delete tmpLen;
        tmpLen = undefined;
    }
    if(typeof hiddenName != "undefined" ? hiddenName.length>0 : false){
        var tmpLen = hiddenName.length;
        for(var i=0; i < tmpLen; i++){
            addClass(document.getElementsByClassName(hiddenName[i])[0], "invisible");
        }
        delete tmpLen;
        tmpLen = undefined;
    }
    if(typeof showName != "undefined" ? showName.length>0 : false){
        var tmpLen = showName.length;
        for(var i=0; i < tmpLen; i++){
            removeClass(document.getElementsByClassName(showName[i])[0], "invisible");
        }
        delete tmpLen;
        tmpLen = undefined;
    }
    ballInitOnclick();
    ballPlayInit();
    delete clearName;
    delete hiddenName;
    delete showName;
    clearName = undefined;
    hiddenName = undefined;
    showName = undefined;
    type = undefined;
}

function removeAllInputChecked(){
    var tmpA = document.getElementsByClassName("ball-tab");
    for(var i1=0; i1<tmpA.length; i1++){
        var tmpB = tmpA[i1].getElementsByClassName("ball-number");
        for(var i2=0; i2<tmpB.length; i2++){
            tmpC = tmpB[i2].getElementsByTagName("input");
            for(var i3=0; i3<tmpC.length; i3++){
                tmpC[i3].onclick = function(){ onclickBall(this); }
                if(tmpC[i3].checked){
                    tmpC[i3].checked = false;
                }
            }
            delete tmpC;
            tmpC = undefined;
        }
        delete tmpB;
        tmpB = undefined;
    }
    delete tmpA;
    tmpA = undefined;
}

function ballInitOnclick(){
    var tmpA = document.getElementsByClassName("ball-tab");
    for(var i1=0; i1<tmpA.length; i1++){
        if(!tmpA[i1].classList.contains("invisible")){
            //console.log(tmpA[i1].classList.toString().replace("ball-tab ", ""));
            var tmpB = tmpA[i1].getElementsByClassName("ball-number");
            //console.log(b.length);
            for(var i2=0; i2<tmpB.length; i2++){
                //console.log(tmpB[i2].innerHTML);
                var tmpC = tmpB[i2].getElementsByTagName("button");
                for(var i3=0; i3<tmpC.length; i3++){
                    tmpC[i3].onclick = function(){onclickBall(this); };
                    tmpC[i3].onclick();
                }
                if(tmpC.length==0){
                    tmpC = tmpB[i2].getElementsByTagName("input");
                    for(var i3=0; i3<tmpC.length; i3++){
                        tmpC[i3].onclick = function(){onclickBall(this); };
                        tmpC[i3].onclick();
                    }
                }
                delete tmpC;
                tmpC = undefined;
            }
            delete tmpB;
            tmpB = undefined;
        }
    }
    delete tmpA;
    tmpA = undefined;
}

function onclickBall(ele){
    ele.onclick = function(){ 
        ele.classList.toggle("ball-act");
        var tmpA = ele.parentElement.parentElement.parentElement.parentElement.getElementsByClassName("ball-play");
        // console.log(tmpA);
        if(tmpA!=undefined ? tmpA!=null ? tmpA.length>0 : false : false){
            tmpA = tmpA[0].getElementsByTagName("button");
            for(var i1=0; i1<tmpA.length; i1++){
                if(tmpA[i1].classList.contains("ball-act")){
                    tmpA[i1].classList.remove("ball-act");
                }
            }
        }
        delete tmpA;
        tmpA = undefined;
        checkBallOnchange();
    }
}

function checkBallOnchange(){
    var tmpJson = {};
    var tmpA = document.getElementsByClassName("ball-tab");
    for(var i1=0; i1<tmpA.length; i1++){
        if(!tmpA[i1].classList.contains("invisible")){
            var tmpB = tmpA[i1].getElementsByClassName("ball-number");
            for(var i2=0; i2<tmpB.length; i2++){
                if(!tmpB[i2].classList.contains("invisible")){
                    var tmpStr = "";
                    tmpStr = tmpA[i1].classList.toString().replace("ball-tab ", "");
                    var tmpC = tmpB[i2].getElementsByTagName("button");
                    var tmpList = [];
                    for(var i3=0; i3<tmpC.length; i3++){
                        if(tmpC[i3].classList.contains("ball-act")){
                            tmpStr += ",["+i3+"]"+tmpC[i3].innerHTML;
                            tmpList[i3] = 1;
                        } else {
                            tmpList[i3] = 0;
                        }
                    }
                    if(tmpList.length==0){
                        tmpC = tmpB[i2].getElementsByTagName("input");
                        tmpList = [];
                        for(var i3=0; i3<tmpC.length; i3++){
                            if(tmpC[i3].checked){
                                tmpStr += ",["+i3+"]"+tmpC[i3].innerHTML;
                                tmpList[i3] = 1;
                            } else {
                                tmpList[i3] = 0;
                            }
                        }
                    }
                    //console.log(tmpStr);
                    tmpJson[tmpA[i1].classList.toString().replace("ball-tab ", "")] = tmpList;
                    delete tmpStr;
                    tmpStr = undefined;
                    delete tmpC;
                    tmpC = undefined;
                    delete tmpList;
                    tmpList = undefined;
                    //console.log(tmpJson);
                }
            }
            delete tmpB;
            tmpB = undefined;
        }
    }
    console.log(tmpJson);
    tmpA = document.getElementById("game-choice");
    if(tmpA!=undefined ? tmpA!=null : false){
        tmpA.value = JSON.stringify(tmpJson);
        eval("ssc5x()");
    }
    delete tmpA;
    tmpA = undefined;
    delete tmpJson;
    tmpJson = undefined;
}

function ballNumOptionAll(ele){
    //parentElement.children
    var tmpA = ele.parentElement.getElementsByTagName("button");
    for(var i1=0; i1 < tmpA.length; i1++){
        if(tmpA[i1].classList.contains("ball-act")){
            tmpA[i1].classList.remove("ball-act");
        }
    }
    ele.classList.add("ball-act")
    tmpA = ele.parentElement.parentElement.parentElement.getElementsByClassName("ball-number");
    for(var i1=0; i1 < tmpA.length; i1++){
        var tmpB = tmpA[i1].getElementsByTagName("button");
        for(var i2=0; i2 < tmpB.length; i2++){
            if(!tmpB[i2].classList.contains("ball-act")){
                tmpB[i2].classList.add("ball-act");
            }
        }
        delete tmpB;
        tmpB = undefined;
    }
    delete tmpA;
    tmpA = undefined;
}
function ballNumOptionClear(ele){
    //parentElement.children
    var tmpA = ele.parentElement.getElementsByTagName("button");
    for(var i1=0; i1 < tmpA.length; i1++){
        if(tmpA[i1].classList.contains("ball-act")){
            tmpA[i1].classList.remove("ball-act");
        }
    }
    ele.classList.add("ball-act")
    tmpA = ele.parentElement.parentElement.parentElement.getElementsByClassName("ball-number");
    for(var i1=0; i1 < tmpA.length; i1++){
        var tmpB = tmpA[i1].getElementsByTagName("button");
        for(var i2=0; i2 < tmpB.length; i2++){
            if(tmpB[i2].classList.contains("ball-act")){
                tmpB[i2].classList.remove("ball-act");
            }
        }
        delete tmpB;
        tmpB = undefined;
    }
    delete tmpA;
    tmpA = undefined;
}
function ballNumOptionBig(ele){
    //parentElement.children
    var tmpA = ele.parentElement.getElementsByTagName("button");
    for(var i1=0; i1 < tmpA.length; i1++){
        if(tmpA[i1].classList.contains("ball-act")){
            tmpA[i1].classList.remove("ball-act");
        }
    }
    ele.classList.add("ball-act")
    tmpA = ele.parentElement.parentElement.parentElement.getElementsByClassName("ball-number");
    for(var i1=0; i1 < tmpA.length; i1++){
        var tmpB = tmpA[i1].getElementsByTagName("button");
        for(var i2=0; i2 < tmpB.length; i2++){
            if(tmpB[i2].classList.contains("ball-act")){
                tmpB[i2].classList.remove("ball-act");
            }
            if(i2<5){
                
            }else{
                tmpB[i2].classList.add("ball-act");
            }
        }
        delete tmpB;
        tmpB = undefined;
    }
    delete tmpA;
    tmpA = undefined;
}
function ballNumOptionSmall(ele){
    //parentElement.children
    var tmpA = ele.parentElement.getElementsByTagName("button");
    for(var i1=0; i1 < tmpA.length; i1++){
        if(tmpA[i1].classList.contains("ball-act")){
            tmpA[i1].classList.remove("ball-act");
        }
    }
    ele.classList.add("ball-act")
    tmpA = ele.parentElement.parentElement.parentElement.getElementsByClassName("ball-number");
    for(var i1=0; i1 < tmpA.length; i1++){
        var tmpB = tmpA[i1].getElementsByTagName("button");
        for(var i2=0; i2 < tmpB.length; i2++){
            if(tmpB[i2].classList.contains("ball-act")){
                tmpB[i2].classList.remove("ball-act");
            }
            if(i2<5){
                tmpB[i2].classList.add("ball-act");
            }else{
                
            }
        }
        delete tmpB;
        tmpB = undefined;
    }
    delete tmpA;
    tmpA = undefined;
}
function ballNumOptionSign(ele){
    //parentElement.children
    var tmpA = ele.parentElement.getElementsByTagName("button");
    for(var i1=0; i1 < tmpA.length; i1++){
        if(tmpA[i1].classList.contains("ball-act")){
            tmpA[i1].classList.remove("ball-act");
        }
    }
    ele.classList.add("ball-act");
    tmpA = ele.parentElement.parentElement.parentElement.getElementsByClassName("ball-number");
    for(var i1=0; i1 < tmpA.length; i1++){
        var tmpB = tmpA[i1].getElementsByTagName("button");
        for(var i2=0; i2 < tmpB.length; i2++){
            if(tmpB[i2].classList.contains("ball-act")){
                tmpB[i2].classList.remove("ball-act");
            }
            if(i2%2==1){
                tmpB[i2].classList.add("ball-act");
            }
        }
        delete tmpB;
        tmpB = undefined;
    }
    delete tmpA;
    tmpA = undefined;
}
function ballNumOptionDouble(ele){
    //parentElement.children
    var tmpA = ele.parentElement.getElementsByTagName("button");
    for(var i1=0; i1 < tmpA.length; i1++){
        if(tmpA[i1].classList.contains("ball-act")){
            tmpA[i1].classList.remove("ball-act");
        }
    }
    ele.classList.add("ball-act");
    tmpA = ele.parentElement.parentElement.parentElement.getElementsByClassName("ball-number");
    for(var i1=0; i1 < tmpA.length; i1++){
        var tmpB = tmpA[i1].getElementsByTagName("button");
        for(var i2=0; i2 < tmpB.length; i2++){
            if(tmpB[i2].classList.contains("ball-act")){
                tmpB[i2].classList.remove("ball-act");
            }
            if(i2%2==0){
                tmpB[i2].classList.add("ball-act");
            }
        }
        delete tmpB;
        tmpB = undefined;
    }
    delete tmpA;
    tmpA = undefined;
}

function ballPlayInit(){
    //ball-play
    var tmpA = document.getElementsByClassName("ball-play");
    //console.log(tmpA.length);
    for(var i1=0; i1<tmpA.length; i1++){
        var tmpB = tmpA[i1].getElementsByTagName("button");
        //console.log(tmpB.length);
        for(var i2=0; i2<tmpB.length; i2++){
            if(tmpB[i2].innerHTML=='全'){
                tmpB[i2].onclick = function(){ballNumOptionAll(this);};
            }
            if(tmpB[i2].innerHTML=='清'){
                tmpB[i2].onclick = function(){ballNumOptionClear(this);};
            }
            if(tmpB[i2].innerHTML=='大'){
                tmpB[i2].onclick = function(){ballNumOptionBig(this);};
            }
            if(tmpB[i2].innerHTML=='小'){
                tmpB[i2].onclick = function(){ballNumOptionSmall(this);};
            }
            if(tmpB[i2].innerHTML=='单'){
                tmpB[i2].onclick = function(){ballNumOptionSign(this);};
            }
            if(tmpB[i2].innerHTML=='双'){
                tmpB[i2].onclick = function(){ballNumOptionDouble(this);};
            }
        }
        delete tmpB;
        tmpB = undefined;
    }
    delete tmpA;
    tmpA = undefined;
}

function checkTurnOff(){
    var tmpA = document.getElementsByName("lotterys");
    if(tmpA!=undefined ? tmpA.length==1 ? tmpA.value!="" : false : false){
        var tmpJson = JSON.parse(tmpA.value);
        if(tmpJson["tokenId"] ? tmpJson["tokenId"]=="success" : false){
            if(tmpJson["AllLottery"]){
                var obj1 = tmpJson["AllLottery"];
                var key1 = Object.keys(obj1).sort();
                for(var i1 = 0; i1 < key1.length; i1++){
                    console.log(key1[i1]);
                    var obj2 = obj1[key1[i1]];
                    var key2 = Object.keys(obj2).sort();
                    for(var i2 = 0; i2 < key2.length; i2++){
                        console.log(key1[i1]+"\t"+key2[i2]);
                        var obj3 = obj2[key2[i2]];
                        var key3 = Object.keys(obj3).sort();
                        if(obj3["0-switch1"]){
                            console.log(key1[i1]+"("+i1+")#"+key2[i2]+"("+i2+")#(switch1)"+obj3["0-switch1"]);
                        }
                        for(var i3 = 0; i3 < key3.length; i3++){
                            console.log(key1[i1]+"\t"+key2[i2]+"\t"+key3[i3]);
                            var obj4 = obj3[key3[i3]];
                            var key4 = Object.keys(obj4).sort();
                            if(obj4["0-switch2"]){
                                console.log(key1[i1]+"("+i1+")#"+key2[i2]+"("+i2+")#"+key3[i3]+"("+i3+")#(switch2)"+obj4["0-switch2"]);
                            }
                            for(var i4 = 0; i4 < key4.length; i4++){
                                console.log(key1[i1]+"\t"+key2[i2]+"\t"+key3[i3]+"\t"+key4[i4]);
                                var obj5 = obj4[key4[i4]];
                                var key5 = Object.keys(obj5).sort();
                                if(obj5["0-switch3"]){
                                    console.log(key1[i1]+"("+i1+")#"+key2[i2]+"("+i2+")#"+key3[i3]+"("+i3+")#"+key4[i4]+"("+i4+")(switch3)"+obj5["0-switch3"]);
                                }
                                
                                delete obj5;
                                delete key5;
                                obj5 = undefined;
                                key5 = undefined;
                            }
                            delete obj4;
                            delete key4;
                            obj4 = undefined;
                            key4 = undefined;
                        }
                        delete obj3;
                        delete key3;
                        obj3 = undefined;
                        key3 = undefined;
                    }
                    delete obj2;
                    delete key2;
                    obj2 = undefined;
                    key2 = undefined;
                }
                delete obj1;
                delete key1;
                obj1 = undefined;
                key1 = undefined;
            }
        }
        delete tmpJson;
        tmpJson = undefined;
    }
    delete tmpA;
    tmpA = undefined;
}

function getSetting(){
    
}