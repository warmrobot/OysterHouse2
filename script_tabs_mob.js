function setup_for_width(mql) {
	if (mql.matches) {
		document.getElementById("tab1").innerText = '';
		document.getElementById("tab2").innerText = '';
		document.getElementById("tab3").innerText = '';
		document.getElementById("tab4").innerText = '';
	} else {
		document.getElementById("tab1").innerText = 'Хасанские устрицы';
		document.getElementById("tab2").innerText = 'Императорские устрицы';
		document.getElementById("tab3").innerText = 'Гребешок';
		document.getElementById("tab4").innerText = 'Краб';
	}
}

var mql = window.matchMedia("screen and (max-width: 767px)");

mql.addListener(setup_for_width); 

setup_for_width(mql);