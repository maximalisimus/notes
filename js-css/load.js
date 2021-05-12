var elements = document.querySelectorAll('.container');

for (let elem of elements) {
	elem.onclick = event => {
		if (event.target.tagName === 'A' && event.target.className == 'nexter') {
			const blockdiv = event.target.nextElementSibling;
			if (blockdiv.style.display == "none") {
				blockdiv.style.display='block';
				event.target.innerHTML='Свернуть&nbsp;...';
				event.target.setAttribute("id","actives");
			} else {
				blockdiv.style.display='none';
				event.target.innerHTML='Развернуть&nbsp;...';
				event.target.removeAttribute("id");
			}
			return false;
		} else if (event.target.tagName === 'A' && event.target.className == 'read') {
			const frame = document.getElementById("frames");
			if (frame.style.display == "none") {
				frame.style.display='block';
				frame.scrollIntoView({block: "start", inline: "center", behavior: "smooth"});
			} else {
				frame.style.display='none';
			}
		}
	}
}

function CloseFrame() {
	const frame = document.getElementById("frames");
	frame.style.display='none';
	if (document.getElementById('actives')) {
		const activeblock = document.getElementById('actives').previousElementSibling;
		activeblock.scrollIntoView({block: "start", inline: "center", behavior: "smooth"});
	}
}
