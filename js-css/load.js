document.querySelector('.container').onclick = event => {
    if (event.target.tagName === 'A' && event.target.innerHTML == 'Open') {
        const frame = event.target.nextElementSibling;
        frame.style.display='block';
        event.target.innerHTML='Close';
    } else if (event.target.tagName === 'A' && event.target.innerHTML == 'Close') {
        const frame = event.target.nextElementSibling;
        frame.style.display='none';
        event.target.innerHTML='Open';
    } else if (event.target.tagName === 'A' && event.target.className == 'nexter') {
		const blockdiv = event.target.nextElementSibling;
		if (blockdiv.style.display == "none") {
			blockdiv.style.display='block';
			event.target.innerHTML='Свернуть ...';
		} else {
			blockdiv.style.display='none';
			event.target.innerHTML='Развернуть ...';
		}
		return false;
	}
}
