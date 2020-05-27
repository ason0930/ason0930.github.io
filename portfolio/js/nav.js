$(function(){
	$(".btnClose").click(function(){
		$("#nav-web").slideUp("fast");
		$("#nav-2d").slideUp("fast");
		$("#nav-3d").slideUp("fast");
		$("#nav-me").slideUp("fast");
	});
});


$(function(){
	$(".btn-web").click(function(){
		$("#nav-web, #nav-web-fixed").slideDown("fast");
		$("#nav-2d, #nav-2d-fixed").hide();
		$("#nav-3d, #nav-3d-fixed").hide();
		$("#nav-me, #nav-me-fixed").hide();
		$(this).css("color","#fff");
		$(".btn-2d, .btn-3d, .btn-me").css("color","#000");
	});
});


$(function(){
	$(".btn-2d").click(function(){
		$("#nav-web, #nav-web-fixed").hide();
		$("#nav-2d, #nav-2d-fixed").slideDown("fast");
		$("#nav-3d, #nav-3d-fixed").hide();
		$("#nav-me, #nav-me-fixed").hide();
		$(this).css("color","#fff");
		$(".btn-web, .btn-3d, .btn-me").css("color","#000");
	});
});


$(function(){
	$(".btn-3d").click(function(){
		$("#nav-web, #nav-web-fixed").hide();
		$("#nav-2d, #nav-2d-fixed").hide();
		$("#nav-3d, #nav-3d-fixed").slideDown("fast");
		$("#nav-me, #nav-me-fixed").hide();
		$(this).css("color","#fff");
		$(".btn-web, .btn-2d, .btn-me").css("color","#000");
	});
});


$(function(){
	$(".btn-me").click(function(){
		$("#nav-web, #nav-web-fixed").hide();
		$("#nav-2d, #nav-2d-fixed").hide();
		$("#nav-3d, #nav-3d-fixed").hide();
		$("#nav-me, #nav-me-fixed").slideDown("fast");
		$(this).css("color","#fff");
		$(".btn-web, .btn-2d, btn-3d").css("color","#000");
	});
});


$(function () {
    $(window).scroll(function () {
		var scrollVal = $(this).scrollTop();
		if(scrollVal > 200){
			$("#topNav-lg").css({"position":"fixed","top":"0"});
			$("#topNav-lg").css({"opacity":"0.98"});
			/* 如果滾動的物件捲動 > 200 則觸發指定的動作。*/
			}
		if(scrollVal < 200){
			$("#topNav-lg").css({"position":"relative","top":"0"});
			$("#topNav-lg").css({"opacity":"1"});
			/* 如果滾動的物件捲動 < 200 則觸發指定的動作。*/
		}
//		if(scrollVal > 764){
//			$("#topNavList-xs").css({"display":"none"});
//			/* 如果滾動的物件捲動 > 764 則觸發指定的動作。*/
//			}
  });
});


function openNav() {
  document.getElementById("topNavList-xs").style.width = "100%";
}

function closeNav() {
  document.getElementById("topNavList-xs").style.width = "0";
}