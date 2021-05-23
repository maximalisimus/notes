var elements = document.querySelectorAll('.content');

for (let elem of elements) {
	elem.onclick = event => {
		if (event.target.tagName === 'A' && event.target.className == 'nextmore') {
			const moreblock = event.target.nextElementSibling;
			if (moreblock.style.display == "none") {
				moreblock.style.display='block';
				event.target.innerHTML='Свернуть&nbsp;...';
			} else {
				moreblock.style.display='none';
				event.target.innerHTML='Анотация&nbsp;...';
			}
			return false;
		}
	}
}
