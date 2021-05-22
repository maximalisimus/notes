var elements = document.querySelectorAll('.container');

for (let elem of elements) {
	elem.onclick = event => {
		if (event.target.tagName === 'A' && event.target.className == 'nexter') {
			const blockmore = event.target.nextElementSibling;
			if (blockmore.style.display == "none") {
				blockmore.style.display='block';
				event.target.innerHTML='Свернуть&nbsp;...';
			} else {
				blockmore.style.display='none';
				event.target.innerHTML='Развернуть&nbsp;...';
			}
			return false;
		} else if (event.target.tagName === 'A' && event.target.className == 'read') {
			const frame = document.getElementById(event.target.target);
			if (frame.style.display == "none") {
				const frameid = event.target.target + "_rd";
				event.target.setAttribute("id",frameid);
				frame.style.display='block';
				frame.scrollIntoView({block: "start", inline: "center", behavior: "smooth"});
				event.target.innerHTML='Закрыть чтение&nbsp;...';
			} else {
				frame.style.display='none';
				event.target.removeAttribute("id");
				event.target.innerHTML='Читать онлайн&nbsp;...';
			}
			
		}
	}
}

function CloseFrame(frameName) {
	const blockframe = document.getElementById(frameName);
	blockframe.style.display='none';
	const blockid = frameName + "_rd"
	if (document.getElementById(blockid)) {
		const positionid = document.getElementById(blockid);
		const position = positionid.parentElement;
		position.scrollIntoView({block: "start", inline: "center", behavior: "smooth"});
		positionid.removeAttribute("id");
		positionid.innerHTML='Читать онлайн&nbsp;...';
	}
}
