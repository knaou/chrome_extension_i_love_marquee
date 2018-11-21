
	mar = document.createElement('marquee');
	document.body.appendChild(mar);

	while(document.body.children.length > 1) {
		mar.appendChild(document.body.children[0]);
	}

