var elements = document.querySelectorAll('.content');

function copyToClipboard(str) {
 var area = document.createElement('textarea');
 
 document.body.appendChild(area);
 area.value = str;
 area.select();
 document.execCommand("copy");
 document.body.removeChild(area);
}

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
		} else if (event.target.tagName === 'A' && event.target.className == 'category') {
			const moreblock = event.target.nextElementSibling;
			if (moreblock.style.display == "none") {
				moreblock.style.display='block';
				event.target.innerHTML='Свернуть&nbsp;...';
			} else {
				moreblock.style.display='none';
				event.target.innerHTML='Развернуть&nbsp;...';
			}
			return false;
		} else if (event.target.tagName === 'LI') {
			let selli = document.querySelector('li:hover');
			selli.addEventListener('click', ()=>{
				copyToClipboard(selli.innerHTML)
			})
		}
	}
}

