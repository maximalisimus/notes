document.querySelector('.container').onclick = event => {
    if (event.target.tagName === 'A' && event.target.innerHTML == 'Открыть') {
        const frame = event.target.nextElementSibling;
        frame.style.display='block';
        event.target.innerHTML='Закрыть';
    } else if (event.target.tagName === 'A' && event.target.innerHTML == 'Закрыть') {
        const frame = event.target.nextElementSibling;
        frame.style.display='none';
        event.target.innerHTML='Открыть';
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
