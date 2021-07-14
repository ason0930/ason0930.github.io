	function fb_click(tNo) {
	    u = 'http://www.1111.com.tw/11sp/1111app/index.asp?tNo=' + tNo + '&times=' + new Date().getTime();
	    t = document.title;
		window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
		return false;
	}
	function plurk_click(tNo) {
	    u = 'http://www.1111.com.tw/11sp/1111app/index.asp?tNo=' + tNo + '&times=' + new Date().getTime();
	    t = "1111人力銀行提供更便利的搜尋職缺介面!不論是否為會員皆可使用〝1111工作特搜〞";
	    //t = document.title;
	    window.open('http://www.plurk.com/?qualifier=shares&amp;status='.concat(encodeURIComponent(u)).concat(' ').concat('(').concat(encodeURIComponent(t)).concat(')'))
	    
		return false;
	}
	function twitter_click(tNo) {
	    u = 'http://www.1111.com.tw/11sp/1111app/index.asp?tNo=' + tNo + '&times=' + new Date().getTime();
	    t = "1111人力銀行提供更便利的搜尋職缺介面!不論是否為會員皆可使用〝1111工作特搜〞";
	    //t = document.title;
		window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(t)).concat(' ').concat(encodeURIComponent(u)))
		return false;
	}	