function setup_for_width(mql) {
	if (mql.matches) {
		document.getElementById("link1").innerText = '';
		document.getElementById("link2").innerText = '';
		document.getElementById("link3").innerText = '';
		document.getElementById("link4").innerText = '';
	} else {
		document.getElementById("link1").innerText = 'Хасанские устрицы';
		document.getElementById("link2").innerText = 'Императорские устрицы';
		document.getElementById("link3").innerText = 'Гребешок';
		document.getElementById("link4").innerText = 'Краб';
	}
}

var mql = window.matchMedia("screen and (max-width: 767px)");

mql.addListener(setup_for_width); 

setup_for_width(mql);