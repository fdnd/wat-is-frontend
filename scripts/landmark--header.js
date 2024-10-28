const menu = document.querySelector('menu');
const buttons = menu.querySelectorAll('button');

function handleButtonClick(e) {
	// remove current pressed
	const currentButton = menu.querySelector('[aria-pressed=true]');
	if (currentButton) {
		currentButton.ariaPressed = false;
	}
	
	// add pressed
	const button = e.currentTarget;
	if (currentButton == button ) {
		document.documentElement.dataset.mode = null;
	} else {
		button.ariaPressed = true;
		document.documentElement.dataset.mode = button.value;
	}
}

buttons.forEach(button => {
	button.onclick = handleButtonClick;
});