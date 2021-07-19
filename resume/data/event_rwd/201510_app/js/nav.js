//跳頁捲動效果
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


//上方選單開關 mobile
$(function(){
	$("#navBtnXs").click(function(){
		$("#navListXs").slideToggle("fast");
	});
});


//置頂選單開關 mobile
$(function(){
	$("#navFloatBtnXs").click(function(){
		$("#navListFloatXs").slideToggle("fast");
	});
});


//下拉選單 mobile
$(function(){
	$("#navListXs a").click(function(){
		$("#navListXs").slideUp("fast");
		//$("#sec-1, #sec-2, #sec-3, #sec-4, #app-bottom").css({"padding-top":"60px","padding-bottom":"60px"});
	});
	$("#navListFloatXs a").click(function(){
		$("#navListFloatXs").slideUp("fast");
//		$("#sec-1, #sec-2, #sec-3, #sec-4, #app-bottom").css({"padding-top":"60px","padding-bottom":"60px"});
	});
});


//捲軸滾動事件
$(function () {
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
	if(scrollVal > 450){
		$("#navFloatXL").slideDown("fast");
  /* 如果滾動的物件捲動 > 450 則觸發指定的動作。*/
		}
	if(scrollVal < 450){
	    $("#navFloatXL").slideUp("fast");
  /* 如果滾動的物件捲動 < 450 則觸發指定的動作。*/
		}
	if(scrollVal > 50){
		$(".navFloatXs").slideDown("fast");
  /* 如果滾動的物件捲動 > 50 則觸發指定的動作。*/
		}
	if(scrollVal < 50){
		$(".navFloatXs").slideUp("fast");
  /* 如果滾動的物件捲動 > 50 則觸發指定的動作。*/
		}
  });
});


//標題及圖片微調
$(document).ready(function(){
        $(".title-1, .title-2, .title-3, .title-4, .txt-1, .txt-2, .txt-3, .txt-4, .app-left-1, .app-left-2, .app-right-1, .app-right-2").animate({top: '+=50px'});
});