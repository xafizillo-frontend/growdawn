const elnavbtn = document.querySelectorAll('.site-nav__link');
elnavbtn.forEach(item => {
	item.addEventListener('click', e => {
		e.target.classLink.toggle;
	});
});
